import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Env } from '../../../environment/environment';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private httpClient=inject(HttpClient);
  constructor() { }

  getALLProducts():Observable<any>
  {
  return this.httpClient.get(`${Env.BaseURL}/api/v1/products`);
  }
  getspecificProducts(pId:string|null):Observable<any>
  {
  return this.httpClient.get(`${Env.BaseURL}/api/v1/products/${pId}`);
  }
}
