import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';


@Injectable({providedIn: 'root'})
export class ScrollService {

  public scrollTop: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  constructor() {
  }

}
