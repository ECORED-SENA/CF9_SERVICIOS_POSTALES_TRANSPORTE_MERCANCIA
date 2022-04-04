export default {
  global: {
    componenteFormativo: 'Cargue y descargue de mercancía',
    descripcionCurso:
      'La manipulación de la carga en su traslado origen - destino conlleva dentro de su línea de proceso el cargue y posterior descargue de las mercancías, de acuerdo con su volumen, peso y naturaleza, cada proceso lleva su propia maniobra en cada uno de sus propios eventos, es decir, cargue y descargue y, van siempre conectados de formas intrínsecas.',
    imagenBannerPrincipal: require('@/assets/curso/banner/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/banner/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Mercancías y objetos postales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Clasificación de la carga y simbología',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Peso y volumen',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Zonas de cargue y descargue',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Documentación según características de la mercancía',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Empaques y embalajes',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Marcado y rotulado de mercancías',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Procedimientos, volumen, peso y medio de transporte',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Normativa de seguridad y salud en el trabajo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Riesgos',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Elementos de protección',
            hash: 't_5_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.3',
            titulo: 'Elementos contaminantes',
            hash: 't_5_3',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        icono: 'far fa-file-alt',
        numero: '6',
        titulo: 'Equipos y herramientas de cargue y descargue',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        icono: 'far fa-file-alt',
        numero: '7',
        titulo: 'Normas de calidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '7.1',
            titulo: 'Criterios de calidad',
            hash: 't_7_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '7.2',
            titulo: 'Mercancías bajo condiciones de temperatura',
            hash: 't_7_2',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        icono: 'far fa-file-alt',
        numero: '8',
        titulo: 'Objetos postales según peso y volumen',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema9',
        icono: 'far fa-file-alt',
        numero: '9',
        titulo: 'Listas de chequeo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '9.1',
            titulo: 'Estructura lista de chequeo',
            hash: 't_9_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '9.2',
            titulo: 'Reportes',
            hash: 't_9_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Comisión de regulación de comunicaciones. (2010). Parámetros de calidad de los servicios postales diferentes al servicio postal universal. ',
      link:
        'https://www.crcom.gov.co/recursos_user/Documentos_CRC_2011/Servicios_Postales/Proyectos_Regulatorios_Postales/Parametros_de_Calidad/DocumentoSoporte_Ind_Calidad.pdf',
    },
    {
      referencia: 'Deprisa. (s.f). Calcular peso volumétrico.',
      link: 'https://www.deprisa.com/CalculoVolumetrico',
    },
    {
      referencia: 'Invías, (2004). Resolución 004100 de 2004.',
      link:
        'https://www.invias.gov.co/index.php/normativa/resoluciones-circulares-otros/1067-resolucion-n-004100-de-2004-1/file',
    },
    {
      referencia: 'Ministerio del Trabajo. (2019). Resolución 0312 de 2019. ',
      link:
        'https://www.mintrabajo.gov.co/documents/20147/59995826/Resolucion+0312-2019-+Estandares+minimos+del+Sistema+de+la+Seguridad+y+Salud.pdf',
    },
    {
      referencia: 'Ministerio de Transporte, (2004). Resolución 2500 de 2004. ',
      link: 'http://web.mintransporte.gov.co/jspui/handle/001/3856',
    },
    {
      referencia:
        'Procolombia. (2014). Logística de perecederos y cadena de frío en Colombia. ',
      link:
        'https://procolombia.co/sites/all/modules/custom/mccann/mccann_ruta_exportadora/files/06-cartilla-cadena-frio.pdf',
    },
    {
      referencia: 'Servientrega. (2017). Cartilla de salud ocupacional. ',
      link: 'https://es.calameo.com/read/0051672683725381ae3f8',
    },
    {
      referencia: 'Westreicher, G. (2020) Mercancías. ',
      link: 'https://economipedia.com/definiciones/mercancia.html',
    },
  ],
  glosario: [
    {
      termino: 'Almacenamiento',
      significado:
        'Son las mercancías que se conservan bajo custodia para dar proceso de cargue y continuar al destino. ',
    },
    {
      termino: 'Carga',
      significado:
        'Agrupación de mercancías que están dispuestas para la operación de transporte de un lugar de origen a un lugar destino.',
    },
    {
      termino: 'Descargue',
      significado:
        'Proceso en el que los objetos postales o mercancías son bajados del vehículo de transporte, recepcionados y dispuestos para dar continuidad al proceso de entrega.',
    },
    {
      termino: 'Planilla de recepción',
      significado:
        'Registro en el que se relaciona la información del documento de transporte, es la evidencia de la carga recibida.',
    },
    {
      termino: 'Remolque',
      significado: 'Vehículo alado por un dispositivo, el tractor motorizado.',
    },
    {
      termino: 'Vehículo articulado',
      significado:
        'Vehículo conformado por una unidad tractora y un semirremolque o uno o más remolques.',
    },
  ],
  complementario: [
    {
      texto:
        'Blog Artes visuales. (s.f). Simbología para la manipulación y transporte. ',
      tipo: 'Blog',
      link:
        'https://www.blogartesvisuales.net/diseno-grafico/packaging/simbologia-para-la-manipulacion-y-transporte/',
    },
    {
      texto:
        'Blog moldtrans. (2020). Significado de los principales símbolos de embalajes. ',
      tipo: 'Blog',
      link:
        'https://www.moldtrans.com/significado-de-los-principales-simbolos-de-embalaje/',
    },
    {
      texto: 'Ruta marítima. (2017). Etiqueta de la carga [video]. YouTube. ',
      tipo: 'Video ',
      link: 'https://www.youtube.com/watch?v=vsI79mXP3vc',
    },
    {
      texto:
        'Live capacitaciones. (2020). Cómo calcular el peso volumétrico de los paquetes [video]. YouTube.',
      tipo: 'Video ',
      link: 'https://www.youtube.com/watch?v=K7lefxdO_io',
    },
    {
      texto:
        'Dixipalomo. (2013). Cargue y descargue de mercancías [video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=8gXpOwyg7AU',
    },
    {
      texto:
        'Academia de transportistas. (2017). Etiquetas de mercancías peligrosas [video]. YouTube. ',
      tipo: 'Video ',
      link: 'https://www.youtube.com/watch?v=3YgFdAOl4jM',
    },
    {
      texto: 'Tradelog. (2020). Documentación para el transporte terrestre. ',
      tipo: 'Blog',
      link:
        'https://www.tradelog.com.ar/blog/documentacion-para-el-transporte-terrestre/',
    },
    {
      texto:
        'Ministerio de Transporte. (2019). Documentos mercancías peligrosas.',
      tipo: 'Otro ',
      link: 'https://mintransporte.gov.co/publicaciones/2519/documentosp/',
    },
    {
      texto: 'Cortés, J. (2019). Envase, empaque y embalaje [video]. YouTube.',
      tipo: 'Video ',
      link: 'https://www.youtube.com/watch?v=bk8o7KSwJho',
    },
    {
      texto:
        'UMB Virtual. (2018). Clasificación de los vehículos de carga pesada en Colombia [video]. YouTube. ',
      tipo: 'Video ',
      link: 'https://www.youtube.com/watch?v=YVQvunHhets',
    },
    {
      texto:
        'Ubícalo. (2021). Diez tipos de transporte de  camiones de carga terrestre. ',
      tipo: 'Blog',
      link:
        'https://www.ubicalo.com.mx/blog/tipos-de-transporte-de-camiones-de-carga-terrestre/',
    },
    {
      texto:
        'Ecosistema de Recursos Educativos Digitales SENA. (2021). Sistemas de gestión de la seguridad y la salud en el trabajo [video]. YouTube. ',
      tipo: 'Video ',
      link: 'https://www.youtube.com/watch?v=5CF3HZdu6Bc',
    },
    {
      texto:
        'López, J. (2011). Prevención de riesgos laborales en el transporte de mercancías por carretera [video]. YouTube.',
      tipo: 'Video ',
      link: 'https://www.youtube.com/watch?v=EokWMVJek9A',
    },
    {
      texto:
        'IntregraSmart SAS. (2016). Tipos de equipos de protección personal EPP [video]. YouTube.  ',
      tipo: 'Video ',
      link: 'https://www.youtube.com/watch?v=_de3QF5wEzI',
    },
    {
      texto:
        'Urrego, L. (2021). Logística de la cadena de frio. [video]. YouTube. ',
      tipo: 'Video ',
      link: 'https://www.youtube.com/watch?v=aswjJbm4j-I',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gloria Liliana García Marín',
        cargo: 'Experta temática',
        centro:
          'Centro de la industrial, la Empresa y los Servicios Regional Norte de Santander',
      },
      {
        nombre: 'Gloria Lida Álzate Suárez',
        cargo: 'Diseñadora instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica Regional Distrito Capital',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Correctora de estilo',
        centro: 'Centro de Diseño y Metrología Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Diana Carolina Acevedo Barón',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Andrea Paola Botello De la Rosa',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres	',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ' ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: ' ',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
