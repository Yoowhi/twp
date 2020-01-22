import {TorrentFile} from 'webtorrent';

export type Playlist = {
  name: string,
  tracks: Array<Track>
};

export type Track = {
  name: string,
  file: TorrentFile
};
