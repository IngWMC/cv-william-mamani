import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Language } from './i18n/language';
import { Architecture } from './sections/architecture/architecture';
import { Contact } from './sections/contact/contact';
import { Education } from './sections/education/education';
import { Experience } from './sections/experience/experience';
import { Footer } from './sections/footer/footer';
import { Header } from './sections/header/header';
import { Hero } from './sections/hero/hero';
import { JavaEcosystem } from './sections/java-ecosystem/java-ecosystem';
import { Projects } from './sections/projects/projects';
import { Skills } from './sections/skills/skills';

@Component({
  selector: 'app-root',
  imports: [
    Header,
    Hero,
    JavaEcosystem,
    Experience,
    Projects,
    Architecture,
    Skills,
    Education,
    Contact,
    Footer,
  ],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  protected readonly t = inject(Language).content;
}
