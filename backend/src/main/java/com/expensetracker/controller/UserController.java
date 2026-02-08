package com.expensetracker.controller;

import com.expensetracker.entities.Income;
import com.expensetracker.dto.Expensedto;
import com.expensetracker.dto.Incomedto;
import com.expensetracker.entities.Expense;
import com.expensetracker.service.IncomeService;
import com.expensetracker.service.ExpenseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin("http://localhost:5173")
public class UserController {
	@Autowired
	private IncomeService incomeService;
	@Autowired
	private ExpenseService expenseService;

// Income APIs
	@GetMapping("/income/user/{userId}")
	public List<Income> getIncomes(@PathVariable Long userId) {
		return incomeService.getIncomesByUser(userId);
	}

	@PostMapping("/income/add")
	public String addIncome(@RequestBody Incomedto dto) {
		System.out.println(dto);
		return incomeService.addIncome(dto);
	}

	@DeleteMapping("/income/delete/{id}")
	public void deleteIncome(@PathVariable Long id) {
		incomeService.deleteIncome(id);
	}

@GetMapping("/income/total/{userId}")
public Double totalIncome(@PathVariable Long userId){
return incomeService.totalIncome(userId);
   }

// Expense APIs
@GetMapping("/expenses/user/{userId}")
public List<Expense> getExpenses(@PathVariable Long userId){
	 return expenseService.getExpensesByUser(userId);
	 }
@PostMapping("/expense/add")
public String addExpense(@RequestBody Expensedto expensedto){
	System.out.println(expensedto);
	return expenseService.addExpense(expensedto);
	}
@DeleteMapping("/expense/delete/{id}")
public void deleteExpense(@PathVariable Long id){
    expenseService.deleteExpense(id);
    }
@GetMapping("/expense/total/{userId}")
public Double totalExpense(@PathVariable Long userId){
	return expenseService.totalExpense(userId);
	}
}

