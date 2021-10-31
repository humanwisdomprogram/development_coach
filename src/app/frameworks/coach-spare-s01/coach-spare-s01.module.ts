import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoachSpareS01PageRoutingModule } from './coach-spare-s01-routing.module';

import { CoachSpareS01Page } from './coach-spare-s01.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoachSpareS01PageRoutingModule
  ],
  declarations: [CoachSpareS01Page]
})
export class CoachSpareS01PageModule {}
