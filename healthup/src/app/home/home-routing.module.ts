import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { LogInComponent } from '../log-in/log-in.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  { path: 'logIn', component: LogInComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
