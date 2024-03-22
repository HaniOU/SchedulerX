package de.schedulerx_backend.applicationservice;

import de.schedulerx_backend.database.AppointmentRepository;
import de.schedulerx_backend.database.NoteRepository;
import de.schedulerx_backend.model.appointmentAggregat.Appointment;
import de.schedulerx_backend.model.noteAggregat.Note;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class SchedulerService {
    private AppointmentRepository appointmentRepository;
    private NoteRepository noteRepository;

    public SchedulerService(AppointmentRepository appointmentRepository, NoteRepository noteRepository) {
        this.appointmentRepository = appointmentRepository;
        this.noteRepository = noteRepository;
    }

    public List<Appointment> getAppointments(LocalDateTime date) {
        List<Appointment> appointments =
                appointmentRepository
                        .findAll()
                        .stream()
                        .filter(a->a.getDate().equals(date))
                        .collect(Collectors.toList());
        return appointments;
    }

    public List<Note> getNotes(LocalDateTime date) {
        List<Note> notes =
                noteRepository
                        .findAll()
                        .stream()
                        .filter(n->n.getDate().equals(date))
                        .collect(Collectors.toList());
        return notes;
    }

    public void saveAppointment(Appointment appointment) {
        appointmentRepository.save(appointment);
    }

    public void saveNote(Note note) {
        noteRepository.save(note);
    }
}
