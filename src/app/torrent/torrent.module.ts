import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TorrentComponent } from './torrent.component';
import { TorrentRoutesModule } from './torrent.routes.module';

@NgModule({
  imports: [
    CommonModule,
    TorrentRoutesModule,
  ],
  declarations: [TorrentComponent]
})
export class TorrentModule { }
