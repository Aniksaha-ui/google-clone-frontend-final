import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

  constructor(private FormBuilder:FormBuilder,private route:Router,private AuthenticationService:AuthenticationService) { }
  passwordChangeForm!: FormGroup;
  ngOnInit(): void {
    this.passwordChangeForm = this.FormBuilder.group({
      email:['',Validators.required],
      password: ['', Validators.required],
      confirmpassword: ['', Validators.required ],
    });
  }


  changePassword(){
      if(this.passwordChangeForm.valid){
          this.AuthenticationService.updatePassword(this.passwordChangeForm.value).subscribe({
            next:(res)=>{
              console.log(res)
              if(res.acknowledged===true){
                localStorage.removeItem("accessToken");
                this.route.navigate(['/login'])
              } else{
                alert("data can not be updated")
              }
            }
          })
      }
  }
}
