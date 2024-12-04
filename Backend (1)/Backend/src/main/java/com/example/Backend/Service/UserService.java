package com.example.Backend.Service;

import com.example.Backend.Model.User;
import com.example.Backend.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;

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
}
