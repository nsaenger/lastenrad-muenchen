import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {ModalService} from '../modal.service';
import {IOrder} from '../order/order.service';


export interface IStation {
  id: number,
  email: string,
  tel: string,
  name: string,
  info: string,

  plz: string,
  str: string,
  times: string,
  web: string,

  openDays: number[],
  week: number[],
  year: number,
  orders: IOrder[]
}


const StationRecord: IStation = {
  id: null,
  email: null,
  tel: null,
  name: null,
  info: null,

  plz: null,
  str: null,
  times: null,
  web: null,

  openDays: [],
  week: [],
  year: null,
  orders: [],
};


@Injectable({providedIn: 'root'})
export class StationService {

  public stations: BehaviorSubject<IStation[]> = new BehaviorSubject<IStation[]>([]);

  private backendURI: string = 'https://lastenrad-muenchen.de/core/php/backbone.php';

  constructor(
    private http: HttpClient,
    private modalSrv: ModalService,
  ) {
  }

  public load() {
    this.http.get(this.backendURI + '?cmd=getStations')
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
          this.stations.next(this.parseStations(response.success));
        }
      });
  }


  private parseStations(ResponseArray: any[]): IStation[] {
    let cleanStations: IStation[] = [];
    for (let response of ResponseArray) {
      cleanStations.push({
        id: Number(response.station.id),
        email: response.station.email,
        tel: response.station.tel,
        name: response.station.name,
        info: response.station.info,

        plz: response.station.plz,
        str: response.station.str,
        times: response.station.times,
        web: response.station.web,

        openDays: JSON.parse(response.station.openDays).map((value: any) => Number(value)),
        week: JSON.parse(response.station.week).map((value: any) => Number(value)),
        year: response.station.year,
        orders: this.parseOrders(response.orders),
      });
    }

    return cleanStations;
  }

  private parseOrders(orders: any[]): IOrder[] {
    let cleanOrders: IOrder[] = [];

    for (let order of orders) {
      let dateParts = order.day.split('.');

      cleanOrders.push({
        id: Number(order.id),
        alias: order.alias,
        day: new Date(dateParts[2] + '-' + dateParts[1] + '-' + dateParts[0]),
      });
    }

    return cleanOrders;
  }
}
