
import { Component, ChangeDetectionStrategy, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';

declare var gsap: any;
declare var ScrollTrigger: any;

@Component({
  selector: 'app-about',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="sobre-mi" class="py-24 bg-white overflow-hidden">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div class="flex flex-col md:flex-row gap-16 items-center">
          
          <!-- Modern Image Composition -->
          <div class="w-full md:w-1/2 relative about-images">
             <div class="grid grid-cols-2 gap-4">
                <!-- Image matching the 'Close up surgery' -->
                <img src="https://picsum.photos/seed/surgery_blue_scrubs/800/600" class="about-img rounded-2xl shadow-lg w-full h-64 object-cover mt-8 opacity-0 translate-y-12" alt="Cirugía y Procedimientos">
                
                <!-- Image matching the 'Aesthetic Injection' -->
                <img src="https://picsum.photos/seed/facial_injection_aesthetic/800/600" class="about-img rounded-2xl shadow-lg w-full h-80 object-cover opacity-0 translate-y-12" alt="Procedimientos Estéticos">
             </div>
             <!-- Decorative elements -->
             <div class="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[110%] h-[90%] bg-blue-50 rounded-[3rem] about-bg scale-0"></div>
          </div>

          <!-- Text Bio -->
          <div class="w-full md:w-1/2 about-text">
            <span class="text-blue-600 font-bold tracking-wider uppercase text-xs mb-2 block opacity-0 translate-x-10 reveal-text">¿Quién soy?</span>
            <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-6 opacity-0 translate-x-10 reveal-text">Dr. Andres Rivera Ariza</h2>
            
            <div class="space-y-4 text-lg text-slate-600 font-normal leading-relaxed">
              <p class="opacity-0 translate-x-10 reveal-text">
                Soy médico de la <strong class="text-slate-900">Universidad de Cartagena</strong>, y mi práctica va más allá de lo convencional. Entiendo la medicina no solo como una ciencia, sino como un arte que busca el equilibrio total del ser humano.
              </p>
              <p class="opacity-0 translate-x-10 reveal-text">
                Me caracterizo por un enfoque de <strong class="text-blue-600">Medicina Integral</strong>, donde la salud física y la estética se encuentran. Mi pasión por las <span class="text-slate-900 font-medium">artes plásticas</span> me permite tener una visión detallista y creativa, fundamental para la cirugía estética y reconstructiva.
              </p>
              <p class="opacity-0 translate-x-10 reveal-text">
                Creo firmemente en la proactividad y en construir relaciones médico-paciente basadas en la confianza y la empatía. Mi experiencia internacional y bilingüe me permite ofrecer una atención de clase mundial, siempre priorizando tu seguridad y bienestar.
              </p>
            </div>

            <!-- Soft skills tags -->
            <div class="mt-8 flex flex-wrap gap-3">
               <span class="skill-tag opacity-0 scale-50 px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-semibold hover:bg-blue-100 transition-colors cursor-default">Integralidad</span>
               <span class="skill-tag opacity-0 scale-50 px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-semibold hover:bg-blue-100 transition-colors cursor-default">Arte & Ciencia</span>
               <span class="skill-tag opacity-0 scale-50 px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-semibold hover:bg-blue-100 transition-colors cursor-default">Liderazgo</span>
               <span class="skill-tag opacity-0 scale-50 px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-semibold hover:bg-blue-100 transition-colors cursor-default">English Spoken</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  `
})
export class AboutComponent implements AfterViewInit, OnDestroy {
  ctx: any;
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.ctx = gsap.context(() => {
      // Images Animation
      gsap.to('.about-bg', {
        scrollTrigger: { trigger: '.about-images', start: 'top 80%' },
        scale: 1,
        duration: 1,
        ease: 'power2.out'
      });

      gsap.to('.about-img', {
        scrollTrigger: { trigger: '.about-images', start: 'top 75%' },
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
      });

      // Text Animation
      gsap.to('.reveal-text', {
        scrollTrigger: { trigger: '.about-text', start: 'top 80%' },
        x: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power2.out'
      });

      // Tags Pop
      gsap.to('.skill-tag', {
        scrollTrigger: { trigger: '.about-text', start: 'top 60%' },
        scale: 1,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: 'back.out(1.7)'
      });

    }, this.el);
  }

  ngOnDestroy() {
    this.ctx?.revert();
  }
}
