package com.capstone.foodbox.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.capstone.foodbox.Model.Payment;

public class PaymentMapper implements RowMapper<Payment> {
	
	@Override
    public Payment mapRow(ResultSet rs, int rowNum) throws SQLException {
        Payment payment = new Payment(rs.getString("UPI_ID"),rs.getInt("PIN"));
        return payment;
    }

}
