import {Component, inject, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Task} from "../../Task";
import {Router, RouterModule} from "@angular/router";
import {TaskService} from "../../services/task.service";

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="task" [routerLink]="['/tasks', task.id]">
      <h3>{{ task.text }} <button class="btn" (click)="onDelete($event, task.id)">Удалить</button></h3>
      <p>{{ task.day }}</p>
    </div>
  `,
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input() task!: Task;
  taskService: TaskService = inject(TaskService);
  router: Router = inject(Router);



  onDelete(event: MouseEvent, id?: number) {
    event.stopPropagation();

    if (id) {
      this.taskService.deleteTask(id).then(removed => {
        if (removed) {
          window.location.reload();
        }
      });
    }
  }
}
