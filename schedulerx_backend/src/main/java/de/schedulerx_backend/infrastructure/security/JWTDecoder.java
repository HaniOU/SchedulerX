package de.schedulerx_backend.infrastructure.security;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import org.springframework.stereotype.Component;

@Component
public class JWTDecoder {
    private JWTProperties jwtProperties;

    public JWTDecoder(JWTProperties jwtProperties) {
        this.jwtProperties = jwtProperties;
    }

    public DecodedJWT decode(String token){
        DecodedJWT secret = JWT.require(Algorithm.HMAC256("secret")).build().verify(token);
        return secret;
    }
}
