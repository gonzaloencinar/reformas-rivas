import { createFileRoute } from '@tanstack/react-router'
import { ContactForm, otrosServiciosOptions } from '~/components/contact/ContactForm'
import { CheckIcon } from '~/components/ui/Icons'
import { pageHead } from '~/lib/seo'
import { paths } from '~/lib/site'

const features = [
  {
    icon: '🔧',
    title: 'Fontanería',
    text: 'Reparaciones, instalaciones y mantenimiento. Cambio de grifos, reparación de fugas, instalación de sanitarios y sistemas de calefacción.',
  },
  {
    icon: '⚡',
    title: 'Electricidad',
    text: 'Instalaciones eléctricas, cambio de cuadros, puntos de luz, enchufes y sistemas de iluminación LED. Todo certificado y cumpliendo normativa.',
  },
  {
    icon: '🎨',
    title: 'Pintura Decorativa',
    text: 'Pintura de interiores y exteriores, técnicas decorativas, esmaltados y tratamientos especiales. Acabados profesionales y duraderos.',
  },
  {
    icon: '🧱',
    title: 'Pladur y Aislamiento',
    text: 'Tabiquería de pladur, falsos techos, aislamiento acústico y térmico. Soluciones para mejorar el confort y reducir ruidos.',
  },
]

const benefits = [
  'Rapidez: trabajos puntuales ejecutados en el menor tiempo posible',
  'Profesionalidad: técnicos cualificados con años de experiencia',
  'Garantía: todos nuestros trabajos cuentan con garantía en materiales y mano de obra',
  'Precios justos: presupuestos claros sin sorpresas ni costes ocultos',
]

export const Route = createFileRoute('/otros-servicios')({
  head: () =>
    pageHead({
      title: 'Otros Servicios de Reformas en Rivas-Vaciamadrid | Obra Menor',
      description:
        'Servicios de fontanería, electricidad, pintura, pladur y aislamiento en Rivas-Vaciamadrid. Soluciones para cualquier necesidad de obra menor o mantenimiento.',
      path: paths.otros,
    }),
  component: OtrosServiciosPage,
})

function OtrosServiciosPage() {
  return (
    <main className="pt-20">
      <section className="group relative flex min-h-[500px] items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/casco reformas.png"
            alt="Otros Servicios de Reformas"
            className="h-full w-full object-cover opacity-40 transition-transform duration-500 group-hover:scale-105"
            width={1920}
            height={1080}
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/40 to-transparent" />
        </div>
        <div className="relative z-10 container mx-auto max-w-4xl px-4 text-center">
          <h1 className="mb-6 font-heading text-4xl leading-tight font-black text-white md:text-5xl lg:text-6xl">
            Otros{' '}
            <span className="bg-linear-to-r from-primary to-yellow-300 bg-clip-text text-transparent">Servicios</span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-300 md:text-xl">
            Fontanería, electricidad, pintura decorativa, pladur, aislamiento acústico y térmico. Cualquier necesidad
            de obra menor o mantenimiento.
          </p>
          <a
            href="#contacto"
            className="inline-block transform rounded-lg bg-linear-to-r from-primary to-secondary px-8 py-4 text-lg font-bold text-white shadow-lg shadow-primary/50 transition-all hover:scale-105 hover:from-secondary hover:to-secondary"
          >
            SOLICITAR PRESUPUESTO
          </a>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 font-heading text-3xl font-bold text-slate-900 md:text-4xl">
              Servicios especializados para tu hogar o negocio
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-slate-600">
              Además de las reformas completas, ofrecemos servicios especializados para resolver cualquier necesidad
              puntual. Trabajos rápidos, eficientes y con la misma calidad que caracteriza a nuestros proyectos mayores.
            </p>

            <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.title} className="rounded-xl bg-slate-50 p-6">
                  <h3 className="mb-3 text-xl font-bold text-slate-900">
                    {feature.icon} {feature.title}
                  </h3>
                  <p className="text-slate-600">{feature.text}</p>
                </div>
              ))}
            </div>

            <div className="mb-12 rounded-xl bg-primary/10 p-8">
              <h3 className="mb-4 text-2xl font-bold text-slate-900">
                ¿Por qué elegir nuestros servicios especializados?
              </h3>
              <ul className="space-y-3 text-slate-700">
                {benefits.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckIcon className="mt-1 h-6 w-6 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="mb-4 font-heading text-3xl font-bold text-slate-900 md:text-4xl">Solicita tu Presupuesto</h2>
            <p className="text-slate-600">Rellena el formulario o llámanos. Te visitaremos gratis para valorar tu proyecto.</p>
          </div>
          <ContactForm
            className="mx-auto max-w-2xl"
            dense
            services={otrosServiciosOptions}
            defaultService="fontaneria"
            nameLabel="Nombre *"
            serviceLabel="Tipo de Servicio"
            messageLabel="Describe tu necesidad *"
            submitLabel="Solicitar Presupuesto Gratis"
          />
        </div>
      </section>
    </main>
  )
}
