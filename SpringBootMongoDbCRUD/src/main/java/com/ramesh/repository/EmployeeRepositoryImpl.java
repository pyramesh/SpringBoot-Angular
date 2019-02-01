package com.ramesh.repository;

import java.util.List;

import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.repository.Repository;

import com.ramesh.model.Employee;

/**
 * @author Ramesh.Yaleru
 *
 */
public class EmployeeRepositoryImpl implements Repository<Employee,String>{
	
	MongoTemplate mongoTemplate;
	
	public List<Employee> searchEmployees(String search) {
		{
	        return mongoTemplate.find(Query.query(new Criteria()
	                        .orOperator(Criteria.where("name").regex(search, "i"),
	                                    Criteria.where("department").regex(search, "i"),
	                                    Criteria.where("email").regex(search, "i"))
	                        ), Employee.class);
	}
	}

}
