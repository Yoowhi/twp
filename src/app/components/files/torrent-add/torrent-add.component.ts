import { Component, OnInit } from '@angular/core';
import {FileManagerService} from '../../../services/file-manager.service';

@Component({
  selector: 'app-torrent-add',
  templateUrl: './torrent-add.component.html',
  styleUrls: ['./torrent-add.component.scss']
})
export class TorrentAddComponent implements OnInit {
  magnetUri;

  constructor(private fileManagerService: FileManagerService) { }

  ngOnInit() {
  }

  addMagnet() {
    this.fileManagerService.addTorrent(this.magnetUri);
    this.magnetUri = '';
  }

}
