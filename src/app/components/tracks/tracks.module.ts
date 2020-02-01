import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaylistComponent } from './playlist/playlist.component';
import { TrackListComponent } from './track-list/track-list.component';
import {MatButtonModule, MatCardModule, MatGridListModule, MatIconModule, MatListModule, MatMenuModule} from '@angular/material';



@NgModule({
  declarations: [PlaylistComponent, TrackListComponent],
  exports: [
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule
  ]
})
export class TracksModule { }
