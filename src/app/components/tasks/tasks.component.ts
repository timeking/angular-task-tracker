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
    <span class="form-control">
      <input type="text"
             (keyup)="onKeyUp(search.value)"
             placeholder="Введите текст для фильтра"
      #search>


    </span>
    @if (isLoading) {
    <p> Загрузка... </p>
    }
    @else {
      @defer(on viewport; on timer(5s)) {
        @if (hasError) {
          Ошибка запроса сервера
        } @else {
          @for(task of filteredTasks; track task.id) {
              <app-task-item [task]="task" ></app-task-item>
          } @empty {
              Нет задач по фильтру '{{ search.value }}'
          }
        }
      } @placeholder {
      <p> Загрузка... </p>
      }
    }
  `,
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  taskService: TaskService = inject(TaskService);

  tasks: Task[] = [];
  filteredTasks: Task[] = [];
  isLoading: boolean = false;
  hasError: boolean = false;

  constructor() {
    this.isLoading = true;
    this.taskService.getAllTasks().then((taskList: Task[]) => {
      this.tasks = taskList;
      this.filteredTasks = taskList;
      this.hasError = false;
      this.isLoading = false;
    }).catch(e => {this.hasError = true});
  }

  onKeyUp(textToFilter: string) {
    if (textToFilter) {
      this.filteredTasks = this.tasks.filter(
        (task) => task.text.toLowerCase()
          .includes(textToFilter.toLowerCase())
      );
    } else {
      this.filteredTasks = this.tasks;
    }
  }
}
