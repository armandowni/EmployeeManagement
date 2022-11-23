import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailPageComponent } from './employee-detail-page/employee-detail-page.component';
import { EmployeeListComponentComponent } from './employee-list-component/employee-list-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'login', component: LoginComponentComponent },
  { path: 'employeeListPage', component: EmployeeListComponentComponent },
  { path: 'employeeDetail/:id', component: EmployeeDetailPageComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
