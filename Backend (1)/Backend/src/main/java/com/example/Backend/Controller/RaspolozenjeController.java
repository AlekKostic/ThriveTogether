package com.example.Backend.Controller;

import com.example.Backend.DTO.Enum.Raspolozenje;
import com.example.Backend.DTO.RaspolozenjeDto;
import com.example.Backend.Model.Raspolozenja;
import com.example.Backend.Service.RaspolozenjeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/raspolozenje")
public class RaspolozenjeController {

    @Autowired
    private RaspolozenjeService raspolozenjeService;

    @GetMapping("")
    public List<Raspolozenja> getAllRaspolozenja(){
        return raspolozenjeService.getAll();
    }

    @PostMapping("/create/{mood}")
    public Raspolozenja createRaspolozenje(@RequestBody RaspolozenjeDto raspolozenjeDto, @PathVariable("mood") String mood){
        System.out.println(mood);
        return raspolozenjeService.create(mood, raspolozenjeDto);
    }

}
