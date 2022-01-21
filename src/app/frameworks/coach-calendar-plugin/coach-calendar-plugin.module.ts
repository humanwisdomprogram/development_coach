import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoachCalendarPluginPageRoutingModule } from './coach-calendar-plugin-routing.module';

import { CoachCalendarPluginPage } from './coach-calendar-plugin.page';
import { DatetimerangepickerModule } from 'angular-datetimerangepicker';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DatetimerangepickerModule,
    CoachCalendarPluginPageRoutingModule
  ],
  declarations: [CoachCalendarPluginPage]
})
export class CoachCalendarPluginPageModule {}
