import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [ HeaderComponent ]
})
export class AppComponent {
  title: string = 'Трекер Задач';
}
