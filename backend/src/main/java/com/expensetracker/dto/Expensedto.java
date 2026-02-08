package com.expensetracker.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@ NoArgsConstructor
public class Expensedto {
	private String title;
	private Double amount;
	private Long userId;

}
