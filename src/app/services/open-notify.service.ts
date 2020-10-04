import { UiService } from './ui.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IssPosition } from '../dto/iss-position';

@Injectable({
  providedIn: 'root',
})
export class OpenNotifyService {
  private baseApiUrl = 'http://api.open-notify.org';

  constructor(private httpClient: HttpClient) {}

  // TODO: replace any by PeopleInSpace
  getPeopleInSpace(): Observable<any> {
    return this.httpClient.get(`${this.baseApiUrl}/astros.json`);
  }

  getIssPosition(): Observable<IssPosition> {
    return this.httpClient.get<IssPosition>(`${this.baseApiUrl}/iss-now.json`);
  }
}
