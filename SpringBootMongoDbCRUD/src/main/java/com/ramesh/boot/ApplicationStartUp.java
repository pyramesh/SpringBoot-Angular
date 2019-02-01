package com.ramesh.boot;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;


/**
 * @author Ramesh.Yaleru
 *
 */
@Configuration
@EnableAutoConfiguration
@ComponentScan("com.ramesh.controller")
@ComponentScan("com.ramesh.service")
@ComponentScan("com.ramesh.model")
@EnableMongoRepositories("com.ramesh.repository")
public class ApplicationStartUp {
	public static void main(String[] args) {
		SpringApplication.run(ApplicationStartUp.class, args);
	}
}
