import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-custom-context-menu',
  templateUrl: './custom-context-menu.component.html',
  styleUrls: ['./custom-context-menu.component.scss']
})
export class CustomContextMenuComponent {
  @Input() top: string | undefined;
  @Input() left: string | undefined;
  @Input() show: boolean | undefined;
  @Input() items: { label: string; action: any; }[] | undefined;
  @Output() itemClicked: EventEmitter<any> = new EventEmitter();

  handleClick(item: any) {
    this.itemClicked.emit(item);
  }
}
