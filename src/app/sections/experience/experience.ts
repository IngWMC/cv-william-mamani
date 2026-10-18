import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Language } from '../../i18n/language';
import { Reveal } from '../../shared/reveal.directive';

@Component({
  selector: 'app-experience',
  imports: [Reveal],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Experience {
  protected readonly t = inject(Language).content;
}
