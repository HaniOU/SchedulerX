package de.schedulerx_backend.database;

import de.schedulerx_backend.model.noteAggregat.Note;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface NoteRepository extends CrudRepository<Note, Long> {
    List<Note> findAll();
}
