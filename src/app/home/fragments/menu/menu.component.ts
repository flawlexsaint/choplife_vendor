import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  menuVisible: boolean = false;

  open(): void {
    this.menuVisible = true;
  }

  close(): void {
    this.menuVisible = false;
  }
}
