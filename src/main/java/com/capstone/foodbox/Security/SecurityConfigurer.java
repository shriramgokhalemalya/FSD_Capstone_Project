package com.capstone.foodbox.Security;

import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;

@EnableWebSecurity
public class SecurityConfigurer extends WebSecurityConfigurerAdapter{
    
    @Override
    protected void configure(HttpSecurity http) throws Exception{
    	http.csrf().disable().authorizeRequests()
        .antMatchers("/login").permitAll().antMatchers("/register").permitAll().antMatchers("/foodSearch").permitAll().antMatchers("/payment").permitAll().antMatchers("/foodmenu").permitAll().antMatchers("/menuEdit/*").permitAll().antMatchers("/addFoodMenu").permitAll().antMatchers("/delete/*").permitAll().antMatchers("/updateFoodMenu/*").permitAll().anyRequest().authenticated().and().sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
    }
}
