import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoachHistoryRevenuePage } from './coach-history-revenue.page';

const routes: Routes = [
  {
    path: '',
    component: CoachHistoryRevenuePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoachHistoryRevenuePageRoutingModule {}
