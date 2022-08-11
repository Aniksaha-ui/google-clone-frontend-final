import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginApiService } from '../service/login-api.service';
import { ApiService } from '../service/api.service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private formBuilder: FormBuilder,
    private loginApiService: LoginApiService,
    private router: Router
  ) {}
  loginForm!: FormGroup;
  ngOnInit(): void {
    let token = localStorage.getItem('accessToken');
    if (token) {
      this.router.navigate(['/contact']);
      //then goto dashboard
      return;
    } else {
    }

    this.loginForm = this.formBuilder.group({
      firstName: ['', Validators.required && Validators.minLength(3)],
      lastName: ['', Validators.required],
      email: ['', Validators.required && Validators.email ],
      phone: ['', Validators.required && Validators.minLength(10) ],

    });
  }

  toogleLogin(){
    this.router.navigate(['/login'])
  }


  submitForm() {
    // console.log(this.loginForm.value);
    if (this.loginForm.valid) {
      this.loginApiService.register(this.loginForm.value).subscribe({
        next: (res) => {
          // console.log(res,"response")
          // localStorage.setItem('accessToken', res.token);
          this.router.navigate(['/login']);
        },
      });
    } else {

      if(this.loginForm.controls.firstName.status === "INVALID"){
        alert("First Name length must be atleast 3 charcter and required ")
        return;
      }
      if(this.loginForm.controls.lastName.status === "INVALID"){
        alert("Last Name length must be atleast 3 charcter and required ")
        return;
      }
      if(this.loginForm.controls.email.status === "INVALID"){
        alert("Email Pattern is not match")
        return;
      }
      if(this.loginForm.controls.phone.status === "INVALID"){
        alert("Phone Number length must be atleast 10 charcter and required ")
        return;
      }
    }
  }
}


