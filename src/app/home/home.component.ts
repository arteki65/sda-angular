import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
})
export class HomeComponent implements OnInit {
  title = 'Awesome sda app!!!';
  description = 'This is our first app in ';
  framework = 'angular';

  constructor() {}

  ngOnInit(): void {}
}
