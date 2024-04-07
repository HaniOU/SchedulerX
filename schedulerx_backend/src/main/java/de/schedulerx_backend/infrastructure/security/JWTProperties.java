package de.schedulerx_backend.infrastructure.security;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Configuration
@ConfigurationProperties("secure.jwt")
public class JWTProperties {
    private String secretKey;

    public String getSecretKey() {
        return secretKey;
    }
}
