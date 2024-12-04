package com.example.Backend.DTO;

import jakarta.persistence.Entity;


public class PitanjeDTO {
    private String head;
    private Long userId;

    public String getHead() {
        return head;
    }

    public void setHead(String head) {
        this.head = head;
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }
}
