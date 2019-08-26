import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {BehaviorSubject} from 'rxjs';
import {ModalService} from '../modal.service';


export interface IUser {
  uid: string;
  id: string;
  role: EUserRole;
  alias: string;
  mail: string;
  name: string;
  surname: string;
  tel: string;
}


export enum EUserRole {
  ANONYMOUS = 0,
  MEMBER = 1,
  EDITOR = 2,
  ADMINISTRATOR = 3
}


export interface IMutableUser {
  uid?: string;
  id?: string;
  role?: EUserRole;
  alias?: string
  mail?: string;
  name?: string;
  surname?: string;
  tel?: string;
}


export const UserRecord: IUser = {
  uid: null,
  id: null,
  role: EUserRole.ANONYMOUS,
  alias: null,
  mail: null,
  name: null,
  surname: null,
  tel: null,
};


@Injectable({providedIn: 'root'})
export class UserService {

  public user: BehaviorSubject<IUser> = new BehaviorSubject<IUser>(null);

  private backendURI: string = 'https://lastenrad-muenchen.de/core/php/backbone.php';

  constructor(
    private http: HttpClient,
    private modalSrv: ModalService,
    private cookieSrv: CookieService,
  ) {
  }

  public mutate(newUser: IMutableUser) {
    let oldUser = UserRecord;
    if (this.user.value) oldUser = this.user.value;

    for (let key in newUser) {
      if (oldUser.hasOwnProperty(key)) {
        oldUser[key] = newUser[key];
      }
    }

    this.user.next(oldUser);
  }

  public saveUser(user: IUser) {
    if (!user) {
      return;
    }

    this.http.post(
      this.backendURI + '?cmd=modifyUser&uid=' + this.getUID(), user)
      .subscribe((response: any) => {
        if (!response || response.error) {
          this.modalSrv.addModal({
            heading: 'Login Fehler',
            content: response ? response.error.message : 'Leider ist der Server aktuell nicht erreichbar.',
            type: 'ERROR',
            size: 'SMALL',
            actions: [
              {
                text: 'Schließen',
                type: 'ERROR',
                action: () => {
                  this.modalSrv.closeModal();
                },
              },
            ],
          });
        }

        if (response && response.success) {
          this.mutate({
            uid: response.success.uid,
            id: response.success.id,
            alias: response.success.alias,
            mail: response.success.email,
            name: response.success.name,
            surname: response.success.surname,
            tel: response.success.tel,
            role: response.success.role,
          });
        }
      });
  }

  public loginByUID() {
    this.http.get(
      this.backendURI + '?cmd=loginUser&uid=' + this.cookieSrv.get('uid'))
      .subscribe((response: any) => {
        if (!response || response.error) {
          this.modalSrv.addModal({
            heading: 'Login Fehler',
            content: response ? response.error.message : 'Leider ist der Server aktuell nicht erreichbar.',
            type: 'ERROR',
            size: 'SMALL',
            actions: [
              {
                text: 'Schließen',
                type: 'ERROR',
                action: () => {
                  this.modalSrv.closeModal();
                },
              },
            ],
          });
        }

        if (response && response.success) {
          this.mutate({
            uid: response.success.uid,
            id: response.success.id,
            alias: response.success.alias,
            mail: response.success.email,
            name: response.success.name,
            surname: response.success.surname,
            tel: response.success.tel,
            role: response.success.role,
          });
        }
      });
  }

  public login(user: string, pass: string, autoLogin: boolean) {
    let data = {email: user, pass: pass};

    this.http.post(
      this.backendURI + '?cmd=loginUser' + (autoLogin ? '&uid=' + this.cookieSrv.get('uid') : ''), data)
      .subscribe((response: any) => {
        if (!response || response.error) {
          this.modalSrv.addModal({
            heading: 'Login Fehler',
            content: response ? response.error.message : 'Leider ist der Server aktuell nicht erreichbar.',
            type: 'ERROR',
            size: 'SMALL',
            actions: [
              {
                text: 'Schließen',
                type: 'ERROR',
                action: () => {
                  this.modalSrv.closeModal();
                },
              },
            ],
          });
        }

        if (response && response.success) {
          this.mutate({
            uid: response.success.uid,
            id: response.success.id,
            alias: response.success.alias,
            mail: response.success.email,
            name: response.success.name,
            surname: response.success.surname,
            tel: response.success.tel,
            role: response.success.role,
          });

          if (autoLogin) {
            this.cookieSrv.set('uid', response.success.uid);
          } else {
            this.cookieSrv.set('uid', '');
          }
        }
      });
  }

  public getUID(): string {
    return this.user.value.uid;
  }

  public logout() {
    this.user.next(null);
    this.cookieSrv.set('uid', '');
  }

  public registerUser(data: any) {
    let error: string = null;

    if ('alias' in data && data.alias !== ''
      && 'name' in data && data.name !== ''
      && 'surname' in data && data.surname !== ''
      && 'tel' in data && data.tel !== ''
      && 'mail' in data && data.mail !== ''
      && 'mailC' in data && data.mailC !== ''
      && 'password' in data && data.password !== ''
      && 'passwordC' in data && data.passwordC !== ''
    ) {
      if (data.mail == data.mailC) {
        if (data.pass == data.passC) {

          this.http.post(
            this.backendURI + '?cmd=registerUser', data)
            .subscribe((response: any) => {
              if (!response || response.error) {
                this.modalSrv.addModal({
                  heading: 'Login Fehler',
                  content: response ? response.error.message : 'Leider ist der Server aktuell nicht erreichbar.',
                  type: 'ERROR',
                  size: 'SMALL',
                  actions: [
                    {
                      text: 'Schließen',
                      type: 'ERROR',
                      action: () => {
                        this.modalSrv.closeModal();
                      },
                    },
                  ],
                });
              }

              if (response && response.success) {
                this.login(response.success.mail, response.success.password, false);
              }
            });

        } else {
          error = 'Passwörter stimmen nicht überein.';
        }
      } else {
        error = 'E-Mail Adressen stimmen nicht überein.';
      }
    } else {
      error = 'Nicht alle Felder wurden ausgefüllt.';
    }


    if (error) {
      this.modalSrv.addModal({
        heading: 'Login',
        content: '<p>' + error + '</p>',
        size: 'SMALL',
        type: 'WARNING',
        actions: [
          {
            text: 'Ok',
            type: 'WARNING',
            action: () => {
              this.modalSrv.closeModal();
            },
          },
        ],
      });
    }
  }

  activateUser(token: string, uid: string) {
    return this.http.get('https://www.lastenrad-muenchen.de/activate.php?uid=' + uid + '&token=' + token);
  }
}
