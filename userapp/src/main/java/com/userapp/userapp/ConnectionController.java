package com.userapp.userapp;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ConnectionController {
    @CrossOrigin
    @RequestMapping("/")
    public String index(){
        return "Linking with springboot server";
    }
    
}