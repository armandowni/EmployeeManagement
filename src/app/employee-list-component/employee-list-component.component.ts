import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { dummyData, Employee } from 'src/data';

@Component({
  selector: 'app-employee-list-component',
  templateUrl: './employee-list-component.component.html',
  styleUrls: ['./employee-list-component.component.css'],
})
export class EmployeeListComponentComponent implements OnInit {
  dataDummy: Employee[] = dummyData;
  data: Employee[] | any;
  count = this.dataDummy.length;
  limit = 25;
  pageIndex = 1;
  totalPage = Array.from(Array(Math.round(this.count / this.limit)).keys());
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.getData(
      this.limit * (this.pageIndex - 1),
      this.limit * this.pageIndex
    );
  }

  getData(index: number, limit: number) {
    this.data = this.dataDummy.slice(index, limit);
  }

  addEmployee() {
    this.router.navigate(['/employeeDetail/new']);
  }
  editEmployee(data: any) {
    this.router.navigate([`/employeeDetail/${data.id}`]);
  }
  deleteEmployee(data: any) {
    // this.router.navigate([`/employeeDetail/${data.id}`]);
  }

  onNext() {
    if (this.pageIndex >= this.totalPage.length) return;
    this.pageIndex++;
    this.getData(
      this.limit * (this.pageIndex - 1),
      this.limit * this.pageIndex
    );
  }

  onChangePage(page: number) {
    this.pageIndex = page + 1;
    this.getData(
      this.limit * (this.pageIndex - 1),
      this.limit * this.pageIndex
    );
  }

  onPrevious() {
    if (this.pageIndex - 1 <= this.totalPage.length - this.totalPage.length)
      return;
    this.pageIndex--;
    this.getData(
      this.limit * (this.pageIndex - 1),
      this.limit * this.pageIndex
    );
  }
}
