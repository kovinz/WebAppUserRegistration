package ru.kovin.it_lab_register.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import ru.kovin.it_lab_register.entities.User;
import ru.kovin.it_lab_register.repositories.UserRepository;

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/")
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

    private final Logger log = LoggerFactory.getLogger(UserController.class);

    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping("/users")
    public List<User> all() {
        return userRepository.findAll();
    }

    @GetMapping("/users/{id}")
    public ResponseEntity<?> one(@PathVariable Long id) {
        Optional<User> userOptional = userRepository.findById(id);
        return userOptional.map(response -> ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PutMapping("/users")
    ResponseEntity<User> updateUser(@Valid @RequestBody User user) {
        log.info("Request to update user: {}", user);

        User result = userRepository.save(user);
        return ResponseEntity.ok().body(result);
    }

    @DeleteMapping("/users/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable Long id) {
        log.info("Request to delete user: {}", id);
        userRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/users")
    ResponseEntity<User> createUser(@Valid @RequestBody User user) throws URISyntaxException {
        log.info("Request to create user: {}", user);

        User result = userRepository.save(user);
        return ResponseEntity.created(new URI("/api/users/" + result.getUserId()))
                .body(result);
    }

    @GetMapping(value = "users/email/{email}")
    public List<User> findByEmail(@PathVariable String email) {
        return userRepository.findByEmail(email);
    }

    @GetMapping(value = "users/name/{name}")
    public List<User> findByName(@PathVariable String name) {
        return userRepository.findByName(name);
    }

    @GetMapping(value = "users/login/{login}")
    public List<User> findByLogin(@PathVariable String login) {
        return userRepository.findByLogin(login);
    }
}