import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-detail-page',
  templateUrl: './employee-detail-page.component.html',
  styleUrls: ['./employee-detail-page.component.css']
})
export class EmployeeDetailPageComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit(): void {
  }

  onAdd(){
    // this.router.navigate(['/employeeListPage']);
  }

  onCancelorOk(){
    this.router.navigate(['/employeeListPage']);
  }
  // “employee”:{
  //   “username”: string,
  //   “firstName”:string,
  //   “lastName”:string,
  //   “email”:string,
  //   “birthDate”:datetime,
  //   “basicSalary”:double,
  //   “status”:string,
  //   “group”:string,
  //   “description”:datetime
  //   }

}
