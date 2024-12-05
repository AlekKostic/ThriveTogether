package com.example.Backend.Repository;


import com.example.Backend.Model.Odgovori;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OdgovoriRepository extends JpaRepository<Odgovori, Long> {

    @Query("SELECT o FROM Odgovori o WHERE o.pitanja.id_pitanja = :pitanjeId")
    List<Odgovori> findByPitanjeId(@Param("pitanjeId") Long pitanjeId);
}
