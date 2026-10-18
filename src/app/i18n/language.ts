import { DOCUMENT, Injectable, computed, effect, inject, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { CV_EN } from '../data/cv.en';
import { CV_ES } from '../data/cv.es';
import { CvContent, Lang } from '../data/cv.model';

const CONTENT: Record<Lang, CvContent> = { es: CV_ES, en: CV_EN };
const STORAGE_KEY = 'lang';
const isLang = (value: unknown): value is Lang => value === 'es' || value === 'en';

/**
 * Active page language. Initial value: `?lang=` in the URL, then the visitor's saved choice, then
 * the browser language (Spanish for `es-*`, English otherwise). Keeps <html lang>, the title and
 * the description/Open Graph tags in sync.
 */
@Injectable({ providedIn: 'root' })
export class Language {
  private readonly document = inject(DOCUMENT);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  readonly lang = signal<Lang>(this.initialLang());
  readonly content = computed(() => CONTENT[this.lang()]);

  constructor() {
    effect(() => {
      const { lang, meta } = this.content();
      this.document.documentElement.lang = lang;
      this.title.setTitle(meta.title);
      this.meta.updateTag({ name: 'description', content: meta.description });
      this.meta.updateTag({ property: 'og:title', content: meta.title });
      this.meta.updateTag({ property: 'og:description', content: meta.description });
      this.meta.updateTag({ property: 'og:locale', content: meta.ogLocale });
    });
  }

  set(lang: Lang): void {
    this.lang.set(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Storage unavailable (private mode, blocked cookies): the choice lasts for this visit only.
    }
    // Keep the URL shareable in the chosen language without adding a history entry.
    const win = this.document.defaultView;
    if (win) {
      const url = new URL(win.location.href);
      url.searchParams.set('lang', lang);
      win.history.replaceState(win.history.state, '', url);
    }
  }

  private initialLang(): Lang {
    const win = this.document.defaultView;
    const fromUrl = win ? new URL(win.location.href).searchParams.get('lang') : null;
    if (isLang(fromUrl)) {
      return fromUrl;
    }
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (isLang(stored)) {
        return stored;
      }
    } catch {
      // Fall through to the browser language.
    }
    return win?.navigator.language.toLowerCase().startsWith('es') === false ? 'en' : 'es';
  }
}
