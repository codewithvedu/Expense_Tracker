package com.expensetracker.dto;

import com.expensetracker.entities.User.Role;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class AuthResponse {
	private Long id;
	private String username;
	private String email;
	private Role role;
	private String message;
	
	public AuthResponse(String message) {
		super();
		this.message = message;
	} 
	
	
}
