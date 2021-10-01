package com.capstone.foodbox.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.jdbc.core.RowMapper;

import com.capstone.foodbox.Model.User;

public class UserMapper implements RowMapper<User>{

    @Override
    public User mapRow(ResultSet rs, int rowNum) throws SQLException {
        User user = new User(rs.getInt("user_id"),rs.getString("user_name"),rs.getString("phone_num"),rs.getString("email"));
        return user;
    }
    
}
