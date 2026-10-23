import 'reflect-metadata';
import { TestBed } from '@angular/core/testing';
import type { TextElement } from '@pixel-brewery/mosaik-elements-foundation';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { App } from './app';

// jsdom does not implement ClipboardEvent; Mosaik references its constructor in event metadata.
vi.hoisted(() => vi.stubGlobal('ClipboardEvent', Event));

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [App] }).compileComponents();
  });

  it('updates the displayed counter for successive button clicks', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const root: HTMLElement = fixture.nativeElement;
    const counter = root.querySelector<TextElement>('[data-testid="counter"]');
    const increment = root.querySelector<HTMLElement>('[data-testid="increment"]');
    if (!counter || !increment) {
      throw new Error('The counter and increment button must be rendered.');
    }
    expect(counter.text).toBe('0 clicks');

    increment.click();
    await fixture.whenStable();
    expect(counter.text).toBe('1 click');

    increment.click();
    await fixture.whenStable();
    expect(counter.text).toBe('2 clicks');
  });
});
