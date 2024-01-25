import { Route } from '@angular/router';
import { ShellComponent } from './shell.component';

export const routes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: 'home',
        loadChildren: async () => (await import('@nw/home-feature')).routes,
      },
      {
        path: 'customers',
        loadChildren: async () => (await import('@nw/customers-feature')).routes,
      },
      {
        path: 'employees',
        loadChildren: async () => (await import('@nw/employees-feature')).routes,
      },
      {
        path: 'orders',
        loadChildren: async () => (await import('@nw/orders-feature')).routes,
      },
      {
        path: 'products',
        loadChildren: async () => (await import('@nw/products-feature')).routes,
      },
      {
        path: 'suppliers',
        loadChildren: async () => (await import('@nw/suppliers-feature')).routes,
      },
    ],
  },
];
