import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { deleteData, dummyData, Employee, Group } from 'src/app/data';

@Component({
  selector: 'app-employee-list-component',
  templateUrl: './employee-list-component.component.html',
  styleUrls: ['./employee-list-component.component.css'],
})
export class EmployeeListComponentComponent implements OnInit {
  dataDummy: Employee[] = dummyData;
  group = Group;
  count = this.dataDummy.length;
  limit = 25;
  pageIndex = 1;
  totalPage = Array.from(Array(Math.ceil(this.count / this.limit)).keys());
  data: Employee[] = [];
  dataEmployee: Employee | any;
  limits = [5, 10, 25, 50];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.data = this.getData(
      this.dataDummy,
      this.limit * (this.pageIndex - 1),
      this.limit * this.pageIndex
    );
  }

  getData(data: Employee[], index: number, limit: number) {
    return data.slice(index, limit);
  }

  addEmployee() {
    this.router.navigate(['/employeeDetail/new']);
  }
  editEmployee(data: any) {
    this.router.navigate([`/employeeDetail/${data.id}`]);
  }
  chooseData(data: any) {
    this.dataEmployee = data;
  }
  deleteEmployee(data: any) {
    const tempData = deleteData(data.id);
    this.data = this.getData(
      tempData,
      this.limit * (this.pageIndex - 1),
      this.limit * this.pageIndex
    );
  }

  onNext() {
    if (this.pageIndex >= this.totalPage.length) return;
    this.pageIndex++;
    this.data = this.getData(
      this.dataDummy,
      this.limit * (this.pageIndex - 1),
      this.limit * this.pageIndex
    );
  }

  onChangePage(page: number) {
    this.pageIndex = page + 1;

    this.data = this.getData(
      this.dataDummy,
      this.limit * (this.pageIndex - 1),
      this.limit * this.pageIndex
    );
  }

  onPrevious() {
    if (this.pageIndex - 1 <= this.totalPage.length - this.totalPage.length)
      return;
    this.pageIndex--;
    this.data = this.getData(
      this.dataDummy,
      this.limit * (this.pageIndex - 1),
      this.limit * this.pageIndex
    );
  }

  onChangeLimit(limit: any) {
    this.limit = parseInt(limit.target.value);
    this.totalPage = Array.from(
      Array(Math.ceil(this.count / this.limit)).keys()
    );
    this.data = this.getData(
      this.dataDummy,
      this.limit * (this.pageIndex - 1),
      this.limit * this.pageIndex
    );
  }
  onSearch(data: any) {
    // console.log(data);
    const tempData = dummyData;

    this.dataDummy = tempData.filter(
      (employee) =>
        employee.username.includes(data.username) &&
        employee.group.includes(data.group)
    );
    this.count = this.dataDummy.length;
    this.pageIndex = 1;
    this.limit = 25;
    this.totalPage = Array.from(
      Array(Math.ceil(this.count / this.limit)).keys()
    );
    this.data = this.getData(
      this.dataDummy,
      this.limit * (this.pageIndex - 1),
      this.limit * this.pageIndex
    );
  }
}
