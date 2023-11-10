import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { TasksComponent } from "./components/tasks/tasks.component";

@Component({
    selector: 'app-root',
    template: `
  <div class="container">
    <app-header></app-header>
    <app-tasks></app-tasks>
  </div>
`,
    styleUrls: ['./app.component.css'],
    standalone: true,
    imports: [HeaderComponent, TasksComponent]
})
export class AppComponent {
  title: string = 'Трекер Задач';
}
