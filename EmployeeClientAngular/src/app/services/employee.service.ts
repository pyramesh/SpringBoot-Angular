/**
 * New typescript file
 */

import { Employee } from '../domain/Employee';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class EmployeeService {

  
  //URLs for CRUD operations
    fetchAllUrl = "http://localhost:8088/employee/read-all";
    createEmpUrl = "http://localhost:8088/employee/create";
    updateEmpUrl = "http://localhost:8088/employee/update";
    deleteEmpUrl = "http://localhost:8088/employee/delete";
    fetchEmpByIdUrl = "http://localhost:8088/employee/fetchEmployeeById";
    downloadUrl ="http://localhost:8088/employee/download";
  //Create constructor to get Http instance
  constructor(private http:Http) { 
  }
  
  //Fetch all employees
    getAllEmployees(): Observable<Employee[]> {
        
       return this.http.get(this.fetchAllUrl)
        //return this.http.get('employee.json')
          .map(this.extractData)
            .catch(this.handleError);

    }
  
  
  
    //Create Employee
    createEmployee(emp: Employee):Observable<number> {
      let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });
        return this.http.post(this.createEmpUrl, emp, options)
               .map(success => success.status)
               .catch(this.handleError);
    }
  
  
  //Update Employee
    updateEmployee(emp: Employee):Observable<number> {
      let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: cpHeaders });
        return this.http.put(this.updateEmpUrl, emp, options)
               .map(success => success.status)
               .catch(this.handleError);
    }
  
  //Fetch employee by id
    getEmployeeById(employeeId: string): Observable<Employee> {
    let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
    let cpParams = new URLSearchParams();
    cpParams.set('id', employeeId);      
    let options = new RequestOptions({ headers: cpHeaders, params: cpParams });
    return this.http.get(this.fetchEmpByIdUrl, options)
         .map(this.extractData)
         .catch(this.handleError);
    } 
    //Delete Employeed by Id
    deleteEmployeeById(employeeId: string): Observable<number> {
    let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
    let cpParams = new URLSearchParams();
    cpParams.set('id', employeeId);      
    let options = new RequestOptions({ headers: cpHeaders, params: cpParams });
    return this.http.delete(this.deleteEmpUrl, options)
         .map(success => success.status)
         .catch(this.handleError);
    } 
  
  
  fetchData() {
    this.http.get('employee.json').subscribe(
    (data) =>console.log(data)
    )
  }
  
  getAllEmployees1() {
               let sponsors = [
                 new Employee('1', 'ramesh','ramesh@gmail.com','11111'),
                 new Employee('2', 'ramesh1','ramesh1@gmail.com','22222'),
                 new Employee('3', 'ramesh2','ramesh2@gmail.com','33333'),
                  ]  
                  return sponsors;
  }
  
  private extractData(res: Response) {
      let body = res.json();
        return body;
    }
  
  
  private handleError (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.status);
    }
  
  
  
  
}
