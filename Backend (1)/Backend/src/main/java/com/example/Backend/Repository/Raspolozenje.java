package com.example.Backend.Repository;

import com.example.Backend.Model.Raspolozenja;
import com.example.Backend.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface Raspolozenje extends JpaRepository<Raspolozenja, Long> {
    List<Raspolozenja> findAllByUser(User user);
}
