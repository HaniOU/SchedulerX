package de.schedulerx_backend.infrastructure.security;

import com.auth0.jwt.interfaces.Claim;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.sun.jdi.IntegerValue;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.UUID;

@Component
public class JWTToPrincipalConverter {
    public UserPrincipal convert(DecodedJWT jwt){

        return new UserPrincipal(
                Long.parseLong(jwt.getSubject()),
                jwt.getClaim("username").asString(),
                extractAuthFromClaim(jwt),
                null
        );
    }

    private List<SimpleGrantedAuthority> extractAuthFromClaim(DecodedJWT jwt){
        Claim roles = jwt.getClaim("roles");
        if(roles.isNull() || roles.isMissing()) return List.of();
        return roles.asList(SimpleGrantedAuthority.class);
    }
}
