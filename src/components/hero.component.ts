
import { Component, ChangeDetectionStrategy, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

declare var gsap: any;

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [NgOptimizedImage],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="inicio" class="relative pt-32 pb-20 lg:pt-40 lg:pb-32 min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-b from-blue-50/50 to-white hero-container">
      
      <!-- Decorative Blobs -->
      <div class="blob absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl opacity-60"></div>
      <div class="blob absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-cyan-100/50 rounded-full blur-3xl opacity-60"></div>

      <div class="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <!-- Text Content -->
          <div class="lg:col-span-6 order-2 lg:order-1 space-y-8 text-center lg:text-left">
            <div class="hero-text-block">
              <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/80 text-blue-700 text-xs font-bold tracking-wide uppercase mb-6 border border-blue-200">
                <span class="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                Medicina Integral & Estética
              </div>
              <h1 class="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-6">
                Tu Bienestar,<br>
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Nuestra Prioridad.</span>
              </h1>
            </div>
            
            <p class="hero-text-block text-xl text-slate-600 leading-relaxed max-w-lg mx-auto lg:mx-0 font-normal">
              Dr. Andres Rivera Ariza. Un enfoque moderno que conecta la salud física con la armonía estética. 
              Resultados naturales, ciencia avanzada y un trato humano.
            </p>
            
            <div class="hero-text-block flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <a href="#contacto" class="px-8 py-4 bg-blue-600 text-white rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-200 hover:shadow-2xl hover:-translate-y-1 transform active:scale-95">
                Iniciar Transformación
              </a>
              <a href="#sobre-mi" class="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-2xl font-bold hover:border-blue-300 hover:text-blue-600 transition-all shadow-sm hover:shadow-md transform active:scale-95">
                Conocer al Doctor
              </a>
            </div>

            <!-- Trust Badges -->
            <div class="hero-text-block pt-8 flex flex-wrap gap-8 justify-center lg:justify-start opacity-80">
               <div class="flex items-center gap-2">
                 <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                 <span class="text-sm font-medium text-slate-600">Tecnología Avanzada</span>
               </div>
               <div class="flex items-center gap-2">
                 <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                 <span class="text-sm font-medium text-slate-600">Visión Global</span>
               </div>
            </div>
          </div>

          <!-- Image Content -->
          <div class="hero-image-wrapper lg:col-span-6 order-1 lg:order-2 relative">
             <!-- Abstract Shape Background -->
             <div class="hero-bg-shape absolute inset-0 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-[2.5rem] rotate-3 transform scale-95 opacity-10"></div>
             
             <div class="hero-image relative rounded-[2rem] overflow-hidden shadow-2xl shadow-blue-200/50 aspect-[4/5] md:aspect-square lg:aspect-[4/5] bg-white ring-8 ring-white">
                <img 
                  ngSrc="https://picsum.photos/seed/blue_doctor_profile/1000/1200" 
                  width="1200" 
                  height="1000" 
                  alt="Dr. Andres Rivera en Quirófano" 
                  class="object-cover w-full h-full"
                  priority
                />
                
                <!-- Floating Card -->
                <div class="hero-card absolute bottom-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg max-w-[200px] border border-white/50">
                  <div class="flex items-center gap-3 mb-2">
                    <div class="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    </div>
                    <span class="text-xs font-bold text-slate-800">100% Satisfacción</span>
                  </div>
                  <p class="text-[10px] text-slate-500 leading-tight">Comprometidos con tu sonrisa y bienestar integral.</p>
                </div>
             </div>
          </div>
          
        </div>
      </div>
    </section>
  `
})
export class HeroComponent implements AfterViewInit, OnDestroy {
  ctx: any;

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.ctx = gsap.context(() => {
      // Intro Timeline using .from() for safety (if GSAP fails, elements are visible)
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from('.hero-text-block', {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.15
      })
      .from('.hero-image-wrapper', {
        scale: 0.9,
        opacity: 0,
        duration: 1.2,
        ease: 'elastic.out(1, 0.75)'
      }, '-=0.8')
      .from('.hero-card', {
        y: 20,
        opacity: 0,
        duration: 0.8
      }, '-=0.5');

      // Continuous Floating Animation
      gsap.to('.hero-image', {
        y: -15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });

      // Mouse Parallax
      const container = this.el.nativeElement.querySelector('.hero-container');
      if (container) {
        container.addEventListener('mousemove', (e: MouseEvent) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 40;
            const y = (e.clientY / window.innerHeight - 0.5) * 40;
            
            gsap.to('.blob', {
            x: x,
            y: y,
            duration: 1,
            ease: 'power1.out'
            });
            
            gsap.to('.hero-bg-shape', {
            rotation: 3 + (x * 0.1),
            duration: 1
            });
        });
      }

    }, this.el);
  }

  ngOnDestroy() {
    this.ctx?.revert();
  }
}
