import { NgModule } from '@angular/core';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from '../home/vendor-list/vendor-detail/product-detail/product-detail.component';
import { CheckoutComponent } from '../home/vendor-list/vendor-detail/checkout/checkout.component';
import { MenuComponent } from '../home/fragments/menu/menu.component';
import { MobileSidebarComponent } from '../home/vendor-list/mobile-sidebar/mobile-sidebar.component';

@NgModule({
  declarations: [
    ProductDetailComponent,
    CheckoutComponent,
    MobileSidebarComponent,
    MenuComponent,
  ],
  imports: [CommonModule, NzDrawerModule],
  exports: [
    NzDrawerModule,
    ProductDetailComponent,
    CheckoutComponent,
    MobileSidebarComponent,
    MenuComponent,
  ],
})
export class SharedModule {}
