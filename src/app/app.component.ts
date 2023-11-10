import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { TasksComponent } from "./components/tasks/tasks.component";
import {RouterOutlet} from "@angular/router";

@Component({
    selector: 'app-root',
    template: `
  <div class="container">
    <app-header></app-header>
    <router-outlet></router-outlet>
  </div>
`,
    styleUrls: ['./app.component.css'],
    standalone: true,
  imports: [HeaderComponent, TasksComponent, RouterOutlet]
})
export class AppComponent {
  title: string = 'Трекер Задач';
}
