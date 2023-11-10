import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      task-item works!
    </p>
  `,
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {

}
