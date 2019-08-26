import {Component, OnInit} from '@angular/core';
import {IStation, StationService} from '@app/core/services/station/station.service';
import {IUser, UserService} from '@app/core/services/user/user.service';


@Component({
  selector: 'book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {

  public stations: IStation[] = [];


  public user: IUser = null;

  constructor(
    private userSrv: UserService,
    private stationSrv: StationService,
  ) {
    this.userSrv.user.subscribe((user) => this.user = user);
    this.stationSrv.stations.subscribe((stations) => {
      this.stations = stations;
    });
  }

  ngOnInit() {
  }

}
