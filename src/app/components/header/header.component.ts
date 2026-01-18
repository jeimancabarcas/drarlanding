import { Component, OnInit, signal, AfterViewInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit, AfterViewInit {
  isMenuOpen = signal(false);
  private menuAnimation: gsap.core.Timeline | null = null;
  private menuElement: HTMLElement | null = null;

  ngOnInit(): void {
    this.setupSmoothScroll();
  }

  ngAfterViewInit(): void {
    // Obtener referencia al menú
    this.menuElement = document.querySelector('.mobile-menu') as HTMLElement;
    
    // Inicializar el menú como cerrado
    if (this.menuElement) {
      gsap.set(this.menuElement, { 
        height: 0, 
        opacity: 0,
        overflow: 'hidden'
      });
      gsap.set('.menu-item', { x: -50, opacity: 0 });
    }
  }

  toggleMenu(): void {
    this.isMenuOpen.update(value => {
      const newValue = !value;
      // Animar después de actualizar el signal
      setTimeout(() => {
        this.animateMenu(newValue);
      }, 10);
      return newValue;
    });
  }

  closeMenu(): void {
    this.isMenuOpen.set(false);
    setTimeout(() => {
      this.animateMenu(false);
    }, 10);
  }

  private animateMenu(isOpen: boolean): void {
    if (typeof window === 'undefined' || !this.menuElement) {
      // Si el elemento no existe aún, intentar obtenerlo
      this.menuElement = document.querySelector('.mobile-menu') as HTMLElement;
      if (!this.menuElement) return;
    }

    const menuItems = document.querySelectorAll('.menu-item');

    // Limpiar animación anterior si existe
    if (this.menuAnimation) {
      this.menuAnimation.kill();
    }

    if (isOpen) {
      // Agregar clase para habilitar pointer events
      this.menuElement.classList.add('menu-open');
      
      // Obtener altura real del contenido
      gsap.set(this.menuElement, { height: 'auto', overflow: 'hidden' });
      const height = this.menuElement.scrollHeight;
      gsap.set(this.menuElement, { height: 0, overflow: 'hidden' });

      // Animación de apertura
      this.menuAnimation = gsap.timeline();
      
      // Animar el contenedor del menú
      this.menuAnimation
        .to(this.menuElement, {
          height: height,
          opacity: 1,
          duration: 0.15,
          ease: 'power1.out',
          overflow: 'hidden',
          onComplete: () => {
            // Asegurar que no haya scroll después de la animación
            if (this.menuElement) {
              this.menuElement.style.overflow = 'hidden';
              this.menuElement.style.maxHeight = height + 'px';
            }
          }
        })
        // Animar los items con efecto escalonado
        .to(menuItems, {
          x: 0,
          opacity: 1,
          duration: 0.3,
          stagger: 0.05,
          ease: 'back.out(1.4)'
        }, '-=0.15');
    } else {
      // Remover clase para deshabilitar pointer events
      this.menuElement.classList.remove('menu-open');
      
      // Animación de cierre
      this.menuAnimation = gsap.timeline();
      
      // Animar los items primero
      this.menuAnimation
        .to(menuItems, {
          x: -50,
          opacity: 0,
          duration: 0.2,
          stagger: 0.03,
          ease: 'power2.in'
        })
        // Luego cerrar el contenedor
        .to(this.menuElement, {
          height: 0,
          opacity: 0,
          duration: 0.2,
          ease: 'power2.in',
          overflow: 'hidden',
          onComplete: () => {
            // Limpiar estilos después de cerrar
            if (this.menuElement) {
              this.menuElement.style.maxHeight = '0';
            }
          }
        }, '-=0.05');
    }
  }

  private setupSmoothScroll(): void {
    // Usar setTimeout para asegurar que el DOM esté listo
    setTimeout(() => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
          e.preventDefault();
          const href = (anchor as HTMLAnchorElement).getAttribute('href');
          const target = href ? document.querySelector(href) : null;
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
            // Cerrar menú móvil si está abierto
            this.closeMenu();
          }
        });
      });
    }, 100);
  }
}
