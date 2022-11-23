import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {
  checkDate,
  currencyChange,
  dummyData,
  Employee,
  Group,
  inputData,
  isEmail,
} from 'src/app/data';

@Component({
  selector: 'app-employee-detail-page',
  templateUrl: './employee-detail-page.component.html',
  styleUrls: ['./employee-detail-page.component.css'],
})
export class EmployeeDetailPageComponent implements OnInit {
  id: any;
  employee: Employee | any = {
    basicSalary: 0,
    birthDate: '',
    description: '',
    email: '',
    firstName: '',
    group: '',
    id: 0,
    lastName: '',
    status: '',
    username: '',
  };
  dataDummy: Employee[] = dummyData;
  changeCurrency = currencyChange;
  group = Group;
  isDetail: Boolean | any;
  message: string | any = '';

  constructor(private router: Router, private activeRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((params: ParamMap) => {
      this.id = params?.get('id');
    });

    if (this.id === 'new') {
      this.isDetail = false;
    } else {
      this.isDetail = true;
      this.employee = dummyData.find((data) => data.id == this.id);
      console.log(this.employee);
    }
  }

  onAdd(data: any) {
    console.log(this.employee);
    if (
      !data.username ||
      !data.firstName ||
      !data.lastName ||
      !data.birthDate ||
      !data.status ||
      data.status == 0 ||
      !data.email ||
      !data.description
    ) {
      this.message = 'Mohon isi semua data';
      setTimeout(() => {
        this.message = '';
      }, 5000);
      return;
    }

    if (!this.employee.basicSalary || !this.employee.group) {
      this.message = 'Mohon isi semua data';
      setTimeout(() => {
        this.message = '';
      }, 5000);
      return;
    }

    if (!isEmail(data.email)) {
      this.message = 'Input Email dengan benar';
      setTimeout(() => {
        this.message = '';
      }, 5000);
      return;
    }

    if (checkDate(data.birthDate)) {
      this.message = 'Tanggal lahir tidak boleh lebih dari hari ini';
      setTimeout(() => {
        this.message = '';
      }, 5000);
      return;
    }
    data.basicSalary = Number(this.employee.basicSalary);
    data.group = this.employee.group;
    inputData(data);
    this.router.navigate(['/employeeListPage']);
  }

  onCancelorOk() {
    this.router.navigate(['/employeeListPage']);
  }
  onChangeCurrency(data: any) {
    const result = data.target.value;

    this.employee.basicSalary = Number(
      currencyChange(result).replace(/[^0-9.-]+/g, '')
    );
  }
  onSearchGroup(data: any) {
    const result = data.target.value;

    this.group = Group.filter((group) => group.includes(result));
  }
  onSelectGroup(data: any) {
    this.employee.group = data;
  }
}
