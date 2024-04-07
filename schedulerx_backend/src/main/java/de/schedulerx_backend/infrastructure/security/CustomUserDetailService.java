package de.schedulerx_backend.infrastructure.security;

import de.schedulerx_backend.applicationservice.SchedulerService;
import de.schedulerx_backend.infrastructure.security.userprincipal.UserPrincipal;
import de.schedulerx_backend.model.schedulerUserAggregat.SchedulerUser;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CustomUserDetailService implements UserDetailsService {

    private SchedulerService schedulerService;

    public CustomUserDetailService(SchedulerService schedulerService) {
        this.schedulerService = schedulerService;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        SchedulerUser user = schedulerService.getUserByName(username).orElseThrow();
        UserPrincipal userPrincipal =
                new UserPrincipal(
                        user.getId(),
                        user.getUsername(),
                        List.of(new SimpleGrantedAuthority(user.getRole())),
                        user.getPassword()
                );
        return userPrincipal;
    }

}
