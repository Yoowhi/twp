import {Injectable} from '@angular/core';
import {Torrent, TorrentFile} from 'webtorrent';
import * as WebTorrent from 'webtorrent';
import {LibraryService} from './library.service';
import {Source} from '../types/helpers';

@Injectable({
  providedIn: 'root'
})
export class FileManagerService {
  sources: Array<Source>;
  torrentClient: WebTorrent.Instance;
  audioExtensions = [
    '.mp3'
  ];
  imageExtensions = [
    '.png',
    '.jpg',
    '.jpeg'
  ];

  constructor(private libraryService: LibraryService) {
    this.torrentClient = new WebTorrent();
    this.sources = this.torrentClient.torrents as Array<Source>;
  }

  public addTorrent(magnetUri) {
    this.torrentClient.add(magnetUri, undefined, (torrent: Torrent) => {
      this.pauseTorrent(torrent);
      const source = this.makeSource(torrent);
      this.libraryService.addSource(source);
      console.log('Torrent ' + torrent.name + ' added');
    });
  }

  public removeTorrent(magnetUri) {
    const source = this.sources.find(value => value.magnetURI === magnetUri);
    if (source) {
      this.libraryService.removeSource(source);
      this.sources.splice(this.sources.indexOf(source), 1);
      this.torrentClient.remove(source);
      console.log('Torrent ' + source.name + ' removed');
    } else {
      console.log('Torrent does not exist');
    }
  }

  public startTorrent(torrent: Torrent) {
    torrent.select(0, torrent.pieces.length - 1, 0);
  }

  public  pauseTorrent(torrent: Torrent) {
    // file.deselect() doesn't work properly.
    // Using workaround from https://github.com/webtorrent/webtorrent/issues/164#issuecomment-248395202
    torrent.deselect(0, torrent.pieces.length - 1, 0);
    torrent.files.forEach(file => {
      file.deselect();
    });
  }

  private filterExtensions(files: Array<TorrentFile>, extensions: Array<string>) {
    const filesToAdd = new Array<TorrentFile>();
    for (const file of files) {
      for (const ext of extensions) {
        if (file.name.endsWith(ext)) {
          filesToAdd.push(file);
          break;
        }
      }
    }
    return filesToAdd;
  }

  private makeSource(torrent: Torrent): Source {
    const source: Source = torrent as Source;
    source.audioFiles = this.filterExtensions(torrent.files, this.audioExtensions);
    const images = this.filterExtensions(torrent.files, this.imageExtensions);
    if (images.length > 0) {
      source.covers = images;
    }
    let audioSize = 0;
    source.audioFiles.forEach(value => audioSize += value.length);
    source.audioSize = audioSize;
    source.progressMultiplier = 1 + ((torrent.length - audioSize) / torrent.length);
    return source;
  }
}
