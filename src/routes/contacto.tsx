import { createFileRoute } from '@tanstack/react-router'
import { ContactSection } from '~/components/contact/ContactSection'
import { PhoneIcon } from '~/components/ui/Icons'
import { pageHead } from '~/lib/seo'
import { paths, site } from '~/lib/site'

const faqs = [
  {
    question: '¿Cuánto tarda en responderse mi solicitud?',
    answer: `Nos comprometemos a responder todas las solicitudes en menos de 24 horas laborables. Si prefieres una respuesta inmediata, llámanos al ${site.phoneDisplay}.`,
  },
  {
    question: '¿El presupuesto tiene algún coste?',
    answer:
      'No, el presupuesto es completamente gratuito y sin compromiso. Visitamos tu propiedad, analizamos el proyecto y te entregamos un presupuesto detallado.',
  },
  {
    question: '¿En qué zonas trabajáis?',
    answer:
      'Trabajamos en Rivas-Vaciamadrid y toda la zona sureste de Madrid: Arganda del Rey, Valdemoro, San Fernando de Henares, Mejorada del Campo, Velilla de San Antonio y más.',
  },
  {
    question: '¿Cuánto tiempo tarda una reforma?',
    answer:
      'Depende del tipo de reforma. Un baño básico: 5-7 días. Una cocina: 2-3 semanas. Una reforma integral: 2-3 meses. Te damos plazos concretos en el presupuesto.',
  },
]

export const Route = createFileRoute('/contacto')({
  head: () =>
    pageHead({
      title: 'Contacto | Reformas en Rivas-Vaciamadrid | Presupuesto Gratuito',
      description:
        'Contacta con nosotros para solicitar tu presupuesto gratuito de reformas en Rivas-Vaciamadrid. Te respondemos en menos de 24 horas. Llamanos o envíanos tu consulta.',
      path: paths.contacto,
    }),
  component: ContactPage,
})

function ContactPage() {
  return (
    <main className="pt-20">
      <section className="relative bg-slate-900 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="mb-4 font-heading text-4xl font-black md:text-5xl lg:text-6xl">
            Contacta con Reformas en Rivas-Vaciamadrid
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-slate-300 md:text-xl">
            Solicita tu presupuesto gratuito sin compromiso. Te respondemos en menos de 24 horas.
          </p>
        </div>
      </section>

      <ContactSection title="Solicita tu Presupuesto" />

      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center font-heading text-3xl font-bold text-slate-900 md:text-4xl">
              Preguntas Frecuentes
            </h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="mb-2 text-lg font-bold text-slate-900">{faq.question}</h3>
                  <p className="text-slate-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 font-heading text-3xl font-bold md:text-4xl">¿Listo para Empezar tu Reforma?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-300">
            Llámanos ahora o envíanos tu consulta. Te respondemos de inmediato.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`tel:${site.phone}`}
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:bg-secondary hover:shadow-primary/30"
            >
              <PhoneIcon className="h-5 w-5" />
              <span>LLAMAR AHORA</span>
            </a>
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-[#20ba5a]"
            >
              Contactar por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
