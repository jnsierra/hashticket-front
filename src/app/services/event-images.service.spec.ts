import { TestBed } from '@angular/core/testing';

import { EventImagesService } from './event-images.service';

describe('EventImagesService', () => {
  let service: EventImagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventImagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
