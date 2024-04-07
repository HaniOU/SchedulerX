package de.schedulerx_backend.infrastructure.controller;

import java.time.LocalDateTime;

public class AppointmentDTO {
    private LocalDateTime date;
    private String activity;
    private String partner;
    public AppointmentDTO(LocalDateTime date, String activity, String partner) {
        this.date = date;
        this.activity = activity;
        this.partner = partner;
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
}
