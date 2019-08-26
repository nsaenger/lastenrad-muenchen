import {
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  ElementRef,
  OnInit,
  Type,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {IModal, ModalService} from '@app/core/services/modal.service';


@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

  @ViewChild('modalContent', {static: true, read: ViewContainerRef}) modalContent: ViewContainerRef;
  @ViewChild('modalStringContent', {static: true}) modalStringContent: ElementRef;

  public componentRef: ComponentRef<Type<any>>;
  public factory: ComponentFactory<Type<any>>;
  public contentAsString: boolean = true;

  public activeModal: IModal = null;

  constructor(
    private modalSrv: ModalService,
    private sanitize: DomSanitizer,
    private resolver: ComponentFactoryResolver,
  ) {
  }

  ngOnInit() {
    this.modalSrv.modalQueue.subscribe(
      (queue) => {
        if (queue.length > 0) {
          if (!this.activeModal) {
            this.activeModal = queue[0];

            this.contentAsString = typeof (this.activeModal.content) == 'string';

            if (this.contentAsString) {
              this.modalStringContent.nativeElement.innerHTML = this.activeModal.content as string;
            } else {
              this.modalStringContent.nativeElement.innerHTML = '';
              this.modalContent.clear();
              this.factory = this.resolver.resolveComponentFactory(this.activeModal.content as Type<any>);
              this.componentRef = this.modalContent.createComponent(this.factory);
            }
          }
        } else {
          this.activeModal = null;
          if (this.componentRef) this.componentRef.destroy();
        }
      });
  }

  closeModal() {
    if (this.componentRef) this.componentRef.destroy();
    this.modalSrv.closeModal();
  }

  executeAction(action: ((v: any) => void)) {
    const contentNode = this.modalStringContent.nativeElement;
    const inputs = contentNode.querySelectorAll('input');

    action(inputs);

    this.closeModal();
  }
}
