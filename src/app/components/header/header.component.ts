import {Component, inject} from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  template: `
  <header>
    <h1>{{title}}</h1>
    @if(hasRoute('/')) {
      <app-button
        title="Добавить">
      </app-button>
    }
  </header>
`,
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [ ButtonComponent ],
})
export class HeaderComponent {
  title: string = 'Трекер Задач';
  router: Router = inject(Router);

  hasRoute(route: string) {
    return this.router.url === route;
  }
}
