import {Component, EventEmitter, Input, Output} from '@angular/core';


@Component({
  selector: 'checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent {

  @Output() checkedChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() checked: boolean = false;
  @Input() btnClass: string = 'transparent';
  @Input() btnSize: string = '';

  constructor() {
  }

  toggle() {
    this.checked = !this.checked;
    this.checkedChange.emit(this.checked);
  }

}
