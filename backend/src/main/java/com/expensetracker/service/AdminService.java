package com.expensetracker.service;

import com.expensetracker.entities.User;
import com.expensetracker.repository.UserRepository;

import org.springframework.context.annotation.Role;
import org.springframework.stereotype.Service;
import java.util.List;
@Service
public class AdminService {
private final UserRepository userRepository;
public AdminService(UserRepository userRepository){
this.userRepository = userRepository;
   }
public List<User> getAllUsers(){
return userRepository.findByRole(User.Role.USER);
   }
public void toggleUserStatus(Long id){
       userRepository.findById(id).ifPresent(user -> {
           user.setActive(!user.isActive());
           userRepository.save(user);
       });
   }
}

