package com.capstone.foodbox.Model;

public class Payment {
	
	private String upiId;
	private int pin;
	
	public Payment() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Payment(String upiId, int pin) {
		super();
		this.upiId = upiId;
		this.pin = pin;
	}

	public String getUpiId() {
		return upiId;
	}

	public void setUpiId(String upiId) {
		this.upiId = upiId;
	}

	public int getPin() {
		return pin;
	}

	public void setPin(int pin) {
		this.pin = pin;
	}

	@Override
	public String toString() {
		return "Payment [upiId=" + upiId + ", pin=" + pin + "]";
	}

}
