import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getUserData() {
    return this.http.get<any>('https://nameless-dawn-65967.herokuapp.com/user')
  }
}
