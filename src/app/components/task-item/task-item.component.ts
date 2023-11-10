import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Task} from "../../Task";

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="task">
      <h3>{{ task.text }}</h3>
      <p>{{ task.day }}</p>
    </div>
  `,
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input() task!: Task;
}
