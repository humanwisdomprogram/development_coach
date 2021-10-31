import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoachPersonalInfoPage } from './coach-personal-info.page';

const routes: Routes = [
  {
    path: '',
    component: CoachPersonalInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoachPersonalInfoPageRoutingModule {}
