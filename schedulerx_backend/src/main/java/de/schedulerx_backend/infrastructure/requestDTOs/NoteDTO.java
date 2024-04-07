package de.schedulerx_backend.infrastructure.requestDTOs;

import java.time.LocalDateTime;

public class NoteDTO {
    private LocalDateTime date;
    private String text;
    public NoteDTO(LocalDateTime date, String text) {
        this.date = date;
        this.text = text;
    }
    public LocalDateTime getDate() {
        return date;
    }

    public String getText() {
        return text;
    }

}
