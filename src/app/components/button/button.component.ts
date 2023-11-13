import { Component, Input, Output, EventEmitter } from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-button',
  template: `
    <button class="btn"
            [style.background-color]="color"
            [routerLink]="['/tasks', 'new']">
      {{title}}
    </button>
  `,
  styleUrls: ['./button.component.css'],
  standalone: true,
  imports: [RouterLink]
})
export class ButtonComponent {
  @Input() title!: string;
  color: string = "darkgreen";


}
