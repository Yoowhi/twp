import { Injectable } from '@angular/core';
import {Playlist, Track} from '../types/helpers';
import {TrackService} from './track.service';

@Injectable({
  providedIn: 'root'
})
export class QueueService {
  queue: Array<Track>;
  currentTrack: number;

  constructor(private trackService: TrackService) {

  }

  public setPlaylist(playlist: Playlist) {
    this.queue = playlist.tracks.slice(); // Duplicate
    this.currentTrack = -1; // |==>---
    this.nextTrack();
  }

  public addPlaylist(playlist: Playlist) {
    playlist.tracks.forEach(value => this.queue.push(value));
  }

  public addTrack(track: Track) {
    this.queue.push(track);
  }

  public removeTrack(track: Track) {
    // TODO
  }

  public nextTrack() {
    this.currentTrack = this.currentTrack + 1 >= this.queue.length ? 0 : this.currentTrack + 1;
    this.trackService.carryTrack(this.queue[this.currentTrack]);
    return this.queue[this.currentTrack];
  }

  public previousTrack() {
    this.trackService.carryTrack(this.queue[this.currentTrack]);
    return this.queue[this.currentTrack];
  }
}
