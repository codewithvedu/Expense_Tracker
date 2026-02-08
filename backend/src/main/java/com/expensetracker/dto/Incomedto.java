package com.expensetracker.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class Incomedto {
	private Double amount;
    private String source;
    private Long userId;
}
