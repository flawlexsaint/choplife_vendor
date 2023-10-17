import { NgModule } from '@angular/core';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from '../home/vendor-list/vendor-detail/product-detail/product-detail.component';
import { CheckoutComponent } from '../home/vendor-list/vendor-detail/checkout/checkout.component';
import { MenuComponent } from '../home/fragments/menu/menu.component';

@NgModule({
  declarations: [ProductDetailComponent, CheckoutComponent, MenuComponent],
  imports: [CommonModule, NzDrawerModule],
  exports: [
    NzDrawerModule,
    ProductDetailComponent,
    CheckoutComponent,
    MenuComponent,
  ],
})
export class SharedModule {}
