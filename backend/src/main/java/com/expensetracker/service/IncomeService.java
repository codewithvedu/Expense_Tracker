package com.expensetracker.service;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.expensetracker.dto.Incomedto;
import com.expensetracker.entities.Income;
import com.expensetracker.entities.User;
import com.expensetracker.repository.IncomeRepository;
import com.expensetracker.repository.UserRepository;

import lombok.Getter;

@Service
@Getter
public class IncomeService {
	@Autowired
	private IncomeRepository incomeRepository;
	@Autowired
	private  UserRepository userRepository;
	
	@Autowired
	private ModelMapper modelMapper;

	public IncomeService(IncomeRepository incomeRepository) {
		this.incomeRepository = incomeRepository;
	}

	public String addIncome(Incomedto dto) throws RuntimeException {

	    // Fetch USER, not income
	    User user = userRepository.findById(dto.getUserId())
	            .orElseThrow(() -> new RuntimeException("User not found"));

	    Income income = modelMapper.map(dto, Income.class);
	    income.setUser(user);  
	    incomeRepository.save(income);
	    return "Income Added Successfully !";
	}


	public List<Income> getIncomesByUser(Long userId) {
		return incomeRepository.findByUserId(userId);
	}

	public void deleteIncome(Long id) {
		incomeRepository.deleteById(id);
	}

	public Double totalIncome(Long userId) {
		return incomeRepository.findByUserId(userId).stream().mapToDouble(Income::getAmount).sum();
	}
}
