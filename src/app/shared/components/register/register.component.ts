import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {ModalService} from '@app/core/services/modal.service';
import {IUser, UserService} from '@app/core/services/user/user.service';


@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {

  public user: IUser = null;

  public acceptedAGB: any = false;
  public agbError: string = '';
  public surnameCtrl: FormControl = new FormControl();
  public surnameError: string = '';
  public nameCtrl: FormControl = new FormControl();
  public nameError: string = '';
  public aliasCtrl: FormControl = new FormControl();
  public aliasError: string = '';
  public telCtrl: FormControl = new FormControl();
  public telError: string = '';
  public mailCtrl: FormControl = new FormControl();
  public mailError: string = '';
  public mailCCtrl: FormControl = new FormControl();
  public mailCError: string = '';
  public passwordCtrl: FormControl = new FormControl();
  public passwordError: string = '';
  public passwordCCtrl: FormControl = new FormControl();
  public passwordCError: string = '';

  constructor(
    private userSrv: UserService,
    private modalSrv: ModalService,
  ) {
    this.userSrv.user.subscribe((user) => {
      this.user = user;
    });
  }

  register() {
    if (this.checkData()) {
      this.modalSrv.closeModal();

      this.userSrv.registerUser({
        surname: this.surnameCtrl.value,
        name: this.nameCtrl.value,
        alias: this.aliasCtrl.value,
        tel: this.telCtrl.value,
        mail: this.mailCtrl.value,
        mailC: this.mailCCtrl.value,
        password: this.passwordCtrl.value,
        passwordC: this.passwordCCtrl.value,
      });
    }
  }

  logout() {
    this.closeModal();
    this.userSrv.logout();
  }

  closeModal() {
    this.modalSrv.closeModal();
  }

  checkData() {
    this.agbError = !this.acceptedAGB ? 'Sie müssen die AGB\'s akzeptieren' : null;
    this.surnameError = this.surnameCtrl.value == '' ? 'Feld darf nicht leer sein.' : null;
    this.nameError = this.nameCtrl.value == '' ? 'Feld darf nicht leer sein.' : null;
    this.aliasError = this.aliasCtrl.value == '' ? 'Feld darf nicht leer sein.' : null;
    this.telError = this.telCtrl.value == '' ? 'Feld darf nicht leer sein.' : null;

    this.mailError = this.mailCtrl.value == '' ? 'Feld darf nicht leer sein.' : (!this.isEmail(this.mailCtrl.value) ? 'Das ist keine valide Mail-Adresse' : null);
    this.mailCError = this.mailCtrl.value != this.mailCCtrl.value ? 'Mail-Adressen stimmen nicht überein.' : null;
    if (this.mailCError == '') {
      this.mailCError = this.mailCCtrl.value == '' ? 'Feld darf nicht leer sein.' : (!this.isEmail(this.mailCCtrl.value) ? 'Das ist keine valide Mail-Adresse' : null);
    }

    this.passwordError = this.passwordCtrl.value == '' ? 'Feld darf nicht leer sein.' : null;
    this.passwordCError = this.passwordCtrl.value != this.passwordCCtrl.value ? 'Passwörter stimmen nicht überein' : null;
    if (this.passwordCError === null) {
      this.passwordCError = this.passwordCCtrl.value == '' ? 'Feld darf nicht leer sein.' : null;
    }

    return (
      !this.agbError &&
      !this.surnameError &&
      !this.nameError &&
      !this.aliasError &&
      !this.telError &&
      !this.mailError &&
      !this.mailCError &&
      !this.passwordError &&
      !this.passwordCError);
  }

  isEmail(str: string): boolean {
    const regExp = /^[a-zA-Z0-9-.]+@[a-zA-Z0-9-.]+.[a-zA-Z]+$/;
    return regExp.test(str.toLowerCase());
  }
}
