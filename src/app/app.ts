import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { ButtonComponent } from '@pixel-brewery/mosaik-elements-angular/components/button';
import { IconComponent } from '@pixel-brewery/mosaik-elements-angular/components/icon';
import { PulseComponent } from '@pixel-brewery/mosaik-elements-angular/components/pulse';
import { StackComponent } from '@pixel-brewery/mosaik-elements-angular/components/stack';
import { TextComponent } from '@pixel-brewery/mosaik-elements-angular/components/text';

/** The starter's application-owned counter and Mosaik composition. */
@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ButtonComponent, IconComponent, PulseComponent, StackComponent, TextComponent],
  templateUrl: './app.html',
})
export class App {
  // #region Fields

  protected readonly clicks = signal(0);
  protected readonly counterText = computed(
    () => `${this.clicks()} ${this.clicks() === 1 ? 'click' : 'clicks'}`,
  );

  // #endregion

  // #region Methods

  /** Increment application state through an ordinary Angular event binding. */
  protected increment(): void {
    this.clicks.update((clicks) => clicks + 1);
  }

  // #endregion
}
