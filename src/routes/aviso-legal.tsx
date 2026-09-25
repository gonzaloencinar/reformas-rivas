import { createFileRoute, Link } from '@tanstack/react-router'
import { LegalHeading, LegalList, LegalPage, LegalParagraph } from '~/components/LegalPage'
import { pageHead } from '~/lib/seo'
import { paths, site } from '~/lib/site'

export const Route = createFileRoute('/aviso-legal')({
  head: () =>
    pageHead({
      title: 'Aviso Legal | Reformas Rivas-Vaciamadrid',
      description: `Aviso legal y condiciones de uso del sitio web de ${site.legalName}.`,
      path: paths.avisoLegal,
      robots: 'noindex, follow',
    }),
  component: AvisoLegalPage,
})

function AvisoLegalPage() {
  return (
    <LegalPage title="Aviso Legal">
      <LegalHeading>1. Datos Identificativos</LegalHeading>
      <LegalParagraph>
        En cumplimiento con el deber de información recogido en artículo 10 de la Ley 34/2002, de 11 de julio, de
        Servicios de la Sociedad de la Información y del Comercio Electrónico, a continuación se reflejan los
        siguientes datos:
      </LegalParagraph>
      <LegalList>
        <li>
          <strong>Titular del dominio web:</strong> {site.legalName} (en adelante, "el Responsable")
        </li>
        <li>
          <strong>Domicilio:</strong> {site.addressLine}
        </li>
        <li>
          <strong>Correo electrónico de contacto:</strong>{' '}
          <a href={`mailto:${site.email}`} className="text-primary hover:underline">
            {site.email}
          </a>
        </li>
        <li>
          <strong>Teléfono:</strong> {site.phoneSpaced}
        </li>
        <li>
          <strong>Sitio Web:</strong> reformasrivas.com
        </li>
      </LegalList>

      <LegalHeading>2. Usuarios</LegalHeading>
      <LegalParagraph>
        El acceso y/o uso de este portal atribuye la condición de USUARIO, que acepta, desde dicho acceso y/o uso, las
        Condiciones Generales de Uso aquí reflejadas. Las citadas Condiciones serán de aplicación independientemente de
        las Condiciones Generales de Contratación que en su caso resulten de obligado cumplimiento.
      </LegalParagraph>

      <LegalHeading>3. Uso del Portal</LegalHeading>
      <LegalParagraph>
        Este sitio web proporciona el acceso a multitud de informaciones, servicios, programas o datos (en adelante,
        "los contenidos") en Internet pertenecientes al Responsable o a sus licenciantes a los que el USUARIO pueda
        tener acceso. El USUARIO asume la responsabilidad del uso del portal.
      </LegalParagraph>
      <LegalParagraph>
        El USUARIO se compromete a hacer un uso adecuado de los contenidos y servicios que el Responsable ofrece a
        través de su portal y con carácter enunciativo pero no limitativo, a no emplearlos para:
      </LegalParagraph>
      <LegalList>
        <li>Incurrir en actividades ilícitas, ilegales o contrarias a la buena fe y al orden público.</li>
        <li>
          Difundir contenidos o propaganda de carácter racista, xenófobo, pornográfico-ilegal, de apología del
          terrorismo o atentatorio contra los derechos humanos.
        </li>
        <li>
          Provocar daños en los sistemas físicos y lógicos del Responsable, de sus proveedores o de terceras personas,
          introducir o difundir en la red virus informáticos o cualesquiera otros sistemas físicos o lógicos que sean
          susceptibles de provocar los daños anteriormente mencionados.
        </li>
      </LegalList>

      <LegalHeading>4. Protección de Datos</LegalHeading>
      <LegalParagraph>
        El Responsable cumple con las directrices de la normativa vigente en materia de protección de datos personales,
        el Reglamento (UE) 2016/679 de 27 de abril de 2016 (RGPD) y la Ley Orgánica 3/2018, de 5 de diciembre
        (LOPDGDD), y vela por garantizar un correcto uso y tratamiento de los datos personales del usuario. Para más
        información, consulte nuestra{' '}
        <Link to={paths.privacidad} className="text-primary hover:underline">
          Política de Privacidad
        </Link>
        .
      </LegalParagraph>

      <LegalHeading>5. Propiedad Intelectual e Industrial</LegalHeading>
      <LegalParagraph>
        El Responsable por sí o como cesionaria, es titular de todos los derechos de propiedad intelectual e industrial
        de su página web, así como de los elementos contenidos en la misma (a título enunciativo, imágenes, sonido,
        audio, vídeo, software o textos; marcas o logotipos, combinaciones de colores, estructura y diseño, selección de
        materiales usados, programas de ordenador necesarios para su funcionamiento, acceso y uso, etc.), titularidad
        del Responsable o bien de sus licenciantes.
      </LegalParagraph>
      <LegalParagraph>
        Todos los derechos reservados. En virtud de lo dispuesto en los artículos 8 y 32.1, párrafo segundo, de la Ley
        de Propiedad Intelectual, quedan expresamente prohibidas la reproducción, la distribución y la comunicación
        pública, incluida su modalidad de puesta a disposición, de la totalidad o parte de los contenidos de esta página
        web, con fines comerciales, en cualquier soporte y por cualquier medio técnico, sin la autorización del
        Responsable.
      </LegalParagraph>

      <LegalHeading>6. Exclusión de Garantías y Responsabilidad</LegalHeading>
      <LegalParagraph>
        El Responsable no se hace responsable, en ningún caso, de los daños y perjuicios de cualquier naturaleza que
        pudieran ocasionar, a título enunciativo: errores u omisiones en los contenidos, falta de disponibilidad del
        portal o la transmisión de virus o programas maliciosos o lesivos en los contenidos, a pesar de haber adoptado
        todas las medidas tecnológicas necesarias para evitarlo.
      </LegalParagraph>

      <LegalHeading>7. Modificaciones</LegalHeading>
      <LegalParagraph>
        El Responsable se reserva el derecho de efectuar sin previo aviso las modificaciones que considere oportunas en
        su portal, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se presten a través de la
        misma como la forma en la que éstos aparezcan presentados o localizados en su portal.
      </LegalParagraph>

      <LegalHeading>8. Enlaces</LegalHeading>
      <LegalParagraph>
        En el caso de que en la web se dispusiesen enlaces o hipervínculos hacía otros sitios de Internet, el
        Responsable no ejercerá ningún tipo de control sobre dichos sitios y contenidos. En ningún caso el Responsable
        asumirá responsabilidad alguna por los contenidos de algún enlace perteneciente a un sitio web ajeno.
      </LegalParagraph>

      <LegalHeading>9. Derecho de Exclusión</LegalHeading>
      <LegalParagraph>
        El Responsable se reserva el derecho a denegar o retirar el acceso a portal y/o los servicios ofrecidos sin
        necesidad de preaviso, a instancia propia o de un tercero, a aquellos usuarios que incumplan las presentes
        Condiciones Generales de Uso.
      </LegalParagraph>

      <LegalHeading>10. Legislación Aplicable y Jurisdicción</LegalHeading>
      <LegalParagraph>
        La relación entre el Responsable y el USUARIO se regirá por la normativa española vigente y cualquier
        controversia se someterá a los Juzgados y tribunales de la ciudad de Madrid.
      </LegalParagraph>
    </LegalPage>
  )
}
