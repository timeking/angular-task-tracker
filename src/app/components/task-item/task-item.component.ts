import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Task} from "../../Task";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="task" [routerLink]="['/tasks', task.id]">
      <h3>{{ task.text }}</h3>
      <p>{{ task.day }}</p>
    </div>
  `,
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input() task!: Task;
}
