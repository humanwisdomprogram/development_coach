import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoachHistoryPatientNamePageRoutingModule } from './coach-history-patient-name-routing.module';

import { CoachHistoryPatientNamePage } from './coach-history-patient-name.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoachHistoryPatientNamePageRoutingModule
  ],
  declarations: [CoachHistoryPatientNamePage]
})
export class CoachHistoryPatientNamePageModule {}
