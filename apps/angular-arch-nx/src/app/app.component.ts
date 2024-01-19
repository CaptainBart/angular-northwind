import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'nw-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-arch-nx';
}
