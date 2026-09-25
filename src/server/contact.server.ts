import { Resend } from 'resend'
import { serviceLabel, type ContactData } from '~/lib/contact-schema'
import { site } from '~/lib/site'

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

function row(label: string, value: string | undefined) {
  if (!value) return ''
  return `<tr><td style="padding:6px 12px 6px 0;color:#64748b;white-space:nowrap;vertical-align:top">${label}</td><td style="padding:6px 0;color:#0f172a">${escapeHtml(value).replaceAll('\n', '<br>')}</td></tr>`
}

export function buildContactEmail(data: ContactData) {
  const service = serviceLabel(data.service)
  const utm = data.utm ? Object.entries(data.utm).map(([k, v]) => `${k}=${v}`).join(', ') : undefined
  const subject = `Nueva solicitud de presupuesto: ${data.name}${service ? ` · ${service}` : ''}`

  const text = [
    'Nueva solicitud de presupuesto desde la web',
    '',
    `Nombre: ${data.name}`,
    `Teléfono: ${data.phone}`,
    `Email: ${data.email}`,
    `Localidad: ${data.location}`,
    service ? `Servicio: ${service}` : null,
    '',
    'Mensaje:',
    data.message,
    '',
    data.page ? `Página: ${data.page}` : null,
    utm ? `UTM: ${utm}` : null,
  ]
    .filter((line) => line !== null)
    .join('\n')

  const html = `<!doctype html><html lang="es"><body style="margin:0;padding:24px;background:#f8fafc;font-family:Inter,Arial,sans-serif;font-size:15px;line-height:1.5">
  <div style="max-width:600px;margin:0 auto;background:#fff;border:1px solid #e2e8f0;border-radius:12px;padding:24px">
    <h1 style="margin:0 0 4px;font-size:20px;color:#0f172a">Nueva solicitud de presupuesto</h1>
    <p style="margin:0 0 16px;color:#64748b">Enviada desde el formulario de ${escapeHtml(site.url)}</p>
    <table style="border-collapse:collapse;width:100%">
      ${row('Nombre', data.name)}
      ${row('Teléfono', data.phone)}
      ${row('Email', data.email)}
      ${row('Localidad', data.location)}
      ${row('Servicio', service)}
      ${row('Mensaje', data.message)}
      ${row('Página', data.page)}
      ${row('UTM', utm)}
    </table>
    <p style="margin:16px 0 0;color:#64748b;font-size:13px">Responde a este email para contactar directamente con el cliente.</p>
  </div>
</body></html>`

  return { subject, text, html }
}

function requireEnv(name: string): string {
  const value = process.env[name]
  if (!value) throw new Error(`Falta la variable de entorno ${name}`)
  return value
}

/** Envía el email de la solicitud con Resend. En desarrollo sin clave, lo imprime por consola. */
export async function sendContactEmail(data: ContactData): Promise<void> {
  const email = buildContactEmail(data)
  const apiKey = process.env.RESEND_API_KEY

  if (!apiKey && import.meta.env.DEV) {
    console.info('[contacto] RESEND_API_KEY no definida; email simulado:\n' + email.text)
    return
  }

  const resend = new Resend(apiKey ?? requireEnv('RESEND_API_KEY'))
  const { error } = await resend.emails.send({
    from: process.env.CONTACT_FROM_EMAIL ?? `Web Reformas Rivas <web@reformasrivas.com>`,
    to: [process.env.CONTACT_TO_EMAIL ?? site.email],
    replyTo: data.email,
    subject: email.subject,
    text: email.text,
    html: email.html,
  })

  if (error) {
    throw new Error(`Resend: ${error.message}`)
  }
}
