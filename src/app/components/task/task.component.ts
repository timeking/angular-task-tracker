import {Component, inject, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from 'src/app/Task';
import {ActivatedRoute, Router, RouterLink, RouterModule} from "@angular/router";
import {TaskService} from "../../services/task.service";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  template: ` <a [routerLink]="['/tasks']">Назад</a>
  <h2>
  @if(task?.id) {
    Редактирование
  } @else {
    Создание
  }
  </h2>

  <form [formGroup]="taskForm" (submit)="submitTask()">
    <span class="form-control">
      <label for="details">Детали</label>
      <input id="details" type="text" formControlName="details" required>
    </span>

    <span class="form-control">
      <label for="day">Дата и время</label>
      <input id="day" type="text" formControlName="day" required>
    </span>

    <span class="form-control">
      <button type="submit" class="primary btn btn-block" [disabled]="!taskForm.valid">Сохранить</button>
    </span>
  </form>

  <div>{{message}}</div>
  `,
  styleUrl: './task.component.css'
})
export class TaskComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  router: Router = inject(Router);
  taskService: TaskService = inject(TaskService);
  task: Task | undefined;
  taskForm = new FormGroup({
    details: new FormControl('', Validators.required),
    day: new FormControl('', Validators.required),
  });
  message: string = '';

  constructor() {
    const idValue = this.route.snapshot.params["id"];
    if (idValue !== "new") {
      const id = Number(idValue);
      this.taskService.getTaskById(id).then(task => {
        this.task = task;
        if (task) {
          this.taskForm.setValue({
            details: task?.text,
            day: task?.day,
          });
        }
      });
    }
  }

  submitTask() {
    if (!this.taskForm.valid) {
      alert("Form is invalid!!!");
      //console.log(this.taskForm.validator);
      return;
    }

    if (this.task?.id) {
      this.taskService.updateTask(
          this.task.id,
          this.taskForm.value.details!,
          this.taskForm.value.day!,
      ).then(response => {
        this.message = "Задача сохранена";
      }).catch(e => {
        this.message = "Ошибка при сохранении задачи";
      });
    } else {
      this.taskService.createTask(
        this.taskForm.value.details!,
        this.taskForm.value.day!,
      ).then(response => {
        this.message = "Задача создана";
        this.router.navigate(["/tasks"], { relativeTo: this.route })
      }).catch(e => {
        this.message = "Ошибка при создании задачи";
      });
    }

  }
}
