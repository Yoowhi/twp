import { Component, OnInit } from '@angular/core';
import {LibraryService} from '../../../services/library.service';
import {Playlist} from '../../../types/helpers';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.scss']
})
export class PlaylistsComponent implements OnInit {
  sourcePlaylists: Array<Playlist>;

  constructor(private libraryService: LibraryService) {
    this.sourcePlaylists = libraryService.sourcePlaylists;
  }

  ngOnInit() {
  }

}
