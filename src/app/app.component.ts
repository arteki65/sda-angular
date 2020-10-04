import { UiService } from './services/ui.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root', // <app-root></app-root>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements OnInit, OnDestroy {
  isLoading = false;
  private subscription: Subscription;

  constructor(private uiService: UiService) {}

  ngOnInit(): void {
    this.subscription = this.uiService.isLoading.subscribe(
      (isLoading) => (this.isLoading = isLoading)
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
