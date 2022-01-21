import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoachCalendarPluginPageRoutingModule } from './coach-calendar-plugin-routing.module';

import { CoachCalendarPluginPage } from './coach-calendar-plugin.page';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoachCalendarPluginPageRoutingModule,
    NgbModule
  ],
  exports: [CoachCalendarPluginPage],
  declarations: [CoachCalendarPluginPage]
})
export class CoachCalendarPluginPageModule {}
