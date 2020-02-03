import {Injectable} from '@angular/core';
import {Playlist, Track} from '../types/helpers';
import {LibraryService} from './library.service';

@Injectable({
  providedIn: 'root'
})
export class QueueService {
  queue: Array<Track>;
  currentId: number;

  get nextId() {
    return this.currentId < this.queue.length - 1 ? this.currentId + 1 : 0;
  }

  get previousId() {
    return this.currentId > 0 ? this.currentId - 1 : this.queue.length - 1;
  }

  constructor(private libraryService: LibraryService) {
    this.queue = new Array<Track>();
    this.currentId = 0;
  }

  public setQueue(trackList: Array<Track>, startIndex) {
    this.queue = trackList.slice();
    this.currentId = startIndex;
    this.queue.forEach(value => this.libraryService.carryTrack(value));
  }

  public addToQueue(trackList: Array<Track>) {
    this.queue = [...this.queue, ...trackList];
    trackList.forEach(value => this.libraryService.carryTrack(value));
  }

  public removeFromQueue(trackList: Array<Track>) {
    trackList.forEach(value => {
      const indexToDel = this.queue.indexOf(value);
      if (indexToDel !== -1) {
        this.queue.splice(indexToDel, 1);
        if (indexToDel === this.currentId) {
          this.currentId = 0;
        }
      }
    });
  }

  public getNextTrack(): Track {
    this.currentId = this.nextId;
    return this.queue[this.currentId];
  }

  public getPreviousTrack(): Track {
    this.currentId = this.previousId;
    return this.queue[this.currentId];
  }
}
