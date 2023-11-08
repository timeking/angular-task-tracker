import { Component, Input, Output, EventEmitter } from '@angular/core';

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
  @Input() title!: string;
  color: string = "darkgreen";
  @Output() btnClick = new EventEmitter<string>();

  onButtonClick() {
    this.btnClick.emit(this.title);
  }
}
