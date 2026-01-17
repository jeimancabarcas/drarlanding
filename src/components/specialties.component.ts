
import { Component, ChangeDetectionStrategy, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';

declare var gsap: any;
declare var ScrollTrigger: any;

@Component({
  selector: 'app-specialties',
  standalone: true,
  imports: [RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="especialidades" class="py-24 bg-white">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div class="text-center max-w-3xl mx-auto mb-20 title-anim">
          <span class="text-blue-600 font-bold tracking-wider uppercase text-xs mb-3 block">Nuestros Servicios</span>
          <h2 class="text-4xl font-bold text-slate-900 mb-6">Medicina Integral & Estética</h2>
          <p class="text-slate-600 text-lg leading-relaxed">
            Un portafolio completo diseñado para mejorar tu calidad de vida, desde la salud funcional hasta la armonía estética.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 services-grid">
          
          <!-- Item 1: Medicina Integral -->
          <div class="service-card group rounded-3xl overflow-hidden bg-slate-50 hover:bg-white border border-slate-100 hover:border-blue-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
             <div class="h-48 overflow-hidden relative">
                <img src="https://picsum.photos/seed/integral_med/600/400" alt="Medicina Integral" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
                <div class="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors"></div>
             </div>
             <div class="p-8">
               <h3 class="text-xl font-bold text-slate-900 mb-3">Medicina Integral</h3>
               <p class="text-slate-600 text-sm leading-relaxed mb-4">
                 Evaluación holística del paciente. No solo tratamos síntomas, optimizamos tu salud general para potenciar los resultados estéticos y funcionales.
               </p>
               <a [routerLink]="['/servicio', 'medicina-integral']" class="text-blue-600 font-bold text-sm hover:underline flex items-center gap-1 group/link cursor-pointer">
                 Saber más <span class="group-hover/link:translate-x-1 transition-transform">&rarr;</span>
               </a>
             </div>
          </div>

          <!-- Item 2: Armonización -->
          <div class="service-card group rounded-3xl overflow-hidden bg-slate-50 hover:bg-white border border-slate-100 hover:border-blue-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
             <div class="h-48 overflow-hidden relative">
                <img src="https://picsum.photos/seed/face_inject/600/400" alt="Armonización Facial" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
                <div class="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors"></div>
             </div>
             <div class="p-8">
               <h3 class="text-xl font-bold text-slate-900 mb-3">Armonización Orofacial</h3>
               <p class="text-slate-600 text-sm leading-relaxed mb-4">
                 Rejuvenecimiento facial sin cirugía. Uso de rellenos y bioestimuladores para resaltar tu belleza natural con mínima invasión.
               </p>
               <a [routerLink]="['/servicio', 'armonizacion']" class="text-blue-600 font-bold text-sm hover:underline flex items-center gap-1 group/link cursor-pointer">
                 Saber más <span class="group-hover/link:translate-x-1 transition-transform">&rarr;</span>
               </a>
             </div>
          </div>

          <!-- Item 3: Cirugía Reconstructiva -->
          <div class="service-card group rounded-3xl overflow-hidden bg-slate-50 hover:bg-white border border-slate-100 hover:border-blue-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
             <div class="h-48 overflow-hidden relative">
                <img src="https://picsum.photos/seed/hand_surgery/600/400" alt="Cirugía de Mano" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
                <div class="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors"></div>
             </div>
             <div class="p-8">
               <h3 class="text-xl font-bold text-slate-900 mb-3">Cirugía Reconstructiva</h3>
               <p class="text-slate-600 text-sm leading-relaxed mb-4">
                 Restauración funcional y estética de alta complejidad, incluyendo cirugía de mano y manejo de trauma.
               </p>
               <a [routerLink]="['/servicio', 'reconstructiva']" class="text-blue-600 font-bold text-sm hover:underline flex items-center gap-1 group/link cursor-pointer">
                 Saber más <span class="group-hover/link:translate-x-1 transition-transform">&rarr;</span>
               </a>
             </div>
          </div>

          <!-- Item 4: Corporal -->
          <div class="service-card group rounded-3xl overflow-hidden bg-slate-50 hover:bg-white border border-slate-100 hover:border-blue-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
             <div class="h-48 overflow-hidden relative">
                <img src="https://picsum.photos/seed/body_contour/600/400" alt="Cirugía Corporal" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
                <div class="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors"></div>
             </div>
             <div class="p-8">
               <h3 class="text-xl font-bold text-slate-900 mb-3">Cirugía Estética Corporal</h3>
               <p class="text-slate-600 text-sm leading-relaxed mb-4">
                 Escultura corporal definida. Lipoescultura, abdominoplastia y procedimientos de contorno con visión artística.
               </p>
               <a [routerLink]="['/servicio', 'corporal']" class="text-blue-600 font-bold text-sm hover:underline flex items-center gap-1 group/link cursor-pointer">
                 Saber más <span class="group-hover/link:translate-x-1 transition-transform">&rarr;</span>
               </a>
             </div>
          </div>

          <!-- Item 5: Arte Médico -->
          <div class="service-card group rounded-3xl overflow-hidden bg-slate-50 hover:bg-white border border-slate-100 hover:border-blue-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
             <div class="h-48 overflow-hidden relative">
                <img src="https://picsum.photos/seed/art_sculpt/600/400" alt="Arte Médico" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
                <div class="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors"></div>
             </div>
             <div class="p-8">
               <h3 class="text-xl font-bold text-slate-900 mb-3">Visión Artística</h3>
               <p class="text-slate-600 text-sm leading-relaxed mb-4">
                 Aplicación de cánones artísticos en cada procedimiento. La medicina es el lienzo donde restauramos la armonía.
               </p>
               <a [routerLink]="['/servicio', 'arte-medico']" class="text-blue-600 font-bold text-sm hover:underline flex items-center gap-1 group/link cursor-pointer">
                 Saber más <span class="group-hover/link:translate-x-1 transition-transform">&rarr;</span>
               </a>
             </div>
          </div>

        </div>
      </div>
    </section>
  `
})
export class SpecialtiesComponent implements AfterViewInit, OnDestroy {
  ctx: any;
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.ctx = gsap.context(() => {
      // Re-trigger ScrollTrigger logic since we might be coming back from a route
      ScrollTrigger.refresh();

      // Title Animation
      gsap.from('.title-anim', {
        scrollTrigger: { trigger: '.title-anim', start: 'top 85%' },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out'
      });

      // Batch Services Animation
      gsap.from('.service-card', {
        scrollTrigger: { 
          trigger: '.services-grid', 
          start: 'top 75%' 
        },
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power1.out'
      });
    }, this.el);
  }

  ngOnDestroy() {
    this.ctx?.revert();
  }
}
