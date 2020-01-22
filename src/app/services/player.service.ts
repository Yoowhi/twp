import {Injectable} from '@angular/core';
import {QueueService} from './queue.service';
import {Track} from '../types/helpers';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  track: Track;
  playing: boolean;

  constructor(private queueService: QueueService) {
  }

  playNext() {
    this.track = this.queueService.nextTrack();
  }
// TODO
  playPrevious() {
    this.track = this.queueService.previousTrack();
  }

  togglePlay() {
    this.playing = !this.playing;
    // TODO
  }
}
