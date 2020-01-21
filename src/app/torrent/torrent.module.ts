import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TorrentComponent } from './torrent.component';
import { TorrentRoutesModule } from './torrent.routes.module';



@NgModule({
  declarations: [TorrentComponent],
  imports: [
    CommonModule,
    TorrentRoutesModule
  ]
})
export class TorrentModule { }
