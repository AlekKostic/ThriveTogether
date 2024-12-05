package com.example.Backend.Service;

import com.example.Backend.DTO.Enum.Raspolozenje;
import com.example.Backend.DTO.RaspolozenjeDto;
import com.example.Backend.Model.Raspolozenja;
import com.example.Backend.Repository.RaspolozenjeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RaspolozenjeService {

    @Autowired
    private RaspolozenjeRepository raspolozenjeRepository;

    public List<Raspolozenja> getAll(){
        return raspolozenjeRepository.findAll();
    }

    public Raspolozenja create(String mood, RaspolozenjeDto raspolozenjeDto){
        Raspolozenja raspol = new Raspolozenja();
        raspol.setDate(raspolozenjeDto.getDate());
        raspol.setNotes(raspolozenjeDto.getNotes());

        if(mood.contentEquals("happy")){
            raspol.setRaspolozenje(Raspolozenje.happy);
        }else if (mood.contentEquals("sad")){
            raspol.setRaspolozenje(Raspolozenje.sad);
        }else{
            raspol.setRaspolozenje(Raspolozenje.neutral);
        }
        return raspolozenjeRepository.save(raspol);
    }
}
