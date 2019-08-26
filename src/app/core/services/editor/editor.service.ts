import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {ContentService, IMutableContent} from '../content/content.service';


@Injectable({providedIn: 'root'})
export class EditorService {

  public visible: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public content: BehaviorSubject<string> = new BehaviorSubject<string>(null);

  public contentID: string;

  constructor(
    private contentSrv: ContentService,
  ) {
  }

  public open(contentID: string) {
    this.contentID = contentID;
    this.content.next(this.contentSrv.content.value[this.contentID]);
    this.visible.next(true);
  }

  public save(content: string) {
    const newContent: IMutableContent = new Object({}) as IMutableContent;
    newContent[this.contentID] = content;

    this.contentID = null;
    this.content.next(null);
    this.visible.next(false);
    this.contentSrv.mutate(newContent);
  }

  public discard() {
    this.contentID = null;
    this.content.next(null);
    this.visible.next(false);
  }


  private htmlDecode(input: string) {
    const e = document.createElement('div');
    e.innerHTML = input;
    return e.childNodes.length === 0 ? '' : e.childNodes[0].nodeValue;
  }
}
