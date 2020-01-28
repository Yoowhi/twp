import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {FilesPageComponent} from './components/files/files-page/files-page.component';
import {AllTracksComponent} from './components/tracks/all-tracks/all-tracks.component';
import {PlaylistsComponent} from './components/tracks/playlists/playlists.component';

const routes: Routes = [
  { path: 'files', component: FilesPageComponent },
  { path: 'tracks/all', component: AllTracksComponent },
  { path: 'tracks/playlists', component: PlaylistsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutesModule {
}
