package com.expensetracker.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.expensetracker.entities.Income;
import java.util.List;
public interface IncomeRepository extends JpaRepository<Income, Long> {
   List<Income> findByUserId(Long userId);
}
