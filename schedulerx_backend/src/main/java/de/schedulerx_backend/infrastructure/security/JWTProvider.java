package de.schedulerx_backend.infrastructure.security;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import org.springframework.stereotype.Component;

import java.time.Duration;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.List;

@Component
public class JWTProvider {
    private JWTProperties jwtProperties;

    public JWTProvider(JWTProperties jwtProperties) {
        this.jwtProperties = jwtProperties;
    }

    public String generateToken(Long id, String username, List<String> roles){
        return JWT.create()
                .withSubject(String.valueOf(id))
                .withExpiresAt(Instant.now().plus(Duration.of(1, ChronoUnit.DAYS)))
                .withClaim("username", username)
                .withClaim("roles", roles)
                .sign(Algorithm.HMAC256("secret"));
    }
}
