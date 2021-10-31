import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoachAppointmentsPageRoutingModule } from './coach-appointments-routing.module';

import { CoachAppointmentsPage } from './coach-appointments.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoachAppointmentsPageRoutingModule
  ],
  declarations: [CoachAppointmentsPage]
})
export class CoachAppointmentsPageModule {}
