import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorListRoutingModule } from './vendor-list-routing.module';
import { VendorDetailComponent } from './vendor-detail/vendor-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [VendorDetailComponent],
  imports: [CommonModule, VendorListRoutingModule, SharedModule],
})
export class VendorListModule {}
