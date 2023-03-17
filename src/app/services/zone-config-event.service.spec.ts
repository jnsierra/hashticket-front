import { TestBed } from '@angular/core/testing';

import { ZoneConfigEventService } from './zone-config-event.service';

describe('ZoneConfigEventService', () => {
  let service: ZoneConfigEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZoneConfigEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
