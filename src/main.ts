
import { bootstrapApplication } from '@angular/platform-browser';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideRouter, withHashLocation, withInMemoryScrolling, withComponentInputBinding } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideZonelessChangeDetection(),
    provideRouter(
      routes, 
      withHashLocation(),
      withComponentInputBinding(),
      withInMemoryScrolling({
        scrollPositionRestoration: 'top', 
        anchorScrolling: 'enabled'
      })
    )
  ]
}).catch((err) => console.error(err));
