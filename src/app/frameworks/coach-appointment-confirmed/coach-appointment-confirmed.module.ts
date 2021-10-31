import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoachAppointmentConfirmedPageRoutingModule } from './coach-appointment-confirmed-routing.module';

import { CoachAppointmentConfirmedPage } from './coach-appointment-confirmed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoachAppointmentConfirmedPageRoutingModule
  ],
  declarations: [CoachAppointmentConfirmedPage]
})
export class CoachAppointmentConfirmedPageModule {}
