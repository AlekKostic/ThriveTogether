package com.example.Backend.DTO;

public class OdgvoriDTO {
    private String odgovor;
    private Long id_pitanja;

    public String getOdgovor() {
        return odgovor;
    }

    public void setOdgovor(String odgovor) {
        this.odgovor = odgovor;
    }

    public Long getId_pitanja() {
        return id_pitanja;
    }

    public void setId_pitanja(Long id_pitanja) {
        this.id_pitanja = id_pitanja;
    }
}
