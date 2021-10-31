import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoachCalendarPluginPageRoutingModule } from './coach-calendar-plugin-routing.module';

import { CoachCalendarPluginPage } from './coach-calendar-plugin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoachCalendarPluginPageRoutingModule
  ],
  declarations: [CoachCalendarPluginPage]
})
export class CoachCalendarPluginPageModule {}
