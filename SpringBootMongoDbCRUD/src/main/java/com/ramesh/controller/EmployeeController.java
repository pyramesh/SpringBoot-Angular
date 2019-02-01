package com.ramesh.controller;

import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.ramesh.model.Employee;
import com.ramesh.service.EmployeeService;

/**
 * @author Ramesh.Yaleru
 *
 */
@RestController
@RequestMapping("/employee")
@CrossOrigin(origins = {"http://localhost:4200"})
public class EmployeeController {

	private static final Logger LOGGER = Logger.getLogger(EmployeeController.class);
	
	@Autowired
	EmployeeService employeeService;

	
	// create
	/**
	 * @param employee
	 */
	@RequestMapping(value = "/create",method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
	public void create(@RequestBody Employee employee) {
		employeeService.save(employee);
	}

	//fetchAll employees 
	 @RequestMapping("/read-all")
	public List<Employee> fetchAllEmployees() {
		return employeeService.fetchAllEmployees();
	}
	
	
	// read
	@RequestMapping(value = "/fetchEmployeeById", method = RequestMethod.GET, consumes = MediaType.APPLICATION_JSON_VALUE)
	public Employee getEmployeeById(@RequestParam("id") String id) {
		
		return employeeService.getEmployeeById(id);
		
	}
	// update
	@RequestMapping(value = "/update", method = RequestMethod.PUT, consumes = MediaType.APPLICATION_JSON_VALUE)
	public void update(@RequestBody Employee user) {
		employeeService.updateEmployee(user);
		
	}

	// delete
	@RequestMapping(value = "/delete", method = RequestMethod.DELETE)
	public void delete(@RequestParam("id") String id) {
		employeeService.deleteUpdate(id);
		
	}
	 
}
