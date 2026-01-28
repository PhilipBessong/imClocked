import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../../services/employee-service';
@Component({
  selector: 'app-addemployee',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './addemployee.html',
  styleUrl: './addemployee.scss',
})
export class Addemployee implements OnInit {
  employeeForm!: FormGroup;
  roles = ['ADMIN', 'EMPLOYEE', 'SUPERVISOR'];
  statuses = ['ACTIVE', 'INACTIVE'];

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9\\-]*$')]],
      role: ['EMPLOYEE', Validators.required],
      status: ['ACTIVE', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.employeeForm.valid) {
      this.employeeService.addEmployee(this.employeeForm.value);
      this.employeeForm.reset({ role: 'EMPLOYEE', status: 'ACTIVE' });
      alert('Employee added successfully!');
    }
  }
}
