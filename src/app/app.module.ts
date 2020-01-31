import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutesModule } from './app.routes.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AllTracksComponent } from './components/tracks/all-tracks/all-tracks.component';
import { PlaylistsComponent } from './components/tracks/playlists/playlists.component';
import {FilesModule} from './components/files/files.module';
import {TracksModule} from './components/tracks/tracks.module';
import {MatCardModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    AllTracksComponent,
    PlaylistsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
    FilesModule,
    TracksModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
