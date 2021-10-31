import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoachBioPageRoutingModule } from './coach-bio-routing.module';

import { CoachBioPage } from './coach-bio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoachBioPageRoutingModule
  ],
  declarations: [CoachBioPage]
})
export class CoachBioPageModule {}
