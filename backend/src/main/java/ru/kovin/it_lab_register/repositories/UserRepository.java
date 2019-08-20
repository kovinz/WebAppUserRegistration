package ru.kovin.it_lab_register.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.kovin.it_lab_register.entities.User;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
    Optional<User> findByName(String name);
    Optional<User> findByLogin(String login);
}