import type { BeforeAfterItem } from '~/components/gallery/BeforeAfter'
import type { Testimonial } from '~/components/ui/Testimonials'
import type { ServiceKey } from '~/lib/contact-schema'
import type { Faq } from '~/lib/schema'
import { paths, type SitePath } from '~/lib/site'

export type ServiceContent = {
  path: SitePath
  seo: { title: string; description: string }
  hero: {
    /** Texto antes de la palabra destacada, p. ej. "Reformas de". */
    prefix: string
    highlight: string
    text: string
    image: { src: string; alt: string; objectPosition?: string }
  }
  intro: { title: string; text: string }
  features: { icon: string; title: string; text: string }[]
  benefits: { title: string; items: string[] }
  beforeAfter: { intro: string; items: BeforeAfterItem[] }
  testimonials: { intro: string; items: Testimonial[] }
  contact: { title: string; defaultService: ServiceKey }
  faq: { title: string; items: Faq[] }
}

export const reformasIntegrales: ServiceContent = {
  path: paths.integrales,
  seo: {
    title: 'Reformas Integrales en Rivas-Vaciamadrid | Empresa de Reformas',
    description:
      'Especialistas en reformas integrales en Rivas-Vaciamadrid. Renovamos tu vivienda al completo con diseño de interiores y acabados de primera calidad. Presupuesto sin compromiso.',
  },
  hero: {
    prefix: 'Reformas',
    highlight: 'Integrales',
    text: 'Renovamos tu vivienda al completo. Coordinación total de gremios, diseño de interiores y acabados perfectos para estrenar casa sin mudarte.',
    image: { src: '/images/salon nuevo.png', alt: 'Reformas Integrales en Rivas', objectPosition: 'center 60%' },
  },
  intro: {
    title: '¿Qué incluye una reforma integral?',
    text: 'Una reforma integral es la transformación completa de tu vivienda. Nos encargamos de coordinar todos los gremios necesarios para que tu proyecto se ejecute de forma ordenada y eficiente.',
  },
  features: [
    {
      icon: '🎨',
      title: 'Diseño y Planificación',
      text: 'Asesoramiento en diseño de interiores, distribución de espacios y selección de materiales según tu presupuesto y estilo.',
    },
    {
      icon: '🔨',
      title: 'Obra y Ejecución',
      text: 'Coordinación de albañilería, fontanería, electricidad, carpintería, pintura y acabados. Un único responsable para todo.',
    },
    {
      icon: '📋',
      title: 'Gestión de Licencias',
      text: 'Tramitamos todas las licencias necesarias con el Ayuntamiento de Rivas-Vaciamadrid para que no tengas que preocuparte.',
    },
    {
      icon: '🗝️',
      title: 'Entrega Llave en Mano',
      text: 'Entregamos tu vivienda completamente reformada, limpia y lista para estrenar. Sin sorpresas ni trabajos pendientes.',
    },
  ],
  benefits: {
    title: 'Ventajas de una reforma integral',
    items: [
      'Ahorro de tiempo: todo coordinado desde un único punto',
      'Mejor precio: negociamos con proveedores para obtener mejores condiciones',
      'Garantía única: un solo responsable para toda la obra',
      'Diseño coherente: todos los espacios con un estilo unificado',
    ],
  },
  beforeAfter: {
    intro: 'Descubre la transformación real de nuestros proyectos de reformas integrales',
    items: [
      {
        before: { src: '/images/salon antiguo.png', alt: 'Antes - Reforma integral' },
        after: { src: '/images/salon nuevo.png', alt: 'Después - Reforma integral' },
        title: 'Reforma Integral de Vivienda',
        description: 'Transformación completa con diseño de interiores, suelos, pintura y acabados de primera calidad',
      },
    ],
  },
  testimonials: {
    intro: 'Opiniones reales de clientes que confiaron en nosotros para reformar sus viviendas',
    items: [
      {
        name: 'Roberto Jiménez',
        location: 'Arganda del Rey',
        quote:
          'Reformaron toda mi casa y el resultado es increíble. Coordinaron todos los gremios perfectamente y entregaron la vivienda lista para vivir. El diseño es moderno y funcional. ¡100% recomendados!',
      },
      {
        name: 'Patricia Moreno',
        location: 'Rivas-Vaciamadrid',
        quote:
          'Una experiencia excelente. Reformaron mi piso completo y ahora parece una casa nueva. Todo quedó perfecto: suelos, pintura, cocina, baños... Un único responsable para todo facilitó mucho las cosas.',
      },
      {
        name: 'Miguel Torres',
        location: 'San Fernando de Henares',
        quote:
          'Reformaron mi vivienda al completo y el resultado superó todas mis expectativas. Profesionales, puntuales y con un acabado impecable. La gestión de licencias fue perfecta, no tuve que preocuparme de nada.',
      },
    ],
  },
  contact: { title: 'Solicita tu Presupuesto de Reforma Integral', defaultService: 'integral' },
  faq: {
    title: 'Preguntas Frecuentes sobre Reformas Integrales',
    items: [
      {
        question: '¿Cuánto tiempo tarda una reforma integral?',
        answer:
          'El tiempo de una reforma integral depende del tamaño de la vivienda y la envergadura de los trabajos. Una reforma completa de un piso de 80-100m² suele tardar entre 2 y 4 meses. Planificamos todas las fases para minimizar las molestias y optimizar los tiempos.',
      },
      {
        question: '¿Puedo vivir en casa durante la reforma integral?',
        answer:
          'Depende de la envergadura de la obra. Si la reforma es muy completa, puede ser más cómodo alojarse temporalmente fuera. Sin embargo, planificamos el trabajo por fases para que puedas seguir viviendo en casa, aunque con algunas incomodidades. Te asesoramos sobre la mejor opción según tu caso.',
      },
      {
        question: '¿Qué incluye exactamente una reforma integral?',
        answer:
          'Una reforma integral incluye: albañilería, fontanería, electricidad, carpintería, pintura, suelos, techos, cocina, baños y todos los acabados. También gestionamos las licencias necesarias y coordinamos todos los gremios. Te entregamos la vivienda completamente reformada y lista para vivir.',
      },
      {
        question: '¿Necesito licencia para una reforma integral?',
        answer:
          'Sí, las reformas integrales suelen requerir licencia de obra del Ayuntamiento, especialmente si se modifican instalaciones o la distribución. Nosotros nos encargamos de toda la gestión de licencias y trámites administrativos, para que tú no tengas que preocuparte de nada.',
      },
      {
        question: '¿Ofrecéis diseño de interiores?',
        answer:
          'Sí, ofrecemos asesoramiento en diseño de interiores y distribución de espacios. Te ayudamos a elegir estilos, colores, materiales y acabados que se adapten a tu presupuesto y gustos. También podemos presentarte renders 3D para que veas cómo quedará tu vivienda antes de empezar.',
      },
      {
        question: '¿Qué garantía tiene una reforma integral?',
        answer:
          'Ofrecemos garantía completa en todos los trabajos realizados: instalaciones, materiales y mano de obra. La garantía varía según el tipo de trabajo (instalaciones eléctricas y de fontanería tienen garantía extendida), pero siempre cubrimos cualquier defecto o problema que pueda surgir.',
      },
    ],
  },
}

export const reformasBanos: ServiceContent = {
  path: paths.banos,
  seo: {
    title: 'Reformas de Baños en Rivas-Vaciamadrid | Especialistas en Baños',
    description:
      'Especialistas en reformas de baños en Rivas-Vaciamadrid. Cambio de bañera por plato de ducha, sanitarios modernos y alicatados de diseño. Presupuesto sin compromiso.',
  },
  hero: {
    prefix: 'Reformas de',
    highlight: 'Baños',
    text: 'Cambio de bañera por plato de ducha, sanitarios modernos, alicatados de diseño y mobiliario a medida. Tu baño nuevo en tiempo récord.',
    image: { src: '/images/baño nuevo.png', alt: 'Reformas de Baños en Rivas', objectPosition: 'center 60%' },
  },
  intro: {
    title: 'Transformamos tu baño en un espacio moderno y funcional',
    text: 'Un baño renovado no solo mejora el valor de tu vivienda, también transforma tu día a día. Trabajamos con los mejores materiales y acabados para crear un espacio que combine diseño y funcionalidad.',
  },
  features: [
    {
      icon: '🚿',
      title: 'Plato de Ducha',
      text: 'Sustitución de bañera por plato de ducha moderno con mampara. Mejor accesibilidad y diseño actual.',
    },
    {
      icon: '🚰',
      title: 'Sanitarios y Grifería',
      text: 'Instalación de sanitarios de diseño, grifería termostática y sistemas de ahorro de agua.',
    },
    {
      icon: '🧱',
      title: 'Alicatado y Pavimento',
      text: 'Azulejos y pavimentos antideslizantes de última generación. Diseños modernos y fáciles de mantener.',
    },
    {
      icon: '🪑',
      title: 'Mobiliario a Medida',
      text: 'Muebles de baño personalizados que aprovechan cada centímetro. Muebles suspendidos y espejos con iluminación LED.',
    },
  ],
  benefits: {
    title: '¿Por qué reformar tu baño?',
    items: [
      'Revalorización de tu vivienda: un baño moderno aumenta significativamente el valor de tu propiedad',
      'Eficiencia energética: sistemas de ahorro de agua y energía que reducen tus facturas',
      'Ejecución rápida: entre 5 y 10 días laborables para tener tu baño completamente renovado',
      'Garantía completa: todos nuestros trabajos cuentan con garantía en materiales y mano de obra',
    ],
  },
  beforeAfter: {
    intro: 'Descubre la transformación real de nuestros proyectos de reforma de baños',
    items: [
      {
        before: { src: '/images/baño antiguo.png', alt: 'Antes - Reforma de baño' },
        after: { src: '/images/baño nuevo.png', alt: 'Después - Reforma de baño' },
        title: 'Reforma Integral de Baño',
        description: 'Transformación completa con plato de ducha, sanitarios modernos y alicatado de diseño',
      },
      {
        before: { src: '/images/baño antiguo2.jpg', alt: 'Antes - Reforma de baño' },
        after: { src: '/images/baño nuevo2.png', alt: 'Después - Reforma de baño' },
        title: 'Reforma Completa de Baño',
        description: 'Renovación integral con diseño moderno, materiales de primera calidad y acabados perfectos',
      },
    ],
  },
  testimonials: {
    intro: 'Opiniones reales de clientes que confiaron en nosotros para reformar sus baños',
    items: [
      {
        name: 'María González',
        location: 'Arganda del Rey',
        quote:
          'Quedé encantada con la reforma de mi baño. Cambiaron la bañera por un plato de ducha moderno y el resultado es espectacular. El trabajo fue limpio, rápido y el precio muy ajustado. ¡Recomendados 100%!',
      },
      {
        name: 'Carlos Ruiz',
        location: 'Rivas-Vaciamadrid',
        quote:
          'Profesionales de primera. Reformaron mi baño en solo 7 días y el resultado superó mis expectativas. Los materiales son de excelente calidad y el acabado perfecto. Sin duda volveré a contar con ellos.',
      },
      {
        name: 'Ana Martínez',
        location: 'Mejorada del Campo',
        quote:
          'Excelente servicio desde el primer día. Me asesoraron en la elección de materiales y el diseño. El baño quedó precioso y funcional. Muy contenta con el resultado y el trato recibido.',
      },
    ],
  },
  contact: { title: 'Solicita tu Presupuesto de Reforma de Baño', defaultService: 'bano' },
  faq: {
    title: 'Preguntas Frecuentes sobre Reformas de Baños',
    items: [
      {
        question: '¿Cuánto tiempo tarda una reforma de baño?',
        answer:
          'Una reforma completa de baño suele tardar entre 5 y 10 días laborables, dependiendo de la complejidad del proyecto y los trabajos a realizar. Si solo se cambian elementos específicos (como sanitarios o grifería), el tiempo puede reducirse a 2-3 días.',
      },
      {
        question: '¿Puedo cambiar la bañera por plato de ducha?',
        answer:
          'Sí, es uno de los cambios más solicitados. Retiramos la bañera e instalamos un plato de ducha a ras de suelo o elevado, junto con una mampara. Este cambio mejora la accesibilidad y da un aspecto más moderno al baño.',
      },
      {
        question: '¿Necesito licencia para reformar mi baño?',
        answer:
          'En la mayoría de los casos, las reformas de baño que no modifican la estructura no requieren licencia. Sin embargo, si cambias la distribución o realizas obras que afecten a la instalación eléctrica o de fontanería, puede ser necesario. Nosotros nos encargamos de gestionar todos los trámites necesarios.',
      },
      {
        question: '¿Qué materiales utilizáis en las reformas de baños?',
        answer:
          'Trabajamos con materiales de primera calidad: azulejos y pavimentos antideslizantes, sanitarios de marcas reconocidas, grifería termostática, mamparas de seguridad y mobiliario resistente a la humedad. Todos los materiales están garantizados y cumplen con las normativas de seguridad.',
      },
      {
        question: '¿Ofrecéis garantía en las reformas de baños?',
        answer:
          'Sí, todos nuestros trabajos incluyen garantía en materiales y mano de obra. La garantía varía según el tipo de trabajo realizado, pero siempre cubrimos cualquier defecto o problema que pueda surgir tras la finalización de la obra.',
      },
      {
        question: '¿Puedo seguir usando el baño durante la reforma?',
        answer:
          'Durante la mayor parte de la reforma, el baño no será utilizable ya que necesitamos cortar el suministro de agua y realizar obras. Sin embargo, planificamos el trabajo para minimizar las molestias y, si tienes otro baño en casa, podrás usarlo con normalidad.',
      },
    ],
  },
}

export const reformasCocinas: ServiceContent = {
  path: paths.cocinas,
  seo: {
    title: 'Reformas de Cocinas en Rivas-Vaciamadrid | Cocinas a Medida',
    description:
      'Especialistas en reformas de cocinas en Rivas-Vaciamadrid. Diseñamos la cocina de tus sueños con muebles funcionales, encimeras resistentes y acabados de calidad.',
  },
  hero: {
    prefix: 'Reformas de',
    highlight: 'Cocinas',
    text: 'Diseñamos la cocina de tus sueños. Muebles funcionales, encimeras resistentes, fontanería e iluminación para crear el corazón de tu hogar.',
    image: { src: '/images/cocina reformada.png', alt: 'Reformas de Cocinas en Rivas' },
  },
  intro: {
    title: 'Cocinas funcionales y con estilo',
    text: 'La cocina es el corazón del hogar. Creamos espacios que combinan funcionalidad, diseño y calidad. Desde cocinas modernas minimalistas hasta estilos rústicos o clásicos, adaptamos cada proyecto a tus necesidades y gustos.',
  },
  features: [
    {
      icon: '🪑',
      title: 'Muebles a Medida',
      text: 'Diseño personalizado que aprovecha cada centímetro. Muebles altos y bajos, islas, penínsulas y soluciones de almacenaje inteligente.',
    },
    {
      icon: '💎',
      title: 'Encimeras Premium',
      text: 'Granito, cuarzo, Silestone o Dekton. Encimeras resistentes, fáciles de mantener y con garantía de por vida en algunos materiales.',
    },
    {
      icon: '⚡',
      title: 'Electrodomésticos',
      text: 'Integración de horno, microondas, campana extractora y lavavajillas. Trabajamos con las mejores marcas del mercado.',
    },
    {
      icon: '💡',
      title: 'Iluminación y Fontanería',
      text: 'Iluminación LED integrada, grifería de diseño y sistemas de filtración de agua. Detalles que marcan la diferencia.',
    },
  ],
  benefits: {
    title: 'Ventajas de reformar tu cocina',
    items: [
      'Mayor eficiencia: cocinas diseñadas para optimizar el trabajo y el almacenaje',
      'Revalorización: una cocina moderna aumenta significativamente el valor de tu vivienda',
      'Ahorro energético: electrodomésticos eficientes que reducen el consumo',
      'Espacio personalizado: diseño adaptado a tus hábitos y necesidades específicas',
    ],
  },
  beforeAfter: {
    intro: 'Descubre la transformación real de nuestros proyectos de reforma de cocinas',
    items: [
      {
        before: { src: '/images/cocina antigua.png', alt: 'Antes - Reforma de cocina' },
        after: { src: '/images/cocina reformada.png', alt: 'Después - Reforma de cocina' },
        title: 'Reforma Integral de Cocina',
        description: 'Diseño personalizado con muebles a medida, encimera premium y electrodomésticos integrados',
      },
      {
        before: { src: '/images/cocina antigua2.png', alt: 'Antes - Reforma de cocina' },
        after: { src: '/images/cocina nueva2.png', alt: 'Después - Reforma de cocina' },
        title: 'Reforma Completa de Cocina',
        description: 'Renovación integral con diseño moderno, materiales de primera calidad y acabados perfectos',
      },
    ],
  },
  testimonials: {
    intro: 'Opiniones reales de clientes que confiaron en nosotros para reformar sus cocinas',
    items: [
      {
        name: 'Laura Sánchez',
        location: 'Rivas-Vaciamadrid',
        quote:
          'Mi cocina nueva es el corazón de mi casa. El diseño que me propusieron aprovecha perfectamente el espacio y la encimera de cuarzo es una maravilla. Trabajo impecable y acabados perfectos.',
      },
      {
        name: 'Javier López',
        location: 'Rivas-Vaciamadrid',
        quote:
          'Reformaron mi cocina completa y quedó espectacular. Los muebles a medida aprovechan cada rincón y la integración de electrodomésticos es perfecta. Muy profesionales y cumplieron los plazos.',
      },
      {
        name: 'Carmen Fernández',
        location: 'Velilla de San Antonio',
        quote:
          'La cocina que diseñaron para mí es perfecta. Funcional, bonita y con materiales de primera calidad. El equipo fue muy profesional y siempre disponibles para cualquier consulta. ¡Muy satisfecha!',
      },
    ],
  },
  contact: { title: 'Solicita tu Presupuesto de Reforma de Cocina', defaultService: 'cocina' },
  faq: {
    title: 'Preguntas Frecuentes sobre Reformas de Cocinas',
    items: [
      {
        question: '¿Cuánto cuesta reformar una cocina completa?',
        answer:
          'El precio de una reforma de cocina varía según el tamaño, materiales elegidos y trabajos a realizar. Una cocina completa puede oscilar entre 8.000€ y 25.000€. Ofrecemos presupuesto gratuito y sin compromiso para valorar tu proyecto específico.',
      },
      {
        question: '¿Qué tipos de encimeras ofrecéis?',
        answer:
          'Trabajamos con granito, cuarzo, Silestone, Dekton y otros materiales premium. Cada uno tiene sus ventajas: el cuarzo es muy resistente y fácil de mantener, el granito es natural y duradero, y el Dekton es ultra-resistente. Te asesoramos sobre la mejor opción según tu uso y presupuesto.',
      },
      {
        question: '¿Cuánto tiempo tarda una reforma de cocina?',
        answer:
          'Una reforma completa de cocina suele tardar entre 15 y 25 días laborables, dependiendo de la complejidad. Esto incluye la fabricación de muebles a medida, instalación de encimera, fontanería, electricidad y acabados. Planificamos el trabajo para minimizar las molestias.',
      },
      {
        question: '¿Podéis integrar mis electrodomésticos actuales?',
        answer:
          'Sí, siempre que sean compatibles con el nuevo diseño. Si tus electrodomésticos están en buen estado, los integramos en la nueva cocina. Si prefieres renovarlos, trabajamos con las mejores marcas y te ayudamos a elegir los más adecuados para tu cocina.',
      },
      {
        question: '¿Hacéis diseño de cocinas personalizado?',
        answer:
          'Sí, diseñamos cocinas completamente personalizadas adaptadas a tus necesidades, espacio disponible y estilo. Realizamos un estudio previo de tu cocina y te presentamos un diseño 3D para que veas cómo quedará antes de empezar la obra.',
      },
      {
        question: '¿Qué garantía ofrecéis en las reformas de cocinas?',
        answer:
          'Ofrecemos garantía completa en todos nuestros trabajos: muebles, encimeras, instalaciones y mano de obra. La garantía varía según el material (algunas encimeras tienen garantía de por vida), pero siempre cubrimos cualquier defecto o problema que pueda surgir.',
      },
    ],
  },
}

export const reformasPisos: ServiceContent = {
  path: paths.pisos,
  seo: {
    title: 'Reformas de Pisos en Rivas-Vaciamadrid | Renovación de Apartamentos',
    description:
      'Especialistas en reformas de pisos en Rivas-Vaciamadrid. Actualización completa de apartamentos con suelos, pintura, alisado de paredes y carpintería. Presupuesto sin compromiso.',
  },
  hero: {
    prefix: 'Reformas de',
    highlight: 'Pisos',
    text: 'Actualización completa de apartamentos. Suelos, pintura, alisado de paredes, carpintería interior y exterior para revalorizar tu propiedad.',
    image: { src: '/images/salon nuevo2.png', alt: 'Reformas de Pisos en Rivas', objectPosition: 'center 60%' },
  },
  intro: {
    title: 'Renovación completa de tu apartamento',
    text: 'Transformamos tu piso en un espacio moderno y acogedor. Trabajamos todos los aspectos de la vivienda para conseguir un resultado homogéneo y de calidad que aumente el valor de tu propiedad.',
  },
  features: [
    {
      icon: '🏠',
      title: 'Suelos y Pavimentos',
      text: 'Instalación de parquet, laminado, vinílico o cerámica. Soluciones modernas y resistentes que transforman cada estancia.',
    },
    {
      icon: '🎨',
      title: 'Pintura y Alisado',
      text: 'Pintura decorativa de calidad, alisado de paredes y techos. Preparación profesional para un acabado perfecto.',
    },
    {
      icon: '🚪',
      title: 'Carpintería Interior',
      text: 'Puertas, ventanas interiores, rodapiés y molduras. Carpintería a medida que se adapta a tu estilo.',
    },
    {
      icon: '🪟',
      title: 'Carpintería Exterior',
      text: 'Ventanas de PVC o aluminio con rotura de puente térmico. Mejora del aislamiento y eficiencia energética.',
    },
  ],
  benefits: {
    title: 'Ventajas de reformar tu piso',
    items: [
      'Revalorización: un piso renovado aumenta significativamente su valor de mercado',
      'Eficiencia energética: ventanas y aislamientos modernos reducen el consumo',
      'Confort mejorado: espacios más luminosos, acogedores y funcionales',
      'Mantenimiento reducido: materiales de calidad que duran más tiempo',
    ],
  },
  beforeAfter: {
    intro: 'Descubre la transformación real de nuestros proyectos de reforma de pisos',
    items: [
      {
        before: { src: '/images/salon antiguo 2.png', alt: 'Antes - Reforma de piso' },
        after: { src: '/images/salon nuevo2.png', alt: 'Después - Reforma de piso' },
        title: 'Reforma Completa de Piso',
        description: 'Renovación integral con suelos nuevos, pintura, carpintería y acabados modernos',
      },
      {
        before: { src: '/images/terraza antigua.jpg', alt: 'Antes - Reforma de terraza' },
        after: { src: '/images/terraza nueva.png', alt: 'Después - Reforma de terraza' },
        title: 'Reforma de Terraza',
        description: 'Transformación completa de terraza con pavimento nuevo, cerramiento y diseño moderno',
      },
    ],
  },
  testimonials: {
    intro: 'Opiniones reales de clientes que confiaron en nosotros para reformar sus pisos',
    items: [
      {
        name: 'Elena Díaz',
        location: 'Rivas-Vaciamadrid',
        quote:
          'Renovaron completamente mi piso y ahora parece una casa nueva. Los suelos de parquet quedaron perfectos, la pintura impecable y las ventanas nuevas mejoraron mucho el aislamiento. Muy contenta con el resultado.',
      },
      {
        name: 'Fernando Castro',
        location: 'Rivas-Vaciamadrid',
        quote:
          'Excelente trabajo en la reforma de mi piso. Cambiaron suelos, pintaron todo y renovaron las ventanas. El piso quedó como nuevo y el valor ha aumentado considerablemente. Muy profesionales.',
      },
      {
        name: 'Isabel Morales',
        location: 'Velilla de San Antonio',
        quote:
          'Reformaron mi piso y quedó precioso. Los suelos nuevos, la pintura y la carpintería transformaron completamente el espacio. Trabajo limpio y profesional. Muy recomendable.',
      },
    ],
  },
  contact: { title: 'Solicita tu Presupuesto de Reforma de Piso', defaultService: 'piso' },
  faq: {
    title: 'Preguntas Frecuentes sobre Reformas de Pisos',
    items: [
      {
        question: '¿Cuánto tiempo tarda una reforma completa de piso?',
        answer:
          'El tiempo depende del tamaño del piso y la envergadura de los trabajos. Una reforma completa de un piso de 80-100m² suele tardar entre 6 y 12 semanas. Si solo reformas elementos específicos (suelos, pintura), el tiempo se reduce considerablemente.',
      },
      {
        question: '¿Qué tipos de suelos podéis instalar?',
        answer:
          'Instalamos todo tipo de suelos: parquet natural y laminado, vinílico, cerámica, gres porcelánico, microcemento y moqueta. Te asesoramos sobre la mejor opción según el uso de cada estancia, tu presupuesto y estilo decorativo.',
      },
      {
        question: '¿Puedo vivir en el piso durante la reforma?',
        answer:
          'Sí, en la mayoría de los casos puedes seguir viviendo en el piso durante la reforma. Planificamos el trabajo por estancias para minimizar las molestias. Si la reforma es muy completa, puede ser más cómodo alojarse temporalmente fuera, pero no es estrictamente necesario.',
      },
      {
        question: '¿Qué ventajas tienen las ventanas de PVC frente a las de aluminio?',
        answer:
          'Las ventanas de PVC ofrecen mejor aislamiento térmico y acústico que el aluminio sin rotura de puente térmico. Son más eficientes energéticamente y reducen el consumo de calefacción y aire acondicionado. El aluminio con rotura de puente térmico también es una excelente opción, especialmente para fachadas donde se busca un aspecto más moderno.',
      },
      {
        question: '¿Necesito licencia para reformar mi piso?',
        answer:
          'Depende del tipo de reforma. Cambios de suelos, pintura o carpintería interior generalmente no requieren licencia. Si modificas instalaciones (fontanería, electricidad), cambias la distribución o realizas obras estructurales, sí será necesario. Nosotros gestionamos todos los trámites necesarios.',
      },
      {
        question: '¿Qué garantía ofrecéis en las reformas de pisos?',
        answer:
          'Ofrecemos garantía completa en todos los trabajos: suelos, pintura, carpintería, instalaciones y mano de obra. La garantía varía según el material (algunos suelos tienen garantía extendida), pero siempre cubrimos cualquier defecto o problema que pueda surgir tras la finalización de la obra.',
      },
    ],
  },
}

export const reformasLocales: ServiceContent = {
  path: paths.locales,
  seo: {
    title: 'Reformas de Locales en Rivas-Vaciamadrid | Locales Comerciales',
    description:
      'Especialistas en reformas de locales comerciales en Rivas-Vaciamadrid. Oficinas, tiendas y restauración. Ejecución rápida para minimizar el cierre de actividad.',
  },
  hero: {
    prefix: 'Reformas de',
    highlight: 'Locales',
    text: 'Adaptamos tu negocio a las nuevas normativas y tendencias. Oficinas, tiendas y restauración. Rapidez para minimizar el cierre de actividad.',
    image: { src: '/images/reforma local.png', alt: 'Reformas de Locales en Rivas' },
  },
  intro: {
    title: 'Reformas comerciales que impulsan tu negocio',
    text: 'Entendemos que el tiempo es dinero. Por eso, nuestras reformas de locales comerciales se ejecutan con la máxima eficiencia para que puedas reabrir cuanto antes. Trabajamos en horarios flexibles y minimizamos las molestias a vecinos y clientes.',
  },
  features: [
    {
      icon: '🏢',
      title: 'Oficinas',
      text: 'Espacios de trabajo modernos y funcionales. Distribución optimizada, iluminación LED, techos desmontables y sistemas de climatización eficientes.',
    },
    {
      icon: '🏪',
      title: 'Tiendas y Retail',
      text: 'Diseño comercial que potencia las ventas. Escaparates, iluminación comercial, suelos antideslizantes y sistemas de seguridad integrados.',
    },
    {
      icon: '🍽️',
      title: 'Restauración',
      text: 'Cumplimiento de normativas sanitarias y de seguridad. Cocinas profesionales, sistemas de extracción, suelos y paredes higiénicos.',
    },
    {
      icon: '📜',
      title: 'Adaptación Normativa',
      text: 'Actualización para cumplir con normativas de accesibilidad, seguridad y eficiencia energética. Gestión de licencias y certificados.',
    },
  ],
  benefits: {
    title: 'Ventajas de trabajar con nosotros',
    items: [
      'Ejecución rápida: planificamos para minimizar el tiempo de cierre de tu negocio',
      'Horarios flexibles: trabajamos fuera del horario comercial cuando es necesario',
      'Gestión integral: nos encargamos de licencias, permisos y certificados necesarios',
      'Experiencia comercial: conocemos las necesidades específicas de cada sector',
    ],
  },
  beforeAfter: {
    intro: 'Descubre la transformación real de nuestros proyectos de reforma de locales comerciales',
    items: [
      {
        before: { src: '/images/local antiguo.png', alt: 'Antes - Reforma de local comercial' },
        after: { src: '/images/reforma local.png', alt: 'Después - Reforma de local comercial' },
        title: 'Reforma de Local Comercial',
        description:
          'Transformación completa de un espacio comercial con diseño moderno y funcional adaptado a las necesidades del negocio',
      },
    ],
  },
  testimonials: {
    intro: 'Opiniones reales de clientes que confiaron en nosotros para reformar sus locales comerciales',
    items: [
      {
        name: 'David Herrera',
        location: 'Rivas-Vaciamadrid',
        quote:
          'Reformaron mi local comercial y cumplieron con todos los plazos. El tiempo de cierre fue mínimo y el resultado profesional. Cumplen con todas las normativas y el acabado es perfecto.',
      },
      {
        name: 'Sofía Ramírez',
        location: 'Rivas-Vaciamadrid',
        quote:
          'Reformaron mi restaurante cumpliendo todas las normativas sanitarias. Trabajaron en horarios flexibles para no afectar el servicio. El resultado es moderno, funcional y cumple con todos los requisitos.',
      },
      {
        name: 'Alejandro Vega',
        location: 'Velilla de San Antonio',
        quote:
          'Reformaron mi oficina y quedó perfecta. Espacios modernos, iluminación LED y distribución optimizada. El trabajo fue rápido y eficiente, minimizando las molestias. Excelente servicio.',
      },
    ],
  },
  contact: { title: 'Solicita tu Presupuesto de Reforma de Local', defaultService: 'local' },
  faq: {
    title: 'Preguntas Frecuentes sobre Reformas de Locales',
    items: [
      {
        question: '¿Cuánto tiempo tarda una reforma de local comercial?',
        answer:
          'El tiempo depende del tipo de local y la envergadura de la obra. Una reforma completa de un local comercial puede tardar entre 3 y 8 semanas. Trabajamos con horarios flexibles y planificamos para minimizar el tiempo de cierre de tu negocio.',
      },
      {
        question: '¿Puedo seguir abierto durante la reforma?',
        answer:
          'Depende del tipo de reforma. Si es una reforma parcial, podemos trabajar por fases para que puedas mantener parte de tu actividad. En reformas completas, generalmente es necesario cerrar temporalmente. Planificamos el trabajo para que el cierre sea el mínimo tiempo posible.',
      },
      {
        question: '¿Qué licencias necesito para reformar mi local?',
        answer:
          'Las reformas de locales comerciales suelen requerir licencia de obra del Ayuntamiento, licencia de actividad (si cambia el uso) y, en algunos casos, certificados de accesibilidad y seguridad. Nosotros gestionamos todos los trámites administrativos necesarios.',
      },
      {
        question: '¿Trabajáis en horarios fuera del comercial?',
        answer:
          'Sí, podemos trabajar en horarios flexibles, incluyendo noches y fines de semana cuando es necesario. Esto es especialmente útil para minimizar el impacto en tu actividad comercial. Lo planificamos contigo según tus necesidades.',
      },
      {
        question: '¿Cumplís con las normativas de accesibilidad?',
        answer:
          'Sí, todas nuestras reformas de locales cumplen con la normativa de accesibilidad vigente. Incluimos rampas, puertas adaptadas, baños accesibles y cualquier elemento necesario para que tu local sea accesible para todas las personas.',
      },
      {
        question: '¿Qué garantía ofrecéis en reformas de locales?',
        answer:
          'Ofrecemos garantía completa en todos los trabajos realizados: instalaciones, materiales y mano de obra. Además, nos aseguramos de que todo cumpla con las normativas vigentes. Cualquier defecto o problema que surja tras la finalización está cubierto por nuestra garantía.',
      },
    ],
  },
}
