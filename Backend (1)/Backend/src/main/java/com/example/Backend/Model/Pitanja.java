package com.example.Backend.Model;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "pitanja")
public class Pitanja {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id_pitanja;

    private String head;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "id_usera")
    private User user;

    public Long getId_pitanja() {
        return id_pitanja;
    }

    public void setId_pitanja(Long id_pitanja) {
        this.id_pitanja = id_pitanja;
    }

    public String getHead() {
        return head;
    }

    public void setHead(String head) {
        this.head = head;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
