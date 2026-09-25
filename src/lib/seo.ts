import { absoluteUrl, site } from './site'

type JsonLd = Record<string, unknown>

export type PageSeo = {
  title: string
  description: string
  /** Ruta absoluta del sitio, p. ej. `/contacto.html`. */
  path: string
  robots?: 'index, follow' | 'noindex, follow'
  /** Título para Open Graph si debe diferir del `<title>`. */
  ogTitle?: string
  ogDescription?: string
  jsonLd?: readonly JsonLd[]
}

/**
 * Construye el objeto `head` de una ruta: title, description, robots,
 * canonical, Open Graph y bloques JSON-LD.
 */
export function pageHead(seo: PageSeo) {
  const url = absoluteUrl(seo.path)
  const robots = seo.robots ?? 'index, follow'

  return {
    meta: [
      { title: seo.title },
      { name: 'description', content: seo.description },
      { name: 'robots', content: robots },
      { property: 'og:locale', content: site.locale },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: seo.ogTitle ?? seo.title },
      { property: 'og:description', content: seo.ogDescription ?? seo.description },
      { property: 'og:url', content: url },
      { property: 'og:site_name', content: site.name },
      { property: 'og:image', content: site.ogImage },
    ],
    links: [{ rel: 'canonical', href: url }],
    scripts: (seo.jsonLd ?? []).map((data) => ({
      type: 'application/ld+json',
      children: JSON.stringify(data),
    })),
  }
}
