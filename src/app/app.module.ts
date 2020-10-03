import { LogMessageComponent } from './log-message/log-message.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SdaButtonComponent } from './sda-button/sda-button.component';

@NgModule({
  declarations: [AppComponent, SdaButtonComponent, LogMessageComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
