import {Component, inject, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Task} from "../../Task";
import {Router, RouterModule} from "@angular/router";
import {TaskService} from "../../services/task.service";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  template: `
    <div class="task" [routerLink]="['/tasks', task.id]">
      <h3>{{ task.text }} <fa-icon [icon]="faTimes" (click)="onDelete($event, task.id)"></fa-icon></h3>
      <p>{{ task.day | date : 'medium' }}</p>
    </div>
  `,
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input() task!: Task;
  faTimes = faTimes;
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
