import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { EmployeeListComponentComponent } from './employee-list-component/employee-list-component.component';
import { EmployeeDetailPageComponent } from './employee-detail-page/employee-detail-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    EmployeeListComponentComponent,
    EmployeeDetailPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
