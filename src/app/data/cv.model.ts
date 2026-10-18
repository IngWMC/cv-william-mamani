export type Lang = 'es' | 'en';

export interface Profile {
  name: string;
  initials: string;
  title: string;
  location: string;
  headline: string;
  summary: string;
  /** Shorter summary shown on small screens. */
  summaryShort: string;
  heroStack: string[];
  cv: { href: string; fileName: string };
  contact: { email: string; phoneDisplay: string; phoneHref: string };
  /** Professional profiles (LinkedIn, GitHub…). Empty until real URLs are available. */
  social: { label: string; href: string }[];
}

export interface NavLink {
  id: string;
  label: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface TechGroup {
  id: string;
  label: string;
  caption: string;
  items: string[];
  evidence: string;
}

export type JobFocus = 'java' | 'node' | 'dotnet';

export interface Job {
  company: string;
  role: string;
  focus: JobFocus;
  focusLabel: string;
  period: string;
  clients?: string;
  highlights: string[];
  stack: string[];
}

export interface ShortRole {
  company: string;
  role: string;
  period: string;
  detail: string;
}

export interface Project {
  title: string;
  meta: string;
  summary: string;
  points: string[];
  stack: string[];
}

export type LayerId = 'adapters' | 'ports' | 'domain';

export interface ArchitectureLayer {
  id: LayerId;
  label: string;
  detail: string;
  examples: string[];
}

export interface Practice {
  title: string;
  detail: string;
  tools: string[];
}

export interface SkillGroup {
  label: string;
  note?: string;
  items: string[];
}

export interface Study {
  institution: string;
  program: string;
  period?: string;
}

export interface Certification {
  title: string;
  detail: string;
}

interface SectionCopy {
  eyebrow: string;
  title: string;
  lead: string;
}

/** Interface text that is not CV content (labels, buttons, accessible names). */
export interface UiStrings {
  skipLink: string;
  header: {
    home: string;
    sectionsLabel: string;
    mobileSectionsLabel: string;
    cv: string;
    cvSuffix: string;
    openMenu: string;
    closeMenu: string;
    /** The button switches to the *other* language, so it is labelled in that language. */
    switchTo: { lang: Lang; code: string; label: string };
  };
  hero: {
    roleBefore: string;
    roleAfter: string;
    stackLabel: string;
    contact: string;
    downloadCv: string;
  };
  java: SectionCopy & { coreMeta: string; tablistLabel: string; evidenceLabel: string };
  experience: SectionCopy & {
    clientsLabel: string;
    stackLabel: string;
    earlierTitle: string;
    earlierRange: string;
  };
  projects: SectionCopy & { legacyTitle: string; stackLabel: string };
  architecture: SectionCopy & { diagramTitle: string; layersLabel: string };
  skills: SectionCopy;
  education: { eyebrow: string; title: string; studiesTitle: string; certsTitle: string };
  contact: {
    eyebrow: string;
    title: string;
    lead: string;
    email: string;
    downloadCv: string;
    emailLabel: string;
    phoneLabel: string;
    locationLabel: string;
    copy: string;
    copied: string;
  };
  footer: { navLabel: string; backToTop: string };
}

/** Everything the page renders in one language. */
export interface CvContent {
  lang: Lang;
  meta: { title: string; description: string; ogLocale: string };
  ui: UiStrings;
  nav: NavLink[];
  profile: Profile;
  stats: Stat[];
  javaFacts: string[];
  javaGroups: TechGroup[];
  jobs: Job[];
  earlierRoles: ShortRole[];
  javaProjects: Project[];
  dotnetProjects: Project[];
  layers: ArchitectureLayer[];
  practices: Practice[];
  otherSkills: SkillGroup[];
  studies: Study[];
  certifications: Certification[];
}
