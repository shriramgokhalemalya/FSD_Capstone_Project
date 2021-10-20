package com.capstone.foodbox.Dao;

import java.util.List;

import com.capstone.foodbox.Model.User;
import com.capstone.foodbox.mapper.UserMapper;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class UserDaoImpl implements UserDao{

    @Autowired
    private JdbcTemplate jdbcTemplate;
    
    @Override
    public boolean checkEmail(String email) {
        List<User> userList = jdbcTemplate.query("select * from app_user where email = ?",new UserMapper(),email);
        if(userList.size() > 0)
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    @Override
    public List<User> checkUser(String email, String password) {
        List<User> user = jdbcTemplate.query("select * from app_user where email = ? and ENCRYTED_PASSWORD = ?",new UserMapper(), new Object[] { email, password });
        return user;
    }

    @Override
    public int registerUser(String name, long phone, String email, String password,boolean admin) {
        return jdbcTemplate.update("insert into app_user (user_name,phone_num,email,ENCRYTED_PASSWORD,admin) values (?,?,?,?,?)", name,phone,email,password,admin);

    }
    
}
