import { UiService } from './ui.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IssPosition } from '../dto/iss-position';
import { PeopleInSpace } from '../dto/people-in-space';

@Injectable({
  providedIn: 'root',
})
export class OpenNotifyService {
  private baseApiUrl = 'http://api.open-notify.org';

  constructor(private httpClient: HttpClient) {}

  // TODO: replace any by PeopleInSpace
  getPeopleInSpace(): Observable<PeopleInSpace> {
    return this.httpClient.get<PeopleInSpace>(`${this.baseApiUrl}/astros.json`);
  }

  getIssPosition(): Observable<IssPosition> {
    return this.httpClient.get<IssPosition>(`${this.baseApiUrl}/iss-now.json`);
  }
}
