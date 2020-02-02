import { Component, OnInit } from '@angular/core';
import {PlayerService} from '../../../services/player.service';

@Component({
  selector: 'app-player-panel',
  templateUrl: './player-panel.component.html',
  styleUrls: ['./player-panel.component.scss']
})
export class PlayerPanelComponent implements OnInit {

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
