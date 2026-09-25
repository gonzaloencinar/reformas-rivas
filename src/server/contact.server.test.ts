import { describe, expect, it } from 'vitest'
import { buildContactEmail } from './contact.server'

describe('buildContactEmail', () => {
  const email = buildContactEmail({
    name: 'Ana <script>alert(1)</script>',
    phone: '600000000',
    email: 'ana@example.com',
    location: 'Rivas',
    service: 'cocina',
    message: 'Línea 1\nLínea 2',
    privacy: true,
    page: '/reformas-cocinas',
    utm: { utm_source: 'google' },
  })

  it('incluye el servicio en el asunto', () => {
    expect(email.subject).toContain('Reforma de Cocina')
  })

  it('escapa HTML en los campos del cliente', () => {
    expect(email.html).not.toContain('<script>')
    expect(email.html).toContain('&lt;script&gt;')
    expect(email.html).toContain('Línea 1<br>Línea 2')
  })

  it('incluye página de origen y UTM en el texto plano', () => {
    expect(email.text).toContain('Página: /reformas-cocinas')
    expect(email.text).toContain('utm_source=google')
  })
})
