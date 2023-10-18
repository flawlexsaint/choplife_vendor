import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  menuVisible: boolean = false;
  screen: string = 'menu';
  placement: any = 'bottom';

  open(screen: string, placement: string): void {
    this.screen = screen;
    this.placement = placement;
    this.menuVisible = true;
  }

  close(): void {
    this.menuVisible = false;
  }
}
