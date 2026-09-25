import { createFileRoute } from '@tanstack/react-router'
import { LegalHeading, LegalList, LegalPage, LegalParagraph } from '~/components/LegalPage'
import { pageHead } from '~/lib/seo'
import { paths, site } from '~/lib/site'

export const Route = createFileRoute('/politica-privacidad')({
  head: () =>
    pageHead({
      title: 'Política de Privacidad | Reformas Rivas-Vaciamadrid',
      description: `Política de privacidad y tratamiento de datos personales de ${site.legalName}.`,
      path: paths.privacidad,
      robots: 'noindex, follow',
    }),
  component: PrivacidadPage,
})

function PrivacidadPage() {
  const mail = (
    <a href={`mailto:${site.email}`} className="text-primary hover:underline">
      {site.email}
    </a>
  )

  return (
    <LegalPage title="Política de Privacidad">
      <LegalParagraph>
        En <strong>{site.legalName}</strong> estamos comprometidos con la protección de la privacidad y el uso correcto
        de los datos personales. A continuación, describimos cómo tratamos tus datos personales.
      </LegalParagraph>

      <LegalHeading>1. Responsable del Tratamiento</LegalHeading>
      <LegalParagraph>El Responsable del Tratamiento de sus datos es:</LegalParagraph>
      <LegalList>
        <li>
          <strong>Identidad:</strong> {site.legalName}
        </li>
        <li>
          <strong>Dirección:</strong> {site.addressLine}
        </li>
        <li>
          <strong>Correo electrónico:</strong> {mail}
        </li>
      </LegalList>

      <LegalHeading>2. Finalidad del Tratamiento</LegalHeading>
      <LegalParagraph>Tratamos la información que nos facilitan las personas interesadas con el fin de:</LegalParagraph>
      <LegalList>
        <li>
          Gestionar el envío de la información que nos soliciten a través de los formularios de contacto o correo
          electrónico.
        </li>
        <li>Facilitar presupuestos de servicios de reformas.</li>
        <li>Prestar los servicios contratados y realizar la facturación de los mismos.</li>
      </LegalList>

      <LegalHeading>3. Legitimación</LegalHeading>
      <LegalParagraph>La base legal para el tratamiento de sus datos es:</LegalParagraph>
      <LegalList>
        <li>
          <strong>Consentimiento del interesado:</strong> Para responder a las consultas enviadas a través del
          formulario de contacto o correo electrónico.
        </li>
        <li>
          <strong>Ejecución de un contrato:</strong> Para la prestación de servicios contratados.
        </li>
      </LegalList>

      <LegalHeading>4. Conservación de los Datos</LegalHeading>
      <LegalParagraph>Los datos personales proporcionados se conservarán:</LegalParagraph>
      <LegalList>
        <li>Mientras se mantenga la relación mercantil.</li>
        <li>Durante el tiempo necesario para cumplir con las obligaciones legales.</li>
        <li>Hasta que el interesado solicite su supresión (cuando proceda).</li>
      </LegalList>

      <LegalHeading>5. Destinatarios</LegalHeading>
      <LegalParagraph>
        Los datos no se cederán a terceros salvo en los casos en que exista una obligación legal o sea necesario para
        la prestación del servicio (por ejemplo, proveedores de servicios tecnológicos, asesoría fiscal, etc.).
      </LegalParagraph>

      <LegalHeading>6. Derechos</LegalHeading>
      <LegalParagraph>
        Cualquier persona tiene derecho a obtener confirmación sobre si en {site.legalName} estamos tratando datos
        personales que les conciernan, o no. Las personas interesadas tienen derecho a:
      </LegalParagraph>
      <LegalList>
        <li>Acceder a sus datos personales.</li>
        <li>Solicitar la rectificación de los datos inexactos.</li>
        <li>
          Solicitar su supresión cuando, entre otros motivos, los datos ya no sean necesarios para los fines que fueron
          recogidos.
        </li>
        <li>Solicitar la limitación del tratamiento de sus datos.</li>
        <li>Oponerse al tratamiento de sus datos.</li>
        <li>Solicitar la portabilidad de los datos.</li>
      </LegalList>
      <LegalParagraph>
        Para ejercer estos derechos, puede enviar un correo electrónico a {mail} adjuntando copia de su DNI.
      </LegalParagraph>
    </LegalPage>
  )
}
