import { Directive, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatListItem } from '@angular/material/list';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter, map } from 'rxjs';

@Directive({
  selector: '[mat-list-item][routerLink]',
  standalone: true,
})
export class MatListItemRouterLinkDirective {
  #listItem = inject(MatListItem);
  #link = inject(RouterLink);
  #router = inject(Router);

  #active$ = this.#router.events.pipe(
    filter(e => e instanceof NavigationEnd),
    map(() =>
      this.#link.urlTree
        ? this.#router.isActive(this.#link.urlTree, {
          paths: 'exact',
          fragment: 'ignored',
          queryParams: 'ignored',
          matrixParams: 'ignored',
        })
        : false,
    ),
  );

  constructor() {
    this.#active$
      .pipe(takeUntilDestroyed())
      .subscribe(isActive => (this.#listItem.activated = isActive));
  }
}
