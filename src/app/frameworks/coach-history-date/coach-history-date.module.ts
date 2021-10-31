import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoachHistoryDatePageRoutingModule } from './coach-history-date-routing.module';

import { CoachHistoryDatePage } from './coach-history-date.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoachHistoryDatePageRoutingModule
  ],
  declarations: [CoachHistoryDatePage]
})
export class CoachHistoryDatePageModule {}
