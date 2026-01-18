import { Component, AfterViewInit } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { SpecialtiesComponent } from './components/specialties/specialties.component';
import { MembershipsComponent } from './components/memberships/memberships.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { AnimationService } from './services/animation.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    SpecialtiesComponent,
    MembershipsComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit {
  constructor(private animationService: AnimationService) {}

  ngAfterViewInit(): void {
    this.animationService.animateHeader();
  }
}
