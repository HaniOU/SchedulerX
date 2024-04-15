package de.schedulerx_backend.infrastructure.controller;

import de.schedulerx_backend.service.AuthService;
import de.schedulerx_backend.service.SchedulerService;
import de.schedulerx_backend.infrastructure.requestDTOs.UserRequest;
import de.schedulerx_backend.infrastructure.security.userprincipal.UserPrincipal;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
//@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/auth/v1")
public class AuthSecurityController {
    private final SchedulerService schedulerService;
    private final AuthService authService;

    public AuthSecurityController(SchedulerService service, AuthService authService) {
        this.schedulerService = service;
        this.authService = authService;
    }

    @PostMapping("/registration")
    public ResponseEntity<String> registration(@RequestBody UserRequest user) {
        boolean successful = schedulerService.createUser(user);
        if (!successful)
            return ResponseEntity.status(400).body("Username "+ user.getUsername() + " already exists");
        return ResponseEntity.ok().body("new user added successfully");
    }


    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody UserRequest userRequest) {
        return authService.login(userRequest.getUsername(), userRequest.getPassword());
    }
}
