import { LogMessageComponent } from './log-message/log-message.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SdaButtonComponent } from './sda-button/sda-button.component';
import { PeopleInSpaceComponent } from './people-in-space/people-in-space.component';
import { IssPositionComponent } from './iss-position/iss-position.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, SdaButtonComponent, LogMessageComponent, PeopleInSpaceComponent, IssPositionComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
