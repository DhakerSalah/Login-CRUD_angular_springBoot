import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { CreateEmployeeComponent } from './Employee/create-employee/create-employee.component';
import { MainComponent } from './main/main.component';
import { ProfileComponent } from './profile/profile.component';
import { EmployeesListComponent } from './Employee/employees-list/employees-list.component';
import { EmployeeDetailsComponent } from './Employee/employee-details/employee-details.component';
import { UpdateEmployeeComponent } from './Employee/update-employee/update-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    CreateEmployeeComponent,
    MainComponent,
    ProfileComponent,
    EmployeesListComponent,
    EmployeeDetailsComponent,
    UpdateEmployeeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
