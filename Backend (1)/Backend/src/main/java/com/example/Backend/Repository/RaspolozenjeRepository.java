package com.example.Backend.Repository;

import com.example.Backend.Model.Raspolozenja;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RaspolozenjeRepository extends JpaRepository<Raspolozenja, Long> {
}
