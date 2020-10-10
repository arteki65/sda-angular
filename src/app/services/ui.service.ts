import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UiService {
  autoRefreshSeconds = 1;
  isLoading = new Subject<boolean>();

  constructor() {}

  showLoadingIndicator() {
    this.isLoading.next(true);
  }

  hideLoadingIndicator() {
    this.isLoading.next(false);
  }
}
