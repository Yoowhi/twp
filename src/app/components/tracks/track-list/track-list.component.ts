import {Component, Input, OnInit} from '@angular/core';
import {Track} from '../../../types/helpers';
import {ActivatedRoute} from '@angular/router';
import {LibraryService} from '../../../services/library.service';

@Component({
  selector: 'app-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.scss']
})
export class TrackListComponent implements OnInit {
  @Input() trackList: Array<Track>;

  constructor() { }

  ngOnInit() {
  }

}