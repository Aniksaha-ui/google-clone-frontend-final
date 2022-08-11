import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  getUserData() {
    return this.http.get<any>('https://nameless-dawn-65967.herokuapp.com/user')
  }

  makeAuthorized(data) {
    return this.http.get<any>(`https://nameless-dawn-65967.herokuapp.com/user/authentication/${data}`)
  }

  otpVerified(data){
    return this.http.post<any>(`https://nameless-dawn-65967.herokuapp.com/user/verifyotp`,data);
  }

  updatePassword(data){
   const {email,password} = data
    return this.http.get<any>(`https://nameless-dawn-65967.herokuapp.com/user/changePassword/${email}/${password}`)
  }


}
