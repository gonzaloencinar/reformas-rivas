import { useEffect, useState } from 'react'
import { site } from '~/lib/site'
import { WhatsAppIcon } from '~/components/ui/Icons'

const CONSENT_KEY = 'cookieConsent'

function readConsent(): string | null {
  try {
    return window.localStorage.getItem(CONSENT_KEY)
  } catch {
    return null
  }
}

function writeConsent(value: 'accepted' | 'rejected') {
  try {
    window.localStorage.setItem(CONSENT_KEY, value)
  } catch {
    // Almacenamiento no disponible (modo privado, etc.): el banner se cierra igualmente.
  }
}

/**
 * Botón flotante de WhatsApp y banner de cookies. Van juntos porque el botón
 * se desplaza hacia arriba mientras el banner está visible.
 */
export function FloatingWidgets() {
  const [bannerVisible, setBannerVisible] = useState(false)

  useEffect(() => {
    if (readConsent()) return
    const timer = window.setTimeout(() => setBannerVisible(true), 1000)
    return () => window.clearTimeout(timer)
  }, [])

  const decide = (value: 'accepted' | 'rejected') => {
    writeConsent(value)
    setBannerVisible(false)
  }

  return (
    <>
      <a
        href={site.whatsappUrl}
        className="fixed right-6 bottom-[10%] z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] p-3 text-white shadow-lg transition-transform hover:scale-110 hover:bg-[#20ba5a]"
        style={{ marginBottom: bannerVisible ? '80px' : 0 }}
        aria-label="Contactar por WhatsApp"
        target="_blank"
        rel="noopener"
      >
        <WhatsAppIcon className="h-8 w-8" />
      </a>

      <div
        id="cookie-banner"
        role="region"
        aria-label="Aviso de cookies"
        className={`fixed bottom-0 left-0 z-50 w-full bg-slate-900 p-4 text-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)] transition-transform duration-500 ease-in-out ${
          bannerVisible ? 'translate-y-0' : 'translate-y-full'
        }`}
        aria-hidden={!bannerVisible}
      >
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-slate-300 md:text-left">
            Utilizamos cookies para mejorar tu experiencia. Al continuar navegando, aceptas nuestra política de
            cookies.
          </p>
          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => decide('accepted')}
              className="rounded bg-primary px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-secondary"
            >
              Aceptar
            </button>
            <button
              type="button"
              onClick={() => decide('rejected')}
              className="rounded bg-slate-700 px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-slate-600"
            >
              Rechazar
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
