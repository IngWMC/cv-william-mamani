import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Language } from '../../i18n/language';
import { Icon } from '../../shared/icon';
import { Reveal } from '../../shared/reveal.directive';

@Component({
  selector: 'app-education',
  imports: [Icon, Reveal],
  template: `
    @let ui = t().ui.education;
    <section id="formacion" class="section" aria-labelledby="education-title">
      <div class="container">
        <header class="section-head" appReveal>
          <p class="eyebrow"><span class="eyebrow__index">06</span>{{ ui.eyebrow }}</p>
          <h2 id="education-title" class="section-title">{{ ui.title }}</h2>
        </header>

        <div class="edu">
          <div class="edu__col" appReveal>
            <h3 class="edu__heading"><app-icon name="graduation" />{{ ui.studiesTitle }}</h3>
            <ul class="edu__list">
              @for (study of t().studies; track study.institution) {
                <li class="edu__item">
                  <p class="edu__title">{{ study.program }}</p>
                  <p class="edu__meta">
                    {{ study.institution }}
                    @if (study.period) {
                      <span class="edu__period">{{ study.period }}</span>
                    }
                  </p>
                </li>
              }
            </ul>
          </div>

          <div class="edu__col" appReveal [appRevealDelay]="100">
            <h3 class="edu__heading"><app-icon name="award" />{{ ui.certsTitle }}</h3>
            <ul class="edu__list">
              @for (cert of t().certifications; track cert.title) {
                <li class="edu__item">
                  <p class="edu__title">{{ cert.title }}</p>
                  <p class="edu__meta">{{ cert.detail }}</p>
                </li>
              }
            </ul>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrl: './education.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Education {
  protected readonly t = inject(Language).content;
}
