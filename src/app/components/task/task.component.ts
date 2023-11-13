import {Component, inject, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from 'src/app/Task';
import {ActivatedRoute, RouterLink, RouterModule} from "@angular/router";
import {TaskService} from "../../services/task.service";

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: ` <a [routerLink]="['/tasks']">Назад</a>
    <p>ID: <span>{{task?.id}}</span></p>
    <p>text: <span>{{task?.text}}</span></p>
    <p>day: <span>{{task?.day}}</span></p>
  `,
  styleUrl: './task.component.css'
})
export class TaskComponent {
  route: ActivatedRoute = inject(ActivatedRoute)
  taskService: TaskService = inject(TaskService);
  task: Task | undefined;

  constructor() {
    const idValue = this.route.snapshot.params["id"];
    if (idValue !== "new") {
      const id = Number(idValue);
      this.taskService.getTaskById(id).then(task => {
        this.task = task;
      });
    }
  }


}
