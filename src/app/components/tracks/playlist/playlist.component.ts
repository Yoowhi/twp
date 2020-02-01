import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LibraryService} from '../../../services/library.service';
import {Playlist} from '../../../types/helpers';

@Component({
  selector: 'app-playlist',
  templateUrl: './playlist.component.html',
  styleUrls: ['./playlist.component.scss']
})
export class PlaylistComponent implements OnInit {
  playlist: Playlist;

  constructor(private route: ActivatedRoute,
              private libraryService: LibraryService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.playlist = this.libraryService.playlists[params.get('playlistId')];
    });
  }
}
