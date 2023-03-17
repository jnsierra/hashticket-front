import { TestBed } from '@angular/core/testing';

import { ConfigEventService } from './config-event.service';

describe('ConfigEventService', () => {
  let service: ConfigEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfigEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
