import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mobile-sidebar',
  templateUrl: './mobile-sidebar.component.html',
  styleUrls: ['./mobile-sidebar.component.scss'],
})
export class MobileSidebarComponent {
  @Input() sort: Array<any> | any;
  @Input() street_lane: Array<any> | any;

  visible: boolean = false;
  sortVisible: boolean = true;
  streetLaneVisible: boolean = true;

  goBack = () => {
    history.back();
  };

  open(screen: string): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }
}
