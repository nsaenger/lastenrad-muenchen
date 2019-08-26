import {Component, OnInit} from '@angular/core';
import {NavigationStart, Router} from '@angular/router';
import {SidebarService} from '@app/core/services/sidebar/sidebar.service';
import {UserService} from '@app/core/services/user/user.service';
import {WindowScrollingService} from '@app/core/services/window-scrolling/window-scrolling.service';


@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {

  public visible: boolean = false;

  constructor(
    private userSrv: UserService,
    public sidebarSrv: SidebarService,
    private router: Router,
    private wss: WindowScrollingService,
  ) {
    this.sidebarSrv.visible.subscribe((value) => {
      this.visible = value;

      if (this.visible) this.wss.disable();
      else this.wss.enable();
    });

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.sidebarSrv.visible.next(false);
      }
    });
  }

  ngOnInit() {
  }

  public closeSidebar() {
    this.sidebarSrv.visible.next(false);
  }

}
