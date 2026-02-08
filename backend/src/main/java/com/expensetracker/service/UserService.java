package com.expensetracker.service;

import com.expensetracker.entities.User;
import com.expensetracker.repository.UserRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class UserService {
	private final UserRepository userRepository;

	public UserService(UserRepository userRepository) {
		this.userRepository = userRepository;
	}

	public User save(User user) {
		return userRepository.save(user);
	}

	public User findByEmail(String email) {
		return userRepository.findByEmail(email).orElse(null);
	}

	public List<User> getAllUsers() {
		return userRepository.findAll();
	}

	public void toggleUserStatus(Long id) {
		userRepository.findById(id).ifPresent(user -> {
			user.setActive(!user.isActive());
			userRepository.save(user);
		});
	}
}
