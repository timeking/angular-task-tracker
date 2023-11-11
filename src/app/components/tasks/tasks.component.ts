import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from 'src/app/Task';
import {TaskItemComponent} from "../task-item/task-item.component";
import {TaskService} from "../../services/task.service";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, TaskItemComponent],
  template: `
    @if (hasError) {
      Ошибка запроса сервера
    } @else {
      @for(task of tasks; track task.id) {
          <app-task-item [task]="task"></app-task-item>
      } @empty {
          Нет задач!
      }
    }
  `,
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  taskService: TaskService = inject(TaskService);

  tasks: Task[] = [];
  hasError: boolean = false;

  constructor() {
    this.taskService.getAllTasks().then((taskList: Task[]) => {
      this.tasks = taskList;
      this.hasError = false;
    }).catch(e => {this.hasError = true});
  }
}
