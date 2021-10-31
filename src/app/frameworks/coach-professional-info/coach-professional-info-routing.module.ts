import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoachProfessionalInfoPage } from './coach-professional-info.page';

const routes: Routes = [
  {
    path: '',
    component: CoachProfessionalInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoachProfessionalInfoPageRoutingModule {}
