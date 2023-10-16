import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorListRoutingModule } from './vendor-list-routing.module';
import { VendorDetailComponent } from './vendor-detail/vendor-detail.component';


@NgModule({
  declarations: [
    VendorDetailComponent
  ],
  imports: [
    CommonModule,
    VendorListRoutingModule
  ]
})
export class VendorListModule { }
