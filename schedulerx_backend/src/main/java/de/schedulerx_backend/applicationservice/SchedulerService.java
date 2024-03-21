package de.schedulerx_backend.applicationservice;

import de.schedulerx_backend.database.AppointmentRepository;
import de.schedulerx_backend.database.NoteRepository;
import org.springframework.stereotype.Service;

@Service
public class SchedulerService {
    private AppointmentRepository appointmentRepository;
    private NoteRepository noteRepository;

    public SchedulerService(AppointmentRepository appointmentRepository, NoteRepository noteRepository) {
        this.appointmentRepository = appointmentRepository;
        this.noteRepository = noteRepository;
    }
}
