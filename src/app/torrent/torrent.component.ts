import { Component, OnInit } from '@angular/core';
import { TorrentService } from './torrent.service';

@Component({
  selector: 'app-torrent',
  templateUrl: './torrent.component.html',
  styleUrls: ['./torrent.component.scss']
})
export class TorrentComponent implements OnInit {

  constructor(private torrentService: TorrentService) { }

  ngOnInit() {
  }

}
