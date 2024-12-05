package com.example.Backend.Service;

import com.example.Backend.Model.Pitanja;
import com.example.Backend.Model.User;
import com.example.Backend.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User saveUser(User user){
        return userRepository.save(user);
    }
    public Optional<User> findUser(String username, String Passwod){
         Optional<User> user = userRepository.findByUsernameAndPassword(username, Passwod);
         return user;
    }
    public User updatePitanja(Long pitanjaId, String noviUsername) {

        User user = userRepository.findById(pitanjaId)
                .orElseThrow(() -> new RuntimeException("Order not found"));


        user.setUsername(noviUsername);

        return userRepository.save(user);
    }
    public ResponseEntity deleteUser(Long userId){
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("Order not found"));
        userRepository.deleteById(userId);
        return ResponseEntity.ok().build();
    }
}
