
import { Component, ChangeDetectionStrategy, inject, signal, effect, ElementRef, AfterViewInit, OnDestroy, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule, NgOptimizedImage } from '@angular/common';

declare var gsap: any;

interface ServiceData {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  content: string[];
  image: string;
  benefits: string[];
}

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, NgOptimizedImage],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="pt-24 min-h-screen bg-white pb-20 detail-container">
      
      <!-- Header / Breadcrumb -->
      <div class="max-w-7xl mx-auto px-6 lg:px-8 mb-12">
        <a routerLink="/" class="inline-flex items-center text-sm font-medium text-slate-500 hover:text-blue-600 transition-colors mb-6 group">
          <svg class="w-4 h-4 mr-1 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
          Volver al Inicio
        </a>
        <h1 class="text-4xl md:text-5xl font-bold text-slate-900 mb-4 detail-title">{{ service()?.title }}</h1>
        <p class="text-xl text-blue-600 font-medium detail-title">{{ service()?.subtitle }}</p>
      </div>

      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <!-- Content -->
          <div class="lg:col-span-7 space-y-8">
             <div class="prose prose-lg text-slate-600 leading-relaxed detail-content">
                @for (paragraph of service()?.content; track $index) {
                  <p class="mb-6">{{ paragraph }}</p>
                }
             </div>

             <div class="bg-blue-50 rounded-2xl p-8 border border-blue-100 detail-content">
               <h3 class="text-xl font-bold text-slate-900 mb-6">Beneficios Clave</h3>
               <ul class="space-y-4">
                 @for (benefit of service()?.benefits; track $index) {
                   <li class="flex items-start">
                     <div class="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-3 mt-0.5 flex-shrink-0">
                       <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                     </div>
                     <span class="text-slate-700 font-medium">{{ benefit }}</span>
                   </li>
                 }
               </ul>
             </div>
             
             <div class="pt-8 detail-content">
                <a href="https://wa.me/573000000000" target="_blank" class="inline-flex items-center justify-center px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-all shadow-lg shadow-green-200 hover:shadow-xl hover:-translate-y-1 w-full sm:w-auto">
                  <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                  Solicitar Valoración
                </a>
             </div>
          </div>

          <!-- Sidebar Image -->
          <div class="lg:col-span-5 relative lg:sticky lg:top-32 h-fit detail-image scale-95">
             <div class="absolute inset-0 bg-blue-600 rounded-2xl rotate-6 opacity-10 transform scale-95"></div>
             <img [src]="service()?.image" [alt]="service()?.title" class="relative rounded-2xl shadow-2xl w-full object-cover aspect-[3/4]">
          </div>

        </div>
      </div>
    </div>
  `
})
export class ServiceDetailComponent implements AfterViewInit, OnDestroy {
  id = input<string>();
  service = signal<ServiceData | null>(null);
  ctx: any;
  
  // Data Store
  private services: Record<string, ServiceData> = {
    'medicina-integral': {
      id: 'medicina-integral',
      title: 'Medicina Integral',
      subtitle: 'Un enfoque holístico para tu salud y bienestar.',
      image: 'https://picsum.photos/seed/integral_med/800/1200',
      description: 'La medicina integral no se limita a tratar síntomas; busca optimizar el funcionamiento biológico del cuerpo para potenciar la recuperación, la vitalidad y los resultados estéticos.',
      content: [
        'En mi consulta, la Medicina Integral es el pilar fundamental. Antes de cualquier procedimiento estético o quirúrgico, realizamos una evaluación exhaustiva de tu estado metabólico, hormonal y nutricional.',
        'Entendemos que la belleza externa es un reflejo de la salud interna. Tratamos la inflamación crónica, optimizamos el sistema inmunológico y equilibramos tu organismo para asegurar que cualquier intervención tenga una recuperación más rápida y resultados más duraderos.',
        'Este enfoque permite prevenir complicaciones, mejorar la calidad de la piel desde adentro y ofrecerte un plan de vida saludable que perdure en el tiempo.'
      ],
      benefits: [
        'Evaluación completa del estado de salud.',
        'Optimización metabólica pre y post quirúrgica.',
        'Planes de nutrición celular y sueroterapia.',
        'Mejor cicatrización y recuperación acelerada.'
      ]
    },
    'armonizacion': {
      id: 'armonizacion',
      title: 'Armonización Orofacial',
      subtitle: 'Rejuvenecimiento sutil, elegante y sin cirugía.',
      image: 'https://picsum.photos/seed/face_inject/800/1200',
      description: 'Procedimientos mínimamente invasivos diseñados para restaurar volúmenes, definir contornos y suavizar líneas de expresión respetando tu anatomía.',
      content: [
        'La Armonización Orofacial es el arte de equilibrar las facciones del rostro mediante técnicas no quirúrgicas. Mi filosofía es "menos es más": busco resultados que se vean naturales, donde te veas descansada/o y fresca/o, no diferente.',
        'Utilizamos productos de la más alta gama (ácido hialurónico, toxina botulínica, bioestimuladores de colágeno) para reposicionar tejidos que han caído con el tiempo, proyectar el mentón, definir la mandíbula o perfilar los labios.',
        'Cada rostro es un mapa único. No aplico "recetas" estándar, sino que analizo tus proporciones áureas para resaltar tus mejores rasgos con seguridad y precisión clínica.'
      ],
      benefits: [
        'Resultados inmediatos con mínima incapacidad.',
        'Productos biocompatibles y absorbibles de alta seguridad.',
        'Mejora la calidad de la piel y estimula colágeno.',
        'Prevención del envejecimiento prematuro (Anti-aging).'
      ]
    },
    'reconstructiva': {
      id: 'reconstructiva',
      title: 'Cirugía Reconstructiva',
      subtitle: 'Restaurando forma y función con precisión.',
      image: 'https://picsum.photos/seed/hand_surgery/800/1200',
      description: 'Intervenciones complejas para reparar tejidos afectados por traumas, condiciones congénitas o patologías, devolviendo la calidad de vida.',
      content: [
        'La cirugía reconstructiva es el alma de la especialidad. Va más allá de la estética; se trata de devolver la funcionalidad a una mano lesionada, cubrir defectos de la piel tras un trauma o reconstruir tejidos afectados.',
        'Tengo amplia experiencia en cirugía de mano y manejo de trauma de tejidos blandos. El objetivo siempre es lograr la máxima recuperación funcional posible, minimizando las secuelas estéticas de las cicatrices.',
        'Este tipo de procedimientos requiere un conocimiento anatómico profundo y una técnica meticulosa para reconectar estructuras vitales y asegurar la viabilidad de los tejidos.'
      ],
      benefits: [
        'Manejo especializado de trauma de mano.',
        'Corrección de cicatrices inestéticas o retráctiles.',
        'Resección y reconstrucción de lesiones en piel.',
        'Recuperación de la movilidad y funcionalidad.'
      ]
    },
    'corporal': {
      id: 'corporal',
      title: 'Cirugía Estética Corporal',
      subtitle: 'Esculpiendo tu figura con seguridad y arte.',
      image: 'https://picsum.photos/seed/body_contour/800/1200',
      description: 'Procedimientos quirúrgicos para moldear el contorno corporal, eliminar grasa localizada y tensar la piel, siempre bajo estrictos protocolos de seguridad.',
      content: [
        'La cirugía corporal moderna busca la definición y la armonía, no solo la reducción de volumen. Realizamos lipoescultura de alta definición, abdominoplastia y mamoplastia con un enfoque artístico.',
        'La seguridad es mi prioridad absoluta. Operamos en clínicas de alto nivel, con equipos multidisciplinarios y protocolos de seguridad del paciente rigurosos. La valoración prequirúrgica integral asegura que llegues al quirófano en las mejores condiciones.',
        'Entiendo el cuerpo como una escultura tridimensional. Trabajamos las luces y sombras naturales del cuerpo para lograr una figura atlética, estilizada y, sobre todo, proporcional a tu estructura ósea.'
      ],
      benefits: [
        'Lipoescultura con definición atlética.',
        'Manejo de la flacidez abdominal (Abdominoplastia).',
        'Protocolos de seguridad y recuperación rápida.',
        'Seguimiento postoperatorio estricto y personalizado.'
      ]
    },
    'arte-medico': {
      id: 'arte-medico',
      title: 'Visión Artística en Medicina',
      subtitle: 'Donde la ciencia se encuentra con la escultura.',
      image: 'https://picsum.photos/seed/art_sculpt/800/1200',
      description: 'La medicina estética no es solo técnica; es la capacidad de visualizar el resultado final antes de empezar. Mi formación artística guía mis manos.',
      content: [
        'Mi pasión por las artes plásticas no es un pasatiempo, es una herramienta fundamental en mi práctica médica. La cirugía plástica es, en esencia, escultura sobre tejido vivo.',
        'Tener un ojo entrenado en proporciones, simetría, volumen y armonía me permite ver detalles que la técnica pura a veces pasa por alto. Entiendo cómo la luz incide sobre el rostro o el cuerpo y cómo crear contornos que se vean bellos desde cualquier ángulo.',
        'Esta sensibilidad artística, combinada con el rigor científico, es lo que define mi sello personal: resultados que no se ven "operados", sino perfeccionados.'
      ],
      benefits: [
        'Análisis de proporciones áureas.',
        'Resultados naturales y armónicos.',
        'Atención obsesiva al detalle.',
        'Creatividad aplicada a la solución de problemas complejos.'
      ]
    }
  };

  constructor(private el: ElementRef) {
    effect(() => {
      const id = this.id();
      if (id && this.services[id]) {
        this.service.set(this.services[id]);
        this.runAnimations(); // Run animations when data changes
      }
    });
  }

  ngAfterViewInit() {
    this.runAnimations();
  }

  runAnimations() {
    // Reset animations context if exists
    if (this.ctx) this.ctx.revert();
    
    // Wait a tick for DOM update
    setTimeout(() => {
        this.ctx = gsap.context(() => {
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
        
        tl.from('.detail-title', {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1
        })
        .from('.detail-content', {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1
        }, '-=0.4')
        .from('.detail-image', {
            scale: 0.95,
            opacity: 0,
            duration: 1
        }, '-=0.8');

        }, this.el);
    }, 100);
  }

  ngOnDestroy() {
    this.ctx?.revert();
  }
}
