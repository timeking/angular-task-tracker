import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Task} from "../../Task";

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      {{task.id}} - {{task.day}} - {{task.text}}
    </p>
  `,
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input() task!: Task;
}
