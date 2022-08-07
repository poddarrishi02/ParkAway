package com.example.demo;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;



@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class Controller {
	String current_staff = "";
	String current_user = "";
    @Autowired
    private AdminRepository adminRepository ;
    @Autowired
    private UserRepository userRepository ;
    @Autowired
    private StaffRepository staffRepository ;
    @Autowired
	private EmailSenderService service;
	@Autowired
	private BookingRepository bookingRepository;
    
    @GetMapping("/")
    public String home() {
        return "My OOPS Project !!";
    }

    @PostMapping("/adminlogin")
    public String checkAdmin(@RequestBody Admin admin) {
        List<Admin> list = adminRepository.findAll(); 
        if(adminCheck(list.get(0).getUserName(), list.get(0).getPassword(), admin.getUserName(), admin.getPassword()))
        return "Success";
        else
        return "Failure";
    }

    boolean adminCheck(String userCheck, String passCheck, String username, String password) {
        if(userCheck.equals(username) && passCheck.equals(password))
        return true;
        else
        return false;
    }
    
    @PostMapping("/usernew/usernamecheck")
    public boolean newUser(@RequestBody User user) {
    	List<User> list = userRepository.findAll();
    	int i;
        for(i=0; i< list.size(); i++)
        {
       	 if(list.get(i).getUserName().equals(user.getUserName()))
       			 return false;
        }
    	
    	return true;
    }
    
    @PostMapping("/usernew/adduser")
    public void addUser(@RequestBody User user) {    	
        userRepository.save(user);   	    	
    }
    
    
    @PostMapping("/staffnew/staffnamecheck")
    public boolean newStaff(@RequestBody Staff staff) {
    	List<Staff> list = staffRepository.findAll();
    	int i;
        for(i=0; i< list.size(); i++)
        {
       	 if(list.get(i).getUserName().equals(staff.getUserName()))
       			 return false;
        }
    	return true;
    }
    
    @PostMapping("/staffnew/addstaff")
    public void addStaff(@RequestBody Staff staff) {   
    	staff.generateRating();
        staffRepository.save(staff);   	    	
    }
    
    
    
    @PostMapping("/user")
    public boolean checkUser(@RequestBody User user) {
    	 List<User> list = userRepository.findAll(); 
    	 int i;
         for(i=0; i< list.size(); i++)
         {
        	 if(userCheck(list.get(i).getUserName(), list.get(i).getPassword(), user.getUserName(), user.getPassword()))
        	 {
        		 current_user = user.getUserName();
        		 return true;
        	 }
        		
         }
         return false;
     }
    boolean userCheck(String userCheck, String passCheck, String username, String password) {
        if(userCheck.equals(username) && passCheck.equals(password))
        return true;
        else
        return false;
    }
    
    @PostMapping("/verify")
	public String triggerMail(@RequestBody String user_email)
	{
    	
    	int x = user_email.indexOf('%');
    	user_email = user_email.substring(0, x) + '@' + user_email.substring(x + 3);
    	user_email = user_email.substring(0,  user_email.length() - 1);
    	System.out.println(user_email);
	Random random = new Random();
	int otp = 100000 + random.nextInt(900000);
	String mail_data = "Welcome to Car Parking Services!\n"
			+ "Your One Time Password (OTP) for completing your registration is:\n"
			+ Integer.toString(otp) +
		      "\nThe code expires in 2 minutes" ;
	service.sendSimpleEmail(user_email,mail_data, "OTP Verfication");
	return Integer.toString(otp);
	}
    
    @PostMapping("/staff")
    public boolean checkStaff(@RequestBody Staff staff) {
    	 List<Staff> list = staffRepository.findAll(); 
    	 int i;
         for(i=0; i< list.size(); i++)
         {
        	 if(staffCheck(list.get(i).getUserName(), list.get(i).getPassword(), staff.getUserName(), staff.getPassword()))
        	 {
        		 current_staff = staff.getUserName();
        		 return true;
        	 }
         }
         return false;
     }
    boolean staffCheck(String userCheck, String passCheck, String username, String password) {
        if(userCheck.equals(username) && passCheck.equals(password))
        return true;
        else
        return false;
    }
    
    @GetMapping("/admin/editStaff")
    public ArrayList<Staff>[] editStaff()
    {
    	ArrayList<Staff>[] staffList = new ArrayList[2];
    	staffList[0] = staffRepository.findByactive(true);
    	staffList[1] = staffRepository.findByactive(false);
    	return staffList;
    }
    
    @PostMapping("/admin/editStaff/edit")
    public void updateEditedStaffList(@RequestBody ArrayList<Staff>[] staffList)
    {
    	for(int i = 0; i<2; i++)
    	{
    		for(int j = 0;j<staffList[i].size(); j++)
    			staffRepository.save(staffList[i].get(j));
    	}
    }
    
    @PostMapping("/admin/editStaff/activate")
    public String activateStaff(@RequestBody Staff staff)
    {
    	if(staff == null)
    		return "Staff Not Found";
    	else
    	{
    		staff.active = true;
    		staffRepository.save(staff);
    		return "Success";
    	}
    }
    
    @PostMapping("/admin/editStaff/deactivate")
    public String deactivateStaff(@RequestBody Staff staff)
    {
    	if(staff == null)
    		return "Staff Not Found";
    	else
    	{
    		staff.active = false;
    		staffRepository.save(staff);
    		return "Success";
    	}
    }
    
    @PostMapping("/admin/editStaff/remove")
    public String removeStaff(@RequestBody Staff staff)
    {
    	if(staff == null)
    		return "Staff Not Found";
    	else
    	{
    		staff.active = false;
    		staffRepository.delete(staff);
    		return "Success";
    	}
    }
    
    @PostMapping("/staff/updateStaff")
    public boolean FindStaffById(@RequestBody Staff staff)
    {	
    	if(staff == null)
    		return false;
    	else
    	{

    		staff.dry_cleaning.CheckEnable();
    	    staff.washing.CheckEnable();
    		staff.repairing.CheckEnable();
    		
    		staffRepository.save(staff);
    		return true;
    	}
    }
    
    @PostMapping("/user/bookSlot")
    public ArrayList<Staff>[] bookSlot(@RequestBody Booking booking)
    {
    	//int filled_slots = bookingRepository.findBylocation(booking.location, true);
    	//if(filled_slots >= 25)
    		//return null;
    	
    	booking.setCost(10);
    	booking.payment = false;
    	//bookingRepository.save(booking);
    	
    	int day = booking.getDate().getDay();
    	String check_in_string = "";
    	String check_out_string = "";
    	for(int i = 0;i<2;i++)
    	{
    		check_in_string += booking.getCheck_in().charAt(i);
    		check_out_string += booking.getCheck_out().charAt(i);
    	}
    	
    	int check_in_hour = Integer.valueOf(check_in_string);
    	int check_out_hour = Integer.valueOf(check_out_string);
    	System.out.println(day);
    	List<Staff> staffList = staffRepository.findAll();
    	ArrayList<Staff>[] availableStaff = new ArrayList[3];
    	availableStaff[0]  = new ArrayList<Staff>();
    	availableStaff[1]  = new ArrayList<Staff>();
    	availableStaff[2]  = new ArrayList<Staff>();
    	for(int i = 0;i<staffList.size(); i++)
    	{
    		boolean[] check = new boolean[3];
    		check[0] = true;
    		check[1] = true;
    		check[2] = true;
    		for(int j = check_in_hour;j<=check_out_hour; j++)
    		{
    			System.out.println(j);
    			if(day == 0)
    				day = 7;
    			if(staffList.get(i).dry_cleaning.schedule[j-8][day-1] != true)
    				check[0] = false;
    
    			if(staffList.get(i).washing.schedule[j-8][day-1] != true)
    				check[1] = false;
    		
    			if(staffList.get(i).washing.schedule[j-8][day-1] != true)
    				check[2] = false;
    			
    		}
    		if(check[0])
    			availableStaff[0].add(staffList.get(i));
    		if(check[1])
    			availableStaff[1].add(staffList.get(i));
    		if(check[2])
    			availableStaff[2].add(staffList.get(i));
    	}
    
    	return availableStaff;
    }
    
    @PostMapping("/user/viewBookings")
    public List<Booking> viewBookings(@RequestBody String userName)
    {
    	List<Booking> bookings = bookingRepository.findByuserName(userName);
    	return bookings;
    }
    
    @PostMapping("/user/getUser")
    public User sendUser()
    {
    	User user = userRepository.findByuserName(current_user);
    	return user;
    }
    
    @PostMapping("/staff/getStaff")
    public Staff sendStaff()
    {
    	Staff staff = staffRepository.findByuserName(current_staff);
    	return staff;
    }
    
    @GetMapping("/admin/userData")
    public List<User> sendUsersData()
    {
    	List<User> userList = userRepository.findAll();
    	return userList;
    }
    
    @GetMapping("/admin/bookings")
    public List<Booking> sendBookingsData()
    {
    	List<Booking> bookingList = bookingRepository.findAll();
    	return bookingList;
    }
    
    @PostMapping("/user/{userName}/bookSlot/bill")
    public int bill(Booking booking, @PathVariable String userName)
    {
    	if(booking.dry_cleaning.length() != 0)
    		booking.setCost(booking.getCost() + 50);
    	if(booking.washing.length() != 0)
    		booking.setCost(booking.getCost() + 60);
    	if(booking.repairing.length() != 0)
    		booking.setCost(booking.getCost() + 100);
    	
    	bookingRepository.save(booking);
    	return booking.getCost();
    }
        
    @PostMapping("/user/{userName}/bookSlot/bill/success")
    public void paymentSuccesful(@RequestBody Booking booking, @PathVariable String userName)
    {
    	int day = booking.date.getDay();
    	if(day==0)
    		day = 7;
    	
    	String check_in_string = "";
    	String check_out_string = "";
    	for(int i = 0;i<2;i++)
    	{
    		check_in_string += booking.getCheck_in().charAt(i);
    		check_out_string += booking.getCheck_in().charAt(i);
    	}
    	int check_in_hour = Integer.valueOf(check_in_string);
    	int check_out_hour = Integer.valueOf(check_out_string);
    	
    	if(booking.dry_cleaning.length() != 0)
    	{
    		for(int j = check_in_hour;j<=check_out_hour; j++)
    		{
    			Staff staff = staffRepository.findByuserName(booking.dry_cleaning);
    			staff.dry_cleaning.schedule[j-7][day-1] = false;
    		}
    	}
    	
    	if(booking.washing.length() != 0)
    	{
    		for(int j = check_in_hour;j<=check_out_hour; j++)
    		{
    			Staff staff = staffRepository.findByuserName(booking.washing);
    			staff.washing.schedule[j-7][day-1] = false;
    		}
    	}
    	
    	if(booking.repairing.length() != 0)
    	{
    		for(int j = check_in_hour;j<=check_out_hour; j++)
    		{
    			Staff staff = staffRepository.findByuserName(booking.repairing);
    			staff.repairing.schedule[j-7][day-1] = false;
    		}
    	}
    }
}