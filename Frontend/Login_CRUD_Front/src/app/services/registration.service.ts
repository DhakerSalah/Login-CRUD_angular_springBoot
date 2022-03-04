import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  private url="http://localhost:8080/api/v1/";
  constructor(private http : HttpClient) { }

  public loginUserFromRemote(user : User):Observable<any>{
    return this.http.post<any>(`${this.url+'login'}`,user)
  }

  public registerUserFromRemote(user : User):Observable<any>{
    return this.http.post<any>(`${this.url+'register'}`,user)
  }

  GetUserById(id:number): Observable<User>{
    return this.http.get<User>(`${this.url+'user'}/${id}`)
  }

  EditProfile(id : number , user: User): Observable<Object>{
    return this.http.put(`${this.url+'userProfile'}/${id}`,user);
  }

  EditPassword(id : number , user: User): Observable<Object>{
    return this.http.put(`${this.url+'userPassword'}/${id}`,user);
  }
}
