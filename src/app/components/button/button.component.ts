import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
  <button class="btn" 
        [style.background-color]="color"
        (click)="onButtonClick()">
      {{title}}
  </button>
`,
  styleUrls: ['./button.component.css'],
  standalone: true,
})
export class ButtonComponent {
  title: string = 'Добавить';
  color: string = "darkgreen";

  onButtonClick() {
    alert("button clicked!");
  }
}
