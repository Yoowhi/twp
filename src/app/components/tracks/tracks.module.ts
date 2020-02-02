import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaylistComponent } from './playlist/playlist.component';
import { TrackListComponent } from './track-list/track-list.component';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatGridListModule,
  MatIconModule,
  MatListModule,
  MatMenuModule
} from '@angular/material';
import {FormsModule} from '@angular/forms';
import { TracklistControlsComponent } from './tracklist-controls/tracklist-controls.component';



@NgModule({
  declarations: [PlaylistComponent, TrackListComponent, TracklistControlsComponent],
  exports: [
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule
  ]
})
export class TracksModule { }
