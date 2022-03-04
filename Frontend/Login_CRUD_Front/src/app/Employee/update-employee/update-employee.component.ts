import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Employee } from '../../Models/employee';
import { EmployeesService } from '../../services/employees.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  id!:number;
  employee: Employee = new  Employee();
  constructor(private employeeService : EmployeesService , private route : ActivatedRoute , private router : Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.employeeService.GetEmployeeById(this.id).subscribe(data => {
      this.employee=data;
    }, error => console.log(error));
  }

  onSubmit(){
    console.log(this.employee);
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Successfully updated',
      showConfirmButton: false,
      timer: 1500
    })
    this.employeeService.updateEmployee(this.id,this.employee).subscribe( data => {
      this.goToEmployeeList();
    }, error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/home/employees']);
  }

}
