package com.capstone.foodbox.Dao;

import java.util.List;

import com.capstone.foodbox.Model.Food;

public interface FoodDAO {
	
	public List<Food> getFoodItem(String item);

}
