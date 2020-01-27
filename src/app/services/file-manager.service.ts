import {Injectable} from '@angular/core';
import {Torrent, TorrentFile} from 'webtorrent';
import * as WebTorrent from 'webtorrent';
import {LibraryService} from './library.service';

@Injectable({
  providedIn: 'root'
})
export class FileManagerService {
  torrentClient: WebTorrent.Instance;
  allowedExtensions = [
    '.mp3'
  ];

  constructor(private libraryService: LibraryService) {
    this.torrentClient = new WebTorrent();
  }

  public addTorrent(magnetUri) {
    this.torrentClient.add(magnetUri, undefined, (torrent: Torrent) => {
      // file.deselect() doesn't work properly.
      // Using workaround from https://github.com/webtorrent/webtorrent/issues/164#issuecomment-248395202
      torrent.deselect(0, torrent.pieces.length - 1, 0);
      torrent.files.forEach(file => {
        file.deselect();
      });
      const filesToAdd: Array<TorrentFile> = this.filterExtensions(torrent.files);
      this.libraryService.addFiles(filesToAdd);
      console.log('added');
    });
  }

  public removeTorrent(magnetUri) {
    const torrent = this.torrentClient.get(magnetUri);
    if (torrent) {
      const filesToRemove = this.filterExtensions(torrent.files);
      this.libraryService.removeFiles(filesToRemove);
      this.torrentClient.remove(torrent);
    }
  }

  private filterExtensions(files: Array<TorrentFile>) {
    const filesToAdd = new Array<TorrentFile>();
    for (const file of files) {
      for (const ext of this.allowedExtensions) {
        if (file.name.endsWith(ext)) {
          filesToAdd.push(file);
          break;
        }
      }
    }
    return filesToAdd;
  }
}
