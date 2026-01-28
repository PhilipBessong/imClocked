import { Injectable } from '@angular/core';

export interface Employee {
  userId: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  role: string; // ADMIN, EMPLOYEE, SUPERVISOR
  faceTemplate?: FaceTemplate;
  status: 'ACTIVE' | 'INACTIVE';
  createdAt: Date;
  updatedAt: Date;
}
export interface FaceTemplate {
  faceId: string;
  userId: string;
  faceData: ArrayBuffer;
  createdAt: Date;
  updatedAt: Date;
}
@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private employees: Employee[] = [];
  private faceTemplates: FaceTemplate[] = [];

  constructor() {
    // Initialize with some dummy data
    const dummyEmployee: Employee = {
      userId: '1',
      fullName: 'John Doe',
      email: 'john.doe@example.com',
      phoneNumber: '123-456-7890',
      role: 'EMPLOYEE',
      status: 'ACTIVE',
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.employees.push(dummyEmployee);
    const dummyFaceTemplate: FaceTemplate = {
      faceId: 'ft1',
      userId: '1',
      faceData: new ArrayBuffer(8),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    this.faceTemplates.push(dummyFaceTemplate);
    dummyEmployee.faceTemplate = dummyFaceTemplate;
  }

  addEmployee(employee: Omit<Employee, 'userId' | 'createdAt' | 'updatedAt'>) {
  const newEmployee: Employee = {
    ...employee,
    userId: Math.random().toString(36).substr(2, 9), // Simple ID generator
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  this.employees.push(newEmployee);
  console.log('Employee added:', newEmployee);
}
getEmployees(): Employee[] {
  return this.employees;
}

deleteEmployee(userId: string) {
  this.employees = this.employees.filter(emp => emp.userId !== userId);
}
}
