import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from 'src/app/Task';
import {TaskItemComponent} from "../task-item/task-item.component";
import {TaskService} from "../../services/task.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, TaskItemComponent, FormsModule],
  template: `
    <span class="form-control">
      <input type="text"
             [(ngModel)]="textToFilter"
             (keyup)="onKeyUp()"
             placeholder="Введите текст для фильтра">
    </span>
    @defer {
      @if (hasError) {
        Ошибка запроса сервера
      } @else {
        @for(task of filteredTasks; track task.id) {
            <app-task-item [task]="task" ></app-task-item>
        } @empty {
            Нет задач!
        }
      }
    }
  `,
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  taskService: TaskService = inject(TaskService);
  textToFilter: string = "";

  tasks: Task[] = [];
  filteredTasks: Task[] = [];
  hasError: boolean = false;

  constructor() {
    this.taskService.getAllTasks().then((taskList: Task[]) => {
      this.tasks = taskList;
      this.filteredTasks = taskList;
      this.hasError = false;
    }).catch(e => {this.hasError = true});
  }

  onKeyUp() {
    if (this.textToFilter) {
      this.filteredTasks = this.tasks.filter(
        (task) => task.text.includes(this.textToFilter)
      );
    } else {
      this.filteredTasks = this.tasks;
    }
  }
}
