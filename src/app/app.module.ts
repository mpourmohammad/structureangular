import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JalalidatePipe } from './core/Pipe/jalalidate.pipe';
import { JalalidatetimePipe } from './core/Pipe/jalalidatetime.pipe';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoaderInterceptor } from './core/http-interceptors/loader.interceptor';
import { LoaderService } from './core/services/innerServices/loader.service';
import { HttpconfigInterceptor } from './core/http-interceptors/httpconfig.interceptor';
import { FormsModule } from '@angular/forms';
import { AdminLayoutComponent } from './features/layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './features/layouts/auth-layout/auth-layout.component';
import { ComponentsModule } from './core/components/components.module';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PrimengModule } from './shared/package/primeng.module';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
  ],

  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent
  ],

  providers: [
    // Loader Service
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },

    // Error Response
    { provide: HTTP_INTERCEPTORS, useClass: HttpconfigInterceptor, multi: true },
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
