import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoachHistoryRevenuePageRoutingModule } from './coach-history-revenue-routing.module';

import { CoachHistoryRevenuePage } from './coach-history-revenue.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoachHistoryRevenuePageRoutingModule
  ],
  declarations: [CoachHistoryRevenuePage]
})
export class CoachHistoryRevenuePageModule {}
