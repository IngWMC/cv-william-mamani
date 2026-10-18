import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Language } from '../../i18n/language';
import { Icon } from '../../shared/icon';
import { Ripple } from '../../shared/ripple.directive';
import { HeroVisual } from '../hero-visual/hero-visual';

@Component({
  selector: 'app-hero',
  imports: [HeroVisual, Icon, Ripple],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {
  protected readonly t = inject(Language).content;
}
