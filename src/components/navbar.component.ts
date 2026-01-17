
import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <nav class="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="flex justify-between items-center h-20">
          <!-- Logo -->
          <div class="flex-shrink-0 flex items-center gap-3">
            <div class="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-blue-200 shadow-lg">
              AR
            </div>
            <a routerLink="/" class="group flex flex-col cursor-pointer">
              <span class="font-bold text-xl text-slate-900 leading-none group-hover:text-blue-600 transition-colors">Dr. Andres Rivera</span>
              <span class="text-[11px] font-medium tracking-wider text-slate-500 uppercase mt-1">Medicina Integral</span>
            </a>
          </div>

          <!-- Desktop Menu -->
          <div class="hidden md:flex items-center space-x-1">
            <a routerLink="/" fragment="inicio" class="px-4 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all cursor-pointer">Inicio</a>
            <a routerLink="/" fragment="sobre-mi" class="px-4 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all cursor-pointer">Perfil</a>
            <a routerLink="/" fragment="formacion" class="px-4 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all cursor-pointer">Formación</a>
            <a routerLink="/" fragment="especialidades" class="px-4 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all cursor-pointer">Servicios</a>
            <a routerLink="/" fragment="contacto" class="px-4 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all cursor-pointer">Contacto</a>
            
            <div class="pl-4">
              <a href="https://wa.me/573000000000" target="_blank" class="px-6 py-2.5 bg-blue-600 text-white text-sm font-bold rounded-full hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 hover:shadow-blue-300 transform hover:-translate-y-0.5">
                Agendar Cita
              </a>
            </div>
          </div>

          <!-- Mobile menu button -->
          <div class="md:hidden flex items-center">
            <button (click)="toggleMenu()" class="text-slate-900 focus:outline-none p-2 bg-slate-50 rounded-lg hover:bg-slate-100">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                @if (!isOpen()) {
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                } @else {
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                }
              </svg>
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile Menu -->
      @if (isOpen()) {
        <div class="md:hidden bg-white border-b border-slate-100 absolute w-full left-0 shadow-xl">
          <div class="px-6 py-6 space-y-3 flex flex-col">
            <a routerLink="/" fragment="inicio" (click)="closeMenu()" class="block px-4 py-3 text-base font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-colors cursor-pointer">Inicio</a>
            <a routerLink="/" fragment="sobre-mi" (click)="closeMenu()" class="block px-4 py-3 text-base font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-colors cursor-pointer">Perfil</a>
            <a routerLink="/" fragment="formacion" (click)="closeMenu()" class="block px-4 py-3 text-base font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-colors cursor-pointer">Formación</a>
            <a routerLink="/" fragment="especialidades" (click)="closeMenu()" class="block px-4 py-3 text-base font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-colors cursor-pointer">Servicios</a>
            <a routerLink="/" fragment="contacto" (click)="closeMenu()" class="block px-4 py-3 text-base font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-colors cursor-pointer">Contacto</a>
            <a href="https://wa.me/573000000000" (click)="closeMenu()" class="block mt-4 px-4 py-3 bg-blue-600 text-white text-center font-bold rounded-xl shadow-md">
              Agendar Cita
            </a>
          </div>
        </div>
      }
    </nav>
  `
})
export class NavbarComponent {
  isOpen = signal(false);

  toggleMenu() {
    this.isOpen.update(v => !v);
  }

  closeMenu() {
    this.isOpen.set(false);
  }
}
