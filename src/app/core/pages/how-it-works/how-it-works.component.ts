import {Component} from '@angular/core';
import {ModalService} from '@app/core/services/modal.service';
import {RegisterComponent} from '@app/shared/components/register/register.component';


@Component({
  selector: 'how-it-works',
  templateUrl: './how-it-works.component.html',
  styleUrls: ['./how-it-works.component.scss'],
})
export class HowItWorksComponent {

  constructor(
    private modalSrv: ModalService,
  ) {
  }

  onClick(event: MouseEvent) {
    this.modalSrv.addModal({
      heading: 'Register',
      content: RegisterComponent,
      size: 'LARGE',
      type: 'DEFAULT',
    });
  }

}
