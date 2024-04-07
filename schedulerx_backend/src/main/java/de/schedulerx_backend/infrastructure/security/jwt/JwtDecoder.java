package de.schedulerx_backend.infrastructure.security.jwt;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import org.springframework.stereotype.Component;

@Component
public class JwtDecoder {
    private JwtProperties jwtProperties;

    public JwtDecoder(JwtProperties jwtProperties) {
        this.jwtProperties = jwtProperties;
    }

    public DecodedJWT decode(String token){
        DecodedJWT secret = JWT.require(Algorithm.HMAC256(jwtProperties.getSecretKey())).build().verify(token);
        return secret;
    }
}
