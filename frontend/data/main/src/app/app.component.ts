import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { distinctUntilChanged, filter, map } from 'rxjs/operators';
import { ModalsService } from './shared/services/modals/modals.service';
import { clearAllBodyScrollLocks, disableBodyScroll } from 'body-scroll-lock';
import { ModalCode } from './shared/interfaces/modal-item';
import { ComponentType } from '@angular/cdk/overlay';
import { AppService } from './shared/services/app/app.service';
import { PopupCatalogItemComponent } from './modules/catalog/components/popup-catalog-item/popup-catalog-item.component';


@UntilDestroy()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  constructor(
    private activatedRoute: ActivatedRoute,
    private appService: AppService,
    private modalsService: ModalsService,
    private router: Router,
  ) {}


  // =========================================================================
  // --- Lifecycle Hooks -----------------------------------------------------
  // -------------------------------------------------------------------------

  public ngOnInit(): void {
    // Закроем все попапы после перехода на новый URL
    this.router.events
      .pipe(
        filter((e: NavigationStart) => e instanceof NavigationStart),
        map((e: NavigationStart) => (e.url || this.router.url).replace(/\?.+/, '')),
        distinctUntilChanged(),
        untilDestroyed(this)
      ).subscribe(() => this.modalsService.close());

    // Откроем попапы соответствующие текущему URL
    this.listenRouteForModals();

    // Блокируем скролл тела страницы, если открыты модалки
    this.lockBodyScroll();
  }


  public ngOnDestroy(): void {
  }


  // =========================================================================
  // --- Публичные и методы шаблона ------------------------------------------
  // -------------------------------------------------------------------------

  @HostListener('window:resize')
  public afterWindowResize(): void {
    this.appService.windowResize.next(true);
  }


  @HostListener('window:scroll')
  public afterWindowScroll(): void {
    this.appService.windowScroll.next(true);
  }


  // =========================================================================
  // --- Вспомогательные методы ----------------------------------------------
  // -------------------------------------------------------------------------


  /**
   * Метод слушает изменение GET-параметров в URL,
   * и когда находит параметр подходящий для открытия попапа,
   * открывает его с передачей значения в code
   */
  private listenRouteForModals(): void {
    const queryParamToModalMap: Record<ModalCode, ComponentType<unknown>> = {
      'catalog-item': PopupCatalogItemComponent,
    };

    this.activatedRoute.queryParams
      .pipe(untilDestroyed(this))
      .subscribe(params => {
        let noOneKnownModalsInParams = true;

        Object.keys(params).forEach(paramName => {
          const modalCmp = queryParamToModalMap[paramName];
          if (!modalCmp) { return; }

          noOneKnownModalsInParams = false;
          this.modalsService.open(paramName, modalCmp, { code: params[paramName] });
        });

        if (noOneKnownModalsInParams) {
          Object
            .keys(queryParamToModalMap)
            .forEach(modalCode => this.modalsService.close(modalCode));
        }
      });
  }


  private lockBodyScroll(): void {
    this.modalsService.getEvent()
      .pipe(untilDestroyed(this))
      .subscribe(modals => {
        if (modals.length > 0) {
          const target = document.querySelector('.cdk-overlay-container > div:last-child .popup-wrapper');

          if (target) {
            disableBodyScroll(target);
            return;
          }
        }

        clearAllBodyScrollLocks();
      });
  }
}
