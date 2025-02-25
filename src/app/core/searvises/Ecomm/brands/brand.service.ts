import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Env } from '../../../environment/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  private http:HttpClient=inject(HttpClient);
  constructor() { }

  getAllBrands():Observable<any>{
    return this.http.get(`${Env.BaseURL}/api/v1/brands`);
  }

  getSpecificBrand(bId:string|null):Observable<any>{
    return this.http.get(`${Env.BaseURL}/api/v1/brands/${bId}`);
  }

}
