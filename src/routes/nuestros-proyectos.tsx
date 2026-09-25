import { createFileRoute, Link } from '@tanstack/react-router'
import { ProjectCard, type BeforeAfterItem } from '~/components/gallery/BeforeAfter'
import { LightboxProvider } from '~/components/gallery/Lightbox'
import { pageHead } from '~/lib/seo'
import { paths } from '~/lib/site'

const projects: BeforeAfterItem[] = [
  {
    before: { src: '/images/baño antiguo.png', alt: 'Antes - Reforma de baño' },
    after: { src: '/images/baño nuevo.png', alt: 'Después - Reforma de baño' },
    title: 'Reforma Integral de Baño',
  },
  {
    before: { src: '/images/cocina antigua.png', alt: 'Antes - Reforma de cocina' },
    after: { src: '/images/cocina reformada.png', alt: 'Después - Reforma de cocina' },
    title: 'Reforma Integral de Cocina',
  },
  {
    before: { src: '/images/terraza antigua.jpg', alt: 'Antes - Reforma de terraza' },
    after: { src: '/images/terraza nueva.png', alt: 'Después - Reforma de terraza' },
    title: 'Reforma de Terraza',
  },
  {
    before: { src: '/images/salon antiguo.png', alt: 'Antes - Salón moderno' },
    after: { src: '/images/salon nuevo.png', alt: 'Después - Salón moderno' },
    title: 'Reforma de Salón Moderno',
  },
]

export const Route = createFileRoute('/nuestros-proyectos')({
  head: () =>
    pageHead({
      title: 'Nuestros Proyectos | Reformas en Rivas-Vaciamadrid',
      description:
        'Galería de proyectos realizados en Rivas-Vaciamadrid. Reformas de cocinas, baños, pisos y locales. Antes y después de nuestras obras.',
      path: paths.proyectos,
    }),
  component: ProjectsPage,
})

function ProjectsPage() {
  return (
    <LightboxProvider>
      <main className="pt-20">
        <section className="bg-slate-900 py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="mb-4 font-heading text-4xl font-black uppercase md:text-5xl lg:text-6xl">
              Proyectos Realizados
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-slate-300 md:text-xl">
              Descubre la calidad de nuestros acabados en estas transformaciones reales.
            </p>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 font-heading text-3xl font-bold text-slate-900 uppercase md:text-4xl">
                Transparencia Total
              </h2>
              <div className="mx-auto mb-6 h-1 w-20 bg-primary" />
              <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-600">
                Te mostramos los proyectos en los que hemos trabajado, como estaban antes y como los hemos dejado.
                Acabados profesionales, te recomendamos a medida para que diseñes el espacio de tus sueños.
              </p>
            </div>

            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2">
              {projects.map((project) => (
                <ProjectCard key={project.title} item={project} />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="mb-6 font-heading text-3xl font-bold text-slate-900 md:text-4xl">
                ¿Quieres ver tu proyecto aquí?
              </h2>
              <p className="mb-8 text-lg text-slate-600">
                Contacta con nosotros y transforma tu espacio. Estaremos encantados de ayudarte a hacer realidad tus
                ideas.
              </p>
              <Link
                to={paths.contacto}
                className="inline-block transform rounded-lg bg-primary px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:scale-105 hover:bg-secondary hover:shadow-primary/30"
              >
                Solicitar Presupuesto
              </Link>
            </div>
          </div>
        </section>
      </main>
    </LightboxProvider>
  )
}
