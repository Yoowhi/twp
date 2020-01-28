import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FilesPageComponent} from './files-page/files-page.component';
import { TorrentAddComponent } from './torrent-add/torrent-add.component';
import {MatButtonModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    FilesPageComponent,
    TorrentAddComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
  ]
})
export class FilesModule { }
