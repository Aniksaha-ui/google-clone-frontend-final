import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-otpverification',
  templateUrl: './otpverification.component.html',
  styleUrls: ['./otpverification.component.css']
})
export class OtpverificationComponent implements OnInit {

  constructor(private FormBuilder:FormBuilder,private route:Router,private AuthenticationService:AuthenticationService) { }
  otpForm!: FormGroup;


  ngOnInit(): void {
    this.otpForm = this.FormBuilder.group({
      otp: ['', Validators.required],
      email: ['', Validators.required ],
    });
  }

  submitOtp(){
      if(this.otpForm.valid){
        this.AuthenticationService.otpVerified(this.otpForm.value).subscribe({
            next:(res)=>{
              if(res.status===200){
                this.route.navigate(['/login'])
              } else{
                alert("OTP not match")
              }
            }
        })
      }
  }


}
