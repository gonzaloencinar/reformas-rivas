import { StarIcon } from './Icons'

export type Testimonial = {
  name: string
  location: string
  quote: string
}

function initials(name: string): string {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join('')
}

/** Testimonios de las páginas de servicio, con avatar de iniciales y cinco estrellas. */
export function ServiceTestimonials({ intro, items }: { intro: string; items: readonly Testimonial[] }) {
  return (
    <section className="bg-slate-50 py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-heading text-3xl font-bold text-slate-900 md:text-4xl">
              Lo que Dicen Nuestros Clientes
            </h2>
            <div className="mx-auto mb-6 h-1 w-20 bg-primary" />
            <p className="text-lg text-slate-600">{intro}</p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <article key={item.name} className="rounded-xl border border-slate-200 bg-white p-6 shadow-lg">
                <div className="mb-4 flex items-center gap-4">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-full bg-primary/10">
                    <div className="flex h-full w-full items-center justify-center bg-primary/20 text-xl font-bold text-primary">
                      {initials(item.name)}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{item.name}</h4>
                    <p className="text-sm text-slate-600">{item.location}</p>
                    <div className="mt-1 flex text-primary" aria-label="5 de 5 estrellas">
                      {Array.from({ length: 5 }, (_, i) => (
                        <StarIcon key={i} className="h-4 w-4" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-slate-700 italic">"{item.quote}"</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
