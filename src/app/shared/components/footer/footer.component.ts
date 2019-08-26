import {Component, OnInit} from '@angular/core';
import {ScrollService} from '@app/core/services/scroll/scroll.service';
import {environment} from '@env/environment';


@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  public version: string = environment.package.version;
  public author: string = environment.package.author;

  constructor(
    private scrollSrv: ScrollService,
  ) {
  }

  ngOnInit() {
  }

  public scrollTop() {
    this.scrollSrv.scrollTop.next(0);
  }

  public getYear() {
    return new Date().getUTCFullYear();
  }
}
