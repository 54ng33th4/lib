import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginUser(user: { uname: string; password: string; })
  {
    console.log("step2")
    return this.http.post("http://localhost:3000/login",user)
    .subscribe((data)=>{
      console.log("successfull...")
    })
  }

  constructor(private http:HttpClient) { }
}
