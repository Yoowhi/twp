import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { TorrentComponent } from './torrent.component';

const routes: Routes = [
  {
    path: '',
    component: TorrentComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class TorrentRoutesModule {
}
