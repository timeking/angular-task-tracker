import { Injectable } from '@angular/core';
import {Task} from "../Task";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  serverUrl = "http://localhost:3000"

  constructor() { }

  async getAllTasks(): Promise<Task[]> {
    let data = await fetch(this.serverUrl + "/tasks");
    return await data.json() ?? [];
  }

  async getTaskById(id: number): Promise<Task | undefined> {
    let data = await fetch(this.serverUrl + "/tasks/" + id);
    return await data.json() ?? {};
  }
}
