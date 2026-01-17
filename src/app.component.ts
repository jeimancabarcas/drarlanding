
import { Component, ChangeDetectionStrategy, OnInit, AfterViewInit } from '@angular/core';
import { NavbarComponent } from './components/navbar.component';
import { HeroComponent } from './components/hero.component';
import { AboutComponent } from './components/about.component';
import { CertificationsComponent } from './components/certifications.component';
import { SpecialtiesComponent } from './components/specialties.component';
import { MembershipsComponent } from './components/memberships.component';
import { FooterComponent } from './components/footer.component';
import { WhatsappComponent } from './components/whatsapp.component';

declare var gsap: any;
declare var ScrollTrigger: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    AboutComponent,
    CertificationsComponent,
    SpecialtiesComponent,
    MembershipsComponent,
    FooterComponent,
    WhatsappComponent
  ],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements AfterViewInit {
  ngAfterViewInit() {
    if (typeof gsap !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
      
      // Reveal body smoothly to prevent flash of unstyled content
      gsap.to('body', { autoAlpha: 1, duration: 0.5 });
    }
  }
}
