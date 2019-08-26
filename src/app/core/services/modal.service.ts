import {Injectable, Type} from '@angular/core';
import {BehaviorSubject} from 'rxjs';


export interface IModal {
  heading: string;
  content: string | Type<any>;
  size: 'SMALL' | 'MEDIUM' | 'LARGE';
  type: 'DEFAULT' | 'SUCCESS' | 'WARNING' | 'ERROR';
  actions?: IModalAction[];
}


export interface IModalAction {
  text: string;
  type: 'DEFAULT' | 'SUCCESS' | 'WARNING' | 'ERROR';
  action: ((v: any) => void);
}


@Injectable({providedIn: 'root'})
export class ModalService {

  public modalQueue: BehaviorSubject<IModal[]> = new BehaviorSubject<IModal[]>([]);

  constructor() {
  }

  public closeModal(index: number = -1) {
    let oldQueue: IModal[] = this.modalQueue.value;

    if (oldQueue.length <= 1 || index === -1) {
      oldQueue = [];
    } else {
      oldQueue = oldQueue.splice(index, 1);
    }

    this.modalQueue.next(oldQueue);
  }

  public addModal(modal: IModal) {
    let oldQueue: IModal[] = this.modalQueue.value;

    oldQueue.push(modal);

    this.modalQueue.next(oldQueue);
  }

}
