import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { UserDashboardRoutingModule } from './user-dashboard-routing.module';
import { UserDashboardComponent } from './user-dashboard.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [UserDashboardComponent],
  imports: [
    CommonModule,
    UserDashboardRoutingModule,
    SharedModule,
    DataTablesModule,
  ],
  providers: [DatePipe],
  exports: [UserDashboardComponent],
})
export class UserDashboardModule {}
