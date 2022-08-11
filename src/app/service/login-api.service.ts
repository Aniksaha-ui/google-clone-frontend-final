import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginApiService {
  constructor(private http: HttpClient) {}

  register(data) {
    return this.http.post<any>('https://nameless-dawn-65967.herokuapp.com/user/register', data);
  }

  login(data) {
    return this.http.post<any>(`https://nameless-dawn-65967.herokuapp.com/user/login/`, data);
  }
}
