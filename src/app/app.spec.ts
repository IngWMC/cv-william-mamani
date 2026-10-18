import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { CV_EN } from './data/cv.en';
import { CV_ES } from './data/cv.es';

describe('App', () => {
  beforeEach(async () => {
    localStorage.setItem('lang', 'es');
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  afterEach(() => localStorage.clear());

  async function render() {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    return { fixture, page: fixture.nativeElement as HTMLElement };
  }

  it('renders the name from the CV as the only h1', async () => {
    const { page } = await render();
    const headings = page.querySelectorAll('h1');
    expect(headings.length).toBe(1);
    expect(headings[0].textContent).toContain('William');
    expect(headings[0].textContent).toContain('Mamani Cutipa');
  });

  it('has a section for every navigation link', async () => {
    const { page } = await render();
    for (const link of CV_ES.nav) {
      expect(page.querySelector(`section#${link.id}`), link.id).not.toBeNull();
    }
  });

  it('links the CV download and the email to real targets', async () => {
    const { page } = await render();
    const downloads = page.querySelectorAll<HTMLAnchorElement>('a[download]');
    expect(downloads.length).toBeGreaterThan(0);
    downloads.forEach((a) => expect(a.getAttribute('href')).toBe(CV_ES.profile.cv.href));
    expect(page.querySelector(`a[href="mailto:${CV_ES.profile.contact.email}"]`)).not.toBeNull();
  });

  it('renders icon shapes in the SVG namespace', async () => {
    const { page } = await render();
    const path = page.querySelector('app-icon svg path');
    expect(path?.namespaceURI).toBe('http://www.w3.org/2000/svg');
  });

  it('moves between Java ecosystem tabs with the keyboard', async () => {
    const { fixture, page } = await render();
    const tabs = page.querySelectorAll<HTMLButtonElement>('[role="tab"]');
    expect(tabs[0].getAttribute('aria-selected')).toBe('true');

    tabs[0].dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true }));
    await fixture.whenStable();

    expect(tabs[1].getAttribute('aria-selected')).toBe('true');
    expect(tabs[0].getAttribute('tabindex')).toBe('-1');
    const panel = page.querySelector('[role="tabpanel"]');
    expect(panel?.getAttribute('aria-labelledby')).toBe(tabs[1].id);
  });

  it('adds a ripple at the pointer position on primary buttons', async () => {
    const { page } = await render();
    const button = page.querySelector<HTMLElement>('.btn--filled')!;
    button.dispatchEvent(new MouseEvent('pointerdown', { button: 0, clientX: 4, clientY: 4 }));
    expect(button.querySelector('.ripple')).not.toBeNull();
  });

  it('switches the whole page to English and back', async () => {
    const { fixture, page } = await render();
    const langButton = page.querySelector<HTMLButtonElement>('.header__lang')!;
    expect(document.documentElement.lang).toBe('es');
    expect(page.querySelector('#java h2')?.textContent).toBe(CV_ES.ui.java.title);

    langButton.click();
    await fixture.whenStable();

    expect(document.documentElement.lang).toBe('en');
    expect(document.title).toBe(CV_EN.meta.title);
    expect(page.querySelector('#java h2')?.textContent).toBe(CV_EN.ui.java.title);
    expect(new URL(location.href).searchParams.get('lang')).toBe('en');
    expect(localStorage.getItem('lang')).toBe('en');

    langButton.click();
    await fixture.whenStable();
    expect(page.querySelector('#java h2')?.textContent).toBe(CV_ES.ui.java.title);
  });

  it('keeps focus inside the open mobile menu by making the rest of the page inert', async () => {
    const { fixture, page } = await render();
    const toggle = page.querySelector<HTMLButtonElement>('.header__toggle')!;

    toggle.click();
    await fixture.whenStable();
    expect(page.querySelector('main')?.hasAttribute('inert')).toBe(true);
    expect(toggle.getAttribute('aria-expanded')).toBe('true');

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    await fixture.whenStable();
    expect(page.querySelector('main')?.hasAttribute('inert')).toBe(false);
    expect(document.activeElement).toBe(toggle);
  });
});

describe('Translations', () => {
  it('keep the same structure in Spanish and English', () => {
    const ids = (items: { id: string }[]) => items.map((item) => item.id);
    expect(ids(CV_EN.nav)).toEqual(ids(CV_ES.nav));
    expect(ids(CV_EN.javaGroups)).toEqual(ids(CV_ES.javaGroups));
    expect(ids(CV_EN.layers)).toEqual(ids(CV_ES.layers));

    const counts = (c: typeof CV_ES) => [
      c.stats.length,
      c.javaFacts.length,
      c.jobs.map((job) => job.highlights.length),
      c.earlierRoles.length,
      c.javaProjects.map((p) => p.points.length),
      c.dotnetProjects.length,
      c.practices.length,
      c.otherSkills.map((g) => g.items.length),
      c.studies.length,
      c.certifications.length,
    ];
    expect(counts(CV_EN)).toEqual(counts(CV_ES));
  });
});
