import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoachAppointmentsPage } from './coach-appointments.page';

const routes: Routes = [
  {
    path: '',
    component: CoachAppointmentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoachAppointmentsPageRoutingModule {}
