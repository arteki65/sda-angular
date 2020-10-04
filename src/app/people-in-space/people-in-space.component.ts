import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people-in-space',
  templateUrl: './people-in-space.component.html',
  styleUrls: ['./people-in-space.component.less'],
})
export class PeopleInSpaceComponent implements OnInit {
  // TODO: inject openNotifyService
  constructor() {}

  // TODO: call getPeopleInSpace from service and handle response
  ngOnInit(): void {}
}
