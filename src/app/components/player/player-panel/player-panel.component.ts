import { Component, OnInit } from '@angular/core';
import {PlayerService} from '../../../services/player.service';

@Component({
  selector: 'app-player-panel',
  templateUrl: './player-panel.component.html',
  styleUrls: ['./player-panel.component.scss']
})
export class PlayerPanelComponent implements OnInit {
  get buffer() {
    if (this.playerService.currentTrack) {
      const file = this.playerService.currentTrack.file;
      return file.downloaded / file.length * 100;
    }
    return 0;
  }

  get time() {
    const media = this.playerService.mediaElement;
    if (media.duration === 0) {
      return 0;
    }
    return media.currentTime / media.duration * 100;
  }

  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.playerService.mediaElement = document.getElementById('audiotag') as HTMLMediaElement;
  }

  playNext() {
    this.playerService.playNext();
  }

  playPrevious() {
    this.playerService.playPrevious();
  }

  togglePlay() {
    this.playerService.togglePlay();
  }
}
