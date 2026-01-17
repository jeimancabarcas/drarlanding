
import { Component, ChangeDetectionStrategy, AfterViewInit } from '@angular/core';
import { HeroComponent } from './hero.component';
import { AboutComponent } from './about.component';
import { CertificationsComponent } from './certifications.component';
import { SpecialtiesComponent } from './specialties.component';
import { MembershipsComponent } from './memberships.component';

declare var gsap: any;
declare var ScrollTrigger: any;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    AboutComponent,
    CertificationsComponent,
    SpecialtiesComponent,
    MembershipsComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-hero></app-hero>
    <app-about></app-about>
    <app-certifications></app-certifications>
    <app-specialties></app-specialties>
    <app-memberships></app-memberships>
  `
})
export class HomeComponent implements AfterViewInit {
  ngAfterViewInit() {
    // Ensure GSAP plugins are registered
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
      ScrollTrigger.refresh();
    }
  }
}
