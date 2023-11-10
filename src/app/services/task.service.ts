import { Injectable } from '@angular/core';
import {Task} from "../Task";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: Task[] = [
    {
      id: 1,
      text: 'Визит к врачу',
      day: '5 мая в 14:30',
      reminder: true,
    },
    {
      id: 2,
      text: 'Встреча в школе',
      day: '6 мая в 13:30',
      reminder: true,
    },
    {
      id: 3,
      text: 'Поход в магазин',
      day: '7 мая в 12:30',
      reminder: false,
    },
  ];

  serverUrl = "http://localhost:3000"

  constructor() { }

  async getAllTasks(): Promise<Task[]> {
    let data = await fetch(this.serverUrl + "/tasks");
    return await data.json();
  }
}
