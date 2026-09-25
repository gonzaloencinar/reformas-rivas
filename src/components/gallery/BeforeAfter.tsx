import { LightboxImage } from './Lightbox'

export type BeforeAfterItem = {
  before: { src: string; alt: string }
  after: { src: string; alt: string }
  title: string
  description?: string
}

/** Tarjeta grande "Antes / Después" de las páginas de servicio. */
export function BeforeAfterShowcase({ item }: { item: BeforeAfterItem }) {
  return (
    <div className="mx-auto max-w-4xl">
      <div className="before-after-container overflow-hidden rounded-xl border border-slate-200 bg-white shadow-lg">
        <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2">
          <Pane image={item.before} label="Antes" />
          <Pane image={item.after} label="Después" />
        </div>
        <div className="bg-slate-50 p-6 text-center">
          <h3 className="mb-2 text-xl font-bold text-slate-900">{item.title}</h3>
          {item.description ? <p className="text-slate-600">{item.description}</p> : null}
        </div>
      </div>
    </div>
  )
}

function Pane({ image, label }: { image: { src: string; alt: string }; label: string }) {
  return (
    <div className="before-after-image-wrapper relative aspect-square rounded-lg">
      <LightboxImage src={image.src} alt={image.alt} className="h-full w-full object-cover object-center" />
      <div className="before-after-label pointer-events-none absolute right-0 bottom-0 left-0 flex items-center justify-center bg-black/70 px-4 py-3">
        <span className="text-lg font-bold text-white uppercase">{label}</span>
      </div>
    </div>
  )
}

/** Tarjeta compacta de la galería "Nuestros proyectos". */
export function ProjectCard({ item }: { item: BeforeAfterItem }) {
  return (
    <div className="cursor-pointer overflow-hidden rounded-xl border border-slate-200 bg-slate-50 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl">
      <div className="grid grid-cols-2 gap-2 p-2">
        <CompactPane image={item.before} label="Antes" />
        <CompactPane image={item.after} label="Después" />
      </div>
      <div className="p-6 text-center">
        <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
      </div>
    </div>
  )
}

function CompactPane({ image, label }: { image: { src: string; alt: string }; label: string }) {
  return (
    <div className="relative aspect-square overflow-hidden rounded-lg">
      <LightboxImage src={image.src} alt={image.alt} className="h-full w-full object-cover object-center" />
      <div className="pointer-events-none absolute right-0 bottom-0 left-0 flex items-center justify-center bg-black/60 px-3 py-2">
        <span className="text-sm font-bold text-white uppercase">{label}</span>
      </div>
    </div>
  )
}
