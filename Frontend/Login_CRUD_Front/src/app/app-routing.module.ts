import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './Employee/create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './Employee/employee-details/employee-details.component';
import { EmployeesListComponent } from './Employee/employees-list/employees-list.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { UpdateEmployeeComponent } from './Employee/update-employee/update-employee.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'',redirectTo : 'login' , pathMatch : 'full'},
  {path:'register',component:RegisterComponent},
  {path:'home',component:HomeComponent,
  children : [
    { path : '' , component : MainComponent },
    { path : "profile" , component : ProfileComponent },
    { path : "create-employee" , component : CreateEmployeeComponent },
    { path : "employees" , component : EmployeesListComponent },
    { path : 'update-employee/:id' , component : UpdateEmployeeComponent},
    { path : 'details-employee/:id' , component : EmployeeDetailsComponent},
    ] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
