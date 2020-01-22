import { Injectable } from '@angular/core';
import {Track} from '../types/helpers';
import {TorrentFile} from 'webtorrent';

@Injectable({
  providedIn: 'root'
})
export class TrackService {
  trackList: Array<Track>;

  constructor() { }

  public addTracks(files: Array<TorrentFile>) {
    files.forEach(((value) => {
      this.trackList.push({
        name: value.name,
        file: value
      });
    }));
  }

  public removeTracks(files: Array<TorrentFile>) {
    this.trackList = this.trackList.filter((track) => !files.includes(track.file));
  }

  public carryTrack(track: Track) {
    // TODO Start download, increase priority, etc.
  }
}
