import {Component, Input, OnInit} from '@angular/core';
import {IOrder, OrderService} from '@app/core/services/order/order.service';
import {IStation} from '@app/core/services/station/station.service';
import {IUser, UserService} from '@app/core/services/user/user.service';


@Component({
  selector: 'day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss'],
})
export class DayComponent implements OnInit {

  public data: { dayName: string, occupant: string } = {dayName: '', occupant: ''};

  @Input() date: Date;
  @Input() station: IStation;
  @Input() orders: IOrder[];
  @Input() error: boolean = false;
  @Input() disabled: boolean = false;
  @Input() user: IUser;

  public dayNames: string[] = ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag', 'Sonntag'];

  constructor(
    private orderSrv: OrderService,
    private userSrv: UserService,
  ) {
  }

  ngOnInit() {
    for (let order of this.orders) {
      if (order.day.getDate() === this.date.getDate()) {
        this.data.occupant = order.alias;
      }
    }

    this.data.dayName = this.dayNames[this.date.getDay() - 1];
  }

  getDate(): string {
    return this.date.getDate() + '.' + (this.date.getMonth() + 1) + '.' + this.date.getFullYear();
  }

  onClick() {
    if (this.disabled) return;
    if (!this.user) return;

    if (this.data.occupant === this.userSrv.user.value.alias) {
      this.removeOrder();
    } else if (!this.data.occupant) {
      this.addOrder();
    }
  }

  addOrder() {
    this.orderSrv.addOrder({
      alias: this.user.alias,
      day: this.date,
    }, this.station);
  }

  removeOrder() {
    this.orderSrv.removeOrder({
      alias: this.user.alias,
      day: this.date,
    }, this.station);
  }
}
