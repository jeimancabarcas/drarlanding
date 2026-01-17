
import { bootstrapApplication } from '@angular/platform-browser';
import { provideZonelessChangeDetection } from '@angular/core';
import { provideRouter, withHashLocation, withInMemoryScrolling, withComponentInputBinding } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './app.routes';

console.log('Starting application bootstrap...');

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
}).then(() => {
  console.log('Application bootstrapped successfully');
}).catch((err) => {
  console.error('Error bootstrapping application:', err);
  document.body.innerHTML = `<div style="color:red; padding: 20px;"><h1>Application Error</h1><pre>${err.message}</pre></div>`;
});
