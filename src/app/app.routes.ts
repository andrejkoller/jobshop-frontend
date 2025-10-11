import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./shared/components/home/home').then((m) => m.Home),
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./shared/components/dashboard/dashboard').then(
        (m) => m.Dashboard
      ),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
