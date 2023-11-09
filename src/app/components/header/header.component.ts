import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-header',
  template: `
  <header>
    <h1>{{title}}:{{count}}</h1>
    <app-button title="Добавить" [value]="value" (btnClick)="onAdd($event)"></app-button>
  </header>
`,
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [ ButtonComponent ],
})
export class HeaderComponent {
  title: string = 'Трекер Задач';
  value: number = 17;
  count: number = 0;

  onAdd(title: string) {
    this.count++;
  }
}
