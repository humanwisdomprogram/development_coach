import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoachPaymentInfoPage } from './coach-payment-info.page';

const routes: Routes = [
  {
    path: '',
    component: CoachPaymentInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoachPaymentInfoPageRoutingModule {}
