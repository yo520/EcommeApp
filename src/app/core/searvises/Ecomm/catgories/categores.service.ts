import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Env } from '../../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoresService {

  private http:HttpClient=inject(HttpClient)
  constructor() { }
  getAllCat():Observable<any>
  {
    return this.http.get(`${Env.BaseURL}/api/v1/categories`)
  }

  getSpacCat(catId:string):Observable<any>
  {
    return this.http.get(`${Env.BaseURL}/api/v1/categories/${catId}`)

  }
}
