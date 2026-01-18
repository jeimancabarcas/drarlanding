import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationService } from '../../services/animation.service';

@Component({
  selector: 'app-memberships',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './memberships.component.html',
  styleUrl: './memberships.component.css'
})
export class MembershipsComponent implements AfterViewInit {
  memberships = [
    {
      badge: '🏥',
      title: 'ACOME',
      description: 'Asociación Colombiana de Armonización Orofacial'
    },
    {
      badge: '🌐',
      title: 'Asociación Internacional',
      description: 'Miembro de Asociación Internacional de Rejuvenecimiento Facial'
    }
  ];

  constructor(private animationService: AnimationService) {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.animationService.animateOnScroll('#membresias .section-title', {
        start: 'top 80%',
        opacity: 0,
        y: 50,
        duration: 1
      });

      this.animationService.elasticIn('#membresias .membership-card', 0);
    }, 200);
  }
}
