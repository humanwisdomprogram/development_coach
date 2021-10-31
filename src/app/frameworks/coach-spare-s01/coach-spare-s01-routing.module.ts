import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoachSpareS01Page } from './coach-spare-s01.page';

const routes: Routes = [
  {
    path: '',
    component: CoachSpareS01Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoachSpareS01PageRoutingModule {}
