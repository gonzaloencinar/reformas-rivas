import { Link } from '@tanstack/react-router'
import { useServerFn } from '@tanstack/react-start'
import { useEffect, useState, type FormEvent } from 'react'
import { contactSchema, serviceLabels, utmKeys, type ContactInput, type ServiceKey } from '~/lib/contact-schema'
import { paths } from '~/lib/site'
import { submitContact } from '~/server/contact.functions'

export type ServiceOption = { value: ServiceKey | ''; label: string }

/** Opciones del formulario general (home, contacto y páginas de reformas). */
export const reformaOptions: ServiceOption[] = [
  { value: '', label: 'Selecciona un servicio' },
  { value: 'integral', label: serviceLabels.integral },
  { value: 'cocina', label: serviceLabels.cocina },
  { value: 'bano', label: serviceLabels.bano },
  { value: 'piso', label: serviceLabels.piso },
  { value: 'local', label: serviceLabels.local },
  { value: 'otro', label: serviceLabels.otro },
]

/** Opciones del formulario de "Otros servicios". */
export const otrosServiciosOptions: ServiceOption[] = [
  { value: 'fontaneria', label: serviceLabels.fontaneria },
  { value: 'electricidad', label: serviceLabels.electricidad },
  { value: 'pintura', label: serviceLabels.pintura },
  { value: 'pladur', label: serviceLabels.pladur },
  { value: 'aislamiento', label: serviceLabels.aislamiento },
  { value: 'otro', label: 'Otro' },
]

type ContactFormProps = {
  services?: ServiceOption[]
  defaultService?: ServiceKey | ''
  /** Variante compacta usada en "Otros servicios". */
  dense?: boolean
  nameLabel?: string
  serviceLabel?: string
  messageLabel?: string
  submitLabel?: string
  className?: string
}

type Status = 'idle' | 'submitting' | 'success' | 'error'

function readUtm(): ContactInput['utm'] {
  const params = new URLSearchParams(window.location.search)
  const utm: Record<string, string> = {}
  for (const key of utmKeys) {
    const value = params.get(key)
    if (value) utm[key] = value
  }
  return Object.keys(utm).length ? (utm as ContactInput['utm']) : undefined
}

function formToInput(form: HTMLFormElement): ContactInput {
  const fd = new FormData(form)
  const text = (key: string) => String(fd.get(key) ?? '')
  return {
    name: text('name'),
    phone: text('phone'),
    email: text('email'),
    location: text('location'),
    service: text('service') as ContactInput['service'],
    message: text('message'),
    privacy: fd.get('privacy') === 'on' ? true : (false as unknown as true),
    website: text('website'),
    page: window.location.pathname,
    utm: readUtm(),
  }
}

export function ContactForm({
  services = reformaOptions,
  defaultService = '',
  dense = false,
  nameLabel = 'Nombre completo *',
  serviceLabel = 'Tipo de reforma',
  messageLabel = 'Cuéntanos tu proyecto *',
  submitLabel = '📧 Enviar Solicitud',
  className = '',
}: ContactFormProps) {
  const submit = useServerFn(submitContact)
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  useEffect(() => {
    if (status !== 'error') return
    const timer = window.setTimeout(() => setStatus('idle'), 8000)
    return () => window.clearTimeout(timer)
  }, [status])

  const labelClass = `block text-sm font-medium text-slate-700 ${dense ? 'mb-1' : 'mb-2'}`
  const inputClass = `w-full rounded-lg border border-slate-300 px-4 ${
    dense ? 'py-2' : 'py-3'
  } outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary`

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const input = formToInput(form)

    const parsed = contactSchema.safeParse(input)
    if (!parsed.success) {
      setErrorMessage(parsed.error.issues[0]?.message ?? 'Revisa los datos del formulario.')
      setStatus('error')
      return
    }

    setStatus('submitting')
    try {
      await submit({ data: parsed.data })
      setStatus('success')
    } catch (error) {
      console.error('[contacto] Error al enviar el formulario', error)
      setErrorMessage('Ha ocurrido un error. Por favor, inténtalo de nuevo o llámanos directamente.')
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div
        className={`rounded-xl border border-slate-100 bg-white p-8 shadow-lg ${className}`}
        role="status"
        aria-live="polite"
      >
        <div className="px-4 py-10 text-center">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-green-50 text-3xl text-green-700">
            ✓
          </div>
          <h3 className="mb-2 text-xl font-bold text-green-800">¡Solicitud enviada!</h3>
          <p className="text-slate-700">Nos pondremos en contacto contigo lo antes posible.</p>
        </div>
      </div>
    )
  }

  return (
    <form
      className={`rounded-xl border border-slate-100 bg-white p-8 shadow-lg ${className}`}
      name="contact"
      method="POST"
      onSubmit={onSubmit}
      noValidate={false}
    >
      <div className="mb-4">
        <label htmlFor="name" className={labelClass}>
          {nameLabel}
        </label>
        <input type="text" id="name" name="name" required autoComplete="name" className={inputClass} />
      </div>

      <div className="mb-4 grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="phone" className={labelClass}>
            Teléfono *
          </label>
          <input type="tel" id="phone" name="phone" required autoComplete="tel" className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Email *
          </label>
          <input type="email" id="email" name="email" required autoComplete="email" className={inputClass} />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="location" className={labelClass}>
          Localidad *
        </label>
        <input
          type="text"
          id="location"
          name="location"
          required
          autoComplete="address-level2"
          className={inputClass}
          placeholder="Ej: Rivas-Vaciamadrid"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="service" className={labelClass}>
          {serviceLabel}
        </label>
        <select id="service" name="service" defaultValue={defaultService} className={inputClass}>
          {services.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="message" className={labelClass}>
          {messageLabel}
        </label>
        <textarea id="message" name="message" rows={dense ? 4 : 5} required className={inputClass} />
      </div>

      {/* Honeypot: oculto para personas, tentador para bots. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Sitio web</label>
        <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="mb-6">
        <label className="flex cursor-pointer items-start gap-2">
          <input
            type="checkbox"
            name="privacy"
            required
            className="mt-1 h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary"
          />
          <span className="text-sm text-slate-600">
            He leído y acepto la{' '}
            <Link to={paths.privacidad} className="text-primary hover:underline">
              política de privacidad
            </Link>
          </span>
        </label>
      </div>

      <button
        type="submit"
        disabled={status === 'submitting'}
        className={`w-full rounded-lg bg-primary font-bold text-white shadow-lg transition-colors hover:bg-secondary hover:shadow-primary/30 disabled:cursor-not-allowed disabled:opacity-70 ${
          dense ? 'py-3' : 'py-4 text-lg'
        }`}
      >
        {status === 'submitting' ? 'Enviando...' : submitLabel}
      </button>

      {status === 'error' && errorMessage ? (
        <div
          role="alert"
          className="mt-4 rounded-lg border border-red-300 bg-red-50 p-4 text-center text-sm text-red-800"
        >
          {errorMessage}
        </div>
      ) : null}

      <p className="mt-4 text-center text-xs text-slate-500">
        * Campos obligatorios. Tus datos están protegidos y no serán cedidos a terceros.
      </p>
    </form>
  )
}
