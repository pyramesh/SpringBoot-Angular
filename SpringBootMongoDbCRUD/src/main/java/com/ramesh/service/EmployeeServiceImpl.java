package com.ramesh.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.ramesh.model.Employee;
import com.ramesh.repository.EmployeeRepository;

/**
 * @author Ramesh.Yaleru
 *
 */
@Component
@Service
public class EmployeeServiceImpl implements EmployeeService{

	@Autowired
	EmployeeRepository employeeRepository;

	@Override
	@Transactional(propagation = Propagation.REQUIRED, rollbackFor=Exception.class)
	public void save(Employee employee) {
		employeeRepository.save(employee);
		
	}

	@Override
	@Transactional(readOnly = true, propagation = Propagation.REQUIRED)
	public List<Employee> fetchAllEmployees() {
		return employeeRepository.findAll();
	}

	@Override
	@Transactional(readOnly = true, propagation = Propagation.REQUIRED)
	public Employee getEmployeeById(String id) {
		
		return employeeRepository.findOne(id);	}

	@Override
	@Transactional(readOnly = false, propagation = Propagation.REQUIRED)
	public void updateEmployee(Employee user) {
		employeeRepository.save(user);
		//employeeRepository.findOneByName("name01");		
	}

	@Override
	@Transactional(readOnly = true, propagation = Propagation.REQUIRED)
	public void deleteUpdate(String id) {
		
		employeeRepository.delete(id);		
	}

}
