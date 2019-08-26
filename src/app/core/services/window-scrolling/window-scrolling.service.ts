import {Injectable} from '@angular/core';


@Injectable({providedIn: 'root'})
export class WindowScrollingService {

  private readonly styleTag: HTMLStyleElement;

  constructor() {
    this.styleTag = WindowScrollingService.buildStyleElement();
  }

  private static buildStyleElement(): HTMLStyleElement {
    const style = document.createElement('style');

    style.type = 'text/css';
    style.id = 'window-scrolling-service';
    style.textContent = 'body{overflow:hidden!important;}';

    return style;
  }

  public disable(): void {
    document.body.appendChild(this.styleTag);
  }

  public enable(): void {
    if (document.getElementById('window-scrolling-service')) {
      document.body.removeChild(this.styleTag);
    }
  }
}
