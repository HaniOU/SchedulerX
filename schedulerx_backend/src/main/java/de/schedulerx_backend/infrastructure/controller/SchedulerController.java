package de.schedulerx_backend.infrastructure.controller;

import de.schedulerx_backend.applicationservice.SchedulerService;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SchedulerController {

    private SchedulerService service;

    public SchedulerController(SchedulerService service) {
        this.service = service;
    }
}
