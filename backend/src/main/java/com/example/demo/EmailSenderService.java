package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailSenderService {
@Autowired
private JavaMailSender mailSender;

public void sendSimpleEmail(String toEmail, String Body, String subject)
{
SimpleMailMessage message = new SimpleMailMessage();

message.setFrom("parkaway420@gmail.com");
message.setTo(toEmail);
message.setText(Body);
message.setSubject(subject);

mailSender.send(message);

System.out.println("Success");
}
}
