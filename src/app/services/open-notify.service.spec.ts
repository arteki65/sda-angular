import { TestBed } from '@angular/core/testing';

import { OpenNotifyService } from './open-notify.service';

describe('OpenNotifyService', () => {
  let service: OpenNotifyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenNotifyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
