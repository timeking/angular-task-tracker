import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <app-header></app-header>
  </div>
`,
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [ HeaderComponent ]
})
export class AppComponent {
  title: string = 'Трекер Задач';
}
