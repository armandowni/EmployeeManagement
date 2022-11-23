import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { addUserData, isEmail } from '../data';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  message = ""
  constructor(private router: Router) {}

  ngOnInit(): void {}

  onClickButton(data: any) {
    if (!isEmail(data.email)) {
      this.message = 'please input email correctly';
      setTimeout(() => (this.message = ''), 5000);
      return;
    }
    addUserData(data);
    this.router.navigate(['/login']);
  }
}
