import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserSettingsRoutingModule } from './user-settings-routing.module';
import { UserSettingsComponent } from './user-settings.component';
import { GeneralComponent } from './general/general.component';
import { ChangePasswordComponent } from './change-password/change-password.component';


@NgModule({
  declarations: [
    UserSettingsComponent,
    GeneralComponent,
    ChangePasswordComponent
  ],
  imports: [
    CommonModule,
    UserSettingsRoutingModule,
  ],
  exports:[GeneralComponent,UserSettingsComponent]
})
export class UserSettingsModule { }
