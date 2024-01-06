import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShellComponent } from './shell/shell.component';

@Component({
  standalone: true,
  imports: [ShellComponent, RouterModule],
  selector: 'angular-arch-nx-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-arch-nx';
}
