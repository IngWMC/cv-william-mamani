import { ChangeDetectionStrategy, Component, DestroyRef, inject, signal } from '@angular/core';
import { Language } from '../../i18n/language';
import { Icon } from '../../shared/icon';
import { Reveal } from '../../shared/reveal.directive';
import { Ripple } from '../../shared/ripple.directive';

@Component({
  selector: 'app-contact',
  imports: [Icon, Reveal, Ripple],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contact {
  protected readonly t = inject(Language).content;
  protected readonly copied = signal(false);
  protected readonly canCopy = typeof navigator !== 'undefined' && !!navigator.clipboard;

  private resetTimer: ReturnType<typeof setTimeout> | undefined;

  constructor() {
    inject(DestroyRef).onDestroy(() => clearTimeout(this.resetTimer));
  }

  protected async copyEmail(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.t().profile.contact.email);
      this.copied.set(true);
      clearTimeout(this.resetTimer);
      this.resetTimer = setTimeout(() => this.copied.set(false), 2200);
    } catch {
      // Clipboard permission denied: the mailto link remains available.
    }
  }
}
