import {Injectable} from '@angular/core';
import {Playlist, Source, Track} from '../types/helpers';
import {TorrentFile} from 'webtorrent';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  trackList: Array<Track>;
  playlists: Array<Playlist>;
  sourcePlaylists: Array<Playlist>;

  constructor() {
    this.trackList = new Array<Track>();
    this.playlists = new Array<Playlist>();
    this.sourcePlaylists = new Array<Playlist>();
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

  public addSource(source: Source) {
    const newTracks = this.makeTracks(source);
    this.sourcePlaylists.push({name: source.name, tracks: newTracks});
    newTracks.forEach(value => this.trackList.push(value));
  }

  public removeSource(source: Source) {
    this.trackList = this.trackList.filter((track) => !source.files.includes(track.file));
    this.sourcePlaylists = this.sourcePlaylists.filter(value => value.tracks[0].source.name !== source.name);
  }

  public carryTrack(track: Track) {
    // TODO Start download, increase priority, etc.
  }

  private makeTracks(newSource: Source) {
    const tracks = [];
    newSource.audioFiles.forEach(((value) => {
      tracks.push({
        name: value.name.substring(0, value.name.lastIndexOf('.')),
        file: value,
        source: newSource
      });
    }));
    return tracks;
  }
}
