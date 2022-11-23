import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { dummyUsers, isEmail, user } from '../data';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css'],
})
export class LoginComponentComponent implements OnInit {
  dataUsers = dummyUsers;
  message = '';
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onClickButton(data: any) {
    if (!isEmail(data.email)) {
      this.message = 'please input email correctly';
      setTimeout(() => (this.message = ''), 5000);
      return;
    }
    const dataFind = this.dataUsers.find((user) => user.email === data.email);
    if (!dataFind) {
      this.message = 'user not found';
      setTimeout(() => (this.message = ''), 5000);
      return;
    }
    if (dataFind.password !== data.password) {
      this.message = 'password invalid';
      setTimeout(() => (this.message = ''), 5000);
      return;
    }
    this.router.navigate(['/employeeListPage']);
  }
}
