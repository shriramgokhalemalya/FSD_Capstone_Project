package com.capstone.foodbox.Dao;

import java.util.List;

import com.capstone.foodbox.Model.Payment;

public interface PaymentDAO {
	
	public boolean validatePayment(String upi, int pin);

}
