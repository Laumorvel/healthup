import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserSettingsRoutingModule } from './user-settings-routing.module';
import { UserSettingsComponent } from './user-settings.component';
import { GeneralComponent } from './general/general.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UserSettingsComponent,
    GeneralComponent
  ],
  imports: [
    CommonModule,
    UserSettingsRoutingModule,
  ],
  exports:[GeneralComponent,UserSettingsComponent]
})
export class UserSettingsModule { }
