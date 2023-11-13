import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-header',
  template: `
  <header>
    <h1>{{title}}</h1>
    <app-button
      title="Добавить">
    </app-button>
  </header>
`,
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [ ButtonComponent ],
})
export class HeaderComponent {
  title: string = 'Трекер Задач';
}
