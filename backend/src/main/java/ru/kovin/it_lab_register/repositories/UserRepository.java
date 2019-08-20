package ru.kovin.it_lab_register.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.kovin.it_lab_register.entities.User;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Long> {
    List<User> findByEmail(String email);
    List<User> findByName(String name);
    List<User> findByLogin(String login);
}