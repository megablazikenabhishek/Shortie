package com.shortie.backend.models;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Shortie {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "actual_url", unique = true)
    private String acturalUrl;

    @Column(name = "short_url", unique = true)
    private String shortUrl;

    public Shortie() {

    }

    public long getId() {
        return id;
    }

    public String getShortUrl() {
        return shortUrl;
    }

    public String getActuralUrl() {
        return acturalUrl;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setShortUrl(String shortUrl) {
        this.shortUrl = shortUrl;
    }

    public void setActuralUrl(String acturalUrl) {
        this.acturalUrl = acturalUrl;
    }

    @Override
    public String toString() {
        return "UrlEntity{" +
                "id=" + id +
                ", url='" + acturalUrl + '\'' +
                ", shortUrl='" + shortUrl + '\'' +
                '}';
    }
}
