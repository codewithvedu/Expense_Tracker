package com.expensetracker.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.expensetracker.entities.User;
import com.expensetracker.entities.User.Role;

import java.util.List;
import java.util.Optional;
public interface UserRepository extends JpaRepository<User, Long> {
   Optional<User> findByEmail(String email);

List<User> findByRole(Role user);
}
