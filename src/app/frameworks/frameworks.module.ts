import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';

import { FrameworksRoutingModule } from './frameworks-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FrameworksRoutingModule,
  ]
})
export class FrameworksModule { }
