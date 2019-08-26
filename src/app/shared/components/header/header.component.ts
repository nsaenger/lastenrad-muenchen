import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ContentService} from '@app/core/services/content/content.service';
import {ModalService} from '@app/core/services/modal.service';
import {SidebarService} from '@app/core/services/sidebar/sidebar.service';
import {EUserRole, IUser, UserService} from '@app/core/services/user/user.service';


@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  public sidebarVisible = false;
  public userPopupVisible = false;
  public user: IUser;
  public editMode: boolean;

  public ROLES = EUserRole;

  constructor(
    private sidebarSrv: SidebarService,
    private userSrv: UserService,
    private contentSrv: ContentService,
    private router: Router,
    private modalSrv: ModalService,
  ) {
    this.sidebarSrv.visible.subscribe((visible) => {
      this.sidebarVisible = visible;
    });
    this.userSrv.user.subscribe(user => this.user = user);
    this.contentSrv.editMode.subscribe(editMode => this.editMode = editMode);
  }

  ngOnInit() {
  }

  toggleSidebar() {
    this.sidebarSrv.visible.next(!this.sidebarSrv.visible.value);
  }

  toggleUserPopUp() {
    this.userPopupVisible = !this.userPopupVisible;
  }

  toggleEditMode() {
    if (this.contentSrv.editMode.value) {
      if (this.contentSrv.modified.value) {
        this.modalSrv.addModal({
          heading: 'Speichern?',
          content: '<p class="align-center">Das du die gemachten Änderungen Speichern möchtest?</p>',
          size: 'SMALL',
          type: 'DEFAULT',
          actions: [
            {
              text: 'Speichern',
              type: 'SUCCESS',
              action: () => {
                this.contentSrv.applyContent();
              },
            },
            {
              text: 'Abbrechen',
              type: 'ERROR',
              action: () => {
                this.modalSrv.closeModal();
              },
            },
          ],
        });
      } else {
        this.contentSrv.editMode.next(false);
      }
    } else {
      this.contentSrv.editMode.next(true);
    }
  }

  navigateToHome() {
    this.router.navigateByUrl('/home').then();
  }
}
