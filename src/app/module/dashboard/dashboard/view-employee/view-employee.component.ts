import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../../service/employee.service';
import { Employee } from '../../../model/employee.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-employee',
  imports: [],
  templateUrl: './view-employee.component.html',
  styleUrl: './view-employee.component.scss'
})
export class ViewEmployeeComponent implements OnInit {

  constructor(private employeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.getData();
  }

  employeeData: Employee[] = []

  getData() {
    this.employeeService.getEmployee().subscribe({
      next: (res: any) => {
        this.employeeData = res;
        console.log(this.employeeData);
      }, error: (err: any) => {
        console.log(err);
      }
    })
  }

  update(id: string) {
    this.router.navigate(['/update/', id])
  }

  delete(id: string) {
    this.employeeService.delete(id).subscribe({
      next: (res: any) => {
        this.getData();
        console.log("Data Deleted", res);
      },
      error: (err: any) => {
        console.log("Error", err);
      }
    })
  }
}
