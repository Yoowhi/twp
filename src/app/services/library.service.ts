import {Injectable} from '@angular/core';
import {Track} from '../types/helpers';
import {TorrentFile} from 'webtorrent';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  trackList: Array<Track>;

  constructor() {
  }

  public addFiles(files: Array<TorrentFile>) {
    files.forEach(((value) => {
      this.trackList.push({
        name: value.name,
        file: value
      });
    }));
  }

  public removeFiles(files: Array<TorrentFile>) {
    this.trackList = this.trackList.filter((track) => !files.includes(track.file));
  }

  public carryTrack(track: Track) {
    // TODO Start download, increase priority, etc.
  }
}
