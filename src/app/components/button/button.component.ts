import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
  <button class="btn" 
        [style.background-color]="color"
        (click)="onButtonClick()"
        (mouseenter)="value=value+1">
      {{title}}:{{value}}
  </button>
`,
  styleUrls: ['./button.component.css'],
  standalone: true,
})
export class ButtonComponent {
  @Input() title!: string;
  @Input() value!: number;
  color: string = "darkgreen";
  @Output() btnClick = new EventEmitter<string>();

  onButtonClick() {
    this.btnClick.emit(this.title);
  }
}
