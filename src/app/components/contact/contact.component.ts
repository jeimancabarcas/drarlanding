import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AnimationService } from '../../services/animation.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements AfterViewInit {
  contactForm = {
    name: '',
    email: '',
    phone: '',
    message: ''
  };

  constructor(private animationService: AnimationService) {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.animationService.animateOnScroll('#contacto .section-title', {
        start: 'top 80%',
        opacity: 0,
        y: 50,
        duration: 1
      });

      this.animationService.fadeInLeft('#contacto .contact-info h3', 0);
      this.animationService.fadeInLeft('#contacto .contact-info > p', 0.2);
      this.animationService.fadeInLeft('#contacto .contact-item', 0);
      this.animationService.fadeInRight('#contacto .contact-form-wrapper', 0);
    }, 200);
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
    this.contactForm = {
      name: '',
      email: '',
      phone: '',
      message: ''
    };
  }
}
