import { Injectable } from '@angular/core';
import {Task} from "../Task";

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  serverUrl = "http://localhost:3000"

  constructor() { }

  async getAllTasks(): Promise<Task[]> {
    let data = await fetch(`${this.serverUrl}/tasks`);
    return await data.json() ?? [];
  }

  async getTaskById(id: number): Promise<Task | undefined> {
    let data = await fetch(`${this.serverUrl}/tasks/${id}`);
    return await data.json() ?? {};
  }

  async createTask(details: string, day: string): Promise<Task | undefined> {
    let response = await fetch(`${this.serverUrl}/tasks`, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: details,
        day: day
      })
    });
    return await response.json() ?? {};
  }

  async updateTask(id: number, details: string, day: string): Promise<Task | undefined> {
    let response = await fetch(`${this.serverUrl}/tasks/${id}`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        text: details,
        day: day
      })
    });
    return await response.json() ?? {};
  }

  async deleteTask(id: number): Promise<boolean> {
    let response = await fetch(`${this.serverUrl}/tasks/${id}`, {
      method: 'DELETE',
    });
    return response.status == 201;
  }
}
