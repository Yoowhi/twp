import {Injectable} from '@angular/core';
import {Playlist, Track} from '../types/helpers';
import {TorrentFile} from 'webtorrent';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  trackList: Array<Track>;
  playlists: Array<Playlist>;

  constructor() {
    this.trackList = new Array<Track>();
  }

  public addPlaylist(playlistName: string, playlistTracks: Array<Track>) {
    this.playlists.push({ name: playlistName, tracks: playlistTracks });
  }

  public removePlaylist(playlist: Playlist) {
    this.playlists.splice(this.playlists.indexOf(playlist), 1);
  }

  public addTrackToPlaylist(track: Track, playlist: Playlist) {
    if (playlist.tracks.indexOf(track) !== -1) {
      playlist.tracks.push(track);
    }
  }

  public removeTrackFromPlaylist(track: Track, playlist: Playlist) {
    if (playlist.tracks.indexOf(track) !== -1) {
      playlist.tracks.splice(playlist.tracks.indexOf(track), 1);
    }
  }

  public addFiles(files: Array<TorrentFile>) {
    files.forEach(((value) => {
      this.trackList.push({
        name: value.name.substring(0, value.name.lastIndexOf('.')),
        file: value
      });
    }));
  }

  public removeFiles(files: Array<TorrentFile>) {
    this.trackList = this.trackList.filter((track) => !files.includes(track.file));
  }

  public carryTrack(track: Track) {
    // TODO Start download, increase priority, etc.
  }
}
