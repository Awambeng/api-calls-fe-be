package com.awambeng.backend.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;

@RestController
public class BackendController {

    @GetMapping("/")
    public ResponseEntity<String> hello() {
        return ResponseEntity.ok("Hello from the backend!");
    }

    @GetMapping("/api/result")
    public ResponseEntity<String> entry() {
        return ResponseEntity.ok("This is the result page!");
    }
}
