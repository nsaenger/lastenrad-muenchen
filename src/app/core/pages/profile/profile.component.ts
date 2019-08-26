import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material';
import {IOrder} from '@app/core/services/order/order.service';
import {IStation, StationService} from '@app/core/services/station/station.service';
import {IUser, UserService} from '@app/core/services/user/user.service';


@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {

  public equality: boolean = true;
  public user: IUser = null;

  public orders: {
    station: IStation,
    order: IOrder
  }[] = [];

  public nameCtrl: FormControl = new FormControl();
  public surnameCtrl: FormControl = new FormControl();
  public aliasCtrl: FormControl = new FormControl();
  public telCtrl: FormControl = new FormControl();

  public matcher: ErrorStateMatcher = new ErrorStateMatcher();

  constructor(
    private userSrv: UserService,
    private stationSrv: StationService,
  ) {
  }

  ngOnInit() {
    this.userSrv.user.subscribe((user: IUser) => {
        if (user) {
          this.user = Object.assign({}, user);
          this.resetProfileData();
          this.stationSrv.stations.subscribe((stations: IStation[]) => {
            this.orders = [];
            for (let station of stations) {
              station.times = station.times.replace(/\//g, '<br>');
              station.info = station.info.replace(/\//g, '<br>');

              for (let order of station.orders) {
                if (order.alias === this.user.alias) {
                  this.orders.push({
                    station,
                    order,
                  });
                }
              }
            }
          });
        }
      },
    );
  }

  public saveProfileData() {
    if (this.checkProfileData()) {
      this.userSrv.saveUser({
        ...this.user,
        name: this.nameCtrl.value.trim(),
        surname: this.surnameCtrl.value.trim(),
        alias: this.aliasCtrl.value.trim(),
        tel: this.telCtrl.value.trim(),
      });
    }
  }

  public resetProfileData() {
    this.nameCtrl.setValue(this.user.name);
    this.surnameCtrl.setValue(this.user.surname);
    this.aliasCtrl.setValue(this.user.alias);
    this.telCtrl.setValue(this.user.tel);
    this.equality = true;
  }

  public equals() {
    return (
      this.nameCtrl.value.trim() === this.user.name &&
      this.surnameCtrl.value.trim() === this.user.surname &&
      this.aliasCtrl.value.trim() === this.user.alias &&
      this.telCtrl.value.trim() === this.user.tel
    );
  }

  checkEquality() {
    this.equality = this.equals();
  }

  private checkProfileData() {
    return (
      !this.nameCtrl.hasError('required') &&
      !this.surnameCtrl.hasError('required') &&
      !this.aliasCtrl.hasError('required') &&
      !this.telCtrl.hasError('required')
    );
  }
}
