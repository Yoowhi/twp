import { Injectable } from '@angular/core';
import {Playlist, Track} from '../types/helpers';
import {LibraryService} from './library.service';
import {QueueService} from './queue.service';
import {PlayerService} from './player.service';

@Injectable({
  providedIn: 'root'
})
export class TracklistService {
  trackList: Array<Track>;
  trackChecks: Array<boolean>;

  get checkedTracks() {
    return this.trackList.filter((value, index) => this.trackChecks[index]);
  }

  constructor(private libraryService: LibraryService,
              private queueService: QueueService,
              private playerService: PlayerService) { }

  public init(trackList: Array<Track>) {
    this.trackList = trackList;
    this.trackChecks = new Array<boolean>();
    this.trackList.forEach(value => this.trackChecks.push(false));
  }

  public playTrackList(startIndex: number = 0) {
    this.queueService.setQueue(this.checkedTracks, startIndex);
    this.playerService.togglePlay();
    this.init(this.trackList);
  }

  public addToQueue() {
    this.queueService.addToQueue(this.checkedTracks);
    this.init(this.trackList);
  }

  public addToPlaylist(playlist: Playlist) {
    this.libraryService.addTracksToPlaylist(this.checkedTracks, playlist);
    this.init(this.trackList);
  }

  public createPlaylist(name: string) {
    this.libraryService.createPlaylist(name, this.checkedTracks);
    this.init(this.trackList);
  }

  public removeTracks() {
    for (let i = 0; i < this.trackChecks.length; i++) {
      if (this.trackChecks[i]) {
        this.trackList.splice(i, 1);
      }
    }
    this.init(this.trackList);
  }


}
