import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LogInRoutingModule } from '../log-in/log-in-routing.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    LogInRoutingModule
  ],
  exports:[
    HomeComponent
  ]
})
export class HomeModule { }
