import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeopleInSpaceComponent } from './people-in-space/people-in-space.component';
import { IssPositionComponent } from './iss-position/iss-position.component';
import { HomeComponent } from './home/home.component';
import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator.component';
import { AgmCoreModule } from '@agm/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PeopleInSpaceComponent,
    IssPositionComponent,
    HomeComponent,
    LoadingIndicatorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: '',
    }),
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
