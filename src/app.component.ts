
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
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit() {
    if (typeof gsap !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }
  }
}
