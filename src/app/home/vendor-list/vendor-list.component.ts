import { Component } from '@angular/core';

@Component({
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.scss'],
})
export class VendorListComponent {
  vendors: Array<any> = [
    { name: 'Mama  ChopLife’s Pot', location: 'Gwarimpa', fee: '₦760', id: 1 },
    { name: 'Mama  ChopLife’s Pot', location: 'Gwarimpa', fee: '₦760', id: 2 },
    { name: 'Mama  ChopLife’s Pot', location: 'Gwarimpa', fee: '₦760', id: 3 },
    { name: 'Mama  ChopLife’s Pot', location: 'Gwarimpa', fee: '₦760', id: 4 },
    { name: 'Mama  ChopLife’s Pot', location: 'Gwarimpa', fee: '₦760', id: 5 },
    { name: 'Mama  ChopLife’s Pot', location: 'Gwarimpa', fee: '₦760', id: 6 },
    { name: 'Mama  ChopLife’s Pot', location: 'Gwarimpa', fee: '₦760', id: 7 },
    { name: 'Mama  ChopLife’s Pot', location: 'Gwarimpa', fee: '₦760', id: 8 },
  ];
  street_lane: Array<any> = [
    { name: 'Deals', location: 'Gwarimpa', fee: '₦760', id: 1 },
    { name: 'Best Rated', location: 'Gwarimpa', fee: '₦760', id: 2 },
    { name: 'Season Special', location: 'Gwarimpa', fee: '₦760', id: 3 },
  ];
  sort: Array<any> = [
    { name: 'Deals', location: 'Gwarimpa', fee: '₦760', id: 1 },
    { name: 'Best Rated', location: 'Gwarimpa', fee: '₦760', id: 2 },
    { name: 'Season Special', location: 'Gwarimpa', fee: '₦760', id: 3 },
  ];
}
