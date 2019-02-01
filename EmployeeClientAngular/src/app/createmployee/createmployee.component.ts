
import { Http } from '@angular/http'
import { FormControl, FormGroup, Validators, FormsModule } from '@angular/forms';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { Employee } from '../domain/Employee';
import { EmployeeService } from '../services/employee.service';
import { CustomfilterPipe } from '../customfilter.pipe';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-createmployee',
  templateUrl: './createmployee.component.html',
  styleUrls: ['./createmployee.component.css']

})
export class CreatemployeeComponent implements OnInit {
     //Component properties
   allEmployees: Employee[];
   statusCode: number;
   requestProcessing = false;
   employeeIdToUpdate = null;
   processValidation = false;
   //Create form
   employeeForm = new FormGroup({
       name: new FormControl('', Validators.required),
       email: new FormControl('', Validators.required),
     department: new FormControl('', Validators.required),
   });
   //Create constructor to get service instance
   constructor(private router: Router,private route: ActivatedRoute,private empService: EmployeeService) {
   }
   //Create ngOnInit() and and load articles
   ngOnInit(): void {
     this.getAllEmployees();
   }   
   //Fetch all articles
   getAllEmployees() {
        this.empService.getAllEmployees()
      .subscribe(
                data => this.allEmployees = data,
                errorCode =>  this.statusCode = errorCode);   
   }
  
  
   //Handle create and update article
   onEmployeeFormSubmit() {
    this.processValidation = true;   
    if (this.employeeForm.invalid) {
         return; //Validation failed, exit from method.
    }   
    //Form is valid, now perform create or update
      this.preProcessConfigurations();
    let name = this.employeeForm.get('name').value.trim();
      let email = this.employeeForm.get('email').value.trim();   
     let department = this.employeeForm.get('department').value.trim();
     console.log("object from service >>>>>>"+this.employeeIdToUpdate);
    if (this.employeeIdToUpdate === null) {
      //Handle create article
      let emp= new Employee(null, name, email,department);
      this.empService.createEmployee(emp)
        .subscribe(successCode => {
                this.statusCode = successCode;
            this.getAllEmployees();  
          this.backToCreateEmployee();
          },
            errorCode => this.statusCode = errorCode);
    } else {  
        //Handle update Employee
      let emp= new Employee(this.employeeIdToUpdate, name, email, department);
      this.empService.updateEmployee(emp)
        .subscribe(successCode => {
                this.statusCode = successCode;
            this.getAllEmployees();  
          this.backToCreateEmployee();
          },
            errorCode => this.statusCode = errorCode);    
    }
   }
  
   
    //Load employee by id to edit
   loadEmployeeToEdit(employeeId: string) {
      this.preProcessConfigurations();
      this.empService.getEmployeeById(employeeId)
        .subscribe(employee => {
                this.employeeIdToUpdate = employee.id;
                this.employeeForm.setValue({ name: employee.name, email: employee.email, department: employee.department });
          this.processValidation = true;
          this.requestProcessing = false;   
            },
            errorCode =>  this.statusCode = errorCode);   
   }
   //Delete Employee
   deleteEmployee(empId: string) {
      this.preProcessConfigurations();
      this.empService.deleteEmployeeById(empId)
        .subscribe(successCode => {
                this.statusCode = successCode;
            this.getAllEmployees();  
            this.backToCreateEmployee();
          },
            errorCode => this.statusCode = errorCode);    
   }
  
  
  //Perform preliminary processing configurations
   preProcessConfigurations() {
      this.statusCode = null;
    this.requestProcessing = true;   
   }
  
   
   //Go back from update to create
   backToCreateEmployee() {
      this.employeeIdToUpdate = null;
      this.employeeForm.reset();   
    this.processValidation = false;
   }

}
