package com.example.Backend.Controller;

import com.example.Backend.Model.Pitanja;
import com.example.Backend.Model.User;
import com.example.Backend.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping
    public ResponseEntity<User> createUser(@RequestBody User user){
        User savedUser = userService.saveUser(user);
        return ResponseEntity.ok(savedUser);
    }

    @GetMapping(value = "/login/{username}/{password}")
    public ResponseEntity<Optional<User>> findUser(@PathVariable("username") String  username, @PathVariable("password") String password){

        Optional<User> user = userService.findUser(username,password);
        if(user.isPresent()){
            return ResponseEntity.ok(user);
        }else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/{userId}")
    public User updatePitanje(
            @PathVariable Long userId,
            @RequestParam String noviusername) {
        return userService.updatePitanja(userId, noviusername);
    }
    @DeleteMapping("/{userid}")
    public ResponseEntity deletePitanje(@PathVariable("userid") Long id){
        return userService.deleteUser(id);
    }


}
