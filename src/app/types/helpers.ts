import {Torrent, TorrentFile} from 'webtorrent';

export type Playlist = {
  name: string,
  tracks: Array<Track>
};

export type Track = {
  name: string,
  file: TorrentFile
};

export interface Source extends Torrent {
  audioFiles: Array<TorrentFile>;
  cover: TorrentFile;
  audioSize: number;
  progressMultiplier: number;
}
