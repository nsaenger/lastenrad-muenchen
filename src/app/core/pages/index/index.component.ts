import {Component} from '@angular/core';
import {ModalService} from '@app/core/services/modal.service';
import {RegisterComponent} from '@app/shared/components/register/register.component';
import {UserCardComponent} from '@app/shared/components/user-card/user-card.component';


@Component({
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent {

  constructor(
    private modalSrv: ModalService,
  ) {
  }

  onClick(event: MouseEvent) {
    const target: HTMLElement = event.target as HTMLElement;
    const handler = target.getAttribute('(click)');

    switch (handler) {
      case 'register()':
        this.modalSrv.addModal({
          heading: 'Register',
          content: RegisterComponent,
          size: 'LARGE',
          type: 'DEFAULT',
        });
        break;
      case 'login()':
        this.modalSrv.addModal({
          heading: 'Login',
          content: UserCardComponent,
          size: 'MEDIUM',
          type: 'DEFAULT',
        });
        break;
    }
  }
}
