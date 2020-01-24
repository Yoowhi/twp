import { TestBed } from '@angular/core/testing';

import { LibraryService } from './library.service';

describe('TrackService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LibraryService = TestBed.get(LibraryService);
    expect(service).toBeTruthy();
  });
});
