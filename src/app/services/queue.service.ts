import {Injectable} from '@angular/core';
import {Playlist, Track} from '../types/helpers';
import {LibraryService} from './library.service';

@Injectable({
  providedIn: 'root'
})
export class QueueService {
  queue: Array<Track>;
  currentTrack: number;

  constructor(private libraryService: LibraryService) {
    this.applyDefaultQueue();
  }

  public applyDefaultQueue() {
    this.queue = this.libraryService.trackList.slice();
    this.currentTrack = 0;
  }

  public setQueue(trackList: Array<Track>) {
    this.queue = trackList.slice();
  }

  public addToQueue(trackList: Array<Track>) {
    this.queue = [...this.queue, ...trackList];
  }

  public removeFromQueue(trackList: Array<Track>) {
    trackList.forEach(value => this.queue.splice(this.queue.indexOf(value), 1));
  }

  public nextTrack(): Track {
    this.currentTrack = this.currentTrack + 1 >= this.queue.length ? 0 : this.currentTrack + 1;
    this.libraryService.carryTrack(this.queue[this.currentTrack]);
    return this.queue[this.currentTrack];
  }

  public previousTrack(): Track {
    this.currentTrack = this.currentTrack - 1 < this.queue.length ? this.queue.length : this.currentTrack - 1;
    this.libraryService.carryTrack(this.queue[this.currentTrack]);
    return this.queue[this.currentTrack];
  }
}
