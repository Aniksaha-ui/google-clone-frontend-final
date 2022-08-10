import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient) { }

  getContact(email){
    return this.http.get<any>(`http://localhost:4000/user/mycontact?useremail=${email}`)
  }

  postContact(data,email,token){
    return this.http.post<any>(`http://localhost:4000/user/mycontact`,data);
  }
}
