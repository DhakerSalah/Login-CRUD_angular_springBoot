import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../Models/employee';
import { EmployeesService } from '../services/employees.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  employees!: Employee[];
  constructor(private employeeService : EmployeesService , private router : Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(){
    this.employeeService.getEmployeesCount().subscribe(data => {
      this.employees = data;
      console.log(this.employees);
    });
  }

}
