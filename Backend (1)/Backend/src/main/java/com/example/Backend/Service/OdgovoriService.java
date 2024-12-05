package com.example.Backend.Service;

import com.example.Backend.DTO.OdgvoriDTO;
import com.example.Backend.DTO.PitanjeDTO;
import com.example.Backend.Model.Odgovori;
import com.example.Backend.Model.Pitanja;
import com.example.Backend.Model.User;
import com.example.Backend.Repository.OdgovoriRepository;
import com.example.Backend.Repository.PitanjaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OdgovoriService {
    @Autowired
    private OdgovoriRepository odgovoriRepository;

    @Autowired
    private PitanjaRepository pitanjaRepository;

    public List<Odgovori> getAllOdgovori() {
        return odgovoriRepository.findAll();
    }

    public List<Odgovori> getAllOdgovoriT(Long pitanjeId) {
        return odgovoriRepository.findByPitanjeId(pitanjeId);
    }

    public Odgovori createOdgovor(OdgvoriDTO odgvoriDTO){
        Pitanja pitanje = pitanjaRepository.findById(odgvoriDTO.getId_pitanja()).orElseThrow( () -> new RuntimeException("user nije pronadjen"));
        Odgovori odgovori = new Odgovori();
        odgovori.setOdgovor(odgvoriDTO.getOdgovor());
        odgovori.setPitanja(pitanje);
        return odgovoriRepository.save(odgovori);
    }
}
