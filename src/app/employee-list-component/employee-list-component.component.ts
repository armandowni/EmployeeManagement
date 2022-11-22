import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list-component',
  templateUrl: './employee-list-component.component.html',
  styleUrls: ['./employee-list-component.component.css'],
})
export class EmployeeListComponentComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  addEmployee() {
    this.router.navigate(['/employeeDetail/new']);
  }
  editEmployee(data: any) {
    this.router.navigate([`/employeeDetail/${data.id}`]);
  }
  deleteEmployee(data: any) {
    // this.router.navigate([`/employeeDetail/${data.id}`]);
  }
}
