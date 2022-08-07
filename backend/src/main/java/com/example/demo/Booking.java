package com.example.demo;

import java.util.Date;
import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Bookings")
public class Booking {
	@Id
	private String id;
	private String userName;
	private int cost;
	public String dry_cleaning;
	public String washing;
	public String repairing;
	public Date date;
	public String location;
	public String check_in;
	public String check_out;
	public boolean payment = false;
	public List<Staff> selectedStaff;
	
	public String getDry_cleaning() {
		return dry_cleaning;
	}
	public void setDry_cleaning(String dry_cleaning) {
		this.dry_cleaning = dry_cleaning;
	}
	public String getWashing() {
		return washing;
	}
	public void setWashing(String washing) {
		this.washing = washing;
	}
	public String getRepairing() {
		return repairing;
	}
	public void setRepairing(String repairing) {
		this.repairing = repairing;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
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
	
	public int getCost() {
		return cost;
	}
	public void setCost(int cost) {
		this.cost = cost;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
}
