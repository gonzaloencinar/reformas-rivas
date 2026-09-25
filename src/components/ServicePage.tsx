import { ContactSection } from '~/components/contact/ContactSection'
import { BeforeAfterShowcase } from '~/components/gallery/BeforeAfter'
import { LightboxProvider } from '~/components/gallery/Lightbox'
import { FaqAccordion } from '~/components/ui/Faq'
import { CheckIcon } from '~/components/ui/Icons'
import { ServiceTestimonials } from '~/components/ui/Testimonials'
import type { ServiceContent } from '~/content/services'
import { faqSchema } from '~/lib/schema'
import { pageHead } from '~/lib/seo'

/** `head()` común a todas las páginas de servicio: meta, canonical, OG y FAQ en JSON-LD. */
export function serviceHead(content: ServiceContent) {
  return pageHead({
    ...content.seo,
    path: content.path,
    jsonLd: [faqSchema(content.faq.items)],
  })
}

export function ServicePage({ content }: { content: ServiceContent }) {
  const [firstShowcase, ...otherShowcases] = content.beforeAfter.items

  return (
    <LightboxProvider>
      <main className="pt-20">
        {/* Hero */}
        <section className="group relative flex min-h-[500px] items-center justify-center overflow-hidden bg-slate-900">
          <div className="absolute inset-0 z-0">
            <img
              src={content.hero.image.src}
              alt={content.hero.image.alt}
              className="h-full w-full object-cover opacity-40 transition-transform duration-500 group-hover:scale-105"
              width={1920}
              height={1080}
              fetchPriority="high"
              style={content.hero.image.objectPosition ? { objectPosition: content.hero.image.objectPosition } : undefined}
            />
            <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/40 to-transparent" />
          </div>
          <div className="relative z-10 container mx-auto max-w-4xl px-4 text-center">
            <h1 className="mb-6 font-heading text-4xl leading-tight font-black text-white md:text-5xl lg:text-6xl">
              {content.hero.prefix}{' '}
              <span className="bg-linear-to-r from-primary to-yellow-300 bg-clip-text text-transparent">
                {content.hero.highlight}
              </span>
            </h1>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-300 md:text-xl">{content.hero.text}</p>
            <a
              href="#contacto"
              className="inline-block transform rounded-lg bg-linear-to-r from-primary to-secondary px-8 py-4 text-lg font-bold text-white shadow-lg shadow-primary/50 transition-all hover:scale-105 hover:from-secondary hover:to-secondary"
            >
              SOLICITAR PRESUPUESTO
            </a>
          </div>
        </section>

        {/* Contenido */}
        <section className="bg-white py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-6 font-heading text-3xl font-bold text-slate-900 md:text-4xl">{content.intro.title}</h2>
              <p className="mb-8 text-lg leading-relaxed text-slate-600">{content.intro.text}</p>

              <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2">
                {content.features.map((feature) => (
                  <div key={feature.title} className="rounded-xl bg-slate-50 p-6">
                    <h3 className="mb-3 text-xl font-bold text-slate-900">
                      {feature.icon} {feature.title}
                    </h3>
                    <p className="text-slate-600">{feature.text}</p>
                  </div>
                ))}
              </div>

              <div className="mb-12 rounded-xl bg-primary/10 p-8">
                <h3 className="mb-4 text-2xl font-bold text-slate-900">{content.benefits.title}</h3>
                <ul className="space-y-3 text-slate-700">
                  {content.benefits.items.map((item) => (
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

        {/* Antes y después */}
        {firstShowcase ? (
          <section className="bg-slate-50 py-20">
            <div className="container mx-auto px-4">
              <div className="mb-12 text-center">
                <h2 className="mb-4 font-heading text-3xl font-bold text-slate-900 md:text-4xl">Antes y Después</h2>
                <div className="mx-auto mb-6 h-1 w-20 bg-primary" />
                <p className="mx-auto max-w-3xl text-lg text-slate-600">{content.beforeAfter.intro}</p>
              </div>
              <BeforeAfterShowcase item={firstShowcase} />
            </div>
          </section>
        ) : null}

        {otherShowcases.map((item) => (
          <section key={item.title} className="bg-white py-20">
            <div className="container mx-auto px-4">
              <BeforeAfterShowcase item={item} />
            </div>
          </section>
        ))}

        <ServiceTestimonials intro={content.testimonials.intro} items={content.testimonials.items} />

        <ContactSection title={content.contact.title} defaultService={content.contact.defaultService} />

        {/* FAQs */}
        <section className="bg-white py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="mb-12 text-center font-heading text-3xl font-bold text-slate-900 md:text-4xl">
                {content.faq.title}
              </h2>
              <FaqAccordion items={content.faq.items} />
            </div>
          </div>
        </section>
      </main>
    </LightboxProvider>
  )
}
