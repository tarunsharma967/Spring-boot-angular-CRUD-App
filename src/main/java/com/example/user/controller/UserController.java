package com.example.user.controller;

import com.example.user.exception.ResourceNotFoundException;
import com.example.user.model.User;
import com.example.user.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;


@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    UserRepository noteRepository;

    @GetMapping("/users")
    public List<User> getAllNotes() {
        return noteRepository.findAll();
    }

    @PostMapping("/users")
    public User createNote(@Valid @RequestBody User user) {
        return noteRepository.save(user);
    }

    @GetMapping("/users/{id}")
    public User getNoteById(@PathVariable(value = "id") Long userId) {
        return noteRepository.findById(userId).orElseThrow(() -> new ResourceNotFoundException("Note", "id", userId));
    }

    @PutMapping("/users/{id}")
    public User updateNote(@PathVariable(value = "id") Long noteId,@Valid @RequestBody User userDetail) {

        User user = noteRepository.findById(noteId).orElseThrow(() -> new ResourceNotFoundException("Note", "id", noteId));

        user.setName(userDetail.getName());
        user.setEmail(userDetail.getEmail());
        user.setPhone(userDetail.getPhone());
        user.setCity(userDetail.getCity());
        user.setAddress(userDetail.getAddress());
        User updatedNote = noteRepository.save(user);
        return updatedNote;
    }

    @DeleteMapping("/users/{id}")
    public ResponseEntity<?> deleteNote(@PathVariable(value = "id") Long noteId) {
        User note = noteRepository.findById(noteId)
                .orElseThrow(() -> new ResourceNotFoundException("Note", "id", noteId));

        noteRepository.delete(note);

        return ResponseEntity.ok().build();
    }
}
