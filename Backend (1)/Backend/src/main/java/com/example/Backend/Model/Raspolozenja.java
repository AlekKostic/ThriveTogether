package com.example.Backend.Model;

import com.example.Backend.DTO.Enum.Raspolozenje;
import jakarta.persistence.*;

import java.util.Date;

@Entity
@Table(name = "raspolozenje")
public class Raspolozenja {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_raspolozenja;

    @Enumerated(EnumType.STRING)
    private Raspolozenje raspolozenje;

    private String notes;

    public Long getId_raspolozenja() {
        return id_raspolozenja;
    }

    public void setId_raspolozenja(Long id_raspolozenja) {
        this.id_raspolozenja = id_raspolozenja;
    }

    public Raspolozenje getRaspolozenje() {
        return raspolozenje;
    }

    public void setRaspolozenje(Raspolozenje raspolozenje) {
        this.raspolozenje = raspolozenje;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    private Date date;

}
