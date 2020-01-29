import {Component, Input, OnInit} from '@angular/core';
import {Torrent} from 'webtorrent';
import {FileManagerService} from '../../../services/file-manager.service';

@Component({
  selector: 'app-torrent-info',
  templateUrl: './torrent-info.component.html',
  styleUrls: ['./torrent-info.component.scss']
})
export class TorrentInfoComponent implements OnInit {
  @Input() item: Torrent;

  constructor(private fileManagerService: FileManagerService) {

  }

  ngOnInit() {

  }

}
