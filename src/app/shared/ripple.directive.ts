import { DestroyRef, Directive, ElementRef, Renderer2, inject } from '@angular/core';

/** Durations from Angular Material's ripple defaults. */
const ENTER_MS = 225;
const EXIT_MS = 150;

/**
 * Material-style ink ripple: starts at the pointer, grows to cover the farthest corner of the host,
 * then fades once the pointer is released and the grow animation has finished.
 * The host clips it (`.btn` sets overflow: hidden), so it follows the host's border radius.
 */
@Directive({
  selector: '[appRipple]',
  host: { '(pointerdown)': 'launch($event)' },
})
export class Ripple {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly renderer = inject(Renderer2);
  private readonly cleanups = new Set<() => void>();

  constructor() {
    inject(DestroyRef).onDestroy(() => this.cleanups.forEach((cleanup) => cleanup()));
  }

  protected launch(event: PointerEvent): void {
    const el = this.host.nativeElement;
    if (event.button !== 0 || el.matches(':disabled, [aria-disabled="true"]')) {
      return;
    }

    const rect = el.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const radius = Math.hypot(Math.max(x, rect.width - x), Math.max(y, rect.height - y));

    const ripple: HTMLElement = this.renderer.createElement('span');
    this.renderer.addClass(ripple, 'ripple');
    this.renderer.setAttribute(ripple, 'aria-hidden', 'true');
    this.renderer.setStyle(ripple, 'left', `${x - radius}px`);
    this.renderer.setStyle(ripple, 'top', `${y - radius}px`);
    this.renderer.setStyle(ripple, 'width', `${radius * 2}px`);
    this.renderer.setStyle(ripple, 'height', `${radius * 2}px`);
    this.renderer.setStyle(ripple, 'transition-duration', `${ENTER_MS}ms, ${EXIT_MS}ms`);
    this.renderer.appendChild(el, ripple);

    // Force a style flush so the scale transition starts from 0.
    ripple.getBoundingClientRect();
    this.renderer.addClass(ripple, 'ripple--enter');
    const startedAt = performance.now();

    let fadeTimer: ReturnType<typeof setTimeout> | undefined;
    let removeTimer: ReturnType<typeof setTimeout> | undefined;
    const unlisteners = ['pointerup', 'pointercancel'].map((type) =>
      this.renderer.listen('window', type, () => release()),
    );
    const unlistenLeave = this.renderer.listen(el, 'pointerleave', () => release());

    const dispose = () => {
      unlisteners.forEach((off) => off());
      unlistenLeave();
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
      ripple.remove();
      this.cleanups.delete(dispose);
    };

    let released = false;
    const release = () => {
      if (released) {
        return;
      }
      released = true;
      unlisteners.forEach((off) => off());
      unlistenLeave();
      const remaining = Math.max(0, ENTER_MS - (performance.now() - startedAt));
      fadeTimer = setTimeout(() => {
        this.renderer.addClass(ripple, 'ripple--exit');
        removeTimer = setTimeout(dispose, EXIT_MS);
      }, remaining);
    };

    this.cleanups.add(dispose);
  }
}
