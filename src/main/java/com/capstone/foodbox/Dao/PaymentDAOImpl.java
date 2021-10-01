package com.capstone.foodbox.Dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.capstone.foodbox.Model.Payment;
import com.capstone.foodbox.mapper.PaymentMapper;

@Repository
public class PaymentDAOImpl implements PaymentDAO {
	
    @Autowired
    private JdbcTemplate jdbcTemplate;
    
    
    /*
	@Override
	public List<Food> getFoodItem(String item) {
		// TODO Auto-generated method stub
	      List<Food> food = jdbcTemplate.query("select * from restaurant where food_item1 LIKE ? or food_item2 LIKE ?", new FoodMapper(),item,item);
	        return food;
	    }
	    
	*/
	@Override
	public boolean validatePayment(String upi, int pin) {
		// TODO Auto-generated method stub
		String sql= "select * from payment where UPI_ID = ? and PIN = ?";
		List<Payment> payment = jdbcTemplate.query(sql, new Object [] {upi,pin}, new PaymentMapper());
		
        if(payment.size() > 0)
        {
        	return true;
        }
        else
        {
        	return false;
        }
		
	}
		
		
	}
