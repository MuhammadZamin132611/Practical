import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../../../service/employee.service';
import { NgIf } from '@angular/common';
import { Employee } from '../../../model/employee.model';

@Component({
  selector: 'app-update-employee',
  imports: [FormsModule, NgIf],
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.scss'
})
export class UpdateEmployeeComponent implements OnInit {

  constructor(private active: ActivatedRoute, private route: Router, private empService: EmployeeService) { }

  employeeId: any

  employee: Employee = {
    id: '',
    name: '',
    email: '',
    phone: '',
    address: ''
  }

  ngOnInit(): void {
    this.employeeId = this.active.snapshot.paramMap.get('id')
    this.getDataById(this.employeeId)
  }

  getDataById(id: string) {
    this.empService.getEmployeeById(id).subscribe({
      next: (res: any) => {
        this.employee = res
        console.log(res);
      }, error: (err: any) => {
        console.log(err);
      }
    })
  }

  onSubmit(form: any) {
    if (form.valid) {
      this.empService.update(this.employeeId, form.value).subscribe({
        next: (res: any) => {
          this.route.navigate(['/view-employee']);
          console.log(res);
        }
      })
    }
    else {
      console.log("Form invalid", form.value)
    }
  }
}
