import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Employee } from '../Models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  private url="http://localhost:8080/api/v1/";
  constructor(private httpClient : HttpClient) { }

  getEmployeesList(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.url+'employees'}`);
  }

  getEmployeesCount(): Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.url+'count_employees'}`);
  }

  createEmployee(employee:Employee): Observable<Object>{
    return this.httpClient.post(`${this.url+'employees'}`,employee);
  }

  GetEmployeeById(id:number): Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.url+'employees'}/${id}`);
  }

  updateEmployee(id : number , employee: Employee): Observable<Object>{
    return this.httpClient.put(`${this.url+'employees'}/${id}`,employee);
  }

  deleteEmployee(id : number): Observable<Object>{
    return this.httpClient.delete(`${this.url+'employees'}/${id}`);
  }
}
