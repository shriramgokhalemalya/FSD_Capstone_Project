package com.capstone.foodbox.Controller;

import java.security.NoSuchAlgorithmException;
import java.security.spec.InvalidKeySpecException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
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
	
	@CrossOrigin
    @GetMapping("/foodmenu")
    public ResponseEntity<String> foodMenu() throws NoSuchAlgorithmException,InvalidKeySpecException{
		
    	JSONObject postObject = new JSONObject();
        HttpStatus status;
        JSONObject cachedResponse = new JSONObject();
        
        cachedResponse.put("response",this.foodDao.getFoodAllItem());
        
		/*this.foodDao.getFoodItem(postData);*/	
		status = HttpStatus.OK;
			
		return new ResponseEntity<String>(cachedResponse.toString(),utils.setHeaders(),status);
		
    }

	@CrossOrigin
    @RequestMapping("/menuEdit/{resName}")
    public ResponseEntity<String> menuEdit(@PathVariable(name="resName")String resName) throws NoSuchAlgorithmException,InvalidKeySpecException{
		
    	JSONObject postObject = new JSONObject();
        JSONObject response;
        HttpStatus status;
        JSONObject cachedResponse = new JSONObject();
        
        cachedResponse.put("response",this.foodDao.getFoodItemByRestaurant(resName));
        
        response = utils.generateResponse(this.foodDao.getFoodItemByRestaurant(resName), "null", "success");
        
		/*this.foodDao.getFoodItem(postData);*/	
		status = HttpStatus.OK;
			
		return new ResponseEntity<String>(response.toString(),utils.setHeaders(),status);
		
    }
	
	@CrossOrigin
    @RequestMapping("/delete/{resName}")
    public ResponseEntity<String> delete(@PathVariable(name="resName")String resName) throws NoSuchAlgorithmException,InvalidKeySpecException{
		
    	JSONObject postObject = new JSONObject();
        HttpStatus status;
        JSONObject response;
        
        this.foodDao.deleteMenu(resName);
        
		/*this.foodDao.getFoodItem(postData);*/	
		status = HttpStatus.OK;
		
		response = utils.generateResponse("OK", "null", "success");
			
		return new ResponseEntity<String>(response.toString(),utils.setHeaders(),status);
		
    }
	
	@CrossOrigin
    @PostMapping("/addFoodMenu")
    public ResponseEntity<String> addFoodMenu(@RequestBody String postData) throws NoSuchAlgorithmException,InvalidKeySpecException{
		
    	JSONObject postObject = new JSONObject(postData);
        HttpStatus status;
        JSONObject response;
        
        
        this.foodDao.addNewRestaurant(postObject.getString("restaurantName"),postObject.getString("foodItem1"),postObject.getInt("price1"),postObject.getString("foodItem2"),postObject.getInt("price2"));
        
		status = HttpStatus.OK;
		
		response = utils.generateResponse("OK", "null", "success");
			
		return new ResponseEntity<String>(response.toString(),utils.setHeaders(),status);
		
    }
	
	@CrossOrigin
    @RequestMapping("/updateFoodMenu/{resName}")
    public ResponseEntity<String> updateFoodMenu(@PathVariable(name="resName")String resName,@RequestBody String postData) throws NoSuchAlgorithmException,InvalidKeySpecException{
		
    	JSONObject postObject = new JSONObject(postData);
    	JSONObject response;
        HttpStatus status;
        
        this.foodDao.editFoodMenu(resName,postObject.getString("foodItem1"),postObject.getInt("price1"),postObject.getString("foodItem2"),postObject.getInt("price2"));
		status = HttpStatus.OK;
		
		response = utils.generateResponse("OK", "null", "success");
			
		return new ResponseEntity<String>(response.toString(),utils.setHeaders(),status);
		
    }

}
