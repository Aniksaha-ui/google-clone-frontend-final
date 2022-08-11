import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  getUserData() {
    return this.http.get<any>('http://localhost:4000/user')
  }

  makeAuthorized(data) {
    return this.http.get<any>(`http://localhost:4000/user/authentication/${data}`)
  }

  otpVerified(data){
    return this.http.post<any>(`http://localhost:4000/user/verifyotp`,data);
  }

}
