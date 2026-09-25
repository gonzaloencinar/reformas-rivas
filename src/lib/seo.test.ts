import { describe, expect, it } from 'vitest'
import { pageHead } from './seo'

describe('pageHead', () => {
  const head = pageHead({
    title: 'Contacto | Reformas',
    description: 'Descripción de prueba',
    path: '/contacto',
    jsonLd: [{ '@type': 'FAQPage' }],
  })

  it('genera title, description y robots por defecto', () => {
    expect(head.meta).toContainEqual({ title: 'Contacto | Reformas' })
    expect(head.meta).toContainEqual({ name: 'description', content: 'Descripción de prueba' })
    expect(head.meta).toContainEqual({ name: 'robots', content: 'index, follow' })
  })

  it('genera canonical y og:url absolutos', () => {
    expect(head.links).toEqual([{ rel: 'canonical', href: 'https://reformasrivas.com/contacto' }])
    expect(head.meta).toContainEqual({ property: 'og:url', content: 'https://reformasrivas.com/contacto' })
  })

  it('serializa JSON-LD como script', () => {
    expect(head.scripts).toEqual([{ type: 'application/ld+json', children: '{"@type":"FAQPage"}' }])
  })

  it('respeta noindex y el título OG alternativo', () => {
    const legal = pageHead({ title: 'Aviso', description: 'x', path: '/aviso-legal', robots: 'noindex, follow', ogTitle: 'OG' })
    expect(legal.meta).toContainEqual({ name: 'robots', content: 'noindex, follow' })
    expect(legal.meta).toContainEqual({ property: 'og:title', content: 'OG' })
  })
})
