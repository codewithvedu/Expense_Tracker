package com.expensetracker.controller;

import com.expensetracker.entities.User;
import com.expensetracker.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/auth/admin")
@CrossOrigin("http://localhost:5173")
public class AdminController {
	@Autowired
	private AdminService adminService;

	@GetMapping("/users")
	public List<User> getAllUsers() {
		return adminService.getAllUsers();
	}

	@PutMapping("/user/{id}/toggle")
	public void toggleUser(@PathVariable Long id) {
		adminService.toggleUserStatus(id);
	}
}
