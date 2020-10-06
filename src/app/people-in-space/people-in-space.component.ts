import { Component, OnInit } from '@angular/core';
import { OpenNotifyService } from '../services/open-notify.service';
import { UiService } from '../services/ui.service';
import { PeopleInSpace } from '../dto/people-in-space';
@Component({
  selector: 'app-people-in-space',
  templateUrl: './people-in-space.component.html',
  styleUrls: ['./people-in-space.component.less'],
})
export class PeopleInSpaceComponent implements OnInit {
  peopleInspace: PeopleInSpace;
  // TODO: inject openNotifyService
  constructor(
    private openNotifyService: OpenNotifyService,
    private uiService: UiService
  ) {}

  // TODO: call getPeopleInSpace from service and handle response
  ngOnInit(): void {
    this.uiService.isLoading.next(true);
   this.openNotifyService.getPeopleInSpace().subscribe((peopleInspace) =>{
    
    this.peopleInspace= peopleInspace;
    

   }



   );

  }

  // ngOnInit(): void {
  //   this.uiService.isLoading.next(true);
  //   this.openNotifyService.getIssPosition().subscribe((issPosition) => {
     
  //       this.uiService.isLoading
  //       this.issPosition = issPosition;
  //       this.timeout = setInterval(
  //         () => IssPositionComponent.refreshIssPosition(this),
  //         this.uiService.autoRefreshSeconds * 1000
  //       );
     
  //   });
  // }




}
