package com.example.Backend.DTO;

import java.util.Date;

public class RaspolozenjeDto {
    private String notes;
    private Date date;

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
}
