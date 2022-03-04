import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../Models/user';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  user_session : any;
  user : User = new User();
  constructor(private service : RegistrationService , private router : Router) { }

  ngOnInit(): void {
    if(sessionStorage.getItem("user_id")==null){
      this.router.navigate(['/login']);
    }else{
      this.user_session=sessionStorage.getItem("user_id");
      this.service.GetUserById(this.user_session).subscribe(data => {
        this.user_session = data;
        console.log(this.user_session);
      });
    }
  }

  date = new Date().getFullYear();

  destroy(){
    sessionStorage.clear();
    this.router.navigate(['']);
  }
  
}
