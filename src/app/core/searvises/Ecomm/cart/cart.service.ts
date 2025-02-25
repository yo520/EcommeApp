import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Env } from '../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private http:HttpClient =inject(HttpClient)
  private userHeaders:any = {token:localStorage.getItem('usertoken')}

  constructor() { }

  addtocartAPI(pId:string):Observable<any>
  {
    return this.http.post(`${Env.BaseURL}/api/v1/cart`,{productId:pId},{headers:this.userHeaders})

  }
  updateCartAPI(pId:string ,pCount:number):Observable<any>{
    return this.http.put(`${Env.BaseURL}/api/v1/cart/${pId}`,{count:pCount},{headers:this.userHeaders})
  }
  GetCartAPI():Observable<any>{
    return this.http.get(`${Env.BaseURL}/api/v1/cart`,{headers:this.userHeaders})
  }
  deletPCartAPI(pId:string):Observable<any>{
    return this.http.delete(`${Env.BaseURL}/api/v1/cart/${pId}`,{headers:this.userHeaders})
  }
  ClearCartAPI():Observable<any>{
    return this.http.delete(`${Env.BaseURL}/api/v1/cart`,{headers:this.userHeaders})
  }
}
