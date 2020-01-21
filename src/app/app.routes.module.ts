import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {
    path: '**',
    loadChildren: () => import('./torrent/torrent.module').then(module => module.TorrentModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutesModule {
}
