package com.example.Backend.Repository;

import com.example.Backend.Model.Pitanja;
import com.example.Backend.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PitanjaRepository extends JpaRepository<Pitanja, Long> {
}