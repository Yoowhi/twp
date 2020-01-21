import { Injectable } from '@angular/core';
import * as WebTorrent from 'webtorrent';

@Injectable({
  providedIn: 'root'
})
export class TorrentService {
  torrentClient: WebTorrent.Instance;
  constructor() {
    this.torrentClient = new WebTorrent();
  }
}
