package com.capstone.foodbox.Dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import com.capstone.foodbox.Model.Food;
import com.capstone.foodbox.mapper.FoodMapper;

@Repository
public class FoodDAOImpl implements FoodDAO {
	
    @Autowired
    private JdbcTemplate jdbcTemplate;

	@Override
	public List<Food> getFoodItem(String item) {
		// TODO Auto-generated method stub
	      List<Food> food = jdbcTemplate.query("select * from restaurant where food_item1 LIKE ? or food_item2 LIKE ?", new FoodMapper(),item,item);
	        return food;
	    }
		
		
	}
