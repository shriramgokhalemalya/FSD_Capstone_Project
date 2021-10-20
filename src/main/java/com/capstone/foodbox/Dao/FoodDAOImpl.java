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
	
	@Override
	public List<Food> getFoodAllItem() {
		// TODO Auto-generated method stub
	      List<Food> food = jdbcTemplate.query("select * from restaurant", new FoodMapper());
	        return food;
	    }

	@Override
	public List<Food> getFoodItemByRestaurant(String resName) {
		
		  List<Food> food = jdbcTemplate.query("select * from restaurant where restaurant_name=?", new FoodMapper(),resName);
	      return food;
		// TODO Auto-generated method stub
	}

	@Override
	public void deleteMenu(String resName) {
		// TODO Auto-generated method stub
		String sql = "DELETE from restaurant WHERE RESTAURANT_NAME=?";
		jdbcTemplate.update(sql, resName);
	}

	@Override
	public void addNewRestaurant(String resName, String foodItem1, int price1, String foodItem2, int price2) {
		
		String sql =  "INSERT INTO restaurant(RESTAURANT_NAME,FOOD_ITEM1,ITEM1_PRICE,FOOD_ITEM2,ITEM2_PRICE) VALUES(?,?,?,?,?)";
		jdbcTemplate.update(sql, resName,foodItem1,price1,foodItem2,price2);
		// TODO Auto-generated method stub
		
	}

	@Override
	public void editFoodMenu(String resName, String foodItem1, int price1, String foodItem2, int price2) {
		
		String sql = "UPDATE restaurant SET FOOD_ITEM1=?,ITEM1_PRICE=?,FOOD_ITEM2=?,ITEM2_PRICE=? WHERE RESTAURANT_NAME=?";
		jdbcTemplate.update(sql,foodItem1,price1,foodItem2,price2,resName);
		// TODO Auto-generated method stub	
	}
		
		
	}
