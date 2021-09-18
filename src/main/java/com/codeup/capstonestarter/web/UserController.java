package com.codeup.capstonestarter.web;

import com.codeup.capstonestarter.data.User;
import com.codeup.capstonestarter.data.UserRepository;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/api/users", headers = "Accept=application/json", produces = "application/json")
public class UserController {

    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping
    private void find(){
        userRepository.findAll();
    }

    @GetMapping("/{id}")
    private void findById(@PathVariable Long id){
        userRepository.getById(id);
    }

    @PostMapping("/create")
    private void createUser(@RequestBody User user) {

//        user.setPassword(passwordEncoder.encode(user.getPassword()));
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
