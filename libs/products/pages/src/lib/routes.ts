import { Route } from '@angular/router';
import { ProductsComponent } from './products/products.component';

export const routes: Route[] = [{ path: '', pathMatch: 'full', component: ProductsComponent }];
