import { ContactForm, type ServiceOption } from './ContactForm'
import { ContactSidebar } from './ContactSidebar'
import type { ServiceKey } from '~/lib/contact-schema'

type ContactSectionProps = {
  title: string
  description?: string
  defaultService?: ServiceKey | ''
  services?: ServiceOption[]
  background?: 'white' | 'slate'
}

/** Sección de contacto con formulario a dos tercios y barra lateral de contacto. */
export function ContactSection({
  title,
  description = 'Completa el formulario y nos pondremos en contacto contigo lo antes posible.',
  defaultService,
  services,
  background = 'white',
}: ContactSectionProps) {
  return (
    <section id="contacto" className={`py-20 ${background === 'white' ? 'bg-white' : 'bg-slate-50'}`}>
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-heading text-3xl font-bold text-slate-900 md:text-4xl">{title}</h2>
            <p className="text-lg text-slate-600">{description}</p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <ContactForm defaultService={defaultService} services={services} />
            </div>
            <ContactSidebar />
          </div>
        </div>
      </div>
    </section>
  )
}
