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
}
