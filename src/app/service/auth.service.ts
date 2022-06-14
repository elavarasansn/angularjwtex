import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {  }

  checkLogin(obj:any):Observable<any>{
   console.log(obj)
    return this.http.post('http://localhost:7777/Auth/login',obj);    
  
}


getDashboardData():Observable<any>{
  
   return this.http.get('http://localhost:7777/Account/create');    
 
}


  
}
