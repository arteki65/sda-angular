import { PeopleInSpace } from './../dto/people-in-space';
import { Component, OnInit } from '@angular/core';
import { UiService } from './../services/ui.service';
import { OpenNotifyService } from './../services/open-notify.service';

@Component({
  selector: 'app-people-in-space',
  templateUrl: './people-in-space.component.html',
  styleUrls: ['./people-in-space.component.less'],
})
export class PeopleInSpaceComponent implements OnInit {
  // TODO: inject openNotifyService
  peopleInSpace: PeopleInSpace;

  constructor(
    private openNotifyService: OpenNotifyService,
    private uiService: UiService
  ) {}

  // TODO: call getPeopleInSpace from service and handle response
  ngOnInit(): void {
    this.uiService.isLoading.next(true);
    this.openNotifyService
      .getPeopleInSpace()
      .subscribe((peopleInSpace) => this.handleResponse(peopleInSpace));

    this.uiService.isLoading.next(false);
  }

  private handleResponse(peopleInSpace: PeopleInSpace) {
    console.log('peopleInSpace', peopleInSpace);
    console.log('this', this);
    this.peopleInSpace = peopleInSpace;
  }
}

// #############
// ngOnInit(): void {
//   this.uiService.isLoading.next(true);
//   this.openNotifyService.getIssPosition().subscribe((issPosition) => {
//     setTimeout(() => {
//       this.uiService.isLoading.next(false);
//       this.issPosition = issPosition;
//       this.timeout = setInterval(
//         () => IssPositionComponent.refreshIssPosition(this),
//         this.uiService.autoRefreshSeconds * 1000
//       );
//     }, 500);
//   });
// }
