import { createFileRoute, Link } from '@tanstack/react-router'
import { ContactForm } from '~/components/contact/ContactForm'
import { ArrowRightIcon, CashIcon, CheckCircleIcon, CheckIcon, ClockIcon } from '~/components/ui/Icons'
import { faqSchema, organizationSchema } from '~/lib/schema'
import { pageHead } from '~/lib/seo'
import { paths } from '~/lib/site'

const homeFaqs = [
  {
    question: '¿Cuánto cuesta una reforma integral en Rivas?',
    answer:
      'El precio de una reforma integral depende de los metros cuadrados, calidades elegidas y alcance de la obra. Ofrecemos presupuestos personalizados y cerrados tras una visita gratuita.',
  },
  {
    question: '¿Cuánto tiempo tarda una reforma?',
    answer:
      'Los plazos varían según la envergadura. Una reforma de baño puede tardar 5-7 días, mientras que una integral puede llevar de 4 a 8 semanas. Garantizamos plazos por contrato.',
  },
  {
    question: '¿Gestionáis las licencias de obra?',
    answer:
      'Sí, nos encargamos de toda la gestión burocrática y licencias necesarias con el Ayuntamiento de Rivas-Vaciamadrid para que no tengas que preocuparte por nada.',
  },
  {
    question: '¿Ofrecéis garantía en las reformas?',
    answer:
      'Absolutamente. Todas nuestras reformas cuentan con garantía legal tanto en materiales como en mano de obra para tu total tranquilidad.',
  },
]

const services = [
  {
    id: 'reformas-integrales',
    to: paths.integrales,
    image: '/images/salon nuevo.png',
    alt: 'Reformas Integrales en Rivas',
    title: 'Reformas integrales',
    text: 'Renovamos tu vivienda al completo. Coordinación total de gremios, diseño de interiores y acabados perfectos para estrenar casa sin mudarte.',
  },
  {
    id: 'reformas-banos',
    to: paths.banos,
    image: '/images/baño nuevo.png',
    alt: 'Reformas de Baños en Rivas',
    title: 'Reformas de baños',
    text: 'Cambio de bañera por plato de ducha, sanitarios modernos, alicatados de diseño y mobiliario a medida. Tu baño nuevo en tiempo récord.',
  },
  {
    id: 'reformas-cocinas',
    to: paths.cocinas,
    image: '/images/cocina reformada.png',
    alt: 'Reformas de Cocinas en Rivas',
    title: 'Reformas de cocinas',
    text: 'Diseñamos la cocina de tus sueños. Muebles funcionales, encimeras resistentes, fontanería e iluminación para crear el corazón de tu hogar.',
  },
  {
    id: 'reformas-pisos',
    to: paths.pisos,
    image: '/images/salon nuevo2.png',
    alt: 'Reformas de Pisos en Rivas',
    title: 'Reformas de pisos',
    text: 'Actualización completa de apartamentos. Suelos, pintura, alisado de paredes, carpintería interior y exterior para revalorizar tu propiedad.',
    objectPosition: 'center 60%',
  },
  {
    id: 'reformas-locales',
    to: paths.locales,
    image: '/images/reforma local.png',
    alt: 'Reformas de Locales Comerciales',
    title: 'Reformas de locales',
    text: 'Adaptamos tu negocio a las nuevas normativas y tendencias. Oficinas, tiendas y restauración. Rapidez para minimizar el cierre de actividad.',
  },
  {
    id: 'otros-servicios',
    to: paths.otros,
    image: '/images/casco reformas.png',
    alt: 'Otros Servicios de Reformas',
    title: 'Otros servicios',
    text: 'Fontanería, electricidad, pintura decorativa, pladur, aislamiento acústico y térmico. Cualquier necesidad de obra menor o mantenimiento.',
  },
]

const reasons = [
  { title: 'Planificación Detallada', text: 'Cronograma de obra definido desde el primer día para evitar retrasos.' },
  { title: 'Materiales de Calidad', text: 'Trabajamos con proveedores de confianza para asegurar durabilidad.' },
  { title: 'Limpieza y Cuidado', text: 'Protegemos tu hogar y zonas comunes. Entregamos la obra limpia.' },
  { title: 'Garantía por Escrito', text: 'Respondemos por nuestros trabajos con garantía post-obra.' },
]

const steps = [
  { title: 'Visita y Medición', text: 'Visitamos tu inmueble gratis para tomar medidas y escuchar tus ideas.' },
  { title: 'Presupuesto', text: 'Te enviamos un presupuesto detallado y sin sorpresas, con materiales definidos.' },
  { title: 'Planificación', text: 'Organizamos los equipos, pedidos de material y fijamos fecha de inicio.' },
  { title: 'Ejecución', text: 'Realizamos la obra con supervisión constante y entregamos en plazo.' },
]

const testimonials = [
  {
    name: 'MARÍA G.',
    location: 'Rivas-Vaciamadrid',
    quote:
      'Excelente trabajo en la reforma integral de mi piso en Rivas-Vaciamadrid. Cumplieron los plazos y el resultado superó mis expectativas. Muy profesionales.',
  },
  {
    name: 'JOSEP M.',
    location: 'Arganda del Rey',
    quote:
      'Reformaron mi cocina y baño. Trato cercano, presupuesto ajustado y sin sorpresas. Los recomiendo 100%. Ahora tengo la cocina que siempre quise.',
  },
  {
    name: 'LAURA R.',
    location: 'Rivas-Vaciamadrid',
    quote:
      'Hicieron la reforma de mi local comercial en tiempo récord. Muy atentos y resolutivos. Volveré a contar con ellos sin duda.',
  },
]

export const Route = createFileRoute('/')({
  head: () =>
    pageHead({
      title: 'Empresa de Reformas en Rivas Vaciamadrid | Presupuesto en 24h',
      description:
        'Expertos en reformas en Rivas-Vaciamadrid. Especialistas en reformas integrales, baños, cocinas, pisos y locales. Solicita tu presupuesto sin compromiso. Calidad garantizada.',
      path: paths.home,
      ogTitle: 'Reformas en Rivas-Vaciamadrid | Empresa de Reformas Integrales',
      ogDescription:
        'Expertos en reformas en Rivas-Vaciamadrid. Especialistas en reformas integrales, baños, cocinas, pisos y locales.',
      jsonLd: [organizationSchema(), faqSchema(homeFaqs)],
    }),
  component: HomePage,
})

function HomePage() {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="group relative flex min-h-[600px] items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/fondo casa.png"
            alt="Empresa de Reformas en Rivas-Vaciamadrid trabajando en una vivienda"
            className="h-full w-full object-cover opacity-40 transition-transform duration-500 group-hover:scale-105"
            width={1920}
            height={1080}
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/40 to-transparent" />
        </div>

        <div className="relative z-10 container mx-auto max-w-4xl px-4 text-center">
          <span className="mb-6 inline-block rounded-full border border-primary/30 bg-primary/20 px-4 py-1.5 text-sm font-semibold tracking-wide text-primary uppercase backdrop-blur-sm">
            EXPERTOS EN CONSTRUCCIÓN Y DISEÑO
          </span>
          <h1 className="text-shadow mb-6 font-heading text-4xl leading-tight font-black text-white md:text-5xl lg:text-6xl">
            Empresa de Reformas en{' '}
            <span className="bg-linear-to-r from-primary to-yellow-300 bg-clip-text text-transparent">
              Rivas-Vaciamadrid
            </span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">
            Transformamos tu vivienda o local con acabados de primera calidad. Cumplimos plazos, presupuesto cerrado y
            limpieza garantizada.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row md:gap-6 lg:gap-8">
            <a
              href="#contacto"
              className="w-full transform rounded-lg bg-linear-to-r from-primary to-secondary px-8 py-4 text-lg font-bold text-white shadow-lg shadow-primary/50 transition-all hover:scale-105 hover:from-secondary hover:to-secondary sm:w-auto"
            >
              SOLICITAR SERVICIO URGENTE
            </a>
            <a
              href="#contacto"
              className="w-full transform rounded-lg bg-linear-to-r from-primary to-secondary px-8 py-4 text-lg font-bold text-white shadow-lg shadow-primary/50 transition-all hover:scale-105 hover:from-secondary hover:to-secondary sm:w-auto"
            >
              Pedir Presupuesto
            </a>
          </div>
        </div>
      </section>

      {/* Barra de confianza */}
      <div className="relative z-20 mx-4 -mt-8 max-w-6xl rounded-xl border-b border-slate-100 bg-white p-6 shadow-xl md:mx-auto md:p-8">
        <div className="grid grid-cols-1 gap-6 divide-y divide-slate-100 text-center md:grid-cols-3 md:divide-x md:divide-y-0">
          <TrustItem icon={<CheckCircleIcon className="h-6 w-6" />} title="+15 Años de Experiencia" text="Profesionales cualificados" />
          <TrustItem icon={<ClockIcon className="h-6 w-6" />} title="Cumplimiento de Plazos" text="Sin sorpresas ni retrasos" />
          <TrustItem icon={<CashIcon className="h-6 w-6" />} title="Precio Cerrado" text="Presupuesto sin compromiso" />
        </div>
      </div>

      {/* Servicios */}
      <section id="servicios" className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-4 font-heading text-3xl font-bold text-slate-900 md:text-4xl">
              Nuestros Servicios de Reformas
            </h2>
            <p className="text-slate-600">
              Ofrecemos soluciones completas para renovar tu espacio. Desde pequeños cambios hasta proyectos llave en
              mano en Rivas-Vaciamadrid.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.id}
                id={service.id}
                className="group overflow-hidden rounded-xl border border-slate-100 bg-white shadow-md transition-shadow hover:shadow-xl"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.alt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    width={600}
                    height={400}
                    style={service.objectPosition ? { objectPosition: service.objectPosition } : undefined}
                  />
                </div>
                <div className="p-6">
                  <h3 className="mb-3 text-xl font-bold text-slate-900">{service.title}</h3>
                  <p className="mb-4 text-sm leading-relaxed text-slate-600">{service.text}</p>
                  <Link
                    to={service.to}
                    className="inline-flex items-center text-sm font-semibold text-primary hover:text-secondary"
                  >
                    Ver más
                    <ArrowRightIcon className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section id="por-que-nosotros" className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center gap-12 lg:flex-row">
            <div className="lg:w-1/2">
              <img
                src="/images/andamio2.png"
                alt="Detalle de reforma de calidad"
                className="w-full rounded-xl shadow-2xl"
                loading="lazy"
                width={800}
                height={600}
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="mb-6 font-heading text-3xl font-bold text-slate-900 md:text-4xl">
                Por qué elegirnos para tu reforma en Rivas
              </h2>
              <p className="mb-8 text-lg text-slate-600">
                Entendemos que una obra puede ser estresante. Por eso, nuestro enfoque se basa en la transparencia, la
                planificación y la excelencia en la ejecución.
              </p>
              <ul className="space-y-4">
                {reasons.map((reason) => (
                  <li key={reason.title} className="flex items-start gap-3">
                    <CheckIcon className="mt-1 h-6 w-6 shrink-0 text-green-500" />
                    <div>
                      <h4 className="font-bold text-slate-800">{reason.title}</h4>
                      <p className="text-sm text-slate-600">{reason.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Nuestros proyectos */}
      <section id="nuestros-proyectos" className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-heading text-3xl font-bold text-slate-900 uppercase md:text-4xl">
              Nuestros Proyectos
            </h2>
            <div className="mx-auto h-1 w-20 bg-primary" />
          </div>
          <div className="mx-auto max-w-6xl">
            <div className="overflow-hidden rounded-xl border border-slate-100 bg-white shadow-xl">
              <div className="grid grid-cols-1 gap-0 lg:grid-cols-2">
                <div className="relative h-64 min-h-[400px] lg:h-auto">
                  <img
                    src="/images/cocina reformada.png"
                    alt="Proyecto de reforma de cocina"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col justify-center p-8 lg:p-12">
                  <h3 className="mb-4 font-heading text-2xl font-bold text-slate-900 md:text-3xl">
                    Descubre cómo transformamos espacios
                  </h3>
                  <p className="mb-6 text-lg leading-relaxed text-slate-600">
                    Descubre cómo transformamos espacios con nuestras reformas de cocinas, baños y más. Mira el antes y
                    el después.
                  </p>
                  <Link
                    to={paths.proyectos}
                    className="inline-block w-full rounded-lg bg-primary px-8 py-4 text-center font-bold text-white shadow-lg transition-colors hover:bg-secondary hover:shadow-primary/30 sm:w-auto"
                  >
                    Ver Proyectos Realizados
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cómo trabajamos */}
      <section id="como-trabajamos" className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-16 text-center font-heading text-3xl font-bold text-slate-900 md:text-4xl">
            Cómo Trabajamos
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {steps.map((step, index) => (
              <div key={step.title} className="relative">
                <div className="h-full rounded-xl border-t-4 border-primary bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                  <span className="absolute -top-4 left-6 flex h-8 w-8 items-center justify-center rounded-full bg-primary font-bold text-white shadow-lg">
                    {index + 1}
                  </span>
                  <h3 className="mt-2 mb-2 text-lg font-bold">{step.title}</h3>
                  <p className="text-sm text-slate-600">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 font-heading text-3xl font-bold text-slate-900 md:text-4xl">Solicita tu Presupuesto</h2>
              <p className="text-lg text-slate-600">
                Completa el formulario y nos pondremos en contacto contigo lo antes posible.
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Opiniones */}
      <section id="opiniones" className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 font-heading text-3xl font-bold text-slate-900 uppercase md:text-4xl">
                Opiniones de Nuestros Clientes
              </h2>
              <div className="mx-auto mb-6 h-1 w-20 bg-primary" />
              <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-600">
                En Reformas Rivas-Vaciamadrid, la satisfacción de nuestros clientes es nuestra prioridad. Con más de 15
                años de experiencia en Rivas-Vaciamadrid y toda la zona sureste de Madrid, nos comprometemos a ofrecer
                un servicio profesional, cumplir con tus expectativas, recomendarte las mejores soluciones y mantener un
                trato cercano y profesional. Respetamos plazos y presupuestos, y garantizamos acabados de calidad.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {testimonials.map((item) => (
                <article
                  key={item.name}
                  className="relative rounded-xl border border-slate-200 bg-white p-6 shadow-md transition-shadow hover:shadow-lg"
                >
                  <div className="absolute -top-2 -left-2 font-serif text-6xl leading-none text-primary/20" aria-hidden>
                    "
                  </div>
                  <div className="mb-4">
                    <div className="flex gap-1 text-xl text-primary" aria-label="5 de 5 estrellas">
                      <span>⭐</span>
                      <span>⭐</span>
                      <span>⭐</span>
                      <span>⭐</span>
                      <span>⭐</span>
                    </div>
                  </div>
                  <p className="relative z-10 mb-6 leading-relaxed text-slate-700">{item.quote}</p>
                  <div className="border-t border-slate-100 pt-4">
                    <p className="font-bold text-slate-900">{item.name}</p>
                    <p className="text-sm text-slate-500">{item.location}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

function TrustItem({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="flex flex-col items-center p-2">
      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
        {icon}
      </div>
      <h3 className="font-bold text-slate-800">{title}</h3>
      <p className="text-sm text-slate-500">{text}</p>
    </div>
  )
}
