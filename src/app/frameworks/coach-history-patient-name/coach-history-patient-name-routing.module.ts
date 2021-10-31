import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoachHistoryPatientNamePage } from './coach-history-patient-name.page';

const routes: Routes = [
  {
    path: '',
    component: CoachHistoryPatientNamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoachHistoryPatientNamePageRoutingModule {}
