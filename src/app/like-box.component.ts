import { Component, EventEmitter, Input, Output } from '@angular/core';

/**
 * Standalone component with classic @Input / @Output.
 * Ctrl+Click [title] / [caption] / (liked) in the parent template should land here.
 */
@Component({
  selector: 'app-like-box',
  templateUrl: './like-box.component.html',
  styleUrl: './like-box.component.css',
})
export class LikeBoxComponent {
  @Input() title = 'Give it a like';

  /** HTML name is `caption`, field name is `label`. */
  @Input('caption') label = '';

  @Output() liked = new EventEmitter<number>();

  count = 0;

  onLike(): void {
    this.count += 1;
    this.liked.emit(this.count);
  }
}
