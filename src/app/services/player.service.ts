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
  mediaElement: HTMLMediaElement;


  constructor(private queueService: QueueService) {
    this.audioContext = new AudioContext();
  }

  public playNext() {
    this.track = this.queueService.nextTrack();
    this.startAudio();
  }

  public playPrevious() {
    this.track = this.queueService.previousTrack();
    this.startAudio();
  }

  play() {
    if (this.queueService.queue.length > 0) {
      this.track = this.queueService.queue[this.queueService.currentTrack];
      if (this.track) {
        this.playing = true;
        this.startAudio();
        this.mediaElement.play();
      } else {
        console.log('Current track mistake');
      }
    } else {
      console.log('Queue is empty');
    }
  }

  public togglePlay() {
    if (this.track) {
      this.playing ? this.mediaElement.pause() : this.mediaElement.play();
      this.playing = !this.playing;
    } else {
      this.play();
    }
  }

  private startAudio() {
    this.track.file.renderTo(this.mediaElement, {
      controls: false
    }, (err, elem) => {
      const mediaSource = this.audioContext.createMediaElementSource(elem);
      mediaSource.connect(this.audioContext.destination);
      elem.onended = () => {
        mediaSource.disconnect();
      };
    });
  }
}
