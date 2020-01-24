import {Injectable} from '@angular/core';
import {QueueService} from './queue.service';
import {Track} from '../types/helpers';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  track: Track;
  playing: boolean;
  audioContext: AudioContext;
  tagID;
  mediaElement: HTMLMediaElement;


  constructor(private queueService: QueueService) {
    this.audioContext = new AudioContext();
  }

  playNext() {
    this.track = this.queueService.nextTrack();
    this.startAudio();
  }

  playPrevious() {
    this.track = this.queueService.previousTrack();
    this.startAudio();
  }

  togglePlay() {
    this.playing ? this.mediaElement.pause() : this.mediaElement.play();
    this.playing = !this.playing;
  }

  private startAudio() {
    this.track.file.appendTo(this.tagID, {
      controls: false
    }, (err, elem) => {
      const mediaSource = this.audioContext.createMediaElementSource(elem);
      mediaSource.connect(this.audioContext.destination);
      elem.onended = () => {
        this.playNext(); // Is this a recursion?
      };
      this.mediaElement = elem;
    });
  }
}
