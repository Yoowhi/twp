import { TestBed } from '@angular/core/testing';

import { TracklistService } from './tracklist.service';

describe('TracklistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TracklistService = TestBed.get(TracklistService);
    expect(service).toBeTruthy();
  });
});
