import {Component, inject, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from 'src/app/Task';
import {ActivatedRoute, RouterLink, RouterModule} from "@angular/router";
import {TaskService} from "../../services/task.service";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  template: ` <a [routerLink]="['/tasks']">Назад</a>
  <h2>Редактирование {{task?.id}}</h2>

  <form [formGroup]="applyForm" (submit)="submitTask()">
    <span class="form-control">
      <label for="details">Детали</label>
      <input id="details" type="text" formControlName="details" [value]="task?.text">
    </span>

    <span class="form-control">
      <label for="day">День</label>
      <input id="day" type="text" formControlName="day" [value]="task?.day">
    </span>

    <span class="form-control">
      <button type="submit" class="primary btn">Сохранить</button>
    </span>
  </form>
  `,
  styleUrl: './task.component.css'
})
export class TaskComponent {
  route: ActivatedRoute = inject(ActivatedRoute)
  taskService: TaskService = inject(TaskService);
  task: Task | undefined;
  applyForm = new FormGroup({
    details: new FormControl(''),
    day: new FormControl(''),
  })

  constructor() {
    const idValue = this.route.snapshot.params["id"];
    if (idValue !== "new") {
      const id = Number(idValue);
      this.taskService.getTaskById(id).then(task => {
        this.task = task;
      });
    }
  }

  submitTask() {

  }
}
