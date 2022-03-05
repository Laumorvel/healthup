import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { MenuInicioComponent } from './menu-inicio/menu-inicio.component';
import { BotonFlotanteComponent } from './boton-flotante/boton-flotante.component';


@NgModule({
  declarations: [
    SharedComponent,
    MenuInicioComponent,
    BotonFlotanteComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [
    SharedComponent,
    MenuInicioComponent,
    BotonFlotanteComponent
  ]
})
export class SharedModule { }
