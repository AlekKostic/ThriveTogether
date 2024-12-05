package com.example.Backend.Model;

import com.example.Backend.DTO.Enum.Raspolozenje;
import jakarta.persistence.*;

import java.util.Date;


@Table(name = "raspolozenja")
@Entity
public class Raspolozenja {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_raspolozenja;

    public Long getId_raspolozenja() {
        return id_raspolozenja;
    }

    public void setId_raspolozenja(Long id_raspolozenja) {
        this.id_raspolozenja = id_raspolozenja;
    }

    @Enumerated(EnumType.ORDINAL)
    private Raspolozenje raspolozenje;

    private Date datum;

    private String beleske;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id")
    private User user;



    public Raspolozenje getRaspolozenje() {
        return raspolozenje;
    }

    public void setRaspolozenje(Raspolozenje raspolozenje) {
        this.raspolozenje = raspolozenje;
    }

    public Date getDatum() {
        return datum;
    }

    public void setDatum(Date datum) {
        this.datum = datum;
    }

    public String getBeleske() {
        return beleske;
    }

    public void setBeleske(String beleske) {
        this.beleske = beleske;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
