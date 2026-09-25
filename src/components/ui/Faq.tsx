import { useId, useState } from 'react'
import type { Faq } from '~/lib/schema'
import { ChevronDownIcon } from './Icons'

/** Acordeón de preguntas frecuentes: solo una respuesta abierta a la vez. */
export function FaqAccordion({ items }: { items: readonly Faq[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const baseId = useId()

  return (
    <div className="space-y-4">
      {items.map((faq, index) => {
        const isOpen = openIndex === index
        const panelId = `${baseId}-panel-${index}`
        return (
          <div key={faq.question} className="overflow-hidden rounded-xl bg-slate-50">
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : index)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="flex w-full items-center justify-between px-6 py-4 text-left transition-colors hover:bg-slate-100"
            >
              <span className="font-bold text-slate-900">{faq.question}</span>
              <ChevronDownIcon
                className={`h-5 w-5 shrink-0 text-primary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
              />
            </button>
            <div id={panelId} hidden={!isOpen} className="px-6 pb-4 text-slate-600">
              {faq.answer}
            </div>
          </div>
        )
      })}
    </div>
  )
}
