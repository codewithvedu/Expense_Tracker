package com.expensetracker.controller;

import com.expensetracker.dto.AuthResponse;
import com.expensetracker.entities.User;
import com.expensetracker.service.UserService;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
@RestController
@RequestMapping("/api/auth")
@CrossOrigin("http://localhost:5173")
public class AuthController {
@Autowired
private UserService userService;
private BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
@Autowired
private ModelMapper modelMapper;
@PostMapping("/register")
public User register(@RequestBody User user){
       user.setPassword(passwordEncoder.encode(user.getPassword()));
       user.setRole(User.Role.USER);
return userService.save(user);
   }
@PostMapping("/login")
public ResponseEntity<AuthResponse> login(@RequestBody User userRequest) {

    User dbUser = userService.findByEmail(userRequest.getEmail());

    // USER NOT FOUND
    if (dbUser == null) {
        AuthResponse res = new AuthResponse("Invalid credentials");
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(res);
    }

    // USER BLOCKED
    if (!dbUser.isActive()) {
        AuthResponse res = new AuthResponse("Account Blocked !!!");
        return ResponseEntity.status(HttpStatus.FORBIDDEN).body(res);
    }

    // WRONG PASSWORD
    if (!passwordEncoder.matches(userRequest.getPassword(), dbUser.getPassword())) {
        AuthResponse res = new AuthResponse("Invalid credentials");
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(res);
    }
    
    // SUCCESS LOGIN
    AuthResponse res = modelMapper.map(dbUser, AuthResponse.class);
    res.setMessage("Login Successful");
    return ResponseEntity.ok(res);
}

}


