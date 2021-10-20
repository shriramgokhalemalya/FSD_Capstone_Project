package com.capstone.foodbox.Dao;

import java.util.List;

import com.capstone.foodbox.Model.Food;

public interface FoodDAO {
	
	public List<Food> getFoodItem(String item);
	
	public List<Food> getFoodAllItem();
	
	public List<Food> getFoodItemByRestaurant(String resName);
	
	public void addNewRestaurant(String resName,String foodItem1,int price1,String foodItem2, int price2);
	
	public void editFoodMenu(String resName,String foodItem1,int price1,String foodItem2, int price2);
	
	public void deleteMenu(String resName);
	

}
