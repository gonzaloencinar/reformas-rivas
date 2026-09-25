import { Link } from '@tanstack/react-router'
import { paths } from '~/lib/site'

export function NotFound() {
  return (
    <main className="container mx-auto max-w-3xl flex-grow px-4 pt-32 pb-20 text-center">
      <p className="mb-2 text-sm font-bold tracking-wider text-primary uppercase">Error 404</p>
      <h1 className="mb-4 font-heading text-3xl font-black text-slate-900 md:text-4xl">Página no encontrada</h1>
      <p className="mb-8 text-slate-600">La página que buscas no existe o ha cambiado de dirección.</p>
      <div className="flex flex-col justify-center gap-4 sm:flex-row">
        <Link
          to={paths.home}
          className="rounded-lg bg-primary px-8 py-3 font-bold text-white shadow-lg transition-colors hover:bg-secondary"
        >
          Volver al inicio
        </Link>
        <Link
          to={paths.contacto}
          className="rounded-lg border border-slate-300 px-8 py-3 font-bold text-slate-700 transition-colors hover:border-primary hover:text-primary"
        >
          Contactar
        </Link>
      </div>
    </main>
  )
}
