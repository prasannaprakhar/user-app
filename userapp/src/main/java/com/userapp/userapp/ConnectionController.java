package com.userapp.userapp;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ConnectionController {
    @CrossOrigin
    @RequestMapping("/api/users")
    public String index(){
        return "The connection has been established";
    }
    
}