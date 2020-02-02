import {Component, Input, OnInit} from '@angular/core';
import {Track} from '../../../types/helpers';
import {ActivatedRoute} from '@angular/router';
import {LibraryService} from '../../../services/library.service';
import {TracklistService} from '../../../services/tracklist.service';

@Component({
  selector: 'app-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.scss']
})
export class TrackListComponent implements OnInit {
  @Input() trackList: Array<Track>;
  trackChecks: Array<boolean>;

  constructor(private tracklistService: TracklistService) { }

  ngOnInit() {
    this.tracklistService.init(this.trackList);
    this.trackChecks = this.tracklistService.trackChecks;
  }

  playFromId(id: number) {
    this.tracklistService.playTrackList(id);
  }
}
