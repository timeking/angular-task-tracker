import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
  <button class="btn" 
        [style.background-color]="color"
        (click)="onButtonClick()"
        (mouseenter)="onValueChange()">
      {{title}}:{{buttonValue}}
  </button>
`,
  styleUrls: ['./button.component.css'],
  standalone: true,
})
export class ButtonComponent {
  @Input() title!: string;
  @Input() buttonValue!: number;
  @Output() buttonValueChange = new EventEmitter<number>();
  @Output() btnClick = new EventEmitter<string>();
  color: string = "darkgreen";

  onButtonClick() {
    this.btnClick.emit(this.title);
  }

  onValueChange() {
    this.buttonValue += 1;
    this.buttonValueChange.emit(this.buttonValue);
  }
}
