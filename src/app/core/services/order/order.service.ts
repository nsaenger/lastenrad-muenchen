import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ModalService} from '../modal.service';
import {IStation, StationService} from '../station/station.service';
import {UserService} from '../user/user.service';


export interface IOrder {
  id?: number,
  alias: string,
  day: Date
}


@Injectable({providedIn: 'root'})
export class OrderService {

  private backendURI: string = 'https://lastenrad-muenchen.de/core/php/backbone.php';

  constructor(
    private modalSrv: ModalService,
    private http: HttpClient,
    private userSrv: UserService,
    private stationSrv: StationService,
  ) {
  }

  addOrder(order: IOrder, station: IStation) {
    if (!order.alias || !order.day) return false;

    this.modalSrv.addModal({
      heading: 'Buchen',
      content: '<p class="align-center">Bist du dir sicher, dass du daniel am <br><b>' + order.day.toLocaleDateString() + '</b><br> buchen möchtest?</p>',
      size: 'SMALL',
      type: 'DEFAULT',
      actions: [
        {
          text: 'Buchen',
          type: 'SUCCESS',
          action: () => {
            this.modalSrv.closeModal();
            this.sendOrderToServer(order, station);
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
  }

  removeOrder(order: IOrder, station: IStation) {
    if (!order.alias || !order.day) return false;

    this.modalSrv.addModal({
      heading: 'Buchen',
      content: '<p class="align-center">Bist du dir sicher, dass du deine Buchung stornieren möchtest?</p>',
      size: 'SMALL',
      type: 'DEFAULT',
      actions: [
        {
          text: 'Stornieren',
          type: 'SUCCESS',
          action: () => {
            this.modalSrv.closeModal();
            this.sendCancelToServer(order, station);
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
  }

  sendOrderToServer(order: IOrder, station: IStation) {
    let data = {
      day: order.day.getDate() + '.' + (order.day.getMonth() + 1) + '.' + order.day.getFullYear(),
      stat: station.id,
    };

    this.http.post(this.backendURI + '?cmd=orderDay&uid=' + this.userSrv.getUID(), data).subscribe((response: any) => {

      if (!response || response.error) {
        this.modalSrv.addModal({
          heading: 'Buchungsfehler',
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
        this.stationSrv.load();
      }
    });
  }

  sendCancelToServer(order: IOrder, station: IStation) {
    let data = {
      day: order.day.getDate() + '.' + (order.day.getMonth() + 1) + '.' + order.day.getFullYear(),
      stat: station.id,
    };

    this.http.post(this.backendURI + '?cmd=cancelOrder&uid=' + this.userSrv.getUID(), data).subscribe((response: any) => {

      if (!response || response.error) {
        this.modalSrv.addModal({
          heading: 'Buchungsfehler',
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
        this.stationSrv.load();
      }
    });
  }
}
