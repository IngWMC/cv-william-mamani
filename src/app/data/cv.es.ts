// Spanish content. Every statement comes from public/CV-William_Mamani_Cutipa.pdf;
// keep it that way when editing (no invented employers, metrics or certifications).
// cv.en.ts must stay a faithful translation of this file.
import { CvContent } from './cv.model';
import { CV_FILE, EMAIL, HERO_STACK, INITIALS, NAME, PHONE_HREF } from './cv.shared';

export const CV_ES: CvContent = {
  lang: 'es',
  meta: {
    title: 'William Mamani Cutipa · Technical Lead Java & .NET',
    description:
      'Technical Lead con más de 15 años de experiencia. Microservicios en Java (Spring Boot, Quarkus, WebFlux) sobre Azure para el sector bancario, arquitectura hexagonal y más de 10 años en .NET. Lima, Perú.',
    ogLocale: 'es_PE',
  },

  ui: {
    skipLink: 'Saltar al contenido',
    header: {
      home: ', volver al inicio',
      sectionsLabel: 'Secciones',
      mobileSectionsLabel: 'Secciones (móvil)',
      cv: 'CV',
      cvSuffix: ' en PDF',
      openMenu: 'Abrir menú',
      closeMenu: 'Cerrar menú',
      switchTo: { lang: 'en', code: 'EN', label: 'Read in English' },
    },
    hero: {
      roleBefore: 'Desarrollador ',
      roleAfter: ' & .NET',
      stackLabel: 'Tecnologías principales',
      contact: 'Contactar',
      downloadCv: 'Descargar CV',
    },
    java: {
      eyebrow: 'Especialización',
      title: 'Java y su ecosistema, el centro de mi trabajo actual',
      lead: 'Más de 4 años liderando el desarrollo de microservicios con Spring Boot, Quarkus y programación reactiva para clientes del sector bancario.',
      coreMeta: 'NTT DATA · julio 2022 – actualidad',
      tablistLabel: 'Áreas del ecosistema Java',
      evidenceLabel: 'Dónde lo he aplicado',
    },
    experience: {
      eyebrow: 'Trayectoria',
      title: 'Experiencia profesional',
      lead: 'Más de 15 años de evolución: de sistemas empresariales en .NET al liderazgo técnico de microservicios Java en banca.',
      clientsLabel: 'Proyectos',
      stackLabel: 'Tecnologías',
      earlierTitle: 'Trayectoria anterior',
      earlierRange: '2010 – 2017 · .NET',
    },
    projects: {
      eyebrow: 'Casos técnicos',
      title: 'Proyectos destacados',
      lead: 'Trabajo real para clientes y equipos. Al tratarse de sistemas corporativos, el código no es público; aquí está el contexto, mi papel y el enfoque técnico.',
      legacyTitle: 'Sistemas empresariales en .NET',
      stackLabel: 'Tecnologías: ',
    },
    architecture: {
      eyebrow: 'Diseño de software',
      title: 'Arquitectura y buenas prácticas',
      lead: 'Los principios con los que diseño, construyo y reviso los microservicios que lidero en NTT DATA.',
      diagramTitle:
        'Arquitectura hexagonal: el dominio en el centro, rodeado por puertos y por adaptadores como REST, Kafka, Event Hub, Cosmos DB, MongoDB y Redis.',
      layersLabel: 'Capas de la arquitectura',
    },
    skills: {
      eyebrow: 'Perfil complementario',
      title: 'Más allá de Java',
      lead: 'Más de 10 años en .NET y experiencia en cloud serverless, datos y frontend que completan mi perfil backend.',
    },
    education: {
      eyebrow: 'Formación',
      title: 'Estudios y certificaciones',
      studiesTitle: 'Formación académica',
      certsTitle: 'Cursos y certificaciones',
    },
    contact: {
      eyebrow: 'Contacto',
      title: '¿Hablamos de tu próximo proyecto?',
      lead: 'Si buscas un Technical Lead o desarrollador Java para tu equipo, o quieres conversar sobre microservicios y arquitectura, escríbeme.',
      email: 'Escribir un correo',
      downloadCv: 'Descargar CV',
      emailLabel: 'Correo',
      phoneLabel: 'Teléfono',
      locationLabel: 'Ubicación',
      copy: 'Copiar correo',
      copied: 'Correo copiado al portapapeles',
    },
    footer: { navLabel: 'Pie de página', backToTop: 'Volver arriba' },
  },

  nav: [
    { id: 'java', label: 'Stack Java' },
    { id: 'experiencia', label: 'Experiencia' },
    { id: 'proyectos', label: 'Proyectos' },
    { id: 'arquitectura', label: 'Arquitectura' },
    { id: 'formacion', label: 'Formación' },
    { id: 'contacto', label: 'Contacto' },
  ],

  profile: {
    name: NAME,
    initials: INITIALS,
    title: 'Technical Lead | Desarrollador Java & .NET',
    location: 'Lima, Perú',
    headline: 'Diseño y lidero microservicios en Java sobre Azure para el sector bancario.',
    summary:
      'Más de 15 años construyendo aplicaciones web y sistemas empresariales: más de 10 en el ecosistema .NET y más de 4 liderando el desarrollo con Spring Boot, Quarkus y programación reactiva. Trabajo con arquitectura hexagonal, Contract First con OpenAPI y foco en la calidad del código.',
    summaryShort:
      'Más de 15 años construyendo sistemas empresariales; más de 4 liderando microservicios con Spring Boot, Quarkus y programación reactiva.',
    heroStack: HERO_STACK,
    cv: CV_FILE,
    contact: { email: EMAIL, phoneDisplay: '987 768 964', phoneHref: PHONE_HREF },
    social: [],
  },

  stats: [
    { value: '15+', label: 'años de experiencia' },
    { value: '4+', label: 'años en Java / Spring' },
    { value: '10+', label: 'años en .NET / C#' },
    { value: 'Tech Lead', label: 'en banca (BCP, Mi Banco)' },
  ],

  javaFacts: [
    'Microservicios para BCP y Mi Banco desplegados sobre Azure',
    'Contract First con OpenAPI, principios SOLID y arquitectura hexagonal',
    'Capacitación del equipo, Code Review y estándares para el desarrollo de APIs',
    'Patrones Retry, Saga, BFF y Consumer',
  ],

  javaGroups: [
    {
      id: 'core',
      label: 'Plataforma y frameworks',
      caption: 'La base de los microservicios que diseño y desarrollo.',
      items: ['Java', 'Spring Boot', 'Quarkus', 'Spring Cloud', 'Microservicios', 'API REST'],
      evidence:
        'Microservicios bancarios en NTT DATA (2022 – actualidad) y API REST con Java 8 y Spring Boot en el proyecto RSAIP (2020).',
    },
    {
      id: 'reactive',
      label: 'Programación reactiva',
      caption: 'Servicios no bloqueantes y sus pruebas.',
      items: ['WebFlux', 'RxJava', 'Programación reactiva', 'WebTestClient', 'StepVerifier'],
      evidence:
        'Stack de los proyectos para BCP y Mi Banco; APIs con WebFlux probadas con WebTestClient y StepVerifier en el bootcamp de microservicios.',
    },
    {
      id: 'apis',
      label: 'APIs e integración',
      caption: 'Contratos claros y comunicación entre servicios.',
      items: ['OpenAPI (Contract First)', 'API REST', 'Apache Kafka', 'Azure Event Hub', 'Azure APIM'],
      evidence:
        'Lineamientos de desarrollo de APIs con Contract First en NTT DATA; mensajería con Kafka en el bootcamp de microservicios.',
    },
    {
      id: 'patterns',
      label: 'Patrones de microservicios',
      caption: 'Resiliencia, consistencia e infraestructura de servicios.',
      items: ['Retry', 'Saga', 'BFF', 'Consumer', 'API Gateway', 'Service Discovery', 'Config Server'],
      evidence:
        'Implementación de Retry, Saga, BFF y Consumer en NTT DATA; API Gateway, Service Discovery y Config Server con Spring Cloud en el bootcamp.',
    },
    {
      id: 'data',
      label: 'Datos y caché',
      caption: 'Persistencia relacional, documental y en memoria.',
      items: ['Cosmos DB', 'MongoDB', 'Redis', 'SQL Server', 'Oracle'],
      evidence:
        'Cosmos DB, MongoDB y Redis en los microservicios bancarios; Redis como caché de tablas maestras en el bootcamp; Oracle 11g en RSAIP.',
    },
    {
      id: 'quality',
      label: 'Calidad y seguridad',
      caption: 'Pruebas, cobertura, análisis estático y gestión de secretos.',
      items: ['JUnit 5', 'Mockito', 'JaCoCo', 'SonarQube', 'Fortify', 'HashiCorp Vault', 'Kibana'],
      evidence:
        'Métricas de cobertura con JaCoCo, análisis de vulnerabilidades con Fortify, logs en Kibana y secretos y ConfigMaps en HashiCorp Vault (NTT DATA).',
    },
    {
      id: 'azure',
      label: 'Cloud Azure',
      caption: 'La plataforma donde se ejecutan los servicios.',
      items: ['AKS', 'APIM', 'Event Hub', 'Cosmos DB', 'Redis Cache', 'Blob Storage', 'SQL Database'],
      evidence:
        'Microservicios desplegados en Azure para BCP y Mi Banco, con apoyo al equipo DevOps en la revisión del estado de PODs en AKS.',
    },
  ],

  jobs: [
    {
      company: 'NTT DATA',
      role: 'Technical Lead',
      focus: 'java',
      focusLabel: 'Java',
      period: 'Jul 2022 – Actualidad',
      clients: 'BCP, Mi Banco',
      highlights: [
        'Análisis y diseño técnico de requerimientos; microservicios REST con Contract First (OpenAPI), SOLID y arquitectura hexagonal.',
        'Liderazgo técnico: capacitación en arquitectura hexagonal, Code Review y estándares para el desarrollo de APIs.',
        'Patrones Retry, Saga, BFF y Consumer, y métricas de cobertura de código con JaCoCo.',
        'Seguridad y operación: Fortify, revisión de logs con Kibana, secretos y ConfigMaps en HashiCorp Vault, y apoyo a DevOps con los PODs en AKS.',
      ],
      stack: ['Java', 'Spring Boot', 'Quarkus', 'RxJava', 'WebFlux', 'Azure', 'MongoDB', 'Vault', 'JUnit', 'Mockito'],
    },
    {
      company: 'Tata Consultancy Services',
      role: 'I.T. Analyst',
      focus: 'node',
      focusLabel: 'NodeJS · AWS',
      period: 'May 2021 – Jun 2022',
      highlights: [
        'APIs REST serverless de los flujos digitales AMI y Vehicular, incluida la resolución de incidencias en producción.',
        'Configuración de recursos AWS con Serverless Framework y revisión de roles en Cognito para autenticación y autorización.',
        'Participación en todos los eventos Scrum, con gestión del trabajo en JIRA.',
      ],
      stack: ['NodeJS', 'AWS Lambda', 'API Gateway', 'DynamoDB', 'Cognito', 'S3', 'CloudWatch', 'MySQL', 'Oracle'],
    },
    {
      company: 'Perú Apps',
      role: 'Desarrollador .NET MVC',
      focus: 'dotnet',
      focusLabel: '.NET',
      period: 'Nov 2020 – May 2021',
      clients: 'Caja Arequipa (CRM, Representante de Servicio Digital, BSC)',
      highlights: ['Desarrollo de aplicaciones web corporativas en .NET MVC para Caja Arequipa.'],
      stack: ['C#', 'ASP.NET MVC', 'SQL Server', 'Oracle 11g', 'jQuery', 'Bootstrap'],
    },
    {
      company: 'Casuarinas International College',
      role: 'Analista Programador',
      focus: 'dotnet',
      focusLabel: '.NET · SAP',
      period: 'Dic 2017 – Oct 2020',
      highlights: [
        'Sistemas internos (Dashboard, Matrícula Online) y reportes gerenciales, con soporte a todas las áreas de la institución.',
        'Pasarela de pagos VisaNet, servicios de recaudo con bancos, facturación electrónica y servicios API REST.',
        'Modelado de procesos y coordinación de la implementación de SAP Business One.',
      ],
      stack: ['C#', 'VB.NET', 'ASP.NET MVC', 'SQL Server', 'SAP Business One', 'SAP HANA', 'Bizagi'],
    },
  ],

  earlierRoles: [
    {
      company: 'Global Hitss Perú',
      role: 'Analista Programador .NET',
      period: 'May – Ago 2017',
      detail: 'Claro: migración del SIAC HFC (retención, cancelación e instalación de servicios).',
    },
    {
      company: 'Inmobiliaria Educere',
      role: 'Analista Programador .NET',
      period: 'Jun 2015 – Mar 2017',
      detail: 'ERP Casuarinas, Sistema de Ventas, pagos online con VisaNet y reportes gerenciales.',
    },
    {
      company: 'CGI Perú',
      role: 'Analista Programador .NET',
      period: 'Sep 2013 – Mar 2015',
      detail: 'Pacífico Vida: eSIC, AdmeSIC y Pacífico en Línea (WCF, Remoting, COM+).',
    },
    {
      company: 'Techera',
      role: 'Analista Programador .NET',
      period: 'Abr 2012 – Ago 2013',
      detail: 'Graña y Montero (SISME, VALORIZA, CONCAR), GMP (SISCLI) y SSK (DEYSU).',
    },
    {
      company: 'Trust · Dynamoworks · Medlab',
      role: 'Programador',
      period: '2010 – 2012',
      detail: 'Sistemas de ventas e inventarios y desarrollo con VB.NET, SQL Server, MySQL y PHP.',
    },
  ],

  javaProjects: [
    {
      title: 'Microservicios bancarios',
      meta: 'NTT DATA · BCP y Mi Banco · 2022 – actualidad',
      summary:
        'Liderazgo técnico de microservicios en Java para dos clientes del sector bancario, desplegados sobre Azure.',
      points: [
        'Technical Lead del equipo de desarrollo',
        'Microservicios REST con Contract First y arquitectura hexagonal',
        'Patrones Retry, Saga, BFF y Consumer',
      ],
      stack: ['Java', 'Spring Boot', 'Quarkus', 'WebFlux', 'AKS', 'APIM', 'Event Hub', 'Cosmos DB', 'Redis'],
    },
    {
      title: 'Estándares de desarrollo de APIs',
      meta: 'NTT DATA · Liderazgo técnico',
      summary: 'Definición de los lineamientos que sigue el equipo para diseñar, construir y revisar APIs.',
      points: [
        'Adopción de Contract First con OpenAPI',
        'Medición de calidad con JaCoCo y Fortify',
        'Capacitación en arquitectura hexagonal y Code Review',
      ],
      stack: ['OpenAPI', 'JaCoCo', 'Fortify'],
    },
    {
      title: 'Bootcamp de microservicios',
      meta: 'NTT DATA',
      summary: 'Arquitectura de microservicios con Spring Cloud y APIs reactivas, de extremo a extremo.',
      points: [
        'API Gateway, Service Discovery y Config Server',
        'APIs con WebFlux y mensajería con Kafka',
        'Redis como caché de tablas maestras',
        'Pruebas con JUnit 5, Mockito, WebTestClient y StepVerifier',
      ],
      stack: ['Spring Cloud', 'WebFlux', 'Kafka', 'Redis', 'SonarQube'],
    },
    {
      title: 'RSAIP',
      meta: 'Freelance · Notion Design House Perú · 2020',
      summary:
        'Registro de Solicitudes de Acceso a la Información Pública: solución full stack con API REST en Java y frontend en Angular.',
      points: [
        'Definición de la arquitectura del proyecto',
        'API REST con Java 8 y Spring Boot',
        'Frontend en Angular 8 con TypeScript',
      ],
      stack: ['Java 8', 'Spring Boot', 'Oracle 11g', 'Angular 8', 'TypeScript'],
    },
  ],

  dotnetProjects: [
    {
      title: 'Pagos y facturación',
      meta: 'Casuarinas International College',
      summary:
        'Integración de VisaNet para el pago de pensiones, servicios de recaudo con bancos y facturación electrónica.',
      points: [],
      stack: ['C#', 'ASP.NET MVC', 'SQL Server'],
    },
    {
      title: 'ERP Casuarinas',
      meta: 'Inmobiliaria Educere',
      summary: 'Módulos de Tesorería, Contabilidad y Admisión, Sistema de Ventas y Reportes Gerenciales.',
      points: [],
      stack: ['C#', 'VB.NET', 'SQL Server'],
    },
    {
      title: 'Implementación de SAP Business One',
      meta: 'Casuarinas International College',
      summary: 'Coordinación del proyecto y modelado de los procesos de cada área con Bizagi.',
      points: [],
      stack: ['SAP Business One', 'SAP HANA', 'Bizagi'],
    },
    {
      title: 'Sistema de Firma Digital',
      meta: 'Freelance · 2020',
      summary: 'Plataforma para el firmado digital de documentos PDF con almacenamiento en FILESERVER.',
      points: [],
      stack: ['.NET MVC', 'SQL Server', 'JavaScript'],
    },
    {
      title: 'Proyectos para grandes clientes',
      meta: 'Caja Arequipa · Claro · Pacífico Vida · Graña y Montero',
      summary:
        'CRM, RSD y BSC para Caja Arequipa, migración del SIAC HFC de Claro, eSIC y Pacífico en Línea, y SISME, VALORIZA y CONCAR.',
      points: [],
      stack: ['C#', 'ASP.NET MVC', 'WCF', 'Oracle PL/SQL'],
    },
  ],

  layers: [
    {
      id: 'adapters',
      label: 'Adaptadores',
      detail:
        'Conectan el servicio con el exterior: APIs REST definidas con OpenAPI, consumo de eventos y acceso a datos y caché.',
      examples: ['REST · OpenAPI', 'Kafka', 'Event Hub', 'Cosmos DB', 'MongoDB', 'Redis'],
    },
    {
      id: 'ports',
      label: 'Puertos',
      detail:
        'Interfaces de entrada y salida que expresan los casos de uso, sin depender de la tecnología que los implementa.',
      examples: ['Casos de uso', 'Interfaces de salida', 'SOLID'],
    },
    {
      id: 'domain',
      label: 'Dominio',
      detail:
        'Modelo y reglas de negocio, aislados de frameworks e infraestructura para poder probarlos de forma unitaria.',
      examples: ['Entidades', 'Reglas de negocio', 'JUnit 5 · Mockito'],
    },
  ],

  practices: [
    {
      title: 'Arquitectura hexagonal',
      detail: 'Microservicios con el dominio aislado de frameworks e infraestructura. También la enseño al equipo.',
      tools: ['Puertos y adaptadores', 'SOLID'],
    },
    {
      title: 'Contract First',
      detail: 'El contrato OpenAPI se define antes que la implementación y guía los lineamientos de APIs.',
      tools: ['OpenAPI', 'API REST'],
    },
    {
      title: 'Patrones de microservicios',
      detail: 'Reintentos, transacciones distribuidas, backends por canal y consumo de eventos.',
      tools: ['Retry', 'Saga', 'BFF', 'Consumer'],
    },
    {
      title: 'Calidad medible',
      detail: 'Pruebas unitarias, métricas de cobertura y análisis estático como parte del flujo.',
      tools: ['JUnit 5', 'Mockito', 'JaCoCo', 'SonarQube'],
    },
    {
      title: 'Seguridad y configuración',
      detail: 'Análisis de vulnerabilidades en código y dependencias, y secretos fuera del código.',
      tools: ['Fortify', 'HashiCorp Vault', 'Kibana'],
    },
    {
      title: 'Liderazgo técnico',
      detail: 'Code Review, estándares de desarrollo y capacitación del equipo bajo metodologías ágiles.',
      tools: ['Code Review', 'Scrum', 'JIRA'],
    },
  ],

  otherSkills: [
    {
      label: '.NET',
      note: '10+ años',
      items: ['C#', 'VB.NET', '.NET Framework', '.NET Core', 'ASP.NET MVC', 'WCF', 'Web Services', 'Remoting', 'COM+', 'Reporting Services'],
    },
    {
      label: 'AWS y serverless',
      note: 'TCS · 2021 – 2022',
      items: ['Lambda', 'API Gateway', 'DynamoDB', 'S3', 'Cognito', 'CloudWatch', 'Serverless Framework'],
    },
    {
      label: 'Bases de datos',
      items: ['SQL Server (avanzado)', 'Oracle / PL-SQL', 'MySQL', 'MongoDB', 'Redis', 'DynamoDB', 'Cosmos DB'],
    },
    {
      label: 'Frontend',
      items: ['TypeScript', 'JavaScript', 'Angular', 'NodeJS', 'HTML', 'CSS', 'jQuery', 'Bootstrap'],
    },
    {
      label: 'Metodologías y herramientas',
      items: ['Scrum', 'JIRA', 'Git / GitHub', 'Bizagi', 'SAP Business One', 'SAP HANA', 'Rational Rose', 'Linux (CentOS)'],
    },
  ],

  studies: [
    {
      institution: 'Universidad Peruana de Ciencias Aplicadas (UPC)',
      program: 'Ingeniería de Sistemas (en curso)',
      period: '2014 – 2020',
    },
    { institution: 'Instituto Superior Privado IDAT', program: 'Computación e Informática', period: '2009 – 2011' },
    { institution: 'Británico', program: 'Inglés, nivel intermedio' },
  ],

  certifications: [
    { title: 'Scrum Fundamentals', detail: 'Certificación' },
    { title: '20487 Developing Windows Azure and Web Services', detail: 'New Horizons · Oct – Nov 2020' },
    { title: '20486 Developing ASP.NET Core MVC Web Applications', detail: 'New Horizons · Oct – Nov 2020' },
  ],
};
