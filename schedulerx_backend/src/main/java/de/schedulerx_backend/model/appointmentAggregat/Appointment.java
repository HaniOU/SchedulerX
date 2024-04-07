package de.schedulerx_backend.model.appointmentAggregat;

import de.schedulerx_backend.model.schedulerUserAggregat.SchedulerUser;
import org.springframework.data.annotation.Id;
import org.springframework.data.jdbc.core.mapping.AggregateReference;

import java.time.LocalDateTime;

public class Appointment {
    @Id
    private Long id;
    private LocalDateTime date;
    private String activity;
    private String partner;
    private AggregateReference<SchedulerUser, Long> userId;

    public Appointment(Long id, LocalDateTime date, String activity, String partner, Long userId) {
        this.id = id;
        this.date = date;
        this.activity = activity;
        this.partner = partner;
        this.userId = AggregateReference.to(userId);
    }

    public Long getId() {
        return id;
    }

    public LocalDateTime getDate() {
        return date;
    }

    public String getActivity() {
        return activity;
    }

    public String getPartner() {
        return partner;
    }

    public Long getUserId() {
        return userId.getId();
    }
}
