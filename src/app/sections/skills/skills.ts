import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Language } from '../../i18n/language';
import { Reveal } from '../../shared/reveal.directive';

@Component({
  selector: 'app-skills',
  imports: [Reveal],
  template: `
    @let ui = t().ui.skills;
    <section id="competencias" class="section" aria-labelledby="skills-title">
      <div class="container">
        <header class="section-head" appReveal>
          <p class="eyebrow"><span class="eyebrow__index">05</span>{{ ui.eyebrow }}</p>
          <h2 id="skills-title" class="section-title">{{ ui.title }}</h2>
          <p class="section-lead">{{ ui.lead }}</p>
        </header>

        <div class="skills">
          @for (group of t().otherSkills; track group.label; let i = $index) {
            <section class="skill" appReveal [appRevealDelay]="(i % 3) * 70" [attr.aria-label]="group.label">
              <h3 class="skill__title">
                {{ group.label }}
                @if (group.note) {
                  <span class="skill__note">{{ group.note }}</span>
                }
              </h3>
              <ul class="skill__items">
                @for (item of group.items; track item) {
                  <li>{{ item }}</li>
                }
              </ul>
            </section>
          }
        </div>
      </div>
    </section>
  `,
  styleUrl: './skills.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Skills {
  protected readonly t = inject(Language).content;
}
