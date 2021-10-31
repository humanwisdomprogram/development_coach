import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoachCalendarPluginPage } from './coach-calendar-plugin.page';

const routes: Routes = [
  {
    path: '',
    component: CoachCalendarPluginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoachCalendarPluginPageRoutingModule {}
