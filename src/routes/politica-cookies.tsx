import { createFileRoute } from '@tanstack/react-router'
import { LegalHeading, LegalList, LegalPage, LegalParagraph } from '~/components/LegalPage'
import { pageHead } from '~/lib/seo'
import { paths, site } from '~/lib/site'

const browserLinks = [
  { label: 'Google Chrome', href: 'https://support.google.com/chrome/answer/95647?hl=es' },
  {
    label: 'Mozilla Firefox',
    href: 'https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias',
  },
  { label: 'Safari', href: 'https://support.apple.com/es-es/guide/safari/sfri11471/mac' },
  {
    label: 'Internet Explorer / Edge',
    href: 'https://support.microsoft.com/es-es/windows/eliminar-y-administrar-cookies-168dab11-0753-043d-7c16-ede5947fc64d',
  },
]

export const Route = createFileRoute('/politica-cookies')({
  head: () =>
    pageHead({
      title: 'Política de Cookies | Reformas Rivas-Vaciamadrid',
      description: `Política de cookies del sitio web de ${site.legalName}.`,
      path: paths.cookies,
      robots: 'noindex, follow',
    }),
  component: CookiesPage,
})

function CookiesPage() {
  return (
    <LegalPage title="Política de Cookies">
      <LegalHeading>1. ¿Qué son las cookies?</LegalHeading>
      <LegalParagraph>
        Una cookie es un fichero que se descarga en su ordenador al acceder a determinadas páginas web. Las cookies
        permiten a una página web, entre otras cosas, almacenar y recuperar información sobre los hábitos de navegación
        de un usuario o de su equipo y, dependiendo de la información que contengan y de la forma en que utilice su
        equipo, pueden utilizarse para reconocer al usuario.
      </LegalParagraph>

      <LegalHeading>2. Tipos de cookies que utiliza esta web</LegalHeading>
      <LegalParagraph>Esta página web utiliza los siguientes tipos de cookies:</LegalParagraph>
      <LegalList>
        <li>
          <strong>Cookies técnicas:</strong> Son aquellas que permiten al usuario la navegación a través de una página
          web, plataforma o aplicación y la utilización de las diferentes opciones o servicios que en ella existan.
        </li>
        <li>
          <strong>Cookies de personalización:</strong> Son aquellas que permiten al usuario acceder al servicio con
          algunas características de carácter general predefinidas en función de una serie de criterios en el terminal
          del usuario.
        </li>
        <li>
          <strong>Cookies de análisis:</strong> Son aquellas que bien tratadas por nosotros o por terceros, nos permiten
          cuantificar el número de usuarios y así realizar la medición y análisis estadístico de la utilización que
          hacen los usuarios del servicio ofertado. Para ello se analiza su navegación en nuestra página web con el fin
          de mejorar la oferta de productos o servicios que le ofrecemos.
        </li>
      </LegalList>

      <LegalHeading>3. Gestión de cookies</LegalHeading>
      <LegalParagraph>
        Puede usted permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las
        opciones del navegador instalado en su ordenador.
      </LegalParagraph>
      <LegalParagraph>
        A continuación le ofrecemos enlaces en los que encontrará información sobre cómo puede activar sus preferencias
        en los principales navegadores:
      </LegalParagraph>
      <LegalList>
        {browserLinks.map((link) => (
          <li key={link.href}>
            <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              {link.label}
            </a>
          </li>
        ))}
      </LegalList>

      <LegalHeading>4. Aceptación de cookies</LegalHeading>
      <LegalParagraph>
        Al acceder a este sitio web por primera vez, verá un banner informándole de la utilización de cookies y donde
        puede consultar esta Política de Cookies. Si consiente la utilización de cookies, continúa navegando utilizando
        la barra de desplazamiento o hace clic en algún enlace (aceptar) se entenderá que usted ha consentido nuestra
        política de cookies y, por tanto, la aceptación para la instalación de las mismas en su equipo o dispositivo.
      </LegalParagraph>
    </LegalPage>
  )
}
