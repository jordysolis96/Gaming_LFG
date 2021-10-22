package com.codeup.capstonestarter.web;

import com.codeup.capstonestarter.data.Lfg;
import com.codeup.capstonestarter.data.LfgRepository;
import com.codeup.capstonestarter.data.User;
import com.codeup.capstonestarter.data.UserRepository;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/lfg", headers = "Accept=application/json", produces = "application/json")
public class LfgController {

    private final LfgRepository lfgRepository;
    private final UserRepository userRepository;

    public LfgController(LfgRepository lfgRepository, UserRepository userRepository){
        this.lfgRepository = lfgRepository;
        this.userRepository = userRepository;
    }

    @GetMapping
    public List<Lfg> getLfg(){
        return lfgRepository.findAll();
    }

    @PostMapping("/create")
    public void create(@RequestBody Lfg lfg, OAuth2Authentication auth){
        String email = auth.getName();
        System.out.println(email);
        User user = userRepository.findByEmail(email).get();
        System.out.println(user);
        lfg.setUser(user);
        System.out.println(lfg);
        lfgRepository.save(lfg);
    }

    @PutMapping("/{id}")
    public void update(@PathVariable Long id, @RequestBody Lfg lfg){
        lfgRepository.save(lfg);
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id){
        lfgRepository.deleteById(id);
    }


}
