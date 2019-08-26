import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material';
import {ModalService} from '@app/core/services/modal.service';
import {IUser, UserService} from '@app/core/services/user/user.service';
import {RegisterComponent} from '../register/register.component';


@Component({
  selector: 'user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent implements OnInit {

  @Output('done') done: EventEmitter<null> = new EventEmitter<null>();

  public user: IUser = null;

  public matcher: ErrorStateMatcher = new ErrorStateMatcher();

  public autoLogin: boolean = false;
  public emailCtrl: FormControl = new FormControl();
  public passwordCtrl: FormControl = new FormControl();

  constructor(
    private userSrv: UserService,
    private modalSrv: ModalService,
  ) {
    this.userSrv.user.subscribe((user) => this.user = user);
  }

  ngOnInit() {
  }

  register() {
    this.modalSrv.closeModal();
    this.done.emit();
    this.modalSrv.addModal({
      heading: 'Register',
      content: RegisterComponent,
      size: 'LARGE',
      type: 'DEFAULT',
    });
  }

  login() {
    if (this.emailCtrl.hasError('required') || this.passwordCtrl.hasError('required')) {
      return;
    }

    this.modalSrv.closeModal();
    this.done.emit();
    this.userSrv.login(this.emailCtrl.value, this.passwordCtrl.value, this.autoLogin);
  }

  logout() {
    this.modalSrv.closeModal();
    this.done.emit();
    this.userSrv.logout();
  }

}
