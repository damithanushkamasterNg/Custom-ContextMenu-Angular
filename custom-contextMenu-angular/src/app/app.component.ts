import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'custom-contextMenu-angular';
  show = false;
  items: any = [{label: 'A', action: 'Read'}, {label: 'B', action: 'Writing'}];

  handleItemClick($event: any) {
    alert(JSON.stringify($event));
  }

  showContextMenu() {
    this.show = true;
  }
}
