package ru.kovin.it_lab_register.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.kovin.it_lab_register.entities.User;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    List<User> findByEmail(String email);
    List<User> findByName(String name);
    List<User> findByLogin(String login);
    List<User> findByLoginStartingWith(String login);
    List<User> findByNameStartingWith(String name);
    List<User> findByEmailStartingWith(String email);
}