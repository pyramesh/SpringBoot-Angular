package com.ramesh.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.ramesh.model.Employee;

/**
 * @author Ramesh.Yaleru
 *
 */

public interface EmployeeRepository extends MongoRepository<Employee, String> {

	
	public Employee findOneByName(String name);

	public  List<Employee> searchEmployees(String search);
}
