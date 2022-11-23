import { Component, OnInit } from '@angular/core';
import {
  Router,
  ActivatedRoute,
  NavigationEnd,
  NavigationStart,
} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isLoginPage = false;
  title = 'Employee Management';

  constructor(private router: Router) {
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        if (val.url === '/login') this.isLoginPage = true;
      }
    });
  }
}
