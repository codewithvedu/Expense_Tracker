package com.expensetracker.service;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.expensetracker.dto.Expensedto;
import com.expensetracker.entities.Expense;
import com.expensetracker.entities.User;
import com.expensetracker.repository.ExpenseRepository;
import com.expensetracker.repository.UserRepository;

@Service
public class ExpenseService {
	@Autowired
	private  ExpenseRepository expenseRepository;
	@Autowired
	private UserRepository userRepository;
	@Autowired
	private ModelMapper modelMapper;

	public ExpenseService(ExpenseRepository expenseRepository) {
		this.expenseRepository = expenseRepository;
	}

	public String addExpense(Expensedto expensedto) {
		User user = userRepository.findById(expensedto.getUserId()).orElseThrow();
		Expense expense = modelMapper.map(expensedto, Expense.class);
		expense.setUser(user);
		expenseRepository.save(expense);
		return "Expense Added Successfully !";
	}

	public List<Expense> getExpensesByUser(Long userId) {
		return expenseRepository.findByUserId(userId);
	}

	public void deleteExpense(Long id) {
		expenseRepository.deleteById(id);
	}

	public Double totalExpense(Long userId) {
		return expenseRepository.findByUserId(userId).stream().mapToDouble(Expense::getAmount).sum();
	}
}
