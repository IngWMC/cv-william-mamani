import { ChangeDetectionStrategy, Component, input } from '@angular/core';

export type IconName =
  | 'mail'
  | 'phone'
  | 'pin'
  | 'download'
  | 'arrow-right'
  | 'arrow-up'
  | 'menu'
  | 'close'
  | 'copy'
  | 'check'
  | 'graduation'
  | 'award';

/**
 * Decorative stroke icon. Always aria-hidden: the surrounding control must carry the accessible name.
 */
@Component({
  selector: 'app-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'icon', 'aria-hidden': 'true' },
  template: `
    <svg
      viewBox="0 0 24 24"
      [attr.width]="size()"
      [attr.height]="size()"
      fill="none"
      stroke="currentColor"
      stroke-width="1.75"
      stroke-linecap="round"
      stroke-linejoin="round"
      focusable="false"
    >
      @switch (name()) {
        @case ('mail') {
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3.5 7 8.5 6 8.5-6" />
        }
        @case ('phone') {
          <path
            d="M21 16.5v3a1.8 1.8 0 0 1-2 1.8A17.8 17.8 0 0 1 2.7 5 1.8 1.8 0 0 1 4.5 3h3a1.8 1.8 0 0 1 1.8 1.5c.1.9.4 1.8.7 2.6a1.8 1.8 0 0 1-.4 1.9L8.3 10.3a14.4 14.4 0 0 0 5.4 5.4l1.3-1.3a1.8 1.8 0 0 1 1.9-.4c.8.3 1.7.6 2.6.7a1.8 1.8 0 0 1 1.5 1.8z"
          />
        }
        @case ('pin') {
          <path d="M12 21s-7-6.1-7-11a7 7 0 0 1 14 0c0 4.9-7 11-7 11z" />
          <circle cx="12" cy="10" r="2.5" />
        }
        @case ('download') {
          <path d="M12 4v11" />
          <path d="m7 10 5 5 5-5" />
          <path d="M5 20h14" />
        }
        @case ('arrow-right') {
          <path d="M5 12h14" />
          <path d="m13 6 6 6-6 6" />
        }
        @case ('arrow-up') {
          <path d="M12 19V5" />
          <path d="m6 11 6-6 6 6" />
        }
        @case ('menu') {
          <path d="M4 7h16M4 12h16M4 17h10" />
        }
        @case ('close') {
          <path d="M6 6l12 12M18 6 6 18" />
        }
        @case ('copy') {
          <rect x="9" y="9" width="11" height="11" rx="2" />
          <path d="M15 9V5.5A1.5 1.5 0 0 0 13.5 4h-8A1.5 1.5 0 0 0 4 5.5v8A1.5 1.5 0 0 0 5.5 15H9" />
        }
        @case ('check') {
          <path d="m5 12.5 4.5 4.5L19 7.5" />
        }
        @case ('graduation') {
          <path d="M2 9.5 12 5l10 4.5-10 4.5z" />
          <path d="M6 11.5V16c0 1.4 2.7 3 6 3s6-1.6 6-3v-4.5" />
        }
        @case ('award') {
          <circle cx="12" cy="9" r="5.5" />
          <path d="M8.7 13.4 7.5 21l4.5-2.6 4.5 2.6-1.2-7.6" />
        }
      }
    </svg>
  `,
  styles: `
    :host {
      display: inline-flex;
      flex-shrink: 0;
    }
  `,
})
export class Icon {
  readonly name = input.required<IconName>();
  readonly size = input(20);
}
