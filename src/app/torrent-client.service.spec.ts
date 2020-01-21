import { TestBed } from '@angular/core/testing';

import { TorrentClientService } from './torrent-client.service';

describe('TorrentClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TorrentClientService = TestBed.get(TorrentClientService);
    expect(service).toBeTruthy();
  });
});
