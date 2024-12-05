package com.example.Backend.Controller;

import com.example.Backend.DTO.OdgvoriDTO;
import com.example.Backend.DTO.PitanjeDTO;
import com.example.Backend.Model.Odgovori;
import com.example.Backend.Service.OdgovoriService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/odgovori")
public class OdgovoriController {

    @Autowired
    private OdgovoriService odgovoriService;

    @GetMapping("")
    public List<Odgovori> getAllOdgovori(){
        return odgovoriService.getAllOdgovori();
    }
    @GetMapping("/{id}")
    public List<Odgovori> getAllOdgovoriT(@PathVariable("id") Long Id){
        return odgovoriService.getAllOdgovoriT(Id);
    }
    @PostMapping("/create")
    public Odgovori createOdgovori(@RequestBody OdgvoriDTO pitanjeDTO){
        return odgovoriService.createOdgovor(pitanjeDTO);
    }

}
