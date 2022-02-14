import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { MenuInicioComponent } from './menu-inicio/menu-inicio.component';
import { LogInOutComponent } from './log-in-out/log-in-out.component';


@NgModule({
  declarations: [
    SharedComponent,
    MenuInicioComponent,
    LogInOutComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    SharedComponent,
    MenuInicioComponent
  ]
})
export class SharedModule { }
