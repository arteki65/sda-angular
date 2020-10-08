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
    setTimeout(() => this.isLoading.next(true), 0);
  }

  hideLoadingIndicator() {
    setTimeout(() => this.isLoading.next(false), 0);
  }
}
