import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from '../services/registration.service';
import { User } from '../Models/user';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new User();
  constructor(private service : RegistrationService , private router : Router) { }

  ngOnInit(): void {
  }

  LoginUser(){
    this.service.loginUserFromRemote(this.user).subscribe(
      data =>{
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Welcome '+data.username,
          showConfirmButton: false,
          timer: 1500
        })
        console.log("response received");
        sessionStorage.setItem("isAuth","true");
        sessionStorage.setItem("user_id",data.id);
        console.log(data.id);
        this.router.navigate(['/home']);
      } ,
      error =>{
        console.log("exception occured");
        Swal.fire('Error to login...', 'please enter a valid email and password', 'error');
      } 
    )
  }
}
