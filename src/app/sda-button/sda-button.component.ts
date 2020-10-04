import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sda-button',
  templateUrl: './sda-button.component.html',
  styleUrls: ['./sda-button.component.less'],
})
export class SdaButtonComponent implements OnInit {
  @Output() btnClicked = new EventEmitter<String>();

  constructor() {}

  ngOnInit(): void {}

  clickHandler() {
    this.btnClicked.emit('Sda button was clicked!');
  }
}
