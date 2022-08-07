package com.example.demo;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface BookingRepository extends MongoRepository<Booking, String> {
	List<Booking> findByuserName(String userName);

	@Query("{'userName': ?0, 'payment' : ?1}")
	List<Booking> findByuserNameAndpayemnt(String userName, boolean payment);

}
