package com.example.Backend.Controller;

import com.example.Backend.DTO.PitanjeDTO;
import com.example.Backend.Model.Pitanja;
import com.example.Backend.Service.PitanjaService;

import org.springframework.beans.factory.annotation.Autowired;
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
}
