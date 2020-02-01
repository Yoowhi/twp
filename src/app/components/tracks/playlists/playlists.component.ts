import {Component, OnInit} from '@angular/core';
import {LibraryService} from '../../../services/library.service';
import {Playlist} from '../../../types/helpers';
import {Router} from '@angular/router';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.scss']
})
export class PlaylistsComponent implements OnInit {
  playlists: Array<Playlist>;

  constructor(private libraryService: LibraryService,
              private router: Router) {
    this.playlists = libraryService.playlists;
  }

  ngOnInit() {
  }

  hasUserPlaylists() {
    return this.playlists.find(value => !value.generated);
  }

  hasAutoPlaylists() {
    return this.playlists.find(value => value.generated);
  }

  getCovers(playlist: Playlist) {
    return this.libraryService.getCovers(playlist);
  }

  openPlaylist(i) {
    this.router.navigate(['tracks', 'playlist', i]);
  }
}
