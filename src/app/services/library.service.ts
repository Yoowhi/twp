import {Injectable} from '@angular/core';
import {Playlist, Source, Track} from '../types/helpers';
import {TorrentFile} from 'webtorrent';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  trackList: Array<Track>;
  playlists: Array<Playlist>;

  constructor() {
    this.trackList = new Array<Track>();
    this.playlists = new Array<Playlist>();
  }

  public createPlaylist(playlistName: string, playlistTracks: Array<Track>) {
    this.playlists.push({ name: playlistName, tracks: playlistTracks, generated: false });
  }

  public removePlaylist(playlist: Playlist) {
    this.playlists.splice(this.playlists.indexOf(playlist), 1);
  }

  public addTracksToPlaylist(tracks: Array<Track>, playlist: Playlist) {
    for (const track of tracks) {
      if (playlist.tracks.indexOf(track) !== -1) {
        playlist.tracks.push(track);
      }
    }
  }

  public removeTrackFromPlaylist(track: Track, playlist: Playlist) {
    if (playlist.tracks.indexOf(track) !== -1) {
      playlist.tracks.splice(playlist.tracks.indexOf(track), 1);
    }
  }

  public addSource(source: Source) {
    const newTracks = this.makeTracks(source);
    this.playlists.push({ name: source.name, tracks: newTracks, generated: true });
    newTracks.forEach(value => this.trackList.push(value));
  }

  public removeSource(source: Source) {
    this.trackList = this.trackList.filter((track) => !source.files.includes(track.file));
    this.playlists = this.playlists.filter(value => !(value.generated === true && value.tracks[0].source.name === source.name));
  }

  public carryTrack(track: Track) {
    // TODO Start download, increase priority, etc.
  }

  public getCovers(playlist: Playlist) {
    let covers: Array<TorrentFile> = new Array<TorrentFile>();
    const sources: Array<Source> = new Array<Source>();
    for (const track of playlist.tracks) {
      if (!sources.includes(track.source)) {
        sources.push(track.source);
      }
    }
    for (const source of sources) {
      covers = [...covers, ...source.covers];
    }
    return covers;
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
