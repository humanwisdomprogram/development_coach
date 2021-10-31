import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoachHistoryDatePage } from './coach-history-date.page';

const routes: Routes = [
  {
    path: '',
    component: CoachHistoryDatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoachHistoryDatePageRoutingModule {}
