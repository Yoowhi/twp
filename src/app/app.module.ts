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
import { NavbarComponent } from './navbar/navbar.component';
import { AllTracksComponent } from './components/tracks/all-tracks/all-tracks.component';
import { PlaylistsComponent } from './components/tracks/playlists/playlists.component';
import {FilesModule} from './components/files/files.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AllTracksComponent,
    PlaylistsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
    FilesModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
