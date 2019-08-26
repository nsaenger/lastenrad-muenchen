import {Component, Input, OnInit} from '@angular/core';
import {IStation} from '@app/core/services/station/station.service';
import {IUser, UserService} from '@app/core/services/user/user.service';


@Component({
  selector: 'station',
  templateUrl: './station.component.html',
  styleUrls: ['./station.component.scss'],
})
export class StationComponent implements OnInit {

  @Input() station: IStation;

  public user: IUser;
  public weeks: any = [];
  public readonly daysArray: number[] = [0, 1, 2, 3, 4, 5, 6];
  public readonly dayNames: string[] = [
    'Montag',
    'Dienstag',
    'Mittwoch',
    'Donnerstag',
    'Freitag',
    'Samstag',
    'Sonntag',
  ];

  constructor(
    private userSrv: UserService,
  ) {
    this.userSrv.user.subscribe((user) => this.user = user);
  }

  ngOnInit() {
    for (let i = 0; i < this.station.week.length; i++) {
      this.weeks.push(this.daysArray);
    }

    this.station.times = this.station.times.replace(/\//g, '<br>');
    this.station.info = this.station.info.replace(/\//g, '<br>');
  }

  public getPeriod() {
    const s: Date = this.getDateFromWeek(this.station.week[0]);
    const e: Date = this.getDateFromWeek(this.station.week[this.station.week.length - 1], 6);

    return s.getDate() + '.' + (s.getMonth() + 1) + '. - ' + e.getDate() + '.' + (e.getMonth() + 1) + '.';
  }

  private getDateFromWeek(w: number, day = 0) {
    const weekStart = this.getDateOfISOWeek(w, this.station.year);

    return new Date(weekStart.getUTCFullYear(), weekStart.getMonth(), weekStart.getDate() + day);
  }

  private isDayOpen(day: number, station: IStation) {
    return station.openDays.indexOf(day) !== -1;
  }

  private getDateOfISOWeek(w: number, y: number) {
    const simple = new Date(y, 0, 1 + (w - 1) * 7);
    const dow = simple.getDay();
    const ISOWeekStart = simple;

    if (dow <= 4) {
      ISOWeekStart.setDate(simple.getDate() - simple.getDay() + 1);
    } else {
      ISOWeekStart.setDate(simple.getDate() + 8 - simple.getDay());
    }

    return ISOWeekStart;
  }

}
