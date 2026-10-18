import { UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { LayerId } from '../../data/cv.model';
import { Language } from '../../i18n/language';
import { Reveal } from '../../shared/reveal.directive';

interface AdapterNode {
  label: string;
  /** Where the dashed link leaves the domain hexagon. */
  x1: number;
  y1: number;
  x: number;
  y: number;
  inbound: boolean;
}

const CENTER = 240;

/** Points of a pointy-top hexagon of the given radius, centred in the 480×480 viewBox. */
function hexagon(radius: number): string {
  return Array.from({ length: 6 }, (_, i) => {
    const angle = (Math.PI / 180) * (60 * i - 90);
    return `${(CENTER + radius * Math.cos(angle)).toFixed(1)},${(CENTER + radius * Math.sin(angle)).toFixed(1)}`;
  }).join(' ');
}

/** Places a node on the adapters ring at the given angle (degrees, 0 = right). */
function node(label: string, degrees: number, inbound: boolean): AdapterNode {
  const angle = (Math.PI / 180) * degrees;
  return {
    label,
    x1: CENTER + 74 * Math.cos(angle),
    y1: CENTER + 74 * Math.sin(angle),
    x: CENTER + 163 * Math.cos(angle),
    y: CENTER + 163 * Math.sin(angle),
    inbound,
  };
}

@Component({
  selector: 'app-architecture',
  imports: [Reveal, UpperCasePipe],
  templateUrl: './architecture.html',
  styleUrl: './architecture.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Architecture {
  protected readonly t = inject(Language).content;

  /** Hexagon radius per layer; texts come from the active language. */
  private readonly radius: Record<LayerId, number> = { adapters: 220, ports: 150, domain: 82 };

  protected readonly layers = computed(() =>
    this.t().layers.map((layer) => ({ ...layer, points: hexagon(this.radius[layer.id]) })),
  );

  protected readonly nodes: AdapterNode[] = [
    node('REST', 180, true),
    node('Kafka', 240, true),
    node('Event Hub', 120, true),
    node('Cosmos DB', 300, false),
    node('MongoDB', 0, false),
    node('Redis', 60, false),
  ];

  protected readonly activeId = signal<LayerId>('domain');
  protected readonly active = computed(
    () => this.layers().find((layer) => layer.id === this.activeId()) ?? this.layers()[2],
  );
}
