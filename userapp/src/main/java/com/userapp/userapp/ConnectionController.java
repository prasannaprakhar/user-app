package com.userapp.userapp;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ConnectionController {
    @RequestMapping("/api/users")
    public String index(){
        return "The microservice created and linked";
    }
    
}