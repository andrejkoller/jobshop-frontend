import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./shared/components/home/home').then((m) => m.Home),
  },
  {
    path: 'dashboard/overview',
    loadComponent: () =>
      import('./shared/components/dashboard/dashboard').then(
        (m) => m.Dashboard
      ),
  },
  {
    path: 'dashboard',
    redirectTo: 'dashboard/overview',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
