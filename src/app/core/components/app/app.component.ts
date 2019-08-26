import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ContentService} from '@app/core/services/content/content.service';
import {ScrollService} from '@app/core/services/scroll/scroll.service';
import {SidebarService} from '@app/core/services/sidebar/sidebar.service';
import {StationService} from '@app/core/services/station/station.service';
import {EUserRole, IUser, UserService} from '@app/core/services/user/user.service';
import {CookieService} from 'ngx-cookie-service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  public blockerIsVisible = true;
  public sidebarVisible = false;
  public user: IUser;
  public ROLES = EUserRole;

  constructor(
    private sidebarSrv: SidebarService,
    private scrollSrv: ScrollService,
    private router: Router,
    private stationsSrv: StationService,
    private userSrv: UserService,
    private cookieSrv: CookieService,
    private contentSrv: ContentService,
  ) {
    this.initializeSite();
    this.userSrv.user.subscribe(user => this.user = user);
  }

  ngOnInit() {
    window.setTimeout(() => {
      this.blockerIsVisible = false;
    }, 500);
  }

  private initializeSite() {
    this.sidebarSrv.visible.subscribe((value) => {
      if (!value) window.setTimeout(() => {
        this.sidebarVisible = false;
      }, 300);
      else this.sidebarVisible = true;
    });

    this.scrollSrv.scrollTop.subscribe((value) => {
      document.querySelector('body').scrollTop = value;
    });

    if (this.cookieSrv.get('uid')) {
      this.userSrv.loginByUID();
    }

    this.contentSrv.loadContent();
    this.stationsSrv.load();
  }
}
