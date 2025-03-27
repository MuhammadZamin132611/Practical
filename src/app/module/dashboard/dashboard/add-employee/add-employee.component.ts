import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../../../../service/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  imports: [FormsModule, NgIf],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.scss',
  animations:[{
    
  }]
})
export class AddEmployeeComponent {
  constructor(private employeeService: EmployeeService, private router: Router) { }

  onSubmit(form: any) {
    if (form.valid) {

      // this.employeeService.addEmployee(form.value).subscribe({
      //   next:any=>{

      //   },
      //   error:any=>{

      //   }
      // })

      this.employeeService.addEmployee(form.value).subscribe((res) => {
        console.log("Form data", form.value);
        this.router.navigate(['/view-employee'])
      }, (error) => {
        console.log(error)
      }
      )
    }
    else {
      console.log("invalid Form data", form.value);
    }
  }
}
