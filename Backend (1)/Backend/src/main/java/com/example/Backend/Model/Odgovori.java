package com.example.Backend.Model;

import jakarta.persistence.*;

@Entity
@Table(name = "odgovori")
public class Odgovori {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id_odgovora;
    private String odgovor;
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "id_pitanja")
    private Pitanja pitanja;

    public Integer getId_odgovora() {
        return id_odgovora;
    }

    public void setId_odgovora(Integer id_odgovora) {
        this.id_odgovora = id_odgovora;
    }

    public String getOdgovor() {
        return odgovor;
    }

    public void setOdgovor(String odgovor) {
        this.odgovor = odgovor;
    }

    public Pitanja getPitanja() {
        return pitanja;
    }

    public void setPitanja(Pitanja pitanja) {
        this.pitanja = pitanja;
    }
}
