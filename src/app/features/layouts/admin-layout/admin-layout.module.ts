import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { JalalidatePipe } from 'src/app/core/Pipe/jalalidate.pipe';
import { JalalidatetimePipe } from 'src/app/core/Pipe/jalalidatetime.pipe';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TableComponent } from './components/dashboard/table/table.component';
import { ChartComponent } from './components/dashboard/chart/chart.component';
import { UsermanagmentComponent } from './pages/usermanagment/usermanagment.component';
import { TableuserComponent } from './components/usermanagment/tableuser/tableuser.component';
import { TableheaderComponent } from './components/usermanagment/tableheader/tableheader.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PrimengModule } from 'src/app/shared/package/primeng.module';
import { MaterialModule } from 'src/app/shared/package/material.module';

@NgModule({
  imports: [
    CommonModule,

    // Router
    RouterModule.forChild(AdminLayoutRoutes),

    // From
    FormsModule,

    // Http
    HttpClientModule,

    // FromControl
    ReactiveFormsModule,

    // Package
    PrimengModule,
    MaterialModule

  ],

  declarations: [
    JalalidatePipe,
    JalalidatetimePipe,

    DashboardComponent,
    TableComponent,
    ChartComponent,
    UsermanagmentComponent,
    TableuserComponent,
    TableheaderComponent
  ],
})
export class AdminLayoutModule { }
