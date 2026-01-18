import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationService } from '../../services/animation.service';

@Component({
  selector: 'app-specialties',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './specialties.component.html',
  styleUrl: './specialties.component.css'
})
export class SpecialtiesComponent implements AfterViewInit {
  specialties = [
    {
      icon: '✨',
      title: 'Cirugía Plástica Estética',
      description: 'Procedimientos estéticos para realzar tu belleza natural con técnicas avanzadas y resultados naturales.'
    },
    {
      icon: '🔧',
      title: 'Cirugía Plástica Reconstructiva',
      description: 'Reconstrucción y restauración funcional con enfoque en mejorar la calidad de vida de los pacientes.'
    },
    {
      icon: '👄',
      title: 'Armonización Orofacial (ACOME)',
      description: 'Especialización en armonización facial con técnicas precisas y resultados armoniosos.'
    },
    {
      icon: '🌺',
      title: 'Rejuvenecimiento Facial',
      description: 'Técnicas avanzadas para el rejuvenecimiento facial con resultados naturales y duraderos.'
    }
  ];

  constructor(private animationService: AnimationService) {}

  ngAfterViewInit(): void {
    this.animationService.animateOnScroll('.section-title', {
      start: 'top 80%',
      opacity: 0,
      y: 50,
      duration: 1
    });

    this.animationService.scaleIn('.specialty-card', 0);
    this.animationService.setupHoverEffect('.specialty-card');
  }
}
