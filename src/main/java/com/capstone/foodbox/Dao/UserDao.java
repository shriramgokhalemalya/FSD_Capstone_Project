package com.capstone.foodbox.Dao;

import java.util.List;

import com.capstone.foodbox.Model.User;

public interface UserDao {
    public boolean checkEmail(String email);
    public List<User> checkUser(String email,String password);
    public int registerUser(String name,long phone,String email,String password);
}