import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserSettingsComponent } from './user-settings.component';
import { GeneralComponent } from './general/general.component';

const routes: Routes = [
  { path: '', component: UserSettingsComponent },
  { path: 'general', component: GeneralComponent, outlet: 'user' }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserSettingsRoutingModule {}
