package de.schedulerx_backend.infrastructure.controller;

import de.schedulerx_backend.infrastructure.security.userprincipal.UserPrincipal;
import de.schedulerx_backend.service.SchedulerService;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/admin")
public class AdminController {
    private final SchedulerService schedulerService;

    public AdminController(SchedulerService schedulerService) {
        this.schedulerService = schedulerService;
    }
    @GetMapping("/secret")
    public String adminSecured(@AuthenticationPrincipal UserPrincipal userPrincipal){
        return "sucess " + userPrincipal.getUsername();
    }
}
