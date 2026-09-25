import { describe, expect, it } from 'vitest'
import { contactSchema, serviceLabel } from './contact-schema'

const valid = {
  name: 'Ana García',
  phone: '+34 600 000 000',
  email: 'ana@example.com',
  location: 'Rivas-Vaciamadrid',
  service: 'bano',
  message: 'Quiero cambiar la bañera por un plato de ducha.',
  privacy: true,
}

describe('contactSchema', () => {
  it('acepta una solicitud válida y recorta espacios', () => {
    const result = contactSchema.safeParse({ ...valid, name: '  Ana García  ' })
    expect(result.success).toBe(true)
    if (result.success) {
      expect(result.data.name).toBe('Ana García')
      expect(result.data.service).toBe('bano')
    }
  })

  it('permite no elegir servicio', () => {
    const result = contactSchema.safeParse({ ...valid, service: '' })
    expect(result.success).toBe(true)
  })

  it('rechaza un servicio desconocido', () => {
    expect(contactSchema.safeParse({ ...valid, service: 'jardineria' }).success).toBe(false)
  })

  it('exige aceptar la política de privacidad', () => {
    expect(contactSchema.safeParse({ ...valid, privacy: false }).success).toBe(false)
  })

  it('rechaza emails y teléfonos inválidos', () => {
    expect(contactSchema.safeParse({ ...valid, email: 'no-es-un-email' }).success).toBe(false)
    expect(contactSchema.safeParse({ ...valid, phone: 'abc' }).success).toBe(false)
  })

  it('solo admite claves UTM conocidas', () => {
    expect(contactSchema.safeParse({ ...valid, utm: { utm_source: 'google' } }).success).toBe(true)
    expect(contactSchema.safeParse({ ...valid, utm: { evil: 'x' } }).success).toBe(false)
  })
})

describe('serviceLabel', () => {
  it('traduce la clave a su etiqueta', () => {
    expect(serviceLabel('integral')).toBe('Reforma Integral')
    expect(serviceLabel('')).toBeUndefined()
  })
})
