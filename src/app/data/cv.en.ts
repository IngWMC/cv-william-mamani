// English content: a faithful translation of cv.es.ts (the source of truth is the Spanish CV PDF).
// Proper names of systems, clients and products are kept as they appear in the CV.
import { CvContent } from './cv.model';
import { CV_FILE, EMAIL, HERO_STACK, INITIALS, NAME, PHONE_HREF } from './cv.shared';

export const CV_EN: CvContent = {
  lang: 'en',
  meta: {
    title: 'William Mamani Cutipa · Technical Lead, Java & .NET',
    description:
      'Technical Lead with 15+ years of experience. Java microservices (Spring Boot, Quarkus, WebFlux) on Azure for the banking sector, hexagonal architecture and 10+ years in .NET. Lima, Peru.',
    ogLocale: 'en_US',
  },

  ui: {
    skipLink: 'Skip to content',
    header: {
      home: ', back to top',
      sectionsLabel: 'Sections',
      mobileSectionsLabel: 'Sections (mobile)',
      cv: 'CV',
      cvSuffix: ' (PDF, Spanish)',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      switchTo: { lang: 'es', code: 'ES', label: 'Ver en español' },
    },
    hero: {
      roleBefore: '',
      roleAfter: ' & .NET Developer',
      stackLabel: 'Core technologies',
      contact: 'Get in touch',
      downloadCv: 'Download CV (Spanish)',
    },
    java: {
      eyebrow: 'Specialization',
      title: 'Java and its ecosystem, at the core of my current work',
      lead: '4+ years leading microservices development with Spring Boot, Quarkus and reactive programming for banking clients.',
      coreMeta: 'NTT DATA · July 2022 – present',
      tablistLabel: 'Java ecosystem areas',
      evidenceLabel: 'Where I have used it',
    },
    experience: {
      eyebrow: 'Career',
      title: 'Professional experience',
      lead: '15+ years of growth: from enterprise systems in .NET to technical leadership of Java microservices in banking.',
      clientsLabel: 'Projects',
      stackLabel: 'Technologies',
      earlierTitle: 'Earlier career',
      earlierRange: '2010 – 2017 · .NET',
    },
    projects: {
      eyebrow: 'Case studies',
      title: 'Featured projects',
      lead: 'Real work for clients and teams. These are corporate systems, so the code is not public; here are the context, my role and the technical approach.',
      legacyTitle: 'Enterprise systems in .NET',
      stackLabel: 'Technologies: ',
    },
    architecture: {
      eyebrow: 'Software design',
      title: 'Architecture & best practices',
      lead: 'The principles I use to design, build and review the microservices I lead at NTT DATA.',
      diagramTitle:
        'Hexagonal architecture: the domain at the center, surrounded by ports and by adapters such as REST, Kafka, Event Hub, Cosmos DB, MongoDB and Redis.',
      layersLabel: 'Architecture layers',
    },
    skills: {
      eyebrow: 'Broader profile',
      title: 'Beyond Java',
      lead: '10+ years in .NET, plus experience in serverless cloud, data and front end that round out my back-end profile.',
    },
    education: {
      eyebrow: 'Education',
      title: 'Studies & certifications',
      studiesTitle: 'Academic background',
      certsTitle: 'Courses & certifications',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Shall we talk about your next project?',
      lead: 'If you are looking for a Technical Lead or Java developer for your team, or want to talk about microservices and architecture, send me an email.',
      email: 'Send an email',
      downloadCv: 'Download CV (Spanish)',
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      locationLabel: 'Location',
      copy: 'Copy email',
      copied: 'Email copied to clipboard',
    },
    footer: { navLabel: 'Footer', backToTop: 'Back to top' },
  },

  nav: [
    { id: 'java', label: 'Java stack' },
    { id: 'experiencia', label: 'Experience' },
    { id: 'proyectos', label: 'Projects' },
    { id: 'arquitectura', label: 'Architecture' },
    { id: 'formacion', label: 'Education' },
    { id: 'contacto', label: 'Contact' },
  ],

  profile: {
    name: NAME,
    initials: INITIALS,
    title: 'Technical Lead | Java & .NET Developer',
    location: 'Lima, Peru',
    headline: 'I design and lead Java microservices on Azure for the banking sector.',
    summary:
      '15+ years building web applications and enterprise systems: more than 10 in the .NET ecosystem and more than 4 leading development with Spring Boot, Quarkus and reactive programming. I work with hexagonal architecture, contract-first APIs with OpenAPI and a strong focus on code quality.',
    summaryShort:
      '15+ years building enterprise systems; 4+ leading microservices with Spring Boot, Quarkus and reactive programming.',
    heroStack: HERO_STACK,
    cv: CV_FILE,
    contact: { email: EMAIL, phoneDisplay: '+51 987 768 964', phoneHref: PHONE_HREF },
    social: [],
  },

  stats: [
    { value: '15+', label: 'years of experience' },
    { value: '4+', label: 'years in Java / Spring' },
    { value: '10+', label: 'years in .NET / C#' },
    { value: 'Tech Lead', label: 'in banking (BCP, Mi Banco)' },
  ],

  javaFacts: [
    'Microservices for BCP and Mi Banco deployed on Azure',
    'Contract First with OpenAPI, SOLID principles and hexagonal architecture',
    'Team training, code reviews and API development standards',
    'Retry, Saga, BFF and Consumer patterns',
  ],

  javaGroups: [
    {
      id: 'core',
      label: 'Platform & frameworks',
      caption: 'The foundation of the microservices I design and build.',
      items: ['Java', 'Spring Boot', 'Quarkus', 'Spring Cloud', 'Microservices', 'REST APIs'],
      evidence:
        'Banking microservices at NTT DATA (2022 – present) and a REST API with Java 8 and Spring Boot for the RSAIP project (2020).',
    },
    {
      id: 'reactive',
      label: 'Reactive programming',
      caption: 'Non-blocking services and how to test them.',
      items: ['WebFlux', 'RxJava', 'Reactive programming', 'WebTestClient', 'StepVerifier'],
      evidence:
        'Stack of the BCP and Mi Banco projects; WebFlux APIs tested with WebTestClient and StepVerifier in the microservices bootcamp.',
    },
    {
      id: 'apis',
      label: 'APIs & integration',
      caption: 'Clear contracts and communication between services.',
      items: ['OpenAPI (Contract First)', 'REST APIs', 'Apache Kafka', 'Azure Event Hub', 'Azure APIM'],
      evidence:
        'Contract-first API development guidelines at NTT DATA; messaging with Kafka in the microservices bootcamp.',
    },
    {
      id: 'patterns',
      label: 'Microservice patterns',
      caption: 'Resilience, consistency and service infrastructure.',
      items: ['Retry', 'Saga', 'BFF', 'Consumer', 'API Gateway', 'Service Discovery', 'Config Server'],
      evidence:
        'Retry, Saga, BFF and Consumer implemented at NTT DATA; API Gateway, Service Discovery and Config Server with Spring Cloud in the bootcamp.',
    },
    {
      id: 'data',
      label: 'Data & caching',
      caption: 'Relational, document and in-memory persistence.',
      items: ['Cosmos DB', 'MongoDB', 'Redis', 'SQL Server', 'Oracle'],
      evidence:
        'Cosmos DB, MongoDB and Redis in the banking microservices; Redis as a cache for master tables in the bootcamp; Oracle 11g in RSAIP.',
    },
    {
      id: 'quality',
      label: 'Quality & security',
      caption: 'Testing, coverage, static analysis and secrets management.',
      items: ['JUnit 5', 'Mockito', 'JaCoCo', 'SonarQube', 'Fortify', 'HashiCorp Vault', 'Kibana'],
      evidence:
        'Code coverage metrics with JaCoCo, vulnerability analysis with Fortify, logs in Kibana, and secrets and ConfigMaps in HashiCorp Vault (NTT DATA).',
    },
    {
      id: 'azure',
      label: 'Azure cloud',
      caption: 'The platform the services run on.',
      items: ['AKS', 'APIM', 'Event Hub', 'Cosmos DB', 'Redis Cache', 'Blob Storage', 'SQL Database'],
      evidence:
        'Microservices deployed on Azure for BCP and Mi Banco, supporting the DevOps team in checking pod status on AKS.',
    },
  ],

  jobs: [
    {
      company: 'NTT DATA',
      role: 'Technical Lead',
      focus: 'java',
      focusLabel: 'Java',
      period: 'Jul 2022 – Present',
      clients: 'BCP, Mi Banco',
      highlights: [
        'Technical analysis and design of requirements; contract-first REST microservices (OpenAPI) following SOLID and hexagonal architecture.',
        'Technical leadership: hexagonal architecture training, code reviews and API development standards.',
        'Retry, Saga, BFF and Consumer patterns, plus code coverage metrics with JaCoCo.',
        'Security and operations: Fortify, log review in Kibana, secrets and ConfigMaps in HashiCorp Vault, and support to DevOps with pods on AKS.',
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
        'Serverless REST APIs for the AMI and Vehicular digital flows, including production incident resolution.',
        'AWS resources configured with the Serverless Framework, and Cognito role review for authentication and authorization.',
        'Took part in every Scrum event, tracking work in JIRA.',
      ],
      stack: ['NodeJS', 'AWS Lambda', 'API Gateway', 'DynamoDB', 'Cognito', 'S3', 'CloudWatch', 'MySQL', 'Oracle'],
    },
    {
      company: 'Perú Apps',
      role: '.NET MVC Developer',
      focus: 'dotnet',
      focusLabel: '.NET',
      period: 'Nov 2020 – May 2021',
      clients: 'Caja Arequipa (CRM, Digital Service Representative, BSC)',
      highlights: ['Corporate web applications in .NET MVC for Caja Arequipa.'],
      stack: ['C#', 'ASP.NET MVC', 'SQL Server', 'Oracle 11g', 'jQuery', 'Bootstrap'],
    },
    {
      company: 'Casuarinas International College',
      role: 'Analyst Programmer',
      focus: 'dotnet',
      focusLabel: '.NET · SAP',
      period: 'Dec 2017 – Oct 2020',
      highlights: [
        'Internal systems (Dashboard, Online Enrollment) and management reports, supporting every area of the school.',
        'VisaNet payment gateway, bank collection services, electronic invoicing and REST API services.',
        'Process modeling and coordination of the SAP Business One rollout.',
      ],
      stack: ['C#', 'VB.NET', 'ASP.NET MVC', 'SQL Server', 'SAP Business One', 'SAP HANA', 'Bizagi'],
    },
  ],

  earlierRoles: [
    {
      company: 'Global Hitss Perú',
      role: 'Analyst Programmer, .NET',
      period: 'May – Aug 2017',
      detail: 'Claro: migration of SIAC HFC (service retention, cancellation and installation).',
    },
    {
      company: 'Inmobiliaria Educere',
      role: 'Analyst Programmer, .NET',
      period: 'Jun 2015 – Mar 2017',
      detail: 'Casuarinas ERP, sales system, online payments with VisaNet and management reports.',
    },
    {
      company: 'CGI Perú',
      role: 'Analyst Programmer, .NET',
      period: 'Sep 2013 – Mar 2015',
      detail: 'Pacífico Vida: eSIC, AdmeSIC and Pacífico en Línea (WCF, Remoting, COM+).',
    },
    {
      company: 'Techera',
      role: 'Analyst Programmer, .NET',
      period: 'Apr 2012 – Aug 2013',
      detail: 'Graña y Montero (SISME, VALORIZA, CONCAR), GMP (SISCLI) and SSK (DEYSU).',
    },
    {
      company: 'Trust · Dynamoworks · Medlab',
      role: 'Programmer',
      period: '2010 – 2012',
      detail: 'Sales and inventory systems, and development with VB.NET, SQL Server, MySQL and PHP.',
    },
  ],

  javaProjects: [
    {
      title: 'Banking microservices',
      meta: 'NTT DATA · BCP and Mi Banco · 2022 – present',
      summary: 'Technical leadership of Java microservices for two banking clients, deployed on Azure.',
      points: [
        'Technical Lead of the development team',
        'Contract-first REST microservices with hexagonal architecture',
        'Retry, Saga, BFF and Consumer patterns',
      ],
      stack: ['Java', 'Spring Boot', 'Quarkus', 'WebFlux', 'AKS', 'APIM', 'Event Hub', 'Cosmos DB', 'Redis'],
    },
    {
      title: 'API development standards',
      meta: 'NTT DATA · Technical leadership',
      summary: 'Defined the guidelines the team follows to design, build and review APIs.',
      points: [
        'Contract First adoption with OpenAPI',
        'Quality measured with JaCoCo and Fortify',
        'Hexagonal architecture training and code reviews',
      ],
      stack: ['OpenAPI', 'JaCoCo', 'Fortify'],
    },
    {
      title: 'Microservices bootcamp',
      meta: 'NTT DATA',
      summary: 'End-to-end microservices architecture with Spring Cloud and reactive APIs.',
      points: [
        'API Gateway, Service Discovery and Config Server',
        'WebFlux APIs and Kafka messaging',
        'Redis as a cache for master tables',
        'Tests with JUnit 5, Mockito, WebTestClient and StepVerifier',
      ],
      stack: ['Spring Cloud', 'WebFlux', 'Kafka', 'Redis', 'SonarQube'],
    },
    {
      title: 'RSAIP',
      meta: 'Freelance · Notion Design House Perú · 2020',
      summary:
        'Public Information Access Request Registry: a full-stack solution with a Java REST API and an Angular front end.',
      points: [
        'Defined the project architecture',
        'REST API with Java 8 and Spring Boot',
        'Angular 8 front end with TypeScript',
      ],
      stack: ['Java 8', 'Spring Boot', 'Oracle 11g', 'Angular 8', 'TypeScript'],
    },
  ],

  dotnetProjects: [
    {
      title: 'Payments & invoicing',
      meta: 'Casuarinas International College',
      summary: 'VisaNet integration for tuition payments, bank collection services and electronic invoicing.',
      points: [],
      stack: ['C#', 'ASP.NET MVC', 'SQL Server'],
    },
    {
      title: 'Casuarinas ERP',
      meta: 'Inmobiliaria Educere',
      summary: 'Treasury, Accounting and Admissions modules, plus a sales system and management reports.',
      points: [],
      stack: ['C#', 'VB.NET', 'SQL Server'],
    },
    {
      title: 'SAP Business One rollout',
      meta: 'Casuarinas International College',
      summary: 'Project coordination and process modeling for every area with Bizagi.',
      points: [],
      stack: ['SAP Business One', 'SAP HANA', 'Bizagi'],
    },
    {
      title: 'Digital signature system',
      meta: 'Freelance · 2020',
      summary: 'Platform for digitally signing PDF documents, stored on a file server.',
      points: [],
      stack: ['.NET MVC', 'SQL Server', 'JavaScript'],
    },
    {
      title: 'Projects for large clients',
      meta: 'Caja Arequipa · Claro · Pacífico Vida · Graña y Montero',
      summary:
        'CRM, RSD and BSC for Caja Arequipa, the SIAC HFC migration for Claro, eSIC and Pacífico en Línea, and SISME, VALORIZA and CONCAR.',
      points: [],
      stack: ['C#', 'ASP.NET MVC', 'WCF', 'Oracle PL/SQL'],
    },
  ],

  layers: [
    {
      id: 'adapters',
      label: 'Adapters',
      detail:
        'Connect the service to the outside world: REST APIs defined with OpenAPI, event consumers, and data and cache access.',
      examples: ['REST · OpenAPI', 'Kafka', 'Event Hub', 'Cosmos DB', 'MongoDB', 'Redis'],
    },
    {
      id: 'ports',
      label: 'Ports',
      detail:
        'Inbound and outbound interfaces that express the use cases, independent of the technology behind them.',
      examples: ['Use cases', 'Outbound interfaces', 'SOLID'],
    },
    {
      id: 'domain',
      label: 'Domain',
      detail: 'Business model and rules, isolated from frameworks and infrastructure so they can be unit tested.',
      examples: ['Entities', 'Business rules', 'JUnit 5 · Mockito'],
    },
  ],

  practices: [
    {
      title: 'Hexagonal architecture',
      detail: 'Microservices with the domain isolated from frameworks and infrastructure. I also teach it to the team.',
      tools: ['Ports and adapters', 'SOLID'],
    },
    {
      title: 'Contract First',
      detail: 'The OpenAPI contract is defined before the implementation and drives the API guidelines.',
      tools: ['OpenAPI', 'REST APIs'],
    },
    {
      title: 'Microservice patterns',
      detail: 'Retries, distributed transactions, per-channel back ends and event consumption.',
      tools: ['Retry', 'Saga', 'BFF', 'Consumer'],
    },
    {
      title: 'Measurable quality',
      detail: 'Unit tests, coverage metrics and static analysis as part of the workflow.',
      tools: ['JUnit 5', 'Mockito', 'JaCoCo', 'SonarQube'],
    },
    {
      title: 'Security & configuration',
      detail: 'Vulnerability analysis of code and dependencies, and secrets kept out of the code.',
      tools: ['Fortify', 'HashiCorp Vault', 'Kibana'],
    },
    {
      title: 'Technical leadership',
      detail: 'Code reviews, development standards and team training in agile teams.',
      tools: ['Code Review', 'Scrum', 'JIRA'],
    },
  ],

  otherSkills: [
    {
      label: '.NET',
      note: '10+ years',
      items: ['C#', 'VB.NET', '.NET Framework', '.NET Core', 'ASP.NET MVC', 'WCF', 'Web Services', 'Remoting', 'COM+', 'Reporting Services'],
    },
    {
      label: 'AWS & serverless',
      note: 'TCS · 2021 – 2022',
      items: ['Lambda', 'API Gateway', 'DynamoDB', 'S3', 'Cognito', 'CloudWatch', 'Serverless Framework'],
    },
    {
      label: 'Databases',
      items: ['SQL Server (advanced)', 'Oracle / PL-SQL', 'MySQL', 'MongoDB', 'Redis', 'DynamoDB', 'Cosmos DB'],
    },
    {
      label: 'Front end',
      items: ['TypeScript', 'JavaScript', 'Angular', 'NodeJS', 'HTML', 'CSS', 'jQuery', 'Bootstrap'],
    },
    {
      label: 'Methods & tools',
      items: ['Scrum', 'JIRA', 'Git / GitHub', 'Bizagi', 'SAP Business One', 'SAP HANA', 'Rational Rose', 'Linux (CentOS)'],
    },
  ],

  studies: [
    {
      institution: 'Universidad Peruana de Ciencias Aplicadas (UPC)',
      program: 'Systems Engineering (in progress)',
      period: '2014 – 2020',
    },
    { institution: 'Instituto Superior Privado IDAT', program: 'Computing and IT', period: '2009 – 2011' },
    { institution: 'Británico', program: 'English, intermediate level' },
  ],

  certifications: [
    { title: 'Scrum Fundamentals', detail: 'Certification' },
    { title: '20487 Developing Windows Azure and Web Services', detail: 'New Horizons · Oct – Nov 2020' },
    { title: '20486 Developing ASP.NET Core MVC Web Applications', detail: 'New Horizons · Oct – Nov 2020' },
  ],
};
