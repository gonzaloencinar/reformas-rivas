import { Link, useRouter } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import { paths, serviceNav, site } from '~/lib/site'
import { ChevronDownIcon, CloseIcon, MenuIcon, PhoneIcon } from '~/components/ui/Icons'

export function Header() {
  const [open, setOpen] = useState(false)
  const router = useRouter()

  // Cierra el menú móvil al completar cualquier navegación (atrás, enlaces fuera del menú...).
  useEffect(() => router.subscribe('onResolved', () => setOpen(false)), [router])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header id="header" className="fixed z-50 w-full bg-white shadow-md transition-all duration-300">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 lg:px-8">
        <Link to={paths.home} className="group flex items-center" aria-label="Inicio">
          <img src={site.logoPath} alt={site.name} className="h-20 w-auto" loading="eager" width={600} height={60} />
        </Link>

        {/* Navegación de escritorio */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Principal">
          <Link to={paths.home} className="font-medium text-slate-700 uppercase hover:text-primary">
            INICIO
          </Link>
          <div className="group relative py-4">
            <Link
              to={paths.home}
              hash="servicios"
              className="flex items-center gap-1 font-medium text-slate-700 uppercase hover:text-primary"
            >
              SERVICIOS
              <ChevronDownIcon className="h-4 w-4" />
            </Link>
            <div className="absolute top-full left-0 hidden w-64 rounded-lg border border-slate-100 bg-white py-2 shadow-xl group-hover:block">
              {serviceNav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="block px-4 py-2 text-sm uppercase hover:bg-slate-50 hover:text-primary"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <Link to={paths.proyectos} className="font-medium text-slate-700 uppercase hover:text-primary">
            NUESTROS PROYECTOS
          </Link>
          <Link to={paths.contacto} className="font-medium text-slate-700 uppercase hover:text-primary">
            CONTACTO
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={`tel:${site.phone}`}
            className="hidden items-center gap-2 rounded-lg bg-primary px-5 py-2.5 font-bold text-white shadow-lg transition-all hover:bg-secondary hover:shadow-primary/30 md:flex lg:px-4 lg:py-2"
            aria-label="Llamar ahora"
          >
            <PhoneIcon className="h-5 w-5" />
            <span>LLAMAR AHORA</span>
          </a>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="p-2 text-slate-700 hover:text-primary lg:hidden"
            aria-label="Abrir menú"
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <MenuIcon className="h-7 w-7" />
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      <div
        id="mobile-menu"
        className={`fixed inset-y-0 right-0 z-50 w-80 overflow-y-auto bg-white p-6 shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!open}
      >
        <div className="mb-8 flex items-center justify-between">
          <span className="font-heading text-xl font-bold text-slate-900">Menú</span>
          <button type="button" onClick={close} className="text-slate-500 hover:text-red-500" aria-label="Cerrar menú">
            <CloseIcon className="h-6 w-6" />
          </button>
        </div>
        <nav className="flex flex-col gap-4" aria-label="Menú móvil">
          <Link
            to={paths.home}
            onClick={close}
            className="border-b border-slate-100 pb-2 text-lg font-medium text-slate-800 uppercase"
          >
            INICIO
          </Link>
          <div className="border-b border-slate-100 pb-4">
            <span className="mb-2 block text-sm font-bold tracking-wider text-slate-400 uppercase">Servicios</span>
            {serviceNav.map((item, index) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={close}
                className={`block rounded-r border-l-2 border-transparent bg-slate-50 py-2 pl-2 text-slate-700 uppercase hover:border-primary hover:text-primary ${
                  index < serviceNav.length - 1 ? 'mb-1' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <Link to={paths.proyectos} onClick={close} className="text-lg font-medium text-slate-800 uppercase">
            NUESTROS PROYECTOS
          </Link>
          <Link to={paths.contacto} onClick={close} className="text-lg font-medium text-slate-800 uppercase">
            CONTACTO
          </Link>
          <a
            href={`tel:${site.phone}`}
            onClick={close}
            className="mt-4 w-full rounded-lg bg-primary py-3 text-center font-bold text-white"
          >
            Llamar Ahora
          </a>
        </nav>
      </div>
      <div
        className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden ${open ? '' : 'hidden'}`}
        onClick={close}
        aria-hidden
      />
    </header>
  )
}
