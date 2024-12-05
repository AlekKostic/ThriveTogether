package com.example.Backend.Service;

import com.example.Backend.DTO.RaspolozenjeDTO;
import com.example.Backend.Model.Raspolozenja;
import com.example.Backend.Model.User;
import com.example.Backend.Repository.Raspolozenje;
import com.example.Backend.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Optional;

@Service
public class RaspolozenjaService {

    @Autowired
    private Raspolozenje raspolozenje;

    @Autowired
    private UserRepository userRepository;

    public List<Raspolozenja> getAll(Long id){
        User user = userRepository.findById(id).orElseThrow(() -> new RuntimeException("error"));
        return raspolozenje.findAllByUser(user);
    }

    public Raspolozenja createRaspolozenje( RaspolozenjeDTO raspolozenjeDTO) {
        Optional<User> userOpt = userRepository.findById(raspolozenjeDTO.getUserId());
        if (userOpt.isPresent()) {
            User user = userOpt.get();
            Raspolozenja raspolozenja = new Raspolozenja();
            raspolozenja.setRaspolozenje(raspolozenjeDTO.getRaspolozenje());
            raspolozenja.setDatum(raspolozenjeDTO.getDatum());
            raspolozenja.setBeleske(raspolozenjeDTO.getBeleske());
            raspolozenja.setUser(user);


            return raspolozenje.save(raspolozenja);
        }
        return null; // Ako korisnik nije pronađen
    }
}
