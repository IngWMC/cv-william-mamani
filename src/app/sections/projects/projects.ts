import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Language } from '../../i18n/language';
import { Reveal } from '../../shared/reveal.directive';

@Component({
  selector: 'app-projects',
  imports: [Reveal],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Projects {
  protected readonly t = inject(Language).content;
}
