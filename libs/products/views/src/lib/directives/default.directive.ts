import { Directive, OnInit, inject } from '@angular/core';
import { ListComponent } from '../products-list';
import { Product, injectGetProducts } from '@nw/products/data-access';
import { firstValueFrom } from 'rxjs';

@Directive({
  selector: '[nwDefault]',
  standalone: true,
})
export class DefaultDirective implements OnInit {
  private readonly list = inject(ListComponent<Product>);
  private readonly getProducts = injectGetProducts();

  async ngOnInit() {
    const response = await firstValueFrom(this.getProducts());
    this.list.items = response.value;
  }
}
