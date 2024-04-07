package de.schedulerx_backend.applicationservice;

import de.schedulerx_backend.database.AppointmentRepository;
import de.schedulerx_backend.database.NoteRepository;
import de.schedulerx_backend.database.SchedulerUserRepository;
import de.schedulerx_backend.infrastructure.requestDTOs.AppointmentDTO;
import de.schedulerx_backend.infrastructure.requestDTOs.NoteDTO;
import de.schedulerx_backend.infrastructure.requestDTOs.UserRequest;
import de.schedulerx_backend.model.appointmentAggregat.Appointment;
import de.schedulerx_backend.model.noteAggregat.Note;
import de.schedulerx_backend.model.schedulerUserAggregat.SchedulerUser;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class SchedulerService {
    private AppointmentRepository appointmentRepository;
    private NoteRepository noteRepository;
    private SchedulerUserRepository userRepository;

    public SchedulerService(AppointmentRepository appointmentRepository, NoteRepository noteRepository, SchedulerUserRepository userRepository) {
        this.appointmentRepository = appointmentRepository;
        this.noteRepository = noteRepository;
        this.userRepository = userRepository;
    }
    public List<Appointment> getAppointments(LocalDateTime date, Long userId) {
        List<Appointment> appointments =
                appointmentRepository
                        .findAll()
                        .stream()
                        .filter(a-> a.getUserId().equals(userId))
                        .filter(a-> isSameDate(a.getDate(),date))
                        .collect(Collectors.toList());
        return appointments;
    }

    public List<Note> getNotes(LocalDateTime date, Long userId) {
        List<Note> notes =
                noteRepository
                        .findAll()
                        .stream()
                        .filter(n-> n.getUserId().equals(userId))
                        .filter(n-> isSameDate(n.getDate(),date))
                        .collect(Collectors.toList());
        return notes;
    }
    public static boolean isSameDate(LocalDateTime a, LocalDateTime b){
        return (a.getYear() == b.getYear() && a.getMonth() == b.getMonth() && a.getDayOfMonth() == b.getDayOfMonth());
    }
    public void saveAppointment(AppointmentDTO appointmentDTO, Long userId) {
        Appointment appointment = new Appointment(
                null,
                appointmentDTO.getDate(),
                appointmentDTO.getActivity(),
                appointmentDTO.getPartner(),
                userId
        );
        appointmentRepository.save(appointment);
    }

    public void saveNote(NoteDTO noteDTO, Long userId) {
        Note note = new Note(null, noteDTO.getDate(), noteDTO.getText(), userId);
        noteRepository.save(note);
    }

    public boolean createUser(UserRequest user) {
        boolean empty = userRepository
                .findAll()
                .stream()
                .filter(u -> u.getUsername().equals(user.getUsername()))
                .findAny()
                .isEmpty();
        if(!empty) return false;
        BCryptPasswordEncoder bCryptPasswordEncoder = new BCryptPasswordEncoder();
        String encodedPassword = bCryptPasswordEncoder.encode(user.getPassword());
        SchedulerUser newUser = new SchedulerUser(null, user.getUsername(), encodedPassword,"ROLE_USER");
        userRepository.save(newUser);
        return true;
    }

    public Optional<SchedulerUser> getUserByName(String username) {
        return userRepository.findByUsername(username);
    }
}
