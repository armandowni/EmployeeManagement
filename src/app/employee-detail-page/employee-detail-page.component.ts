import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { dummyData, Employee, Group } from 'src/data';

@Component({
  selector: 'app-employee-detail-page',
  templateUrl: './employee-detail-page.component.html',
  styleUrls: ['./employee-detail-page.component.css'],
})
export class EmployeeDetailPageComponent implements OnInit {
  id: any;
  employee: any = null;
  dataDummy: Employee[] = dummyData;
  group = Group;
  isDetail: Boolean | any;

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
      // console.log(this.employee);
    }
  }

  onAdd(data: any) {
    // console.log(this.dataDummy.push(data));
    console.log(data);

    // this.router.navigate(['/employeeListPage']);
  }

  onCancelorOk() {
    this.router.navigate(['/employeeListPage']);
  }
}
