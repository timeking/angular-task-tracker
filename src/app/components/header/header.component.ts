import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [ ButtonComponent ],
})
export class HeaderComponent {
  title: string = 'Трекер Задач';
}
