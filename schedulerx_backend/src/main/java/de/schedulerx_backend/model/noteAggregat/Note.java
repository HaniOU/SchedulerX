package de.schedulerx_backend.model.noteAggregat;

import org.springframework.data.annotation.Id;

import java.time.LocalDateTime;

public class Note {
    @Id
    private Long id;
    private LocalDateTime date;
    private String text;

    public Note(Long id, LocalDateTime date, String text) {
        this.id = id;
        this.date = date;
        this.text = text;
    }

    public Long getId() {
        return id;
    }

    public LocalDateTime getDate() {
        return date;
    }

    public String getText() {
        return text;
    }
}
