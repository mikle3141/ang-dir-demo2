import { Directive, EventEmitter, HostBinding, HostListener } from '@angular/core';

/**
 * Bindings declared in decorator metadata rather than @Input / @Output:
 *   inputs: ['size: hostSize']  → class field `size`, HTML [hostSize]
 *   outputs: ['resized']        → HTML (resized)
 */
@Directive({
  selector: '[appSizeBadge]',
  inputs: ['size: hostSize'],
  outputs: ['resized'],
})
export class SizeBadgeDirective {
  size: 'sm' | 'md' | 'lg' = 'md';
  resized = new EventEmitter<string>();

  @HostBinding('style.font-size')
  get fontSize(): string {
    switch (this.size) {
      case 'sm':
        return '0.85rem';
      case 'lg':
        return '1.35rem';
      default:
        return '1rem';
    }
  }

  @HostListener('dblclick')
  cycle(): void {
    this.size = this.size === 'sm' ? 'md' : this.size === 'md' ? 'lg' : 'sm';
    this.resized.emit(this.size);
  }
}
