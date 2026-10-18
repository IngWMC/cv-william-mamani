import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  afterNextRender,
  inject,
} from '@angular/core';

/** Maximum tilt, in degrees, applied to the 3D stack while the pointer moves over the hero. */
const MAX_TILT = 5;

/** Decorative hexagonal-architecture layer stack shown next to the hero copy. */
@Component({
  selector: 'app-hero-visual',
  templateUrl: './hero-visual.html',
  styleUrl: './hero-visual.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { 'aria-hidden': 'true' },
})
export class HeroVisual {
  constructor() {
    const host = inject<ElementRef<HTMLElement>>(ElementRef).nativeElement;
    const destroyRef = inject(DestroyRef);

    // Pointer parallax, only for fine pointers without reduced motion. Listeners are attached
    // outside Angular's template bindings so pointer moves never trigger change detection.
    afterNextRender(() => {
      const query = '(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)';
      if (typeof matchMedia === 'undefined' || !matchMedia(query).matches) {
        return;
      }
      const area = host.closest('section') ?? host;
      let frame = 0;

      const onMove = (event: PointerEvent) => {
        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(() => {
          const rect = area.getBoundingClientRect();
          const dx = (event.clientX - rect.left) / rect.width - 0.5;
          const dy = (event.clientY - rect.top) / rect.height - 0.5;
          host.style.setProperty('--tilt-x', `${(dx * MAX_TILT * 2).toFixed(2)}deg`);
          host.style.setProperty('--tilt-y', `${(-dy * MAX_TILT * 2).toFixed(2)}deg`);
        });
      };
      const onLeave = () => {
        cancelAnimationFrame(frame);
        host.style.setProperty('--tilt-x', '0deg');
        host.style.setProperty('--tilt-y', '0deg');
      };

      area.addEventListener('pointermove', onMove, { passive: true });
      area.addEventListener('pointerleave', onLeave);
      destroyRef.onDestroy(() => {
        cancelAnimationFrame(frame);
        area.removeEventListener('pointermove', onMove);
        area.removeEventListener('pointerleave', onLeave);
      });
    });
  }
}
