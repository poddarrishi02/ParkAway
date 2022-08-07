package com.example.demo;

import java.util.Date;

import org.springframework.data.annotation.Id;

public class ParkingSlots {
	@Id
	private String id;
	private int location;
	private Date date;
	private String check_in;
	private String check_out;
	public int[] slots = new int[25];
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public int getLocation() {
		return location;
	}
	public void setLocation(int location) {
		this.location = location;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public String getCheck_in() {
		return check_in;
	}
	public void setCheck_in(String check_in) {
		this.check_in = check_in;
	}
	public String getCheck_out() {
		return check_out;
	}
	public void setCheck_out(String check_out) {
		this.check_out = check_out;
	}
	
	
}
