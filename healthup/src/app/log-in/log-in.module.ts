import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogInRoutingModule } from './log-in-routing.module';
import { LogInComponent } from './log-in.component';
import { FormsModule } from '@angular/forms';
import { LogOutComponent } from './log-out/log-out.component';


@NgModule({
  declarations: [
    LogInComponent,
    LogOutComponent
  ],
  imports: [
    CommonModule,
    LogInRoutingModule,
    FormsModule
  ],
  exports:[
    LogInComponent
  ]
})
export class LogInModule { }
