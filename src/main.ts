import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import routeConfig from "./app/routes";
import {provideRouter} from "@angular/router";
import {LOCALE_ID} from "@angular/core";

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routeConfig),
    { provide: LOCALE_ID, useValue: 'ru-RU' }
  ]
})
  .catch(err => console.error(err));
