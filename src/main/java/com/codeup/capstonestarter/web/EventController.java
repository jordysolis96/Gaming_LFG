package com.codeup.capstonestarter.web;

import com.codeup.capstonestarter.data.Event;
import com.codeup.capstonestarter.data.EventsRepository;
import com.codeup.capstonestarter.data.User;
import com.codeup.capstonestarter.data.UserRepository;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/event", headers = "Accept=application/json", produces = "application/json")
public class EventController {

    private final EventsRepository eventsRepository;
    private final UserRepository userRepository;

    public EventController(EventsRepository eventsRepository, UserRepository userRepository) {
        this.eventsRepository = eventsRepository;
        this.userRepository = userRepository;
    }

    @GetMapping
    public List<Event> findEvents(){
       return eventsRepository.findAll();
    }

    @PostMapping("/create")
    public void createEvent(@RequestBody Event event, OAuth2Authentication auth){
        String email = auth.getName();
        User user = userRepository.findByEmail(email).get();
        event.setUser(user);
        eventsRepository.save(event);
    }
}
