import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule],
  template: `
    @for(task of tasks; track task.id) {
      <p>
      {{task.id}} - {{task.day}} - {{task.text}}
      </p>
    }
  `,
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  tasks: Task[] = [
    {
      id: 1,
      text: 'Визит к врачу',
      day: '5 мая в 14:30',
      reminder: true,
    },
    {
      id: 2,
      text: 'Встреча в школе',
      day: '6 мая в 13:30',
      reminder: true,
    },
    {
      id: 3,
      text: 'Поход в магазин',
      day: '7 мая в 12:30',
      reminder: false,
    },
  ];
}
