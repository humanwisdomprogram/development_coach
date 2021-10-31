import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoachPersonalInfoPageRoutingModule } from './coach-personal-info-routing.module';

import { CoachPersonalInfoPage } from './coach-personal-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    CoachPersonalInfoPageRoutingModule
  ],
  declarations: [CoachPersonalInfoPage]
})
export class CoachPersonalInfoPageModule {}
