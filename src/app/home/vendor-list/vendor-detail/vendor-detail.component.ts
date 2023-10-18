import { Component } from '@angular/core';

@Component({
  templateUrl: './vendor-detail.component.html',
  styleUrls: ['./vendor-detail.component.scss'],
})
export class VendorDetailComponent {
  visible = false;
  menuVisible: boolean = false;
  sidebarVisible: boolean = false;
  screen = 'detail';
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
  menu: Array<any> = [
    { name: 'Coca-Cola', location: 'Gwarimpa', fee: '₦760', id: 1 },
    { name: 'Amala', location: 'Gwarimpa', fee: '₦760', id: 2 },
    { name: 'Pounded Yam', location: 'Gwarimpa', fee: '₦760', id: 3 },
    { name: 'Jollof Rice', location: 'Gwarimpa', fee: '₦760', id: 3 },
    { name: 'Sallah Meat', location: 'Gwarimpa', fee: '₦760', id: 3 },
    { name: 'Shawarma', location: 'Gwarimpa', fee: '₦760', id: 3 },
  ];

  open(screen: string): void {
    this.visible = true;
    switch (screen) {
      case 'checkout':
        this.screen = screen;
        break;

      case 'detail':
        this.screen = screen;
        break;

      default:
        break;
    }
  }

  close(): void {
    this.visible = false;
  }
}
