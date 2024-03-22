package de.schedulerx_backend.infrastructure.controller;

import de.schedulerx_backend.applicationservice.SchedulerService;
import de.schedulerx_backend.model.appointmentAggregat.Appointment;
import de.schedulerx_backend.model.noteAggregat.Note;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
public class SchedulerController {

    private SchedulerService service;

    public SchedulerController(SchedulerService service) {
        this.service = service;
    }

    @GetMapping("/api/v1/appointments")
    public List<Appointment> appointments(@RequestBody LocalDateTime date){
        return service.getAppointments(date);
    }
    @GetMapping("/api/v1/notes")
    public List<Note> notes(@RequestBody LocalDateTime date){
        return service.getNotes(date);
    }
    @PostMapping("api/v1/addAppointment")
    public void addAppointment(@RequestBody Appointment appointment){
        service.saveAppointment(appointment);
    }
    @PostMapping("api/v1/addNote")
    public void addAppointment(@RequestBody Note note){
        service.saveNote(note);
    }
}
