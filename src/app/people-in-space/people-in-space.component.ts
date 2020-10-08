import { Component, OnInit } from '@angular/core';
import { PeopleInSpace } from '../dto/people-in-space';
import { OpenNotifyService } from '../services/open-notify.service';

@Component({
  selector: 'app-people-in-space',
  templateUrl: './people-in-space.component.html',
  styleUrls: ['./people-in-space.component.less'],
})
export class PeopleInSpaceComponent implements OnInit {
 
  peopleInSpace: PeopleInSpace;
  


  // TODO: inject openNotifyService
  constructor(private openNotifyService: OpenNotifyService) {}

  // TODO: call getPeopleInSpace from service and handle response
  ngOnInit(): void {

    this.openNotifyService.getPeopleInSpace().subscribe((peoples) => this.peopleInSpace = peoples);
  
  }
}
