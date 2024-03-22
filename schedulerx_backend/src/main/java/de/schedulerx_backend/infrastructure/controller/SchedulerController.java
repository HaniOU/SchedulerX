package de.schedulerx_backend.infrastructure.controller;

import de.schedulerx_backend.applicationservice.SchedulerService;
import de.schedulerx_backend.model.appointmentAggregat.Appointment;
import de.schedulerx_backend.model.noteAggregat.Note;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class SchedulerController {
//http://localhost:8080/api/v1/appointments/2024-03-22T10:00:00
    private SchedulerService service;

    public SchedulerController(SchedulerService service) {
        this.service = service;
    }

    @GetMapping("/api/v1/appointments/{date}")
    public List<Appointment> appointments(@PathVariable @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)LocalDateTime date){
        return service.getAppointments(date);
    }
    @GetMapping("/api/v1/notes/{date}")
    public List<Note> notes(@PathVariable @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) LocalDateTime date){
        return service.getNotes(date);
    }
    @PostMapping("api/v1/addAppointment")
    public void addAppointment(@RequestBody @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) Appointment appointment){
        service.saveAppointment(appointment);
    }
    @PostMapping("api/v1/addNote")
    public void addNote(@RequestBody @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) Note note){
        service.saveNote(note);
    }
}
