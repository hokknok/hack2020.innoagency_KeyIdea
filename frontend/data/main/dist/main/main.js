(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/fidget/Web/hack/keyidea/data/main/src/main.ts */"zUnb");


/***/ }),

/***/ "Aab4":
/*!*************************************************************************!*\
  !*** ./src/app/shared/components/layout-header/layout-header.module.ts ***!
  \*************************************************************************/
/*! exports provided: LayoutHeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutHeaderModule", function() { return LayoutHeaderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _layout_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout-header.component */ "HPF8");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





class LayoutHeaderModule {
}
LayoutHeaderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LayoutHeaderModule });
LayoutHeaderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LayoutHeaderModule_Factory(t) { return new (t || LayoutHeaderModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LayoutHeaderModule, { declarations: [_layout_header_component__WEBPACK_IMPORTED_MODULE_2__["LayoutHeaderComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]], exports: [_layout_header_component__WEBPACK_IMPORTED_MODULE_2__["LayoutHeaderComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutHeaderModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_layout_header_component__WEBPACK_IMPORTED_MODULE_2__["LayoutHeaderComponent"]],
                exports: [
                    _layout_header_component__WEBPACK_IMPORTED_MODULE_2__["LayoutHeaderComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    hmr: true,
    apiUrl: 'http://ee9464b53f99.ngrok.io',
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "HPF8":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/layout-header/layout-header.component.ts ***!
  \****************************************************************************/
/*! exports provided: LayoutHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutHeaderComponent", function() { return LayoutHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




function LayoutHeaderComponent_nav_6_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", item_r2.path)("innerHTML", item_r2.text, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function LayoutHeaderComponent_nav_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LayoutHeaderComponent_nav_6_li_2_Template, 2, 2, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.menu);
} }
class LayoutHeaderComponent {
    constructor() {
        this.menu = [
            {
                text: 'Главная',
                path: '/',
            },
            {
                text: 'Анализ места',
                path: '/analysis',
            },
        ];
    }
    ngOnInit() {
    }
}
LayoutHeaderComponent.ɵfac = function LayoutHeaderComponent_Factory(t) { return new (t || LayoutHeaderComponent)(); };
LayoutHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LayoutHeaderComponent, selectors: [["app-layout-header"]], decls: 7, vars: 1, consts: [[1, "header"], [1, "container"], [1, "header-wrp"], [1, "header-logo"], ["class", "header-nav", 4, "ngIf"], [1, "header-nav"], [1, "header-nav__list"], ["class", "header-nav__item", 4, "ngFor", "ngForOf"], [1, "header-nav__item"], ["routerLinkActive", "header-nav__link_active", 1, "header-nav__link", 3, "routerLink", "innerHTML"]], template: function LayoutHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "KeyIdea");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, LayoutHeaderComponent_nav_6_Template, 3, 1, "nav", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.menu);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]], styles: [".header[_ngcontent-%COMP%] {\n  background-color: var(--color-grey_20);\n}\n\n.header-wrp[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1rem;\n}\n\n.header-nav__list[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n}\n\n.header-nav__link_active[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbGF5b3V0LWhlYWRlci9sYXlvdXQtaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0NBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQUNGOztBQUdFO0VBQ0UsYUFBQTtFQUNBLFNBQUE7QUFBSjs7QUFJSTtFQUNFLGlCQUFBO0FBRk4iLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9sYXlvdXQtaGVhZGVyL2xheW91dC1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZ3JleV8yMCk7XG59XG5cbi5oZWFkZXItd3JwIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxcmVtO1xufVxuXG4uaGVhZGVyLW5hdiB7XG4gICZfX2xpc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxcmVtO1xuICB9XG5cbiAgJl9fbGluayB7XG4gICAgJl9hY3RpdmUge1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-layout-header',
                templateUrl: './layout-header.component.html',
                styleUrls: ['./layout-header.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngneat/until-destroy */ "VfN6");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var body_scroll_lock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! body-scroll-lock */ "4YED");
/* harmony import */ var _modules_catalog_components_popup_catalog_item_popup_catalog_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/catalog/components/popup-catalog-item/popup-catalog-item.component */ "U3s0");
/* harmony import */ var _shared_services_app_app_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/services/app/app.service */ "SzhW");
/* harmony import */ var _shared_services_modals_modals_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/services/modals/modals.service */ "WHUj");
/* harmony import */ var _shared_components_layout_header_layout_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/components/layout-header/layout-header.component */ "HPF8");
/* harmony import */ var _shared_components_layout_footer_layout_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/components/layout-footer/layout-footer.component */ "muLF");













let AppComponent = class AppComponent {
    constructor(activatedRoute, appService, modalsService, router) {
        this.activatedRoute = activatedRoute;
        this.appService = appService;
        this.modalsService = modalsService;
        this.router = router;
    }
    // =========================================================================
    // --- Lifecycle Hooks -----------------------------------------------------
    // -------------------------------------------------------------------------
    ngOnInit() {
        // Закроем все попапы после перехода на новый URL
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((e) => e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((e) => (e.url || this.router.url).replace(/\?.+/, '')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(), Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__["untilDestroyed"])(this)).subscribe(() => this.modalsService.close());
        // Откроем попапы соответствующие текущему URL
        this.listenRouteForModals();
        // Блокируем скролл тела страницы, если открыты модалки
        this.lockBodyScroll();
    }
    ngOnDestroy() {
    }
    // =========================================================================
    // --- Публичные и методы шаблона ------------------------------------------
    // -------------------------------------------------------------------------
    afterWindowResize() {
        this.appService.windowResize.next(true);
    }
    afterWindowScroll() {
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
    listenRouteForModals() {
        const queryParamToModalMap = {
            'catalog-item': _modules_catalog_components_popup_catalog_item_popup_catalog_item_component__WEBPACK_IMPORTED_MODULE_6__["PopupCatalogItemComponent"],
        };
        this.activatedRoute.queryParams
            .pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__["untilDestroyed"])(this))
            .subscribe(params => {
            let noOneKnownModalsInParams = true;
            Object.keys(params).forEach(paramName => {
                const modalCmp = queryParamToModalMap[paramName];
                if (!modalCmp) {
                    return;
                }
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
    lockBodyScroll() {
        this.modalsService.getEvent()
            .pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__["untilDestroyed"])(this))
            .subscribe(modals => {
            if (modals.length > 0) {
                const target = document.querySelector('.cdk-overlay-container > div:last-child .popup-wrapper');
                if (target) {
                    Object(body_scroll_lock__WEBPACK_IMPORTED_MODULE_5__["disableBodyScroll"])(target);
                    return;
                }
            }
            Object(body_scroll_lock__WEBPACK_IMPORTED_MODULE_5__["clearAllBodyScrollLocks"])();
        });
    }
};
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_app_app_service__WEBPACK_IMPORTED_MODULE_7__["AppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_modals_modals_service__WEBPACK_IMPORTED_MODULE_8__["ModalsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], hostBindings: function AppComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function AppComponent_resize_HostBindingHandler() { return ctx.afterWindowResize(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"])("scroll", function AppComponent_scroll_HostBindingHandler() { return ctx.afterWindowScroll(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
    } }, decls: 5, vars: 0, consts: [[1, "app-page"], [1, "main"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-layout-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "main", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-layout-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_shared_components_layout_header_layout_header_component__WEBPACK_IMPORTED_MODULE_9__["LayoutHeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _shared_components_layout_footer_layout_footer_component__WEBPACK_IMPORTED_MODULE_10__["LayoutFooterComponent"]], styles: [".main[_ngcontent-%COMP%] {\n  margin: 2rem 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4ge1xuICBtYXJnaW46IDJyZW0gMDtcbn1cbiJdfQ== */"] });
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__["UntilDestroy"])()
], AppComponent);

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _shared_services_app_app_service__WEBPACK_IMPORTED_MODULE_7__["AppService"] }, { type: _shared_services_modals_modals_service__WEBPACK_IMPORTED_MODULE_8__["ModalsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, { afterWindowResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['window:resize']
        }], afterWindowScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
            args: ['window:scroll']
        }] }); })();


/***/ }),

/***/ "SzhW":
/*!****************************************************!*\
  !*** ./src/app/shared/services/app/app.service.ts ***!
  \****************************************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AppService {
    constructor(router) {
        this.router = router;
        this.pageAutoScrollTop = true;
        this.windowResize = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](true);
        this.windowScroll = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](true);
        this.pageTheme = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('default');
    }
    getPageTheme() {
        return this.pageTheme.asObservable();
    }
    setPageTheme(theme) {
        this.pageTheme.next(theme);
    }
    /**
     * Метод открывает страницу 404 на месте текущего URL
     */
    goTo404() {
        return this.router.navigate(['/', '404'], { skipLocationChange: true });
    }
}
AppService.ɵfac = function AppService_Factory(t) { return new (t || AppService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AppService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AppService, factory: AppService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "TInf":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/popup-default/popup-default.component.ts ***!
  \****************************************************************************/
/*! exports provided: PopupDefaultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupDefaultComponent", function() { return PopupDefaultComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-take-until-destroy */ "DnKK");
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngneat/until-destroy */ "VfN6");
/* harmony import */ var _services_modals_modals_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/modals/modals.service */ "WHUj");










const _c0 = ["popupScrollWrapperRef"];
const _c1 = ["*"];
let PopupDefaultComponent = class PopupDefaultComponent {
    constructor(modalsService) {
        this.modalsService = modalsService;
        this.afterInit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.modalsService.getEvent().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(modals => modals.find(x => x.code === this.popupCode)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(x => !!x), Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_3__["untilDestroyed"])(this)).subscribe(modal => this.afterInit.emit(modal));
    }
    ngOnDestroy() {
    }
    close() {
        this.modalsService.close(this.popupCode);
    }
};
PopupDefaultComponent.ɵfac = function PopupDefaultComponent_Factory(t) { return new (t || PopupDefaultComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_modals_modals_service__WEBPACK_IMPORTED_MODULE_5__["ModalsService"])); };
PopupDefaultComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PopupDefaultComponent, selectors: [["app-popup-default"]], viewQuery: function PopupDefaultComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.popupScrollWrapperRef = _t.first);
    } }, inputs: { dataLoaded: "dataLoaded", popupCode: "popupCode" }, outputs: { afterInit: "afterInit" }, ngContentSelectors: _c1, decls: 4, vars: 0, consts: [[1, "popup__close", 3, "click"]], template: function PopupDefaultComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PopupDefaultComponent_Template_div_click_1_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3BvcHVwLWRlZmF1bHQvcG9wdXAtZGVmYXVsdC5jb21wb25lbnQuc2NzcyJ9 */"] });
PopupDefaultComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__["UntilDestroy"])()
], PopupDefaultComponent);

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PopupDefaultComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-popup-default',
                templateUrl: './popup-default.component.html',
                styleUrls: ['./popup-default.component.scss']
            }]
    }], function () { return [{ type: _services_modals_modals_service__WEBPACK_IMPORTED_MODULE_5__["ModalsService"] }]; }, { dataLoaded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], popupCode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], afterInit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], popupScrollWrapperRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['popupScrollWrapperRef', { static: true }]
        }] }); })();


/***/ }),

/***/ "U3s0":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/catalog/components/popup-catalog-item/popup-catalog-item.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: PopupCatalogItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupCatalogItemComponent", function() { return PopupCatalogItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_components_popup_default_popup_default_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/popup-default/popup-default.component */ "TInf");



class PopupCatalogItemComponent {
    constructor() { }
    ngOnInit() {
    }
}
PopupCatalogItemComponent.ɵfac = function PopupCatalogItemComponent_Factory(t) { return new (t || PopupCatalogItemComponent)(); };
PopupCatalogItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PopupCatalogItemComponent, selectors: [["app-popup-catalog-item"]], decls: 3, vars: 0, template: function PopupCatalogItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-popup-default");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "popup-catalog-item works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_components_popup_default_popup_default_component__WEBPACK_IMPORTED_MODULE_1__["PopupDefaultComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY2F0YWxvZy9jb21wb25lbnRzL3BvcHVwLWNhdGFsb2ctaXRlbS9wb3B1cC1jYXRhbG9nLWl0ZW0uY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopupCatalogItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-popup-catalog-item',
                templateUrl: './popup-catalog-item.component.html',
                styleUrls: ['./popup-catalog-item.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "VQjN":
/*!*************************************************************************!*\
  !*** ./src/app/shared/components/popup-default/popup-default.module.ts ***!
  \*************************************************************************/
/*! exports provided: PopupDefaultModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupDefaultModule", function() { return PopupDefaultModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _popup_default_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popup-default.component */ "TInf");




class PopupDefaultModule {
}
PopupDefaultModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PopupDefaultModule });
PopupDefaultModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PopupDefaultModule_Factory(t) { return new (t || PopupDefaultModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PopupDefaultModule, { declarations: [_popup_default_component__WEBPACK_IMPORTED_MODULE_2__["PopupDefaultComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_popup_default_component__WEBPACK_IMPORTED_MODULE_2__["PopupDefaultComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PopupDefaultModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_popup_default_component__WEBPACK_IMPORTED_MODULE_2__["PopupDefaultComponent"]],
                exports: [
                    _popup_default_component__WEBPACK_IMPORTED_MODULE_2__["PopupDefaultComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "WHUj":
/*!**********************************************************!*\
  !*** ./src/app/shared/services/modals/modals.service.ts ***!
  \**********************************************************/
/*! exports provided: ModalsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalsService", function() { return ModalsService; });
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/portal */ "+rOU");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _app_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/app.service */ "SzhW");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/overlay */ "rDax");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");







class ModalsService {
    constructor(appService, overlay, router) {
        this.appService = appService;
        this.overlay = overlay;
        this.router = router;
        this.animationDurationOut = 100;
        this.closeEvent = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.event = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.checkLayoutForModals();
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(document, 'keyup').subscribe((event) => this.onKeyDown(event));
    }
    /**
     * Метод возвращает подписчик на событие открытия/закрытия попапа
     */
    getEvent() {
        return this.event.asObservable();
    }
    /**
     * Метод возвращает событие закрытия попапа
     */
    getCloseEvent() {
        return this.closeEvent.asObservable();
    }
    /**
     * Метод, открывающий попап.
     * Если попап такого типа уже открыт, то обновляется информация о нем
     */
    open(code, component, data) {
        const currentModals = this.event.getValue();
        const existModalIndex = currentModals.findIndex(x => x.code === code);
        const overlayRef = this.overlay.create({ height: '100%', width: '100%' });
        const portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_0__["ComponentPortal"](component);
        const popupElementRef = overlayRef.attach(portal);
        const newModal = { code, overlayRef, data };
        const componentInstance = popupElementRef.instance;
        componentInstance.modalItem = newModal;
        if (existModalIndex >= 0) {
            this.close(code, true);
            currentModals[existModalIndex] = newModal;
            this.event.next(currentModals);
        }
        else {
            this.event.next([...this.event.getValue(), newModal]);
        }
    }
    /**
     * Закрытие попапа
     */
    close(code, saveQueryParam) {
        const modals = this.event.getValue();
        if (!(modals && modals.length)) {
            return;
        }
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
        }
        else {
            modals.forEach(modal => {
                if (!saveQueryParam) {
                    this.removeKeyFromUrl(modal.code);
                }
                modal.overlayRef.dispose();
            });
            this.event.next([]);
        }
    }
    checkLayoutForModals() {
        this.getEvent()
            .subscribe(() => {
            this.isShow = !!this.event.value.length;
            clearTimeout(this.animationOutTimeout);
            const modalOpenClass = 'modal-open';
            if (this.isShow) {
                document.body.classList.add(modalOpenClass);
                setTimeout(() => document.body.getBoundingClientRect());
            }
            else {
                this.animationOutTimeout = setTimeout(() => {
                    document.body.classList.remove(modalOpenClass);
                }, this.animationDurationOut);
            }
        });
    }
    lockEscape(status) {
        this.escapeLocked = status;
    }
    /**
     * Обработка нажатий клавиш
     * Escape - Закрывает попап
     */
    onKeyDown(event) {
        if ((event.key === 'Escape' || event.key === 'Esc') && !this.escapeLocked) {
            const currentModals = this.event.getValue();
            if (!currentModals.length) {
                return;
            }
            const lastModal = currentModals[currentModals.length - 1];
            if (lastModal && lastModal.code) {
                this.close(lastModal.code);
            }
            else {
                this.close();
            }
        }
    }
    removeKeyFromUrl(code) {
        this.appService.pageAutoScrollTop = false;
        this.router
            .navigate([], { queryParams: { [code]: undefined }, queryParamsHandling: 'merge' })
            .then(() => this.appService.pageAutoScrollTop = true);
    }
}
ModalsService.ɵfac = function ModalsService_Factory(t) { return new (t || ModalsService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_app_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
ModalsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ModalsService, factory: ModalsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ModalsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _app_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"] }, { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__["Overlay"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "Z9Cr":
/*!****************************************************!*\
  !*** ./src/app/shared/services/services.module.ts ***!
  \****************************************************/
/*! exports provided: ServicesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesModule", function() { return ServicesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



class ServicesModule {
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
    }
}
ServicesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ServicesModule });
ServicesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ServicesModule_Factory(t) { return new (t || ServicesModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ServicesModule, 12)); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ServicesModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServicesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ]
            }]
    }], function () { return [{ type: ServicesModule, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _shared_components_layout_header_layout_header_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/components/layout-header/layout-header.module */ "Aab4");
/* harmony import */ var _shared_components_layout_footer_layout_footer_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/components/layout-footer/layout-footer.module */ "ZSma");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _shared_services_services_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/services/services.module */ "Z9Cr");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/overlay */ "rDax");
/* harmony import */ var _modules_catalog_components_popup_catalog_item_popup_catalog_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/catalog/components/popup-catalog-item/popup-catalog-item.component */ "U3s0");
/* harmony import */ var _shared_components_popup_default_popup_default_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/components/popup-default/popup-default.module */ "VQjN");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-apexcharts */ "CV0D");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "3Pt+");














class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_11__["NgApexchartsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _shared_services_services_module__WEBPACK_IMPORTED_MODULE_7__["ServicesModule"],
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["OverlayModule"],
            _shared_components_layout_header_layout_header_module__WEBPACK_IMPORTED_MODULE_4__["LayoutHeaderModule"],
            _shared_components_layout_footer_layout_footer_module__WEBPACK_IMPORTED_MODULE_5__["LayoutFooterModule"],
            _shared_components_popup_default_popup_default_module__WEBPACK_IMPORTED_MODULE_10__["PopupDefaultModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _modules_catalog_components_popup_catalog_item_popup_catalog_item_component__WEBPACK_IMPORTED_MODULE_9__["PopupCatalogItemComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
        ng_apexcharts__WEBPACK_IMPORTED_MODULE_11__["NgApexchartsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
        _shared_services_services_module__WEBPACK_IMPORTED_MODULE_7__["ServicesModule"],
        _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["OverlayModule"],
        _shared_components_layout_header_layout_header_module__WEBPACK_IMPORTED_MODULE_4__["LayoutHeaderModule"],
        _shared_components_layout_footer_layout_footer_module__WEBPACK_IMPORTED_MODULE_5__["LayoutFooterModule"],
        _shared_components_popup_default_popup_default_module__WEBPACK_IMPORTED_MODULE_10__["PopupDefaultModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _modules_catalog_components_popup_catalog_item_popup_catalog_item_component__WEBPACK_IMPORTED_MODULE_9__["PopupCatalogItemComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                    ng_apexcharts__WEBPACK_IMPORTED_MODULE_11__["NgApexchartsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                    _shared_services_services_module__WEBPACK_IMPORTED_MODULE_7__["ServicesModule"],
                    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["OverlayModule"],
                    _shared_components_layout_header_layout_header_module__WEBPACK_IMPORTED_MODULE_4__["LayoutHeaderModule"],
                    _shared_components_layout_footer_layout_footer_module__WEBPACK_IMPORTED_MODULE_5__["LayoutFooterModule"],
                    _shared_components_popup_default_popup_default_module__WEBPACK_IMPORTED_MODULE_10__["PopupDefaultModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "ZSma":
/*!*************************************************************************!*\
  !*** ./src/app/shared/components/layout-footer/layout-footer.module.ts ***!
  \*************************************************************************/
/*! exports provided: LayoutFooterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutFooterModule", function() { return LayoutFooterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _layout_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout-footer.component */ "muLF");




class LayoutFooterModule {
}
LayoutFooterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LayoutFooterModule });
LayoutFooterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LayoutFooterModule_Factory(t) { return new (t || LayoutFooterModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LayoutFooterModule, { declarations: [_layout_footer_component__WEBPACK_IMPORTED_MODULE_2__["LayoutFooterComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_layout_footer_component__WEBPACK_IMPORTED_MODULE_2__["LayoutFooterComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutFooterModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_layout_footer_component__WEBPACK_IMPORTED_MODULE_2__["LayoutFooterComponent"]],
                exports: [
                    _layout_footer_component__WEBPACK_IMPORTED_MODULE_2__["LayoutFooterComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "muLF":
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/layout-footer/layout-footer.component.ts ***!
  \****************************************************************************/
/*! exports provided: LayoutFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutFooterComponent", function() { return LayoutFooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class LayoutFooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
LayoutFooterComponent.ɵfac = function LayoutFooterComponent_Factory(t) { return new (t || LayoutFooterComponent)(); };
LayoutFooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LayoutFooterComponent, selectors: [["app-layout-footer"]], decls: 5, vars: 0, consts: [[1, "footer-wrp"], [1, "container"], [1, "footer"]], template: function LayoutFooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".footer-wrp[_ngcontent-%COMP%] {\n  background-color: var(--color-grey_20);\n}\n\n.footer[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbGF5b3V0LWZvb3Rlci9sYXlvdXQtZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0NBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2xheW91dC1mb290ZXIvbGF5b3V0LWZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXItd3JwIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItZ3JleV8yMCk7XG59XG5cbi5mb290ZXIge1xuICBwYWRkaW5nOiAxcmVtO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutFooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-layout-footer',
                templateUrl: './layout-footer.component.html',
                styleUrls: ['./layout-footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [
    {
        path: '',
        pathMatch: 'full',
        // component: PageHomeComponent
        loadChildren: () => Promise.all(/*! import() | pages-page-home-page-home-module */[__webpack_require__.e("common"), __webpack_require__.e("pages-page-home-page-home-module")]).then(__webpack_require__.bind(null, /*! ./pages/page-home/page-home.module */ "grv6")).then(m => m.PageHomeModule)
    },
    {
        path: 'map',
        loadChildren: () => Promise.all(/*! import() | pages-page-map-page-map-module */[__webpack_require__.e("default~pages-page-analysis-page-analysis-module~pages-page-map-page-map-module"), __webpack_require__.e("common"), __webpack_require__.e("pages-page-map-page-map-module")]).then(__webpack_require__.bind(null, /*! ./pages/page-map/page-map.module */ "1v/2")).then(m => m.PageMapModule)
    },
    {
        path: 'analysis',
        loadChildren: () => Promise.all(/*! import() | pages-page-analysis-page-analysis-module */[__webpack_require__.e("default~pages-page-analysis-page-analysis-module~pages-page-map-page-map-module"), __webpack_require__.e("common"), __webpack_require__.e("pages-page-analysis-page-analysis-module")]).then(__webpack_require__.bind(null, /*! ./pages/page-analysis/page-analysis.module */ "BjVQ")).then(m => m.PageAnalysisModule)
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { enableTracing: false })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { enableTracing: false })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map