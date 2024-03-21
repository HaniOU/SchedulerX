package de.schedulerx_backend.model.appointmentAggregat;

import org.springframework.data.annotation.Id;

import java.time.LocalDateTime;

public class Appointment {
    @Id
    private Long id;
    private LocalDateTime date;
    private String activity;
    private String partner;

    public Appointment(Long id, LocalDateTime date, String activity, String partner) {
        this.id = id;
        this.date = date;
        this.activity = activity;
        this.partner = partner;
    }
}
