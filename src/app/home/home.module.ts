import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NavbarComponent } from './fragments/navbar/navbar.component';
import { FooterComponent } from './fragments/footer/footer.component';
import { ContactComponent } from './fragments/contact/contact.component';
import { VendorListComponent } from './vendor-list/vendor-list.component';

@NgModule({
  declarations: [HomeComponent, NavbarComponent, FooterComponent, ContactComponent, VendorListComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
