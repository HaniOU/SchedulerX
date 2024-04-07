package de.schedulerx_backend.database;

import de.schedulerx_backend.model.schedulerUserAggregat.SchedulerUser;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
@Repository
public interface SchedulerUserRepository extends CrudRepository<SchedulerUser, UUID> {
    List<SchedulerUser> findAll();
    Optional<SchedulerUser> findByUsername(String username);
}
