import {Torrent, TorrentFile} from 'webtorrent';

export type Playlist = {
  name: string,
  tracks: Array<Track>
};

export type Track = {
  name: string,
  file: TorrentFile
  source: Source
};

export interface Source extends Torrent {
  audioFiles: Array<TorrentFile>;
  covers: Array<TorrentFile>;
  audioSize: number;
  progressMultiplier: number;
}
