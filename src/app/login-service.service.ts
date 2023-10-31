import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  
  constructor(private http: HttpClient ) {}
    login(data):Observable<any>{
      return this.http.post("https://adminv2.hydfm.com/api/v3/login",data);
    }
   
}
