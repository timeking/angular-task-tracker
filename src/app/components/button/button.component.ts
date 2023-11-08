import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
  standalone: true,
})
export class ButtonComponent {
  title: string = 'Добавить';
  color: string = "lightgreen";

  onButtonClick() {
    alert("button clicked!");
  }
}
