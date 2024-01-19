import { Component, Input } from '@angular/core';

@Component({ template: '' })
export abstract class ListComponent<T = unknown> {
  @Input()
  items: T[] = [];
}
