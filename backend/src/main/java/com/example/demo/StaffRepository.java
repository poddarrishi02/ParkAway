package com.example.demo;

import java.util.ArrayList;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StaffRepository extends MongoRepository<Staff, String> {
	Staff findByuserName(String userName);

	ArrayList<Staff> findByactive(boolean b);
}
