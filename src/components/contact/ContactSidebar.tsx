import { site } from '~/lib/site'
import { ClockIcon, PhoneIcon } from '~/components/ui/Icons'

const reasons = [
  'Presupuesto sin compromiso',
  'Respuesta en 24h',
  '+15 años de experiencia',
  'Empresa local de confianza',
  'Garantía en trabajos',
  'Precio cerrado sin sorpresas',
]

export function ContactSidebar() {
  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
        <div className="mb-3 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
            <PhoneIcon className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">Llámanos</h3>
        </div>
        <p className="mb-2 text-sm text-slate-600">La forma más rápida de conseguir tu presupuesto</p>
        <a href={`tel:${site.phone}`} className="mb-2 block text-2xl font-bold text-primary hover:text-secondary">
          {site.phoneDisplay}
        </a>
        <p className="text-sm text-slate-500">
          Atención telefónica:
          <br />
          Lun-Vie: 8:30-21:00
          <br />
          Sábados: 8:30-13:00
        </p>
      </div>

      <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
        <div className="mb-3">
          <h3 className="text-lg font-bold text-slate-900">💬 Escríbenos por WhatsApp</h3>
        </div>
        <p className="mb-4 text-sm text-slate-600">Contacta con nosotros de forma rápida y directa</p>
        <a
          href={site.whatsappUrl}
          target="_blank"
          rel="noopener"
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] px-6 py-3 font-bold text-white transition-colors hover:bg-[#20ba5a]"
        >
          Contactar por WhatsApp
        </a>
      </div>

      <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
            <ClockIcon className="h-6 w-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">Horario</h3>
        </div>
        <ul className="space-y-2 text-sm text-slate-600">
          {site.schedule.map((item) => (
            <li key={item.day}>
              <strong className="text-slate-900">{item.day}</strong> {item.hours}
            </li>
          ))}
        </ul>
      </div>

      <div className="rounded-xl border border-primary/20 bg-primary/10 p-6">
        <h3 className="mb-4 text-lg font-bold text-slate-900">✓ ¿Por Qué Elegirnos?</h3>
        <ul className="space-y-2 text-sm text-slate-700">
          {reasons.map((reason) => (
            <li key={reason} className="flex items-start gap-2">
              <span className="font-bold text-primary">✓</span>
              <span>{reason}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
