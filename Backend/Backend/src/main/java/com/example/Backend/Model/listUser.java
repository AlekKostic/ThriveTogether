package com.example.Backend.Model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "listuser")
public class listUser {
    @Id
    @SequenceGenerator(name = "listUser_sequence", sequenceName = "listUser_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "listUser_sequence")
    private  Long id;

    @Column(name = "username", nullable = false, unique = true)
    private String username;

    @Column(name = "ime", nullable = false)
    private String ime;

    @Column(name = "prezime", nullable = false)
    private String prezime;

    @Column(name = "email", nullable = false, unique = true)
    private String email;

    @Column(name = "password", nullable = false)
    private String password;
}
