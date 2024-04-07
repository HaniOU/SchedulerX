package de.schedulerx_backend.model.noteAggregat;

import de.schedulerx_backend.model.schedulerUserAggregat.SchedulerUser;
import org.springframework.data.annotation.Id;
import org.springframework.data.jdbc.core.mapping.AggregateReference;

import java.time.LocalDateTime;

public class Note {
    @Id
    private Long id;
    private LocalDateTime date;
    private String text;
    private AggregateReference<SchedulerUser, Long> userId;
    public Note(Long id, LocalDateTime date, String text, Long userId) {
        this.id = id;
        this.date = date;
        this.text = text;
        this.userId = AggregateReference.to(userId);
    }
    public Long getUserId() {
        return userId.getId();
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
