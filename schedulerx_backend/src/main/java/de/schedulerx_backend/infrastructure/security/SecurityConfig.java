package de.schedulerx_backend.infrastructure.security;



import jakarta.servlet.http.HttpServletRequest;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;
import java.util.List;

@Configuration
    @EnableMethodSecurity(securedEnabled = true)
    public class SecurityConfig {
        @Bean
        public SecurityFilterChain config(HttpSecurity chainBuilder) throws Exception {


            chainBuilder
                    .csrf(c->c.disable())
                    .cors(c->c.configurationSource(cor()))
                    .authorizeHttpRequests(
                            configurer -> configurer
                                    .requestMatchers("/login", "/oauth2/authorization/**")
                                    .permitAll()
                                    .anyRequest()
                                    .authenticated()
                    )
                    .formLogin(
                            form -> form
                                    .loginPage("http://localhost:3000")
                                    .permitAll()
                    )
                    .oauth2Login(
                            oauth2->{
                                oauth2.loginPage("http://localhost:3000");
                                oauth2.defaultSuccessUrl("http://localhost:3000/calendar");
                            }
                    );

            return chainBuilder.build();
        }
    @Bean
    public CorsConfigurationSource cor() {
        CorsConfiguration corsConfiguration = new CorsConfiguration();
       corsConfiguration.setAllowedOrigins(List.of("http://localhost:3000", "http://localhost:3000/calendar"));


        corsConfiguration.addAllowedMethod("*");
        corsConfiguration.addAllowedHeader("*");
        corsConfiguration.setAllowCredentials(true);
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", corsConfiguration);

        return source;
    }

}
