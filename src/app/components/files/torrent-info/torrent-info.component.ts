import {Component, Input, OnInit} from '@angular/core';
import {Torrent} from 'webtorrent';
import {FileManagerService} from '../../../services/file-manager.service';
import {Source} from '../../../types/helpers';

@Component({
  selector: 'app-torrent-info',
  templateUrl: './torrent-info.component.html',
  styleUrls: ['./torrent-info.component.scss']
})
export class TorrentInfoComponent implements OnInit {
  @Input() item: Source;

  constructor(private fileManagerService: FileManagerService) {

  }

  ngOnInit() {

  }

}
