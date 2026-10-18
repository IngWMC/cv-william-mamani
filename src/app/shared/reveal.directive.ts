import {
  DestroyRef,
  Directive,
  ElementRef,
  afterNextRender,
  inject,
  input,
  signal,
} from '@angular/core';

/**
 * Fades and lifts the host in the first time it enters the viewport.
 * Without IntersectionObserver the content is shown immediately.
 */
@Directive({
  selector: '[appReveal]',
  host: {
    class: 'reveal',
    '[class.is-visible]': 'visible()',
    '[style.--reveal-delay]': 'appRevealDelay() + "ms"',
  },
})
export class Reveal {
  readonly appRevealDelay = input(0);
  protected readonly visible = signal(false);

  constructor() {
    const el = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
    const destroyRef = inject(DestroyRef);

    afterNextRender(() => {
      if (typeof IntersectionObserver === 'undefined') {
        this.visible.set(true);
        return;
      }
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((entry) => entry.isIntersecting)) {
            this.visible.set(true);
            observer.disconnect();
          }
        },
        { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
      );
      observer.observe(el);
      destroyRef.onDestroy(() => observer.disconnect());
    });
  }
}
