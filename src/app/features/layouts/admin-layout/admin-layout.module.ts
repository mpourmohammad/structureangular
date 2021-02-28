import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminLayoutRoutingModule } from './admin-layout.routing';
import { JalalidatePipe } from 'src/app/core/Pipe/jalalidate.pipe';
import { JalalidatetimePipe } from 'src/app/core/Pipe/jalalidatetime.pipe';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@NgModule({
  declarations: [
    JalalidatePipe,
    JalalidatetimePipe,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    AdminLayoutRoutingModule
  ]
})
export class AdminLayoutModule { }
