import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from '../services/ui.service';

@Component({
  selector: 'app-loading-indicator',
  templateUrl: './loading-indicator.component.html',
  styleUrls: ['./loading-indicator.component.less'],
})
export class LoadingIndicatorComponent implements OnInit, OnDestroy {
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
