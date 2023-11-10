import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from 'src/app/Task';
import {RouterLink, RouterModule} from "@angular/router";

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
  task: Task | undefined;


}
