import {Component} from '@angular/core';
import {ScrollService} from '@app/core/services/scroll/scroll.service';


@Component({
  selector: 'scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.scss'],
})
export class ScrollToTopComponent {

  constructor(
    private scrollSrv: ScrollService,
  ) {
  }

  public scrollToTop() {
    this.scrollSrv.scrollTop.next(0);
  }
}
