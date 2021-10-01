package com.capstone.foodbox.Controller;

import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;
import java.util.List;

import com.capstone.foodbox.Common.Utils;
import com.capstone.foodbox.Dao.UserDao;
import com.capstone.foodbox.Model.User;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthController {

    @Autowired
    private UserDao userDao;

    @Autowired
    private Utils utils;
    
	@CrossOrigin
	@RequestMapping("/hello")
	public String firstPage() {
		return "Hello World";
	}

    @CrossOrigin
    @PostMapping("/register")
    public ResponseEntity<String> registration(@RequestBody String postData) throws NoSuchAlgorithmException, InvalidKeySpecException, JSONException{
    	JSONObject postObject = new JSONObject(postData);
        JSONObject response;
        HttpStatus status;
        if(this.userDao.checkEmail(postObject.getString("email"))) {
        	response = utils.generateResponse(null, "null", "User already exists");
            status = HttpStatus.BAD_REQUEST;
        }
        else {
            String passHash = this.utils.encryptPassword(postObject.getString("password"));
            int result = this.userDao.registerUser(postObject.getString("name"), postObject.getLong("phone"), postObject.getString("email"), passHash);
            if(result == 1) {
            	response = utils.generateResponse(null, "null", "User successfully registered");
                status = HttpStatus.OK;
            }
            else {
            	response = utils.generateResponse(null, "null", "cannot able to register the user");
                status = HttpStatus.BAD_REQUEST;
            }
        }
        return new ResponseEntity<String>(response.toString(),utils.setHeaders(),status);
    }

    @CrossOrigin
    @PostMapping("/login")
    public ResponseEntity<String> loginUser(@RequestBody String postData) throws NoSuchAlgorithmException,InvalidKeySpecException{
        JSONObject postObject = new JSONObject(postData);
        JSONObject response;
        HttpStatus status;
        JSONObject cachedResponse = new JSONObject();
        if(this.userDao.checkEmail(postObject.getString("email")))
        {
            String passHash = utils.encryptPassword(postObject.getString("password"));
            List<User> users = this.userDao.checkUser(postObject.getString("email"),passHash);
            if(users.size() > 0){
            
                
                cachedResponse.put("jwttoken", utils.generateWebToken(users.get(0)));
                cachedResponse.put("userid", users.get(0).getName());
                response = utils.generateResponse(cachedResponse, "null", "success");
                status = HttpStatus.OK;
            }
            else{
                response = utils.generateResponse(null, "null", "Incorrect password");
                status = HttpStatus.BAD_REQUEST;
            }

        }
        else
        {
            response = utils.generateResponse(null, "null", "User doesnot exists please register");
            status = HttpStatus.NOT_FOUND;
        }
        //return new ResponseEntity<String>(response.toString(),utils.setHeaders(),status);
        return new ResponseEntity<String>(cachedResponse.toString(),utils.setHeaders(),status);
    }
    
}
