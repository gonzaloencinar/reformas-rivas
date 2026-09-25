import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'

type LightboxImage = { src: string; alt: string }

type LightboxContextValue = {
  open: (image: LightboxImage) => void
}

const LightboxContext = createContext<LightboxContextValue | null>(null)

export function useLightbox() {
  const ctx = useContext(LightboxContext)
  if (!ctx) throw new Error('useLightbox debe usarse dentro de <LightboxProvider>')
  return ctx
}

/** Visor de imágenes a pantalla completa. Se cierra con el fondo, el aspa o la tecla Escape. */
export function LightboxProvider({ children }: { children: ReactNode }) {
  const [image, setImage] = useState<LightboxImage | null>(null)

  const open = useCallback((next: LightboxImage) => setImage(next), [])
  const close = useCallback(() => setImage(null), [])

  useEffect(() => {
    if (!image) return
    document.body.style.overflow = 'hidden'
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') close()
    }
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKey)
    }
  }, [image, close])

  const value = useMemo(() => ({ open }), [open])

  return (
    <LightboxContext.Provider value={value}>
      {children}
      {image ? (
        <div
          className="fixed inset-0 z-9999 flex items-center justify-center bg-black/95 p-5"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={image.alt}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Cerrar"
            className="absolute top-5 right-8 z-10000 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white/10 text-[40px] font-bold text-white transition-all hover:scale-110 hover:bg-white/20"
          >
            &times;
          </button>
          <img
            src={image.src}
            alt={image.alt}
            className="max-h-[90%] max-w-[90%] rounded-lg object-contain shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      ) : null}
    </LightboxContext.Provider>
  )
}

type LightboxImageProps = LightboxImage & { className?: string }

/** Imagen que abre el visor al hacer clic. */
export function LightboxImage({ src, alt, className = '' }: LightboxImageProps) {
  const { open } = useLightbox()
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className={`cursor-pointer transition-opacity hover:opacity-90 ${className}`}
      onClick={() => open({ src, alt })}
    />
  )
}
