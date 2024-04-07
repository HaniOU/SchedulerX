package de.schedulerx_backend.infrastructure.security.jwt;

import com.auth0.jwt.interfaces.Claim;
import com.auth0.jwt.interfaces.DecodedJWT;
import de.schedulerx_backend.infrastructure.security.userprincipal.UserPrincipal;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class JwtToPrincipalConverter {
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
