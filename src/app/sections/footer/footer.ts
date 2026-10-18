import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Language } from '../../i18n/language';
import { Icon } from '../../shared/icon';

@Component({
  selector: 'app-footer',
  imports: [Icon],
  template: `
    @let profile = t().profile;
    <footer class="footer">
      <div class="container footer__inner">
        <div>
          <p class="footer__name">{{ profile.name }}</p>
          <p class="footer__role">{{ profile.title }}</p>
        </div>
        <nav [attr.aria-label]="t().ui.footer.navLabel">
          <ul class="footer__links">
            @for (link of t().nav; track link.id) {
              <li><a [href]="'#' + link.id">{{ link.label }}</a></li>
            }
          </ul>
        </nav>
        <div class="footer__bottom">
          <p>© {{ year }} {{ profile.name }} · {{ profile.location }}</p>
          <a class="footer__top" href="#top">
            {{ t().ui.footer.backToTop }} <app-icon name="arrow-up" [size]="16" />
          </a>
        </div>
      </div>
    </footer>
  `,
  styles: `
    .footer {
      padding-block: var(--space-7) var(--space-6);
      border-top: 1px solid var(--color-border);
      font-size: var(--fs-small);
    }

    .footer__inner {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: var(--space-5);
    }

    .footer__name {
      font: 600 1.05rem/1.3 var(--font-display);
    }

    .footer__role {
      color: var(--color-text-subtle);
    }

    .footer__links {
      display: flex;
      flex-wrap: wrap;
      gap: var(--space-2) var(--space-5);

      a {
        color: var(--color-text-muted);
        text-decoration: none;

        &:hover {
          color: var(--color-text);
        }
      }
    }

    .footer__bottom {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      gap: var(--space-3);
      width: 100%;
      padding-top: var(--space-5);
      border-top: 1px solid var(--color-border);
      color: var(--color-text-subtle);
    }

    .footer__top {
      display: inline-flex;
      align-items: center;
      gap: var(--space-2);
      color: var(--color-text-muted);
      text-decoration: none;

      &:hover {
        color: var(--color-accent-strong);
      }
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
  protected readonly t = inject(Language).content;
  protected readonly year = new Date().getFullYear();
}
