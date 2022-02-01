import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'shared', loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule) }, { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }, { path: 'logIn', loadChildren: () => import('./log-in/log-in.module').then(m => m.LogInModule) }, { path: 'signUp', loadChildren: () => import('./sign-up/sign-up.module').then(m => m.SignUpModule) }, { path: 'userDashboard', loadChildren: () => import('./user-dashboard/user-dashboard.module').then(m => m.UserDashboardModule) }, { path: 'contactUs', loadChildren: () => import('./contact-us/contact-us.module').then(m => m.ContactUsModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
