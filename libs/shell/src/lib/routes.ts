import { Route } from '@angular/router';
import { ShellComponent } from './shell.component';

export const routes: Route[] = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'products',
    },
    { 
        path: '',
        component: ShellComponent,
        children: [
            {
                path: 'products',
                loadChildren: async () => (await import('@nw/products-pages')).routes,
            },
        ]
    },
];
