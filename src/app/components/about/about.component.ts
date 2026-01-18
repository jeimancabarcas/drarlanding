import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationService } from '../../services/animation.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements AfterViewInit {
  constructor(private animationService: AnimationService) {}

  ngAfterViewInit(): void {
    this.animationService.animateOnScroll('.section-title', {
      start: 'top 80%',
      opacity: 0,
      y: 50,
      duration: 1
    });

    this.animationService.fadeInLeft('.about-text p', 0);
    this.animationService.fadeInUp('.highlight-item', 0);
  }
}
