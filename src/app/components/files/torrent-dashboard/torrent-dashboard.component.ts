import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import {FileManagerService} from '../../../services/file-manager.service';
import {Torrent} from 'webtorrent';

@Component({
  selector: 'app-torrent-dashboard',
  templateUrl: './torrent-dashboard.component.html',
  styleUrls: ['./torrent-dashboard.component.scss']
})
export class TorrentDashboardComponent {
  torrents;
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      return this.torrents;
    })
  );

  constructor(private breakpointObserver: BreakpointObserver,
              private fileManagerService: FileManagerService) {
    this.torrents = this.fileManagerService.torrents;
  }

  startTorrent(torrent: Torrent) {
    this.fileManagerService.startTorrent(torrent);
  }

  pauseTorrent(torrent: Torrent) {
    this.fileManagerService.pauseTorrent(torrent);
  }

  removeTorrent(magnetUri) {
    this.fileManagerService.removeTorrent(magnetUri);
  }
}
