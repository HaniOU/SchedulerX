package de.schedulerx_backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@SpringBootApplication
public class SchedulerxBackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(SchedulerxBackendApplication.class, args);
    }

}
