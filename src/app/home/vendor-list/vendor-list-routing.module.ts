import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VendorListComponent } from './vendor-list.component';

const routes: Routes = [
  {
    path: '',
    component: VendorListComponent,
  },
  {
    path: ':id',
    loadChildren: () =>
      import('./vendor-detail/vendor-detail.module').then(
        (m) => m.VendorDetailModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VendorListRoutingModule {}
