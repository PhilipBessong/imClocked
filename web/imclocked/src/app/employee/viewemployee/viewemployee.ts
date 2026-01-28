
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Employee, EmployeeService } from '../../services/employee-service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-viewemployee',
  imports: [CommonModule, FormsModule],
  templateUrl: './viewemployee.html',
  styleUrl: './viewemployee.scss',
})
export class Viewemployee implements OnInit {
  employees: Employee[] = [];
  searchText: string = '';

  constructor(private employeeService: EmployeeService, private router: Router) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.employees = this.employeeService.getEmployees();
  }

  get filteredEmployees() {
    return this.employees.filter(emp =>
      emp.fullName.toLowerCase().includes(this.searchText.toLowerCase()) ||
      emp.email.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  onDelete(id: string): void {
    if(confirm('Are you sure you want to remove this employee?')) {
      this.employeeService.deleteEmployee(id);
      this.loadEmployees(); // Refresh list
    }
  }

  toAddEmployee(): void {
    this.router.navigate(['/addemployee']);
  }
}
