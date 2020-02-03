import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerPanelComponent } from './player-panel/player-panel.component';
import {MatButtonModule, MatIconModule, MatProgressBarModule} from '@angular/material';



@NgModule({
  declarations: [PlayerPanelComponent],
  exports: [
    PlayerPanelComponent
  ],
    imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule,
        MatProgressBarModule
    ]
})
export class PlayerModule { }
