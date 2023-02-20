import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private httpClient:HttpClient) { }

  getProductsList():Observable<any[]>
  {
    return this.httpClient.get<any[]>('https://fakestoreapi.com/products')
  }

  getAllUser():Observable<any[]>
  {
    return this.httpClient.get<any[]>('https://fakestoreapi.com/users')
  }

  createUser(data:any):Observable<any[]>
  {
    return this.httpClient.post<any[]>('https://fakestoreapi.com/users',data)
  }

}
