package com.capstone.foodbox.Model;

public class User{
    private int userid;
    private String name,phone,email;
    boolean userType;
    public User(){

    }
    public User(int userid,String name,String phone,String email,boolean usertype)
    {
        this.userid = userid;
        this.name = name;
        this.phone = phone;
        this.email = email;
        this.userType = usertype;
    }
    public int getUserId(){
        return this.userid;
    }
    public String getName(){
        return this.name;
    }
    public String getEmail() {
        return this.email;
    }
    public String getPhone() {
        return this.phone;
    }
	public boolean getUserType() {
		return userType;
	}
	public void setUserType(boolean userType) {
		this.userType = userType;
	}


}