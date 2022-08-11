import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient) { }

  getContact(email){
    return this.http.get<any>(`https://nameless-dawn-65967.herokuapp.com/user/mycontact?useremail=${email}`)
  }

  postContact(data,email,token){
    return this.http.post<any>(`https://nameless-dawn-65967.herokuapp.com/user/mycontact`,data);
  }
}
