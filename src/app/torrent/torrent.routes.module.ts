import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
    RouterModule.forChild(routes)
  ]
})
export class TorrentRoutesModule {
}
