package com.shortie.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.shortie.backend.models.Shortie;
import java.util.List;

public interface ShortieRepo extends JpaRepository<Shortie, Long> {
    List<Shortie> findByShortUrl(String shortUrl);
}
