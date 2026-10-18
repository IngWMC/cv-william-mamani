import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Language } from '../../i18n/language';
import { Reveal } from '../../shared/reveal.directive';
import { TechExplorer } from '../tech-explorer/tech-explorer';

@Component({
  selector: 'app-java-ecosystem',
  imports: [Reveal, TechExplorer],
  templateUrl: './java-ecosystem.html',
  styleUrl: './java-ecosystem.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JavaEcosystem {
  protected readonly t = inject(Language).content;
}
