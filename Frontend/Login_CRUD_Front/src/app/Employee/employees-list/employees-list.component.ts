import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Employee } from '../../Models/employee';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  employees !: Employee[];
  constructor(private employeeService : EmployeesService , private router : Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data => {
      this.employees = data;
      console.log(this.employees);
    });
  }

  detailsEmployee(id:number){
    this.router.navigate(['/home/details-employee',id]);
  }

  updateEmployee(id:number){
    this.router.navigate(['/home/update-employee',id]);
  }

  deleteEmployee(id : number){
    Swal.fire({
      title: 'Are you sure to delete this employee?',
      text: "You won't be able to revert this if you confirmed this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.employeeService.deleteEmployee(id).subscribe(data =>{
          console.log(data);
          this.getEmployees();
        })
        Swal.fire(
          'Deleted!',
          'The employee has been deleted.',
          'success'
        )
      }
    })
  }

}

