package de.schedulerx_backend.infrastructure.controller;

import de.schedulerx_backend.applicationservice.SchedulerService;
import de.schedulerx_backend.infrastructure.security.UserPrincipal;
import de.schedulerx_backend.model.appointmentAggregat.Appointment;
import de.schedulerx_backend.model.noteAggregat.Note;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:3000")

public class SchedulerDataController {
    //http://localhost:8080/api/v1/appointments/2024-03-22T10:00:00
    private SchedulerService service;

    public SchedulerDataController(SchedulerService service) {
        this.service = service;
    }

    @GetMapping("/appointments/{date}")
    public List<Appointment> appointments(
            @PathVariable @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime date,
            @AuthenticationPrincipal UserPrincipal userPrincipal
            ) {
        return service.getAppointments(date, userPrincipal.getId());
    }

    @GetMapping("/notes/{date}")
    public List<Note> notes(
            @PathVariable @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime date,
            @AuthenticationPrincipal UserPrincipal userPrincipal
    ) {
        return service.getNotes(date, userPrincipal.getId());
    }

    @PostMapping("/addAppointment")
    public void addAppointment(
            @RequestBody @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) AppointmentDTO appointmentDTO,
            @AuthenticationPrincipal UserPrincipal userPrincipal
            ) {
        service.saveAppointment(appointmentDTO, userPrincipal.getId());
    }

    @PostMapping("/addNote")
    public void addNote(
            @RequestBody @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) NoteDTO noteDTO,
            @AuthenticationPrincipal UserPrincipal userPrincipal
            ) {
        service.saveNote(noteDTO, userPrincipal.getId());
    }

    @GetMapping
    public String greet(@AuthenticationPrincipal UserPrincipal userPrincipal) {
        return "hi " + userPrincipal.getUsername() + " ID: " + userPrincipal.getId();
    }
}
