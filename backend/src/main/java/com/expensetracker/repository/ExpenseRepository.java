package com.expensetracker.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.expensetracker.entities.Expense;
import java.util.List;
public interface ExpenseRepository extends JpaRepository<Expense, Long> {
   List<Expense> findByUserId(Long userId);
}
