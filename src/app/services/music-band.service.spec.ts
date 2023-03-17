import { TestBed } from '@angular/core/testing';

import { MusicBandService } from './music-band.service';

describe('MusicBandService', () => {
  let service: MusicBandService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MusicBandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
