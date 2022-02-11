import { Component, OnInit } from '@angular/core';

//import { Employee } from '../employee.service';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(public employeeService: EmployeeService) { }

  ngOnInit(): void {
  }

  /*getSalaryColor(employee: Employee): string {
    return employee.salary > 20000 ? 'green' : 'red';
  }*/

}
