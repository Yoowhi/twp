import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerPanelComponent } from './player-panel/player-panel.component';
import {MatButtonModule, MatIconModule} from '@angular/material';



@NgModule({
  declarations: [PlayerPanelComponent],
  exports: [
    PlayerPanelComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class PlayerModule { }
