export default {
  global: {
    componenteFormativo:
      'Análisis estructural y funcional de un microcontrolador',
    descripcionCurso:
      'El proceso de creación de un programa para microcontroladores incluye redactar instrucciones en lenguaje de programación, compilar el código y realizar el enlazado. Luego, el programa se simula para verificar su funcionamiento antes de quemar el <em>firmware</em> en la memoria del microcontrolador. Finalmente, se realizan pruebas en <em>hardware</em> y <em>software</em> para asegurar su correcto desempeño.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Estructura básica de los microcontroladores',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Lenguaje de programación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo:
          'Estructura del proceso de creación de un programa para microcontroladores',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
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
  complementario: [
    {
      tema: 'Estructura básica de los microcontroladores ',
      referencia:
        'Delgado Miguel Angel. (2020). Estructura interna del microcontrolador. [Archivo de video] Youtube. ',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=glLbD1aqJKo&ab_channel=DelgadoMiguelAngel  ',
    },
    {
      tema: 'Lenguaje de programación ',
      referencia:
        'Coding Academy Perú. (2020). Assembler - Lo básico del lenguaje. [Archivo de video] Youtube.   ',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=eHA0WHFUinQ&ab_channel=CodingAcademyPer%C3%BA  ',
    },
    {
      tema: 'Lenguaje de programación ',
      referencia:
        'Sergie Arizandieta (2022). Aprende Programación en Assembler. [Archivo de video] Youtube.   ',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=cFhUA7DnIVo&list=PLON3-BoIoWiV0Te8sxsvXw8u2k3DmBZun&ab_channel=SergieArizandieta  ',
    },
    {
      tema:
        'Estructura del proceso de creación de un programa para microcontroladores ',
      referencia:
        'Electrónica y Circuitos. (2020). BIENVENIDA AL CURSO DE PROGRAMACIÓN DE MICROCONTROLADORES PIC EN LENGUAJE C. [Archivo de video] Youtube.   ',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=SXl-VD5WU-s&list=PLONPO-iVba9nbY_KTCHt9GGj9dGSj1qYo&ab_channel=Electr%C3%B3nicayCircuitos  ',
    },
    {
      tema:
        'Estructura del proceso de creación de un programa para microcontroladores ',
      referencia:
        'Xataka (2020). ARDUINO: QUÉ ES, CÓMO FUNCIONA y PARA QUÉ se puede UTILIZAR. [Archivo de video] Youtube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Zs9MZosVuqo&ab_channel=Xataka  ',
    },
  ],
  glosario: [
    {
      termino: 'Código fuente',
      significado:
        'texto escrito en lenguaje de programación, que luego se compila para su ejecución en el <em>hardware</em>. ',
    },
    {
      termino: 'Compilación',
      significado:
        'proceso de traducción del código fuente en un lenguaje de bajo nivel para que el <em>hardware</em> pueda interpretarlo. ',
    },
    {
      termino: 'Enlazado',
      significado:
        'paso en el cual se une el código de bajo nivel con las bibliotecas necesarias para crear un programa ejecutable. ',
    },
    {
      termino: '<em>Firmware</em>',
      significado:
        'conjunto de instrucciones específicas que controlan los circuitos electrónicos de un dispositivo. ',
    },
    {
      termino: 'Interprete',
      significado:
        'programa que ejecuta el código fuente línea por línea sin necesidad de compilarlo. ',
    },
    {
      termino: 'Lenguaje de programación',
      significado:
        'sistema formal de símbolos y reglas usado para escribir instrucciones entendibles por el microcontrolador. ',
    },
    {
      termino: 'Microcontrolador',
      significado:
        'dispositivo electrónico que integra procesamiento, almacenamiento y comunicación en una sola unidad. ',
    },
    {
      termino: 'Pruebas de <em>hardware</em>',
      significado:
        'evaluaciones que aseguran el funcionamiento correcto de los componentes físicos del microcontrolador. ',
    },
    {
      termino: 'Quemado',
      significado:
        'proceso de transferencia del <em>firmware</em> a la memoria del microcontrolador. ',
    },
    {
      termino: 'Simulador',
      significado:
        '<em>software</em> que permite verificar virtualmente el funcionamiento de un microcontrolador a partir del código programado. ',
    },
  ],
  referencias: [
    {
      referencia:
        'VanSickle, T. (2001). Programming microcontrollers in C. Academic Press.',
      link: '',
    },
    {
      referencia:
        'Hyde, R. (2010). The art of assembly language (2nd ed.). No Starch Press. ',
      link: '',
    },
    {
      referencia:
        'Barnett, R. H., Cox, S., & O’Cull, L. (2006). Embedded C programming and the Atmel AVR. Delmar Cengage Learning. ',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Luis Jesús Pérez Madariaga',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
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
