
import { Component, ChangeDetectionStrategy, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar.component';
import { FooterComponent } from './components/footer.component';
import { WhatsappComponent } from './components/whatsapp.component';

declare var gsap: any;
declare var ScrollTrigger: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    WhatsappComponent,
    RouterOutlet
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-navbar></app-navbar>
    <main>
      <router-outlet></router-outlet>
    </main>
    <app-whatsapp></app-whatsapp>
    <app-footer></app-footer>
  `
})
export class AppComponent implements AfterViewInit {
  constructor() {
    console.log('AppComponent initialized');
  }

  ngAfterViewInit() {
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }
  }
}
