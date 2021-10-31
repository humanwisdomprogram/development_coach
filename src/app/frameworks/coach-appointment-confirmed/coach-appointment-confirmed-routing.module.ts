import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoachAppointmentConfirmedPage } from './coach-appointment-confirmed.page';

const routes: Routes = [
  {
    path: '',
    component: CoachAppointmentConfirmedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoachAppointmentConfirmedPageRoutingModule {}
