import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, fromEvent, Observable, Subject } from 'rxjs';

import { AppService } from '../app/app.service';
import { ModalCode, ModalItem } from '../../interfaces/modal-item';


@Injectable({
  providedIn: 'root'
})
export class ModalsService {
  private readonly animationDurationOut = 100;
  private animationOutTimeout: any;
  private readonly closeEvent = new Subject<ModalItem>();
  private escapeLocked: boolean;
  private readonly event = new BehaviorSubject<ModalItem[]>([]);
  private isShow: boolean;


  constructor(
    private appService: AppService,
    private overlay: Overlay,
    private router: Router,
  ) {
    this.checkLayoutForModals();

    fromEvent(document, 'keyup').subscribe((event: KeyboardEvent) => this.onKeyDown(event));
  }


  /**
   * Метод возвращает подписчик на событие открытия/закрытия попапа
   */
  public getEvent(): Observable<ModalItem[]> {
    return this.event.asObservable();
  }


  /**
   * Метод возвращает событие закрытия попапа
   */
  public getCloseEvent(): Observable<ModalItem> {
    return this.closeEvent.asObservable();
  }


  /**
   * Метод, открывающий попап.
   * Если попап такого типа уже открыт, то обновляется информация о нем
   */
  public open(code: ModalCode, component, data?: any): void {
    const currentModals = this.event.getValue();
    const existModalIndex = currentModals.findIndex(x => x.code === code);

    const overlayRef = this.overlay.create({ height: '100%', width: '100%' });
    const portal = new ComponentPortal(component);
    const popupElementRef = overlayRef.attach(portal);

    const newModal: ModalItem = {code, overlayRef, data};

    const componentInstance: any & { modalItem: ModalItem } = popupElementRef.instance;
    componentInstance.modalItem = newModal;

    if (existModalIndex >= 0) {
      this.close(code, true);

      currentModals[existModalIndex] = newModal;
      this.event.next(currentModals);

    } else {
      this.event.next([...this.event.getValue(), newModal]);
    }
  }


  /**
   * Закрытие попапа
   */
  public close(code?: ModalCode, saveQueryParam?: boolean): void {
    const modals = this.event.getValue();
    if (!(modals && modals.length)) { return; }

    if (code) {
      const removeModalIndex = modals.findIndex(x => x.code === code);

      if (removeModalIndex >= 0) {
        modals[removeModalIndex].overlayRef.dispose();
        this.closeEvent.next(modals[removeModalIndex]);

        modals.splice(removeModalIndex, 1);
        this.event.next(modals);

        if (!saveQueryParam) {
          this.removeKeyFromUrl(code);
        }
      }

    } else {
      modals.forEach(modal => {
        if (!saveQueryParam) {
          this.removeKeyFromUrl(modal.code);
        }

        modal.overlayRef.dispose();
      });
      this.event.next([]);
    }
  }


  public checkLayoutForModals(): void {
    this.getEvent()
      .subscribe(() => {
        this.isShow = !!this.event.value.length;
        clearTimeout(this.animationOutTimeout);
        const modalOpenClass = 'modal-open';

        if (this.isShow) {
          document.body.classList.add(modalOpenClass);
          setTimeout(() => document.body.getBoundingClientRect());

        } else {
          this.animationOutTimeout = setTimeout(() => {
            document.body.classList.remove(modalOpenClass);
          }, this.animationDurationOut);
        }
      });
  }


  public lockEscape(status: boolean): void {
    this.escapeLocked = status;
  }


  /**
   * Обработка нажатий клавиш
   * Escape - Закрывает попап
   */
  private onKeyDown(event: KeyboardEvent): void {
    if ((event.key === 'Escape' || event.key === 'Esc') && !this.escapeLocked) {
      const currentModals = this.event.getValue();
      if (!currentModals.length) { return; }

      const lastModal = currentModals[currentModals.length - 1];

      if (lastModal && lastModal.code) {
        this.close(lastModal.code);
      } else {
        this.close();
      }
    }
  }


  private removeKeyFromUrl(code: ModalCode): void {
    this.appService.pageAutoScrollTop = false;
    this.router
      .navigate([], { queryParams: { [code]: undefined }, queryParamsHandling: 'merge' })
      .then(() => this.appService.pageAutoScrollTop = true);
  }

}
