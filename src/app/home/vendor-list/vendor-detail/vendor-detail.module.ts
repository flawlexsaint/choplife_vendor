import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorDetailRoutingModule } from './vendor-detail-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, VendorDetailRoutingModule, SharedModule],
})
export class VendorDetailModule {}
