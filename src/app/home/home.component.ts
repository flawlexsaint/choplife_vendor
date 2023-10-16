import { Component } from '@angular/core';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
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
}
