import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';

/**
 * Attribute directive: selector [appClickTracker] plus extra @Input pulseColor
 * and @Output tracked. Property binding [appClickTracker] should go to the field,
 * not only to the selector literal.
 */
@Directive({
  selector: '[appClickTracker]',
})
export class ClickTrackerDirective {
  @Input() appClickTracker = 'host';
  @Input() pulseColor = 'gold';
  @Output() tracked = new EventEmitter<string>();

  @HostListener('click', ['$event.target'])
  onClick(target: EventTarget | null): void {
    const el = target instanceof HTMLElement ? target : null;
    if (el) {
      const previous = el.style.outline;
      el.style.outline = `3px solid ${this.pulseColor}`;
      setTimeout(() => (el.style.outline = previous), 350);
    }
    this.tracked.emit(this.appClickTracker);
  }
}
