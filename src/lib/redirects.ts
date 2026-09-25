import { paths } from './site'

/**
 * Redirecciones 301 desde las URLs `.html` del sitio original a las URLs limpias.
 * Se aplican como `routeRules` de Nitro (en Vercel se resuelven en el borde).
 */
export const legacyRedirects: Readonly<Record<string, string>> = {
  '/index.html': paths.home,
  '/reformas-integrales.html': paths.integrales,
  '/reformas-banos.html': paths.banos,
  '/reformas-cocinas.html': paths.cocinas,
  '/reformas-pisos.html': paths.pisos,
  '/reformas-locales.html': paths.locales,
  '/otros-servicios.html': paths.otros,
  '/nuestros-proyectos.html': paths.proyectos,
  '/contacto.html': paths.contacto,
  '/aviso-legal.html': paths.avisoLegal,
  '/politica-privacidad.html': paths.privacidad,
  '/politica-cookies.html': paths.cookies,
}
