import { Link } from '@tanstack/react-router'
import { legalNav, serviceNav, site } from '~/lib/site'
import { LocationIcon, MailIcon, PhoneIcon } from '~/components/ui/Icons'

export function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-800 bg-slate-900 py-12 text-slate-300">
      <div className="container mx-auto px-4">
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 text-white">
              <span className="font-heading text-xl font-bold">{site.legalName}</span>
            </div>
            <p className="mb-4 text-sm text-slate-400">
              Empresa líder en reformas integrales y parciales en Rivas-Vaciamadrid. Calidad, compromiso y
              profesionalidad.
            </p>
          </div>
          <div>
            <h3 className="mb-4 font-bold text-white">Servicios</h3>
            <ul className="space-y-2 text-sm">
              {serviceNav.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="transition-colors hover:text-primary">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-bold text-white">Legal</h3>
            <ul className="space-y-2 text-sm">
              {legalNav.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="transition-colors hover:text-primary">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 font-bold text-white">Contacto</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <LocationIcon className="h-4 w-4 shrink-0 text-primary" />
                {site.addressLine}
              </li>
              <li className="flex items-center gap-2">
                <PhoneIcon className="h-4 w-4 shrink-0 text-primary" />
                <a href={`tel:${site.phone}`} className="hover:text-primary">
                  {site.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MailIcon className="h-4 w-4 shrink-0 text-primary" />
                <a href={`mailto:${site.email}`} className="hover:text-primary">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between border-t border-slate-800 pt-8 text-xs text-slate-500 md:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {site.name}. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
