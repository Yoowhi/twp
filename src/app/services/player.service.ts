import {Injectable} from '@angular/core';
import {QueueService} from './queue.service';
import {Track} from '../types/helpers';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  currentTrack: Track;
  nextTrack: Track;
  previousTrack: Track;

  playing: boolean;
  audioContext: AudioContext;
  mediaElement: HTMLMediaElement;
  mediaSource: MediaElementAudioSourceNode;


  constructor(private queueService: QueueService) {
    this.audioContext = new AudioContext();
  }

  public playNext() {
    this.currentTrack = this.queueService.getNextTrack();
    this.play();
  }

  public playPrevious() {
    this.currentTrack = this.queueService.getPreviousTrack();
    this.play();
  }

  public play() {
    if (this.queueService.queue.length > 0) {
      this.currentTrack = this.queueService.queue[this.queueService.currentId];
      if (this.currentTrack) {
        this.playing = true;
        this.startAudio();
        this.mediaElement.play();
        this.updateTracks();
      } else {
        console.log('Current track mistake');
      }
    } else {
      console.log('Queue is empty');
    }
  }

  public stop() {
    this.playing = false;
    this.currentTrack = null;
    this.mediaElement.pause();
    this.mediaSource.disconnect();
    console.log('Playing stopped');
  }

  public togglePlay() {
    this.playing ? this.mediaElement.pause() : this.mediaElement.play();
    this.playing = !this.playing;
  }

  private startAudio() {
    this.currentTrack.file.renderTo(this.mediaElement, {
      controls: false
    }, (err, elem) => {
      this.mediaSource = this.audioContext.createMediaElementSource(elem);
      this.mediaSource.connect(this.audioContext.destination);
      elem.onended = () => {
        this.mediaSource.disconnect();
        this.playNext();
      };
      elem.onerror = () => stop();
    });
  }

  private updateTracks() {
    this.nextTrack = this.queueService.queue[this.queueService.nextId];
    this.previousTrack = this.queueService.queue[this.queueService.previousId];
  }
}
