import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Env } from '../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
private http :HttpClient =inject(HttpClient);
private userHeaders:any = {token:localStorage.getItem('usertoken')}
  constructor() { }

  checkout(cartId:string ,payformValue:object):Observable<any>
  {
    return this.http.post(`${Env.BaseURL}/api/v1/orders/checkout-session/${cartId}?url=${Env.ecommUrl}`,{shippingAddress:payformValue})
  }
}
