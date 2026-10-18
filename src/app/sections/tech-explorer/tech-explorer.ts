import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  computed,
  inject,
  signal,
  viewChildren,
} from '@angular/core';
import { Language } from '../../i18n/language';

/** Tabbed explorer of the Java ecosystem: each group lists its technologies and where they were used. */
@Component({
  selector: 'app-tech-explorer',
  templateUrl: './tech-explorer.html',
  styleUrl: './tech-explorer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TechExplorer {
  protected readonly t = inject(Language).content;
  protected readonly groups = computed(() => this.t().javaGroups);
  /** Group ids are the same in every language, so the selection survives a language switch. */
  protected readonly activeId = signal(this.groups()[0].id);
  protected readonly active = computed(
    () => this.groups().find((group) => group.id === this.activeId()) ?? this.groups()[0],
  );

  private readonly tabs = viewChildren<ElementRef<HTMLButtonElement>>('tab');

  /** WAI-ARIA tabs keyboard model: arrows move (and activate), Home/End jump to the ends. */
  protected onTabKeydown(event: KeyboardEvent, index: number): void {
    const groups = this.groups();
    const last = groups.length - 1;
    const keys: Record<string, number> = {
      ArrowDown: index === last ? 0 : index + 1,
      ArrowRight: index === last ? 0 : index + 1,
      ArrowUp: index === 0 ? last : index - 1,
      ArrowLeft: index === 0 ? last : index - 1,
      Home: 0,
      End: last,
    };
    const next = keys[event.key];
    if (next === undefined) {
      return;
    }
    event.preventDefault();
    this.activeId.set(groups[next].id);
    this.tabs()[next]?.nativeElement.focus();
  }
}
