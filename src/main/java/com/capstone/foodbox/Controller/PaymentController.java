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
import com.capstone.foodbox.Dao.PaymentDAO;
import com.capstone.foodbox.Dao.PaymentDAOImpl;

@RestController
public class PaymentController {
    
    @Autowired
    private Utils utils;
    
    @Autowired
    private PaymentDAO paymentDao;
  
	
    @CrossOrigin
    @PostMapping("/payment")
    public ResponseEntity<String> PaymentValidation(@RequestBody String postData) throws NoSuchAlgorithmException,InvalidKeySpecException{
		
    	JSONObject postObject = new JSONObject(postData);
        HttpStatus status;
        JSONObject cachedResponse = new JSONObject();
          
        paymentDao.validatePayment(postObject.getString("upi"),postObject.getInt("pin"));
        
        if(this.paymentDao.validatePayment(postObject.getString("upi"), postObject.getInt("pin"))) {
        	
        	cachedResponse.put("response","Success");
        	
        }
        else {
        	
        	cachedResponse.put("response","Failure");
        	
        }
        
		status = HttpStatus.OK;
			
		return new ResponseEntity<String>(cachedResponse.toString(),utils.setHeaders(),status);
		
    }


}
