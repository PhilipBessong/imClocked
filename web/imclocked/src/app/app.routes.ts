import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Addemployee } from './employee/addemployee/addemployee';
import { Viewemployee } from './employee/viewemployee/viewemployee';
export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: Dashboard },
  { path: 'addemployee', component: Addemployee },
  { path: 'viewemployee', component: Viewemployee },
];
