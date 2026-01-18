import { Injectable } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {
  private isInitialized = false;

  constructor() {
    if (typeof window !== 'undefined' && !this.isInitialized) {
      gsap.registerPlugin(ScrollTrigger);
      this.isInitialized = true;
    }
  }

  /**
   * Anima elementos al aparecer en el viewport
   */
  animateOnScroll(
    selector: string,
    options: {
      start?: string;
      opacity?: number;
      y?: number;
      x?: number;
      duration?: number;
      delay?: number;
      stagger?: number;
    } = {}
  ): void {
    if (typeof window === 'undefined') return;

    const {
      start = 'top 85%',
      opacity = 0,
      y = 50,
      x = 0,
      duration = 1,
      delay = 0,
      stagger = 0
    } = options;

    // Usar setTimeout para asegurar que el DOM esté completamente renderizado
    setTimeout(() => {
      const elements = document.querySelectorAll(selector);
      
      if (elements.length === 0) return;
      
      elements.forEach((element: any, index: number) => {
        // Establecer estado inicial
        gsap.set(element, { opacity, y, x });
        
        gsap.to(element, {
          scrollTrigger: {
            trigger: element,
            start,
            toggleActions: 'play none none none'
          },
          opacity: 1,
          y: 0,
          x: 0,
          duration,
          delay: delay + index * stagger,
          ease: 'power3.out'
        });
      });
    }, 100);
  }

  /**
   * Anima elementos con efecto de entrada desde abajo
   */
  fadeInUp(selector: string, delay: number = 0): void {
    if (typeof window === 'undefined') return;
    
    setTimeout(() => {
      const elements = document.querySelectorAll(selector);
      if (elements.length === 0) return;
      
      elements.forEach((element: any, index: number) => {
        gsap.set(element, { opacity: 0, y: 50 });
        gsap.to(element, {
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            toggleActions: 'play none none none'
          },
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: delay + index * 0.1,
          ease: 'power2.out'
        });
      });
    }, 100);
  }

  /**
   * Anima elementos con efecto de entrada desde la izquierda
   */
  fadeInLeft(selector: string, delay: number = 0): void {
    if (typeof window === 'undefined') return;
    
    setTimeout(() => {
      const elements = document.querySelectorAll(selector);
      if (elements.length === 0) return;
      
      elements.forEach((element: any, index: number) => {
        gsap.set(element, { opacity: 0, x: -50 });
        gsap.to(element, {
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            toggleActions: 'play none none none'
          },
          opacity: 1,
          x: 0,
          duration: 0.8,
          delay: delay + index * 0.1,
          ease: 'power2.out'
        });
      });
    }, 100);
  }

  /**
   * Anima elementos con efecto de entrada desde la derecha
   */
  fadeInRight(selector: string, delay: number = 0): void {
    if (typeof window === 'undefined') return;
    
    setTimeout(() => {
      const elements = document.querySelectorAll(selector);
      if (elements.length === 0) return;
      
      elements.forEach((element: any, index: number) => {
        gsap.set(element, { opacity: 0, x: 50 });
        gsap.to(element, {
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            toggleActions: 'play none none none'
          },
          opacity: 1,
          x: 0,
          duration: 0.8,
          delay: delay + index * 0.1,
          ease: 'power2.out'
        });
      });
    }, 100);
  }

  /**
   * Anima elementos con efecto de escala
   */
  scaleIn(selector: string, delay: number = 0): void {
    if (typeof window === 'undefined') return;

    setTimeout(() => {
      const elements = document.querySelectorAll(selector);
      if (elements.length === 0) return;
      
      elements.forEach((element: any, index: number) => {
        gsap.set(element, { opacity: 0, scale: 0.8 });
        gsap.to(element, {
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            toggleActions: 'play none none none'
          },
          opacity: 1,
          scale: 1,
          duration: 1,
          delay: delay + index * 0.1,
          ease: 'back.out(1.7)'
        });
      });
    }, 100);
  }

  /**
   * Anima elementos con efecto elástico
   */
  elasticIn(selector: string, delay: number = 0): void {
    if (typeof window === 'undefined') return;

    setTimeout(() => {
      const elements = document.querySelectorAll(selector);
      if (elements.length === 0) return;
      
      elements.forEach((element: any, index: number) => {
        gsap.set(element, { opacity: 0, scale: 0.8 });
        gsap.to(element, {
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            toggleActions: 'play none none none'
          },
          opacity: 1,
          scale: 1,
          duration: 1,
          delay: delay + index * 0.2,
          ease: 'elastic.out(1, 0.5)'
        });
      });
    }, 100);
  }

  /**
   * Anima elementos con rotación continua
   */
  rotateContinuous(selector: string, duration: number = 20): void {
    if (typeof window === 'undefined') return;

    gsap.to(selector, {
      rotation: 360,
      duration,
      repeat: -1,
      ease: 'none'
    });
  }

  /**
   * Anima elementos con efecto hover mejorado
   */
  setupHoverEffect(selector: string): void {
    if (typeof window === 'undefined') return;

    const elements = document.querySelectorAll(selector);
    
    elements.forEach((element: any) => {
      element.addEventListener('mouseenter', () => {
        gsap.to(element, {
          scale: 1.05,
          duration: 0.3,
          ease: 'power2.out'
        });
      });

      element.addEventListener('mouseleave', () => {
        gsap.to(element, {
          scale: 1,
          duration: 0.3,
          ease: 'power2.out'
        });
      });
    });
  }

  /**
   * Anima el header al cargar
   */
  animateHeader(): void {
    if (typeof window === 'undefined') return;

    gsap.from('.header', {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    });
  }

  /**
   * Anima el hero section
   */
  animateHero(): void {
    if (typeof window === 'undefined') return;

    setTimeout(() => {
      const titleLines = document.querySelectorAll('.title-line');
      const subtitle = document.querySelector('.hero-subtitle');
      const description = document.querySelector('.hero-description');
      const buttons = document.querySelector('.hero-buttons');

      if (titleLines.length === 0) return;

      gsap.set('.title-line', { opacity: 0, y: 50 });
      if (subtitle) gsap.set(subtitle, { opacity: 0, y: 30 });
      if (description) gsap.set(description, { opacity: 0, y: 30 });
      if (buttons) gsap.set(buttons, { opacity: 0, y: 30 });

      const heroTimeline = gsap.timeline();
      
      heroTimeline
        .to('.title-line', {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out'
        })
        .to('.hero-subtitle', {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out'
        }, '-=0.5')
        .to('.hero-description', {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out'
        }, '-=0.4')
        .to('.hero-buttons', {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out'
        }, '-=0.4');
    }, 100);
  }
}
