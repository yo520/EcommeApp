import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {jwtDecode} from 'jwt-decode';
import { Env } from '../../environment/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
private httpclint=inject(HttpClient);

public userdata: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor() {
  

   }
   ngOnInit(): void {
    this.getuserdata();
   }
  sendRegesterDataToApi(data:object):Observable<any>
  {
    return this.httpclint.post(`${Env.BaseURL}/api/v1/auth/signup`,data)
  }
  sendLoginDataToApi(data:object):Observable<any>
  {
    return this.httpclint.post(`${Env.BaseURL}/api/v1/auth/signin`,data)
  }

  forgetPassApi(data:object):Observable<any>
  {
    return this.httpclint.post(`${Env.BaseURL}/api/v1/auth/forgotPasswords`,data)
  }
  verifyResetCodeApi(data:object):Observable<any>
  {
    return this.httpclint.post(`${Env.BaseURL}/api/v1/auth/verifyResetCode`,data)
  }
  resetPasswordApi(data:object):Observable<any>
  {
    return this.httpclint.post(`${Env.BaseURL}/api/v1/auth/resetPassword`,data)
  }

  saveuserdata(){
  
    this.userdata.next(jwtDecode(JSON.stringify(localStorage.getItem('usertoken'))));
  }
  getuserdata(){
    this.userdata.next(jwtDecode(JSON.stringify(localStorage.getItem('usertoken'))))
  }
}


