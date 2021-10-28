package com.codeup.capstonestarter.web;

import com.codeup.capstonestarter.data.Event;
import com.codeup.capstonestarter.data.EventsRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/api/event", headers = "Accept=application/json", produces = "application/json")
public class EventController {

    private final EventsRepository eventsRepository;

    public EventController(EventsRepository eventsRepository) {
        this.eventsRepository = eventsRepository;
    }

    @GetMapping
    public List<Event> findEvents(){
       return eventsRepository.findAll();
    }
}
