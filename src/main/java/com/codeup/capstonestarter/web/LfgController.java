package com.codeup.capstonestarter.web;

import com.codeup.capstonestarter.data.Lfg;
import com.codeup.capstonestarter.data.LfgRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/lfg", headers = "Accept=application/json", produces = "application/json")
public class LfgController {

    private final LfgRepository lfgRepository;

    public LfgController(LfgRepository lfgRepository){
        this.lfgRepository = lfgRepository;
    }

    @GetMapping
    public List<Lfg> getLfg(){
        return lfgRepository.findAll();
    }

    @PostMapping("/create")
    public void create(@RequestBody Lfg lfg){
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
