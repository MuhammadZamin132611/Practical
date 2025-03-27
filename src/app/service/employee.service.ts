import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../module/model/employee.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  getEmployee(): Observable<Employee[]> {
    return this.http.get<Employee[]>('http://localhost:3000/employee');
  }

  getEmployeeById(id: string): Observable<Employee> {
    return this.http.get<Employee>(`http://localhost:3000/employee/${id}`)
  }

  addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>('http://localhost:3000/employee', employee)
  }

  update(id: string, employee: Employee) {
    return this.http.put(`http://localhost:3000/employee/${id}`, employee)
  }


  delete(id: string) {
    return this.http.delete(`http://localhost:3000/employee/${id}`);
  }

  


}
