import { z } from 'zod'

/** Valores del `<select>` de servicio y su etiqueta legible. */
export const serviceLabels = {
  integral: 'Reforma Integral',
  cocina: 'Reforma de Cocina',
  bano: 'Reforma de Baño',
  piso: 'Reforma de Piso',
  local: 'Reforma de Local Comercial',
  fontaneria: 'Fontanería',
  electricidad: 'Electricidad',
  pintura: 'Pintura',
  pladur: 'Pladur',
  aislamiento: 'Aislamiento',
  otro: 'Otro servicio',
} as const

export type ServiceKey = keyof typeof serviceLabels

export const serviceKeys = Object.keys(serviceLabels) as ServiceKey[]

export const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'] as const

const utmValue = z.string().max(200).optional()

/** Parámetros UTM admitidos. Cualquier otra clave se rechaza. */
export const utmSchema = z.strictObject({
  utm_source: utmValue,
  utm_medium: utmValue,
  utm_campaign: utmValue,
  utm_term: utmValue,
  utm_content: utmValue,
})

/** Esquema compartido entre cliente y servidor. */
export const contactSchema = z.object({
  name: z.string().trim().min(2, 'Indica tu nombre').max(100),
  phone: z
    .string()
    .trim()
    .min(6, 'Indica un teléfono válido')
    .max(30)
    .regex(/^[+\d\s().-]+$/, 'Indica un teléfono válido'),
  email: z.email('Indica un email válido').max(200),
  location: z.string().trim().min(2, 'Indica tu localidad').max(100),
  service: z.enum(serviceKeys).or(z.literal('')).default(''),
  message: z.string().trim().min(5, 'Cuéntanos brevemente tu proyecto').max(5000),
  privacy: z.literal(true, 'Debes aceptar la política de privacidad'),
  /** Honeypot: los humanos no lo ven, los bots lo rellenan. */
  website: z.string().max(0).optional(),
  page: z.string().max(300).optional(),
  utm: utmSchema.optional(),
})

export type ContactInput = z.input<typeof contactSchema>
export type ContactData = z.output<typeof contactSchema>

export function serviceLabel(service: ContactData['service']): string | undefined {
  return service ? serviceLabels[service] : undefined
}
