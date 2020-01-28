import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FilesPageComponent} from './files-page/files-page.component';
import { TorrentAddComponent } from './torrent-add/torrent-add.component';
import {MatButtonModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import { TorrentDashboardComponent } from './torrent-dashboard/torrent-dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';



@NgModule({
  declarations: [
    FilesPageComponent,
    TorrentAddComponent,
    TorrentDashboardComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    LayoutModule,
  ]
})
export class FilesModule { }
