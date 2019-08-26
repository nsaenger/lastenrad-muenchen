import {Injectable} from '@angular/core';
import {ActivatedRoute} from '@angular/router';


@Injectable({providedIn: 'root'})
export class UrlService {

  constructor() {
  }


  public static getRouteFromRoot(route: ActivatedRoute[]): string {
    let url = '/';

    for (let r of route) {
      let tmp: any = r.url;
      url += tmp.value[0].path;
    }

    return url;
  }

}
