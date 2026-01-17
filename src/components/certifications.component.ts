
import { Component, ChangeDetectionStrategy, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';

declare var gsap: any;

@Component({
  selector: 'app-certifications',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="formacion" class="py-24 bg-slate-50 relative overflow-hidden">
      <!-- Background pattern -->
      <div class="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div class="text-center mb-16 header-anim opacity-0 -translate-y-8">
          <h2 class="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Formación Académica</h2>
          <p class="text-slate-600 max-w-2xl mx-auto">
            La excelencia se construye con educación continua. Mi respaldo académico garantiza procedimientos seguros y actualizados.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 cert-grid">
           <!-- Card 1 -->
           <div class="cert-card opacity-0 translate-y-12 bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-blue-200 group">
             <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
               <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path></svg>
             </div>
             <h3 class="text-lg font-bold text-slate-900 mb-2">Máster en Cirugía Plástica Estética</h3>
             <p class="text-blue-600 font-medium text-sm mb-4">TECH Universidad Tecnológica</p>
             <span class="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-full group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">Título Propio</span>
           </div>

           <!-- Card 2 -->
           <div class="cert-card opacity-0 translate-y-12 bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-blue-200 group">
             <div class="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center text-cyan-600 mb-6 group-hover:scale-110 transition-transform duration-300">
               <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
             </div>
             <h3 class="text-lg font-bold text-slate-900 mb-2">Docencia Universitaria</h3>
             <p class="text-blue-600 font-medium text-sm mb-4">Pontificia Universidad Javeriana</p>
             <span class="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-full group-hover:bg-cyan-50 group-hover:text-cyan-600 transition-colors">Diplomado 2024</span>
           </div>

           <!-- Card 3 -->
           <div class="cert-card opacity-0 translate-y-12 bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-blue-200 group">
             <div class="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 transition-transform duration-300">
               <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
             </div>
             <h3 class="text-lg font-bold text-slate-900 mb-2">Médico Cirujano</h3>
             <p class="text-blue-600 font-medium text-sm mb-4">Universidad de Cartagena</p>
             <span class="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-full group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">Formación Base</span>
           </div>
        </div>

      </div>
    </section>
  `
})
export class CertificationsComponent implements AfterViewInit, OnDestroy {
  ctx: any;
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.ctx = gsap.context(() => {
      // Header Animation
      gsap.to('.header-anim', {
        scrollTrigger: { trigger: '.header-anim', start: 'top 85%' },
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: 'power2.out'
      });

      // Cards Stagger
      gsap.to('.cert-card', {
        scrollTrigger: { trigger: '.cert-grid', start: 'top 80%' },
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power2.out'
      });
    }, this.el);
  }

  ngOnDestroy() {
    this.ctx?.revert();
  }
}
