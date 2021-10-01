package com.capstone.foodbox.Controller;

import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.capstone.foodbox.Common.Utils;
import com.capstone.foodbox.Dao.FoodDAO;

@RestController
public class FoodController {
	
    @Autowired
    private FoodDAO foodDao;
      
    @Autowired
    private Utils utils;
	
	@CrossOrigin
    @PostMapping("/foodSearch")
    public ResponseEntity<String> foodSearch(@RequestBody String postData) throws NoSuchAlgorithmException,InvalidKeySpecException{
		
    	JSONObject postObject = new JSONObject(postData);
        HttpStatus status;
        JSONObject cachedResponse = new JSONObject();
        
        cachedResponse.put("response",this.foodDao.getFoodItem(postObject.getString("fooditem")));
        
		/*this.foodDao.getFoodItem(postData);*/	
		status = HttpStatus.OK;
			
		return new ResponseEntity<String>(cachedResponse.toString(),utils.setHeaders(),status);
		
    }

}
