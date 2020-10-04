import { HomeComponent } from './home/home.component';
import { IssPositionComponent } from './iss-position/iss-position.component';
import { PeopleInSpaceComponent } from './people-in-space/people-in-space.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'peopleInSpace',
    component: PeopleInSpaceComponent,
  },
  {
    path: 'issPosition',
    component: IssPositionComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
