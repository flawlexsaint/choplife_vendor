import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'vendors',
    pathMatch: 'full',
  },
  {
    path: 'vendors',
    component: HomeComponent,
  },
  {
    path: 'vendors/:vendor',
    loadChildren: () =>
      import('./vendor-list/vendor-list.module').then(
        (m) => m.VendorListModule
      ),
  },
  // {
  //   path: 'vendor',
  //   component: LayoutComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
