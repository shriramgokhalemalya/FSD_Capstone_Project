package com.capstone.foodbox.Model;

public class Food {
	
	private int restaurant_Id;
	private String restaurantName;
	private String foodItem1;
	private int price1;
	private String foodItem2;
	private int price2;
	
	public Food() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Food(int restaurant_Id, String restaurantName, String foodItem1, int price1, String foodItem2, int price2) {
		super();
		this.restaurant_Id = restaurant_Id;
		this.restaurantName = restaurantName;
		this.foodItem1 = foodItem1;
		this.price1 = price1;
		this.foodItem2 = foodItem2;
		this.price2 = price2;
	}

	public int getRestaurant_Id() {
		return restaurant_Id;
	}

	public void setRestaurant_Id(int restaurant_Id) {
		this.restaurant_Id = restaurant_Id;
	}

	public String getRestaurantName() {
		return restaurantName;
	}

	public void setRestaurantName(String restaurantName) {
		this.restaurantName = restaurantName;
	}

	public String getFoodItem1() {
		return foodItem1;
	}

	public void setFoodItem1(String foodItem1) {
		this.foodItem1 = foodItem1;
	}

	public int getPrice1() {
		return price1;
	}

	public void setPrice1(int price1) {
		this.price1 = price1;
	}

	public String getFoodItem2() {
		return foodItem2;
	}

	public void setFoodItem2(String foodItem2) {
		this.foodItem2 = foodItem2;
	}

	public int getPrice2() {
		return price2;
	}

	public void setPrice2(int price2) {
		this.price2 = price2;
	}

	@Override
	public String toString() {
		return "Food [restaurant_Id=" + restaurant_Id + ", restaurantName=" + restaurantName + ", foodItem1="
				+ foodItem1 + ", price1=" + price1 + ", foodItem2=" + foodItem2 + ", price2=" + price2 + "]";
	}	
	

}
