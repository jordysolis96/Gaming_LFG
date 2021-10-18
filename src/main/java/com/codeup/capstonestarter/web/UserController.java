package com.codeup.capstonestarter.web;

import com.codeup.capstonestarter.data.User;
import com.codeup.capstonestarter.data.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/users", headers = "Accept=application/json", produces = "application/json")
public class UserController {

    private final UserRepository userRepository;

    private final PasswordEncoder passwordEncoder;

    public UserController(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @GetMapping
    private List<User> find(){
       return userRepository.findAll();
    }

    @GetMapping("/{id}")
    private User findById(@PathVariable Long id){
       return userRepository.findById(id).get();
    }

    @PostMapping("/create")
    private void createUser(@RequestBody User user) {

        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepository.save(user);
    }

    @PutMapping("/{id}")
    private void updateUser(@PathVariable Long id, @RequestBody User user) {

        userRepository.save(user);
    }

    @DeleteMapping("/{id}")
    private void deleteUser(@PathVariable Long id) {
        userRepository.deleteById(id);
    }
}
