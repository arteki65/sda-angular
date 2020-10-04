import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // <app-root></app-root>
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  title = 'Awesome sda app!!!';
  description = 'This is our first app in ';
  framework = 'angular';
  message: String;

  handleBtnClicked(message: String) {
    this.message = message;
  }
}
