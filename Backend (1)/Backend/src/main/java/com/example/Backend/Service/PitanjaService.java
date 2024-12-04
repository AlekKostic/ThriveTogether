package com.example.Backend.Service;

import com.example.Backend.DTO.PitanjeDTO;
import com.example.Backend.Model.Pitanja;
import com.example.Backend.Model.User;
import com.example.Backend.Repository.PitanjaRepository;
import com.example.Backend.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PitanjaService {
    @Autowired
    private PitanjaRepository pitanjaRepository;

    @Autowired
    private UserRepository userRepository;

    public List<Pitanja> getAll(){
        return pitanjaRepository.findAll();
    }

    public Pitanja createPitanje(PitanjeDTO pitanjeDTO){
        User user = userRepository.findById(pitanjeDTO.getUserId()).orElseThrow( () -> new RuntimeException("user nije pronadjen"));
        Pitanja pitanja = new Pitanja();
        pitanja.setHead(pitanjeDTO.getHead());
        pitanja.setUser(user);
        return pitanjaRepository.save(pitanja);
    }

    public List<Pitanja> getAllPitanjaDashboar(Long id){
        List<Pitanja> pitanje = pitanjaRepository.getAllByUser_Id(id);
        return pitanje;
    }
    public Pitanja updatePitanja(Long pitanjaId, String novihead, Long userId) {

        Pitanja pitanje = pitanjaRepository.findById(pitanjaId)
                .orElseThrow(() -> new RuntimeException("Order not found"));


        pitanje.setHead(novihead);


        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));


        pitanje.setUser(user);


        return pitanjaRepository.save(pitanje);
    }
}
