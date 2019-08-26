import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {IUser, UserService} from '@app/core/services/user/user.service';


@Component({
  selector: 'activate',
  templateUrl: './activate.component.html',
  styleUrls: ['./activate.component.scss'],
})
export class ActivateComponent implements OnInit {

  public activated: boolean;
  public user: IUser;

  constructor(
    private route: ActivatedRoute,
    private userSrv: UserService,
  ) {
  }

  ngOnInit() {
    const queryMap = this.route.snapshot.queryParamMap['params'];
    console.log(queryMap);

    if (queryMap.hasOwnProperty('token')) {
      this.userSrv.activateUser(queryMap.token, this.route.snapshot.paramMap.get('id')).subscribe(result => {
        const user = result['user'];

        if (user !== null) {
          this.activated = true;
          this.user = user;
        } else {
          this.activated = false;
          this.user = null;
        }
      });
    } else {
      alert('Activation Link is malformed.');
    }
  }

}
