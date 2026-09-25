import { createServerFn } from '@tanstack/react-start'
import { contactSchema } from '~/lib/contact-schema'
import { sendContactEmail } from './contact.server'

/**
 * Recibe una solicitud de presupuesto, la valida y la envía por email con Resend.
 * Es un endpoint público: no devuelve datos sensibles y no requiere autenticación.
 */
export const submitContact = createServerFn({ method: 'POST' })
  .validator(contactSchema)
  .handler(async ({ data }) => {
    // Honeypot relleno: casi seguro un bot. Se responde como éxito sin hacer nada.
    if (data.website) {
      return { ok: true as const }
    }

    await sendContactEmail(data)

    return { ok: true as const }
  })
