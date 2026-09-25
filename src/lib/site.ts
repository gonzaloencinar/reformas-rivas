/**
 * Datos globales del sitio. Es la única fuente de verdad para URLs,
 * datos de contacto, navegación y sitemap.
 */
export const site = {
  name: 'Reformas en Rivas-Vaciamadrid',
  legalName: 'Reformas Rivas-Vaciamadrid Cerro',
  url: 'https://www.reformasrivas.com',
  locale: 'es_ES',
  phone: '+34919932067',
  phoneDisplay: '+34919932067',
  phoneSpaced: '+34 919 932 067',
  email: 'contacto@reformasrivas.com',
  whatsappUrl: 'https://wa.me/+34919932067',
  logoPath: '/images/logo ajustado.png',
  ogImage: 'https://www.reformasrivas.com/images/logo%20ajustado.png',
  address: {
    street: 'Rda. del Parque Bellavista, 4, Local 4',
    postalCode: '28522',
    locality: 'Rivas-Vaciamadrid',
    region: 'Madrid',
    country: 'ES',
  },
  addressLine: 'Rda. del Parque Bellavista, 4, Local 4, 28522 Rivas-Vaciamadrid, Madrid',
  geo: { latitude: 40.3516, longitude: -3.5173 },
  schedule: [
    { day: 'Lunes a Viernes', hours: '8:30 - 21:00' },
    { day: 'Sábados', hours: '8:30 - 13:00' },
    { day: 'Domingos', hours: 'Cerrado' },
  ],
} as const

/** Rutas públicas (URLs limpias). Las URLs `.html` del sitio original redirigen con 301, ver `redirects.ts`. */
export const paths = {
  home: '/',
  integrales: '/reformas-integrales',
  banos: '/reformas-banos',
  cocinas: '/reformas-cocinas',
  pisos: '/reformas-pisos',
  locales: '/reformas-locales',
  otros: '/otros-servicios',
  proyectos: '/nuestros-proyectos',
  contacto: '/contacto',
  avisoLegal: '/aviso-legal',
  privacidad: '/politica-privacidad',
  cookies: '/politica-cookies',
} as const

export type SitePath = (typeof paths)[keyof typeof paths]

export const serviceNav = [
  { to: paths.integrales, label: 'Reformas Integrales' },
  { to: paths.banos, label: 'Reformas de Baños' },
  { to: paths.cocinas, label: 'Reformas de Cocinas' },
  { to: paths.pisos, label: 'Reformas de Pisos' },
  { to: paths.locales, label: 'Reformas de Locales' },
  { to: paths.otros, label: 'Otros Servicios' },
] as const

export const legalNav = [
  { to: paths.avisoLegal, label: 'Aviso Legal' },
  { to: paths.privacidad, label: 'Política de Privacidad' },
  { to: paths.cookies, label: 'Política de Cookies' },
] as const

export type SitemapEntry = {
  path: SitePath
  lastmod: string
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority: number
}

/** Entradas del sitemap. Las páginas legales son noindex y no se incluyen. */
export const sitemapEntries: readonly SitemapEntry[] = [
  { path: paths.home, lastmod: '2026-09-25', changefreq: 'weekly', priority: 1.0 },
  { path: paths.integrales, lastmod: '2026-09-25', changefreq: 'monthly', priority: 0.8 },
  { path: paths.banos, lastmod: '2026-09-25', changefreq: 'monthly', priority: 0.8 },
  { path: paths.cocinas, lastmod: '2026-09-25', changefreq: 'monthly', priority: 0.8 },
  { path: paths.pisos, lastmod: '2026-09-25', changefreq: 'monthly', priority: 0.8 },
  { path: paths.locales, lastmod: '2026-09-25', changefreq: 'monthly', priority: 0.8 },
  { path: paths.otros, lastmod: '2026-09-25', changefreq: 'monthly', priority: 0.8 },
  { path: paths.proyectos, lastmod: '2026-09-25', changefreq: 'monthly', priority: 0.7 },
  { path: paths.contacto, lastmod: '2026-09-25', changefreq: 'monthly', priority: 0.7 },
]

export function absoluteUrl(path: string): string {
  return new URL(path, site.url).toString()
}
