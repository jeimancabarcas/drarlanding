
import { Component, ChangeDetectionStrategy, ElementRef, AfterViewInit, OnDestroy, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

declare var gsap: any;
declare var ScrollTrigger: any;

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'block' },
  template: `
    <section id="contacto" class="py-24 bg-white relative overflow-hidden">
      <!-- Background Elements -->
      <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-60"></div>
        <div class="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-slate-50 to-transparent opacity-50"></div>
      </div>

      <div class="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <div class="text-center max-w-3xl mx-auto mb-16 contact-header opacity-0">
          <span class="text-blue-600 font-bold tracking-wider uppercase text-xs mb-3 block">Hablemos</span>
          <h2 class="text-4xl font-bold text-slate-900 mb-6">Agenda tu Valoración</h2>
          <p class="text-slate-600 text-lg leading-relaxed">
            El primer paso hacia tu mejor versión comienza aquí. Escríbenos para resolver tus dudas o programar tu cita presencial o virtual.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          <!-- Contact Info -->
          <div class="lg:col-span-5 space-y-8 contact-info">
            
            <div class="info-card opacity-0 bg-white border border-slate-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex items-start gap-4">
              <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 flex-shrink-0">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              </div>
              <div>
                <h3 class="font-bold text-slate-900 mb-1">Consultorio Principal</h3>
                <p class="text-slate-600 text-sm">Bocagrande, Cra 3 # 6-12<br>Edificio Medical Center, Cons. 504<br>Cartagena, Colombia</p>
              </div>
            </div>

            <div class="info-card opacity-0 bg-white border border-slate-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex items-start gap-4">
              <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 flex-shrink-0">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              </div>
              <div>
                <h3 class="font-bold text-slate-900 mb-1">Contacto Directo</h3>
                <p class="text-slate-600 text-sm mb-1">Citas y WhatsApp:</p>
                <a href="https://wa.me/573000000000" class="text-lg font-bold text-slate-900 hover:text-green-600 transition-colors">+57 300 000 0000</a>
              </div>
            </div>

            <div class="info-card opacity-0 bg-white border border-slate-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex items-start gap-4">
              <div class="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 flex-shrink-0">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <div>
                <h3 class="font-bold text-slate-900 mb-1">Correo Electrónico</h3>
                <p class="text-slate-600 text-sm mb-1">Consultas profesionales:</p>
                <a href="mailto:info@drandresrivera.com" class="font-medium text-blue-600 hover:underline">info&#64;drandresrivera.com</a>
              </div>
            </div>

          </div>

          <!-- Contact Form -->
          <div class="lg:col-span-7 contact-form opacity-0">
            <div class="bg-white rounded-3xl shadow-xl shadow-slate-200/50 p-8 md:p-10 border border-slate-100">
              <form [formGroup]="contactForm" (ngSubmit)="onSubmit()" class="space-y-6">
                
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <!-- Name -->
                  <div>
                    <label class="block text-sm font-bold text-slate-700 mb-2">Nombre Completo</label>
                    <input 
                      type="text" 
                      formControlName="name"
                      class="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white focus:ring-0 transition-all outline-none text-slate-800 placeholder:text-slate-400"
                      placeholder="Tu nombre"
                    >
                  </div>
                  <!-- Phone -->
                  <div>
                    <label class="block text-sm font-bold text-slate-700 mb-2">Teléfono / WhatsApp</label>
                    <input 
                      type="tel" 
                      formControlName="phone"
                      class="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white focus:ring-0 transition-all outline-none text-slate-800 placeholder:text-slate-400"
                      placeholder="+57 300..."
                    >
                  </div>
                </div>

                <!-- Service Interest -->
                <div>
                  <label class="block text-sm font-bold text-slate-700 mb-2">Estoy interesado en</label>
                  <select 
                    formControlName="interest"
                    class="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white focus:ring-0 transition-all outline-none text-slate-800"
                  >
                    <option value="">Selecciona un servicio...</option>
                    <option value="Valoración Integral">Valoración Médica Integral</option>
                    <option value="Armonización Facial">Armonización Orofacial</option>
                    <option value="Cirugía Corporal">Cirugía Corporal</option>
                    <option value="Cirugía Reconstructiva">Cirugía Reconstructiva</option>
                    <option value="Otro">Otro procedimiento</option>
                  </select>
                </div>

                <!-- Message -->
                <div>
                  <label class="block text-sm font-bold text-slate-700 mb-2">Mensaje</label>
                  <textarea 
                    formControlName="message"
                    rows="4"
                    class="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:bg-white focus:ring-0 transition-all outline-none text-slate-800 placeholder:text-slate-400 resize-none"
                    placeholder="Cuéntanos brevemente cómo podemos ayudarte..."
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  [disabled]="contactForm.invalid"
                  class="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-xl shadow-lg shadow-blue-200 hover:shadow-xl hover:-translate-y-1 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex justify-center items-center gap-2 group"
                >
                  <span>Enviar Mensaje a WhatsApp</span>
                  <svg class="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                </button>
                
                <p class="text-center text-xs text-slate-400 mt-4">
                  Al enviar este formulario aceptas ser contactado vía WhatsApp para coordinar tu valoración.
                </p>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  `
})
export class ContactComponent implements AfterViewInit, OnDestroy {
  contactForm: FormGroup;
  ctx: any;

  constructor(private fb: FormBuilder, private el: ElementRef) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      interest: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const val = this.contactForm.value;
      const text = `Hola Dr. Rivera, mi nombre es ${val.name}. Me gustaría información sobre ${val.interest}. ${val.message}`;
      const url = `https://wa.me/573000000000?text=${encodeURIComponent(text)}`;
      window.open(url, '_blank');
      this.contactForm.reset();
    }
  }

  ngAfterViewInit() {
    this.ctx = gsap.context(() => {
        // Ensure elements are initially hidden
        gsap.set('.contact-header', { y: 30, opacity: 0 });
        gsap.set('.info-card', { x: -30, opacity: 0 });
        gsap.set('.contact-form', { x: 30, opacity: 0 });

        gsap.to('.contact-header', {
            scrollTrigger: { 
                trigger: '.contact-header', 
                start: 'top 90%', 
                toggleActions: 'play none none none' 
            },
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out'
        });

        gsap.to('.info-card', {
            scrollTrigger: { 
                trigger: '.contact-info', 
                start: 'top 85%', 
                toggleActions: 'play none none none'
            },
            x: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power2.out'
        });

        gsap.to('.contact-form', {
            scrollTrigger: { 
                trigger: '.contact-form', 
                start: 'top 85%', 
                toggleActions: 'play none none none'
            },
            x: 0,
            opacity: 1,
            duration: 1,
            ease: 'power2.out'
        });
    }, this.el);
  }

  ngOnDestroy() {
    this.ctx?.revert();
  }
}
