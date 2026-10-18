import {
  ChangeDetectionStrategy,
  Component,
  DOCUMENT,
  DestroyRef,
  ElementRef,
  Injector,
  afterNextRender,
  effect,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { Language } from '../../i18n/language';
import { Icon } from '../../shared/icon';
import { Ripple } from '../../shared/ripple.directive';

/** Everything outside the header that must not be reachable while the mobile menu is open. */
const OUTSIDE_MENU = ['.skip-link', 'main', 'app-footer'];

@Component({
  selector: 'app-header',
  imports: [Icon, Ripple],
  templateUrl: './header.html',
  styleUrl: './header.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '(document:keydown.escape)': 'closeMenu(true)' },
})
export class Header {
  protected readonly language = inject(Language);
  protected readonly t = this.language.content;
  protected readonly menuOpen = signal(false);
  protected readonly scrolled = signal(false);
  protected readonly activeId = signal('');

  private readonly document = inject(DOCUMENT);
  private readonly injector = inject(Injector);
  private readonly toggleButton = viewChild.required<ElementRef<HTMLButtonElement>>('toggle');
  private readonly mobilePanel = viewChild.required<ElementRef<HTMLElement>>('panel');

  constructor() {
    const destroyRef = inject(DestroyRef);

    // Modal behaviour for the open menu: lock page scroll and make the rest of the page inert,
    // which keeps keyboard focus and screen readers inside the header and the menu.
    effect(() => {
      const open = this.menuOpen();
      this.document.body.classList.toggle('menu-open', open);
      for (const selector of OUTSIDE_MENU) {
        this.document.querySelector<HTMLElement>(selector)?.toggleAttribute('inert', open);
      }
    });

    afterNextRender(() => {
      if (typeof IntersectionObserver === 'undefined') {
        return;
      }
      // A 12px sentinel at the top of the page tells us when the user has scrolled.
      const scrollObserver = new IntersectionObserver(([entry]) =>
        this.scrolled.set(!entry.isIntersecting),
      );
      const sentinel = this.document.getElementById('top');
      if (sentinel) {
        scrollObserver.observe(sentinel);
      }

      // Scroll spy: the section crossing the middle band of the viewport is the active one.
      const spy = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              this.activeId.set(entry.target.id);
            }
          }
        },
        { rootMargin: '-45% 0px -50% 0px' },
      );
      for (const id of ['inicio', ...this.t().nav.map((link) => link.id)]) {
        const section = this.document.getElementById(id);
        if (section) {
          spy.observe(section);
        }
      }

      destroyRef.onDestroy(() => {
        scrollObserver.disconnect();
        spy.disconnect();
      });
    });
  }

  protected toggleMenu(): void {
    const open = !this.menuOpen();
    this.menuOpen.set(open);
    if (open) {
      afterNextRender(
        { write: () => this.mobilePanel().nativeElement.querySelector('a')?.focus() },
        { injector: this.injector },
      );
    }
  }

  protected closeMenu(restoreFocus = false): void {
    if (!this.menuOpen()) {
      return;
    }
    this.menuOpen.set(false);
    if (restoreFocus) {
      this.toggleButton().nativeElement.focus();
    }
  }
}
