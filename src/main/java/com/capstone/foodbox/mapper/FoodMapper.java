package com.capstone.foodbox.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.capstone.foodbox.Model.Food;

public class FoodMapper implements RowMapper<Food>{

    @Override
    public Food mapRow(ResultSet rs, int rowNum) throws SQLException {
        Food food = new Food(rs.getInt("RESTAURANT_ID"),rs.getString("RESTAURANT_NAME"),rs.getString("FOOD_ITEM1"),rs.getInt("ITEM1_PRICE"),rs.getString("FOOD_ITEM2"),rs.getInt("ITEM2_PRICE"));
        return food;
    }
    
}