package de.schedulerx_backend.service;

import de.schedulerx_backend.infrastructure.requestDTOs.UserRequest;
import de.schedulerx_backend.infrastructure.security.jwt.JwtProvider;
import de.schedulerx_backend.infrastructure.security.userprincipal.UserPrincipal;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class AuthService {
    private final AuthenticationManager authenticationManager;
    private final JwtProvider jwtProvider;

    public AuthService(AuthenticationManager authenticationManager, JwtProvider jwtProvider) {
        this.authenticationManager = authenticationManager;
        this.jwtProvider = jwtProvider;
    }


    public ResponseEntity<String> login(String username, String password) {
        try {
            Authentication authentication = authenticationManager
                            .authenticate(new UsernamePasswordAuthenticationToken(username,password));
            SecurityContextHolder.getContext().setAuthentication(authentication);
            UserPrincipal userPrincipal = (UserPrincipal) authentication.getPrincipal();
            List<String> roles = userPrincipal
                    .getAuthorities()
                    .stream()
                    .map(GrantedAuthority::getAuthority)
                    .collect(Collectors.toList());
            String token = jwtProvider.generateToken(userPrincipal.getId(), userPrincipal.getUsername(), roles);
            return ResponseEntity.status(200).body(token);
        } catch (AuthenticationException e) {
            return ResponseEntity.status(400).body("username or password invalid, please try again!");
        }
    }
}
