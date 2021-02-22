import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

@NgModule({
  declarations: [AdminLayoutComponent, AuthLayoutComponent],
  imports: [
    CommonModule
  ]
})
export class FeaturesModule { }
