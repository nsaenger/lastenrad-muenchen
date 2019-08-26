import {Component, ElementRef, HostBinding, Input, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ContentService} from '@app/core/services/content/content.service';
import {EditorService} from '@app/core/services/editor/editor.service';
import {UrlService} from '@app/core/services/url/url.service';


@Component({
  selector: 'page-section',
  templateUrl: './page-section.component.html',
  styleUrls: ['./page-section.component.scss'],
})
export class PageSectionComponent implements OnInit {

  @HostBinding('class.parallax') hostParallaxBinding: boolean = false;

  @ViewChild('pageContent', {static: true}) pageContent: HTMLElement;

  @Input() public parallax: boolean = false;
  @Input() public parallaxImage: string = '';
  @Input() public bttButton: boolean = true;
  @Input() public columns: number = 1;
  @Input() public clickHandler: (event: MouseEvent) => void;
  @Input() public contentID: string = null;
  @Input() public editable: boolean = true;

  public content: string = null;

  public editMode: boolean = false;
  public currentUri: string = '';

  constructor(
    public route: ActivatedRoute,
    private elementRef: ElementRef,
    private contentSrv: ContentService,
    private editorSrv: EditorService,
    private router: Router,
  ) {
    this.currentUri = UrlService.getRouteFromRoot(route.pathFromRoot);
    this.contentSrv.editMode.subscribe(active => this.editMode = active && this.editable);
  }

  ngOnInit() {
    this.contentSrv.content.subscribe((contents) => {
      if (contents) {
        this.content = contents[this.contentID];
      }
    });

    this.hostParallaxBinding = this.parallax;
  }

  onClick(event: MouseEvent) {
    if (!this.editMode) {
      const target: HTMLElement = event.target as HTMLElement;

      // Handle (click)-Handler
      if (this.clickHandler) {
        if (target.hasAttribute('(click)')) {
          this.clickHandler(event);
        }
      }

      // Handle [routerLink]-Links
      if (target.hasAttribute('[routerlink]')) {
        const link = target.getAttribute('[routerlink]');
        if (link) this.router.navigateByUrl(link).then();
      }

    } else {
      this.editorSrv.open(this.contentID);
    }
  }

}
