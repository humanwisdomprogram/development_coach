import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoachDirectoryPage } from './coach-directory.page';

const routes: Routes = [
  {
    path: '',
    component: CoachDirectoryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoachDirectoryPageRoutingModule {}
