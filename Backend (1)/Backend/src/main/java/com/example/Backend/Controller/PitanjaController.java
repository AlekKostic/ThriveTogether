package com.example.Backend.Controller;

import com.example.Backend.DTO.PitanjeDTO;
import com.example.Backend.Model.Pitanja;
import com.example.Backend.Service.PitanjaService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/pitanja")
public class PitanjaController {

    @Autowired
    private PitanjaService pitanjaService;

    @GetMapping()
    public List<Pitanja> getAllPitanja(){
        return pitanjaService.getAll();
    }
    @PostMapping("/create")
    public Pitanja createPitanja(@RequestBody PitanjeDTO pitanjeDTO){
        return pitanjaService.createPitanje(pitanjeDTO);
    }
    @GetMapping("/dashboard/{id}")
    public List<Pitanja> getAllPitanjaDashboar(@PathVariable(name = "id") Long id){
        return pitanjaService.getAllPitanjaDashboar(id);
    }
    @PutMapping("/{pitanjaId}")
    public Pitanja updatePitanje(
            @PathVariable Long pitanjaId,
            @RequestParam String novihead,
            @RequestParam Long userId) {
        return pitanjaService.updatePitanja(pitanjaId, novihead, userId);
    }
    @DeleteMapping("/{pitanjeid}")
    public ResponseEntity deletePitanje(@PathVariable("pitanjeid") Long id){
        return pitanjaService.deletePitanja(id);
    }
}
