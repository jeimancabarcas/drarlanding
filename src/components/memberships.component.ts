
import { Component, ChangeDetectionStrategy, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';

declare var gsap: any;

@Component({
  selector: 'app-memberships',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="afiliaciones" class="py-24 bg-gradient-to-br from-blue-900 to-blue-800 text-white relative overflow-hidden">
      <!-- Decorative circles -->
      <div class="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-16 -mt-16 blur-2xl animate-pulse"></div>
      <div class="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500 opacity-10 rounded-full -ml-20 -mb-20 blur-3xl animate-pulse" style="animation-duration: 4s;"></div>

      <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <div class="text-center mb-16 opacity-0 scale-90 member-header">
           <h2 class="text-3xl md:text-4xl font-bold mb-4">Respaldo Científico</h2>
           <p class="text-blue-200 text-lg max-w-2xl mx-auto">
             Miembro activo de prestigiosas asociaciones que avalan la calidad y ética en cada procedimiento.
           </p>
        </div>
        
        <div class="flex flex-col md:flex-row justify-center gap-8 member-grid">
          
          <!-- Membership 1 -->
          <div class="member-card opacity-0 translate-y-12 bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 hover:bg-white/20 transition-all duration-300 w-full md:w-auto md:min-w-[300px] text-center">
             <div class="text-4xl font-bold text-cyan-300 mb-2">ACOME</div>
             <div class="w-12 h-1 bg-cyan-300 mx-auto rounded-full mb-4"></div>
             <p class="text-blue-50 font-medium">Asociación Colombiana de<br>Armonización Orofacial</p>
          </div>

          <!-- Membership 2 -->
          <div class="member-card opacity-0 translate-y-12 bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/20 hover:bg-white/20 transition-all duration-300 w-full md:w-auto md:min-w-[300px] text-center">
             <div class="text-4xl font-bold text-cyan-300 mb-2">IARF</div>
             <div class="w-12 h-1 bg-cyan-300 mx-auto rounded-full mb-4"></div>
             <p class="text-blue-50 font-medium">Asociación Internacional de<br>Rejuvenecimiento Facial</p>
          </div>

        </div>
      </div>
    </section>
  `
})
export class MembershipsComponent implements AfterViewInit, OnDestroy {
  ctx: any;
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.ctx = gsap.context(() => {
      gsap.to('.member-header', {
        scrollTrigger: { trigger: '.member-header', start: 'top 80%' },
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: 'back.out(1.7)'
      });

      gsap.to('.member-card', {
        scrollTrigger: { trigger: '.member-grid', start: 'top 80%' },
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'elastic.out(1, 0.75)'
      });
    }, this.el);
  }

  ngOnDestroy() {
    this.ctx?.revert();
  }
}
