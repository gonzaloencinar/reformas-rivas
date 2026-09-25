import { describe, expect, it } from 'vitest'
import { buildSitemap } from './sitemap'
import { paths } from './site'

describe('buildSitemap', () => {
  const xml = buildSitemap()

  it('incluye las nueve URLs indexables con URLs limpias', () => {
    const locs = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1])
    expect(locs).toEqual([
      'https://www.reformasrivas.com/',
      'https://www.reformasrivas.com/reformas-integrales',
      'https://www.reformasrivas.com/reformas-banos',
      'https://www.reformasrivas.com/reformas-cocinas',
      'https://www.reformasrivas.com/reformas-pisos',
      'https://www.reformasrivas.com/reformas-locales',
      'https://www.reformasrivas.com/otros-servicios',
      'https://www.reformasrivas.com/nuestros-proyectos',
      'https://www.reformasrivas.com/contacto',
    ])
  })

  it('no incluye las páginas legales (noindex)', () => {
    expect(xml).not.toContain(paths.avisoLegal)
    expect(xml).not.toContain(paths.privacidad)
    expect(xml).not.toContain(paths.cookies)
  })

  it('es XML con prioridad y frecuencia', () => {
    expect(xml.startsWith('<?xml version="1.0" encoding="UTF-8"?>')).toBe(true)
    expect(xml).toContain('<priority>1.0</priority>')
    expect(xml).toContain('<changefreq>weekly</changefreq>')
  })
})
