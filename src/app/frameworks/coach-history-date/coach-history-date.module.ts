import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoachHistoryDatePageRoutingModule } from './coach-history-date-routing.module';

import { CoachHistoryDatePage } from './coach-history-date.page';
import { GroupByPipe } from '../Pipe/group-by.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoachHistoryDatePageRoutingModule,
  ],
  declarations: [CoachHistoryDatePage,GroupByPipe]
})
export class CoachHistoryDatePageModule {}
