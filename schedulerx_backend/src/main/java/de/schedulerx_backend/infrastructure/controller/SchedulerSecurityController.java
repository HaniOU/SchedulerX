package de.schedulerx_backend.infrastructure.controller;

import de.schedulerx_backend.applicationservice.SchedulerService;
import de.schedulerx_backend.infrastructure.security.JWTProvider;
import de.schedulerx_backend.infrastructure.security.UserPrincipal;
import de.schedulerx_backend.model.schedulerUserAggregat.SchedulerUser;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
//@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/auth/v1")
public class SchedulerSecurityController {
    private final JWTProvider jwtProvider;
    private final SchedulerService service;
    private final AuthenticationManager authenticationManager;

    public SchedulerSecurityController(SchedulerService service ,AuthenticationManager authenticationManager, JWTProvider jwtProvider) {
        this.service = service;
        this.authenticationManager = authenticationManager;
        this.jwtProvider = jwtProvider;
    }

    @PostMapping("/registration")
    public ResponseEntity<String> registration(@RequestBody UserRequest user) {
        boolean successful = service.createUser(user);
        if (!successful) return ResponseEntity.status(400).body("Username "+ user.getUsername() + " already exists");
        return ResponseEntity.ok().body("new user added successfully");
    }


    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody UserRequest userRequest) {
        try {
            Authentication authentication =
                    authenticationManager
                            .authenticate(new UsernamePasswordAuthenticationToken(
                                    userRequest.getUsername(),
                                    userRequest.getPassword())
                            );
            SecurityContextHolder.getContext().setAuthentication(authentication);
            UserPrincipal userPrincipal = (UserPrincipal) authentication.getPrincipal();
            List<String> roles = userPrincipal.getAuthorities().stream().map(GrantedAuthority::getAuthority).collect(Collectors.toList());
            String token = jwtProvider.generateToken(userPrincipal.getId(), userPrincipal.getUsername(), roles);
            return ResponseEntity.status(200).body(token);
        } catch (AuthenticationException e) {
            return ResponseEntity.status(400).body("username or password invalid, please try again!");
        }
    }
}
