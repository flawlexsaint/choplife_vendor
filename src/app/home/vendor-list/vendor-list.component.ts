import { Component } from '@angular/core';

@Component({
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.scss'],
})
export class VendorListComponent {
  sortVisible: boolean = true;
  streetLaneVisible: boolean = true;
  screen = 'detail';
  visible: boolean = false;
  menuVisible: boolean = false;
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
    { name: 'Deals', icon: 'deal', id: 1 },
    { name: 'Best Rated', icon: 'reward', id: 2 },
    { name: 'Season Special', icon: 'board', id: 3 },
  ];
  sort: Array<any> = [{ name: 'Most Popular' }, { name: 'Delivery Time' }];

  goBack = () => {
    history.back();
  };

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
