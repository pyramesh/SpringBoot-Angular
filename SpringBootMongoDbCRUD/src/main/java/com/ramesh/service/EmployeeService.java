package com.ramesh.service;

import java.util.List;

import org.springframework.stereotype.Component;

import com.ramesh.model.Employee;
/**
 * @author Ramesh.Yaleru
 *
 */
@Component
public interface EmployeeService {

	void save(Employee employee);

	List<Employee> fetchAllEmployees();

	Employee getEmployeeById(String id);

	void updateEmployee(Employee user);

	void deleteUpdate(String id);

}
