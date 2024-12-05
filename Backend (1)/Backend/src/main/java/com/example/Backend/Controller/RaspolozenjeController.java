package com.example.Backend.Controller;

import com.example.Backend.DTO.RaspolozenjeDTO;
import com.example.Backend.Model.Raspolozenja;
import com.example.Backend.Repository.Raspolozenje;
import com.example.Backend.Service.RaspolozenjaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/raspolozenja")
public class RaspolozenjeController {
    @Autowired
    private RaspolozenjaService raspolozenjaService;

    @GetMapping("/{id}")
    public List<Raspolozenja> getAll(@PathVariable("id") Long id){
        return raspolozenjaService.getAll(id);
    }
    @PostMapping("/create")
    public ResponseEntity<Raspolozenja> createRaspolozenje(@RequestBody RaspolozenjeDTO raspolozenjeDTO) {
        Raspolozenja newRaspolozenje = raspolozenjaService.createRaspolozenje(raspolozenjeDTO);
        if (newRaspolozenje != null) {
            return new ResponseEntity<>(newRaspolozenje, HttpStatus.CREATED);
        } else {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
}
