package com.shortie.backend.controllers;

import java.util.Optional;
import java.util.Random;

import org.apache.jasper.tagplugins.jstl.core.Url;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.shortie.backend.models.Shortie;
import com.shortie.backend.repository.ShortieRepo;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class MainController {
    @Autowired
    private ShortieRepo urlRepo;
    private static final String CHARACTERS = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    private static final int LENGTH = 6;

    private String generateShortCode() {
        Random random = new Random();
        StringBuilder shortCode = new StringBuilder(LENGTH);
        for (int i = 0; i < LENGTH; i++) {
            shortCode.append(CHARACTERS.charAt(random.nextInt(CHARACTERS.length())));
        }
        return shortCode.toString();
    }

    @GetMapping("/")
    @ResponseBody
    public String getHome() {
        System.out.println("hello");
        // System.out.println(urlRepo.findAll());
        return new String("hello World!!");
    }

    @PostMapping("/addUrl")
    @ResponseBody
    public Shortie addUrl(@RequestParam String actual_url) {
        Shortie shortie = new Shortie();
        try {
            String shortCode;
            List<Shortie> existingUrl;
            do {
                shortCode = generateShortCode();
                existingUrl = urlRepo.findByShortUrl(shortCode);
            } while (!existingUrl.isEmpty());

            String shortUrl = shortCode;

            shortie.setActuralUrl(actual_url);
            shortie.setShortUrl(shortUrl);
            System.out.println(shortie);

            urlRepo.save(shortie);
            return shortie;
        } catch (Exception e) {
            return shortie;
        }
    }

    @GetMapping("/get")
    @ResponseBody
    public Shortie getShortUrl(@RequestParam String short_url) {
        List<Shortie> temp = urlRepo.findByShortUrl(short_url);
        if (temp.size() == 0) {
            return new Shortie();
        } else
            return temp.get(0);
    }

}
