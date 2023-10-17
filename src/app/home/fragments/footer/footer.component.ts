import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  information: Array<any> = [
    'Home',
    'About',
    'Contact Us',
    'Blog',
    'Hot Meals',
  ];
  useful_links: Array<any> = [
    'FAQ',
    'Supports',
    'Terms & Condition',
    'Privacy Policy',
  ];
  social_icons: Array<any> = [
    'LinkedIn',
    'Instagram',
    'Facebook',
    'Twitter',
    'Pintrest',
  ];
}
