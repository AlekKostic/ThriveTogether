package com.example.Backend.DTO;

import com.example.Backend.DTO.Enum.Raspolozenje;
import java.util.Date;

public class RaspolozenjeDTO {

    private Raspolozenje raspolozenje;
    private Date datum;
    private String beleske;
    private Long userId;

    // Getters and Setters
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

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }
}