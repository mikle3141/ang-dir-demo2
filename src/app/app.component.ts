import { Component } from '@angular/core';
import { ClickTrackerDirective } from './click-tracker.directive';
import { LikeBoxComponent } from './like-box.component';
import { SizeBadgeDirective } from './size-badge.directive';

@Component({
  selector: 'app-root',
  imports: [LikeBoxComponent, ClickTrackerDirective, SizeBadgeDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  heading = 'Input / Output demo';
  likeLog = 'No likes yet';
  trackLog = 'Click a tracked host';
  sizeLog = 'Double-click the badge to cycle size';

  onLiked(count: number): void {
    this.likeLog = `Liked ${count} time(s)`;
  }

  onTracked(id: string): void {
    this.trackLog = `tracked emitted "${id}"`;
  }

  onResized(size: string): void {
    this.sizeLog = `hostSize is now ${size}`;
  }
}
