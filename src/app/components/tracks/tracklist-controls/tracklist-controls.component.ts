import {Component, Input, OnInit} from '@angular/core';
import {TracklistService} from '../../../services/tracklist.service';

@Component({
  selector: 'app-tracklist-controls',
  templateUrl: './tracklist-controls.component.html',
  styleUrls: ['./tracklist-controls.component.scss']
})
export class TracklistControlsComponent implements OnInit {
  @Input() editable: boolean;
  @Input() iconsOnly: boolean;

  constructor(private tracklistService: TracklistService) { }

  ngOnInit() {
  }

  playTrackList() {
    this.tracklistService.playTrackList();
  }

  addToQueue() {
    this.tracklistService.addToQueue();
  }

  addToPlaylist() {
    // TODO this.tracklistService.addToPlaylist();
  }

  createPlaylist() {
    // TODO this.tracklistService.createPlaylist();
  }

  removeTracks() {
    this.tracklistService.removeTracks();
  }

}
