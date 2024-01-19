import { Directive, Input, OnInit, inject } from '@angular/core';
import { ListComponent } from '@nw/shared-data-directives';
import { Product, injectGetProductsByCategory } from '@nw/products-data-access';
import { firstValueFrom } from 'rxjs';

@Directive({
  selector: '[nwByCategory]',
  standalone: true,
})
export class ByCategoryDirective implements OnInit {
  private readonly list = inject(ListComponent<Product>);
  private readonly getProducts = injectGetProductsByCategory();

  @Input({ required: true })
  nwByCategory: number = 0;

  async ngOnInit() {
    const response = await firstValueFrom(this.getProducts(this.nwByCategory));
    this.list.items = response.value;
  }
}
