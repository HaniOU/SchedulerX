package de.schedulerx_backend.infrastructure.security.userprincipal;

import org.springframework.security.authentication.AbstractAuthenticationToken;

public class UserPrincipalAuthToken extends AbstractAuthenticationToken {
    private UserPrincipal userPrincipal;
    public UserPrincipalAuthToken(UserPrincipal userPrincipal) {
        super(userPrincipal.getAuthorities());
        this.userPrincipal = userPrincipal;
        setAuthenticated(true);
    }

    @Override
    public Object getCredentials() {
        return null;
    }

    @Override
    public UserPrincipal getPrincipal() {
        return userPrincipal;
    }
}
