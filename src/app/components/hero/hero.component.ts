import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationService } from '../../services/animation.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements AfterViewInit {
  constructor(private animationService: AnimationService) {}

  ngAfterViewInit(): void {
    this.animationService.animateHero();
    this.animationService.rotateContinuous('.circle-1', 20);
    this.animationService.rotateContinuous('.circle-2', 25);
    this.animationService.rotateContinuous('.circle-3', 30);
  }
}
