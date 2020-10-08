import { UiService } from './../services/ui.service';
import { OpenNotifyService } from './../services/open-notify.service';
import {
  AfterContentChecked,
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { IssPosition } from '../dto/iss-position';

@Component({
  selector: 'app-iss-position',
  templateUrl: './iss-position.component.html',
  styleUrls: ['./iss-position.component.less'],
})
export class IssPositionComponent implements OnInit, OnDestroy {
  issPosition: IssPosition;
  private timeout: any;

  constructor(
    private openNotifyService: OpenNotifyService,
    private uiService: UiService
  ) {}

  ngOnInit(): void {
    this.uiService.showLoadingIndicator();
    this.openNotifyService.getIssPosition().subscribe((issPosition) => {
      this.uiService.hideLoadingIndicator();
      this.issPosition = issPosition;
      this.timeout = setInterval(
        () => IssPositionComponent.refreshIssPosition(this),
        this.uiService.autoRefreshSeconds * 1000
      );
    });
  }

  ngOnDestroy(): void {
    clearInterval(this.timeout);
  }

  private static refreshIssPosition(component: IssPositionComponent) {
    component.openNotifyService
      .getIssPosition()
      .subscribe((issPosition) => (component.issPosition = issPosition));
  }
}
