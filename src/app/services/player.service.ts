import { Injectable } from '@angular/core';
import {QueueService} from './queue.service';
import {Track} from '../types/helpers';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  track: Track;

  constructor(private queueService: QueueService) { }

  playNext() {
    this.track = this.queueService.nextTrack();
  }

  playPrevious() {
    this.track = this.queueService.previousTrack();
  }

  togglePlay() {
    // TODO
  }
}
