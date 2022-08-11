import { Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private Router:Router) { }

  ngOnInit(): void {
  }

  handleLogout(){
    localStorage.removeItem("accessToken");
    this.Router.navigate(['/login']);
  }


}
