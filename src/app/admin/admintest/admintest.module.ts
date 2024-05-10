import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmintestRoutingModule } from './admintest-routing.module';
import { AdmintestComponent } from './admintest.component';


@NgModule({
  declarations: [
    AdmintestComponent
  ],
  imports: [
    CommonModule,
    AdmintestRoutingModule
  ]
})
export class AdmintestModule { }
