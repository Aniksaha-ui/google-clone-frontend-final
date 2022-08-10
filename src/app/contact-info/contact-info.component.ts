import { Component, OnInit,ViewChild } from '@angular/core';
import { ContactService } from '../service/contact.service';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../service/api.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent implements OnInit {

  constructor(private ContactService:ContactService) { }

  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'phone','company','job'];
  columnsToDisplay: string[] = this.displayedColumns.slice();

  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  contact: any = [];
  ngOnInit(): void {

    this.getContact();
  }

  getLoginEmail(){
    const token = localStorage.getItem("accessToken");
    console.log(token);
    let jwtData = token.split('.')[1];
    let decodedJwtJsonData = window.atob(jwtData);
    let decodedJwtData = JSON.parse(decodedJwtJsonData);
    let email = decodedJwtData.email;
    return email;
  }

  getContact() {
    let email = this.getLoginEmail()
    this.ContactService.getContact(email).subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log(res);
      },
    });
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
