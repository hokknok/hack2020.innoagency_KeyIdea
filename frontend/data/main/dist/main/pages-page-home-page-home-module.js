(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-page-home-page-home-module"],{

/***/ "6ZcQ":
/*!**********************************************************!*\
  !*** ./src/app/shared/services/people/people.service.ts ***!
  \**********************************************************/
/*! exports provided: PeopleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PeopleService", function() { return PeopleService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _utils_utils_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/utils.service */ "8wRs");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class PeopleService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getItems() {
        const params = _utils_utils_service__WEBPACK_IMPORTED_MODULE_1__["UtilsService"].getHttpParams({
            action: 'people.getList'
        });
        return this.httpClient
            .get('/api/v1/', { params });
    }
}
PeopleService.ɵfac = function PeopleService_Factory(t) { return new (t || PeopleService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
PeopleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PeopleService, factory: PeopleService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PeopleService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "8wRs":
/*!********************************************************!*\
  !*** ./src/app/shared/services/utils/utils.service.ts ***!
  \********************************************************/
/*! exports provided: UtilsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilsService", function() { return UtilsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");



class UtilsService {
    constructor() { }
    /**
     * Метод возвращает строку, которая может быть ID HTML-элемента
     */
    static getRandomElementId() {
        let text = '';
        const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        for (let i = 0; i < 8; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        text += (Math.random() * 100000).toFixed();
        return text;
    }
    static copy(data) {
        return JSON.parse(JSON.stringify(data));
    }
    static getHttpParams(subject) {
        const params = {};
        Object.keys(subject).forEach(key => params[key] = subject[key].toString());
        return params;
    }
    static downloadFile(src, name) {
        const save = document.createElement('a');
        save.href = src;
        save.target = '_blank';
        save.download = name;
        if (navigator.userAgent.toLowerCase().match(/(ipad|iphone|safari)/) && navigator.userAgent.search('Chrome') < 0) {
            // @ts-ignore
            document.location = save.href;
        }
        else {
            save.click();
            // tslint:disable-next-line:no-string-literal
            (window.URL || window['webkitURL']).revokeObjectURL(save.href);
        }
    }
    /** Метод подсчитывает высоту выпадающего списка */
    static calculateMaxHeightList(list) {
        const windowHeight = window.innerHeight;
        const selectElementRect = list.getBoundingClientRect();
        const maxHeightList = 450;
        const PADDING_BOTTOM = 25;
        const calculatedMaxHeightList = windowHeight - selectElementRect.top - PADDING_BOTTOM;
        if (calculatedMaxHeightList < maxHeightList) {
            return {
                maxHeight: `${calculatedMaxHeightList}px`,
            };
        }
        else {
            return {
                maxHeight: `${maxHeightList}px`,
            };
        }
    }
}
UtilsService.copyPipeFn = Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(data => JSON.parse(JSON.stringify(data)));
UtilsService.distinctPipeFn = Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])((x, y) => JSON.stringify(x) === JSON.stringify(y));
UtilsService.ɵfac = function UtilsService_Factory(t) { return new (t || UtilsService)(); };
UtilsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UtilsService, factory: UtilsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UtilsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "LWDj":
/*!********************************************************!*\
  !*** ./src/app/pages/page-home/page-home.component.ts ***!
  \********************************************************/
/*! exports provided: PageHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageHomeComponent", function() { return PageHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngneat/until-destroy */ "VfN6");
/* harmony import */ var _shared_services_people_people_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/people/people.service */ "6ZcQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");






let PageHomeComponent = class PageHomeComponent {
    constructor(peopleService, router) {
        this.peopleService = peopleService;
        this.router = router;
        this.mapPinItems = [
            {
                id: 1,
                name: 'item 1',
                map: [55.8077124955766, 37.843035477866]
            }
        ];
    }
    // =========================================================================
    // --- Lifecycle Hooks -----------------------------------------------------
    // -------------------------------------------------------------------------
    ngOnInit() {
        this.loadData();
    }
    ngOnDestroy() {
    }
    // =========================================================================
    // --- Публичные и методы шаблона ------------------------------------------
    // -------------------------------------------------------------------------
    onItemClick(event, item) {
        event.preventDefault();
        event.stopPropagation();
        this.router
            .navigate([], { queryParams: { 'catalog-item': item }, queryParamsHandling: 'merge' })
            .then();
    }
    // =========================================================================
    // --- Вспомогательные методы ----------------------------------------------
    // -------------------------------------------------------------------------
    loadData() {
    }
};
PageHomeComponent.ɵfac = function PageHomeComponent_Factory(t) { return new (t || PageHomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_people_people_service__WEBPACK_IMPORTED_MODULE_3__["PeopleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
PageHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PageHomeComponent, selectors: [["app-page-home"]], decls: 20, vars: 0, consts: [[1, "container"], [1, "section-list"], [1, "section"], [1, "section__name"], [1, "section__desc"], [1, "section__action"], ["href", "", 1, "btn", "btn-primary"], ["routerLink", "/analysis", 1, "btn", "btn-primary"]], template: function PageHomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u0418\u0449\u0438\u0442\u0435 \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u0435 \u0434\u043B\u044F \u0431\u0435\u0437\u043D\u0435\u0441\u0430?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "\u041F\u043E\u043A\u0430\u0436\u0435\u043C \u0433\u0434\u0435 \u043A\u0430\u043A\u0430\u044F \u043A\u043E\u043D\u043A\u0443\u0440\u0435\u043D\u0446\u0438\u044F \u0438 \u043F\u043E\u0434\u0431\u0435\u0440\u0435\u043C \u043E\u043F\u0442\u0438\u043C\u0430\u043B\u044C\u043D\u044B\u0435 \u0432\u0430\u0440\u0430\u043D\u0442\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "\u041F\u043E\u0438\u0441\u043A \u043C\u0435\u0441\u0442\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "\u0423\u0436\u0435 \u0435\u0441\u0442\u044C \u043F\u043E\u043C\u0435\u0449\u0435\u043D\u0438\u0435?");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "\u041F\u0440\u043E\u0432\u0435\u0434\u0435\u043C \u0430\u043D\u0430\u043B\u0438\u0437 \u043C\u0435\u0441\u0442\u043E\u043F\u043E\u043B\u043E\u0436\u0435\u043D\u0438\u044F \u0438 \u043F\u043E\u0434\u0431\u043E\u0440 \u043F\u0435\u0440\u0441\u043F\u0435\u043A\u0442\u0438\u0432\u043D\u044B\u0445 \u043D\u0438\u0448");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "\u0410\u043D\u0430\u043B\u0438\u0437 \u043C\u0435\u0441\u0442\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: [".section[_ngcontent-%COMP%] {\n  margin: 10rem 0;\n}\n.section__name[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.section__desc[_ngcontent-%COMP%] {\n  margin-top: 3rem;\n}\n.section__action[_ngcontent-%COMP%] {\n  margin-top: 3rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGFnZS1ob21lL3BhZ2UtaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUFDRjtBQUVJO0VBQ0UsU0FBQTtBQUFOO0FBSUU7RUFDRSxnQkFBQTtBQUZKO0FBS0U7RUFDRSxnQkFBQTtBQUhKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcGFnZS1ob21lL3BhZ2UtaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWN0aW9uIHtcbiAgbWFyZ2luOiAxMHJlbSAwO1xuXG4gICZfX25hbWUge1xuICAgIGg0IHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gIH1cblxuICAmX19kZXNjIHtcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xuICB9XG5cbiAgJl9fYWN0aW9uIHtcbiAgICBtYXJnaW4tdG9wOiAzcmVtO1xuICB9XG59XG4iXX0= */"] });
PageHomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__["UntilDestroy"])()
], PageHomeComponent);

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PageHomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-page-home',
                templateUrl: './page-home.component.html',
                styleUrls: ['./page-home.component.scss']
            }]
    }], function () { return [{ type: _shared_services_people_people_service__WEBPACK_IMPORTED_MODULE_3__["PeopleService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "OQ8F":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/item-list/item-list.component.ts ***!
  \********************************************************************/
/*! exports provided: ItemListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemListComponent", function() { return ItemListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ItemListComponent {
    constructor() { }
    ngOnInit() {
    }
}
ItemListComponent.ɵfac = function ItemListComponent_Factory(t) { return new (t || ItemListComponent)(); };
ItemListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ItemListComponent, selectors: [["app-item-list"]], decls: 2, vars: 0, template: function ItemListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "item-list works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2l0ZW0tbGlzdC9pdGVtLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-item-list',
                templateUrl: './item-list.component.html',
                styleUrls: ['./item-list.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "YTHP":
/*!*****************************************************************!*\
  !*** ./src/app/shared/components/item-list/item-list.module.ts ***!
  \*****************************************************************/
/*! exports provided: ItemListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemListModule", function() { return ItemListModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _item_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./item-list.component */ "OQ8F");




class ItemListModule {
}
ItemListModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ItemListModule });
ItemListModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ItemListModule_Factory(t) { return new (t || ItemListModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ItemListModule, { declarations: [_item_list_component__WEBPACK_IMPORTED_MODULE_2__["ItemListComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_item_list_component__WEBPACK_IMPORTED_MODULE_2__["ItemListComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItemListModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_item_list_component__WEBPACK_IMPORTED_MODULE_2__["ItemListComponent"]],
                exports: [
                    _item_list_component__WEBPACK_IMPORTED_MODULE_2__["ItemListComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "grv6":
/*!*****************************************************!*\
  !*** ./src/app/pages/page-home/page-home.module.ts ***!
  \*****************************************************/
/*! exports provided: PageHomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageHomeModule", function() { return PageHomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _page_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-home.component */ "LWDj");
/* harmony import */ var _shared_components_item_list_item_list_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/item-list/item-list.module */ "YTHP");
/* harmony import */ var _shared_components_yandex_maps_yandex_maps_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/yandex-maps/yandex-maps.module */ "go9g");
/* harmony import */ var _shared_components_yandex_heat_map_yandex_heat_map_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/yandex-heat-map/yandex-heat-map.module */ "3NDY");









class PageHomeModule {
}
PageHomeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PageHomeModule });
PageHomeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PageHomeModule_Factory(t) { return new (t || PageHomeModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shared_components_item_list_item_list_module__WEBPACK_IMPORTED_MODULE_4__["ItemListModule"],
            _shared_components_yandex_maps_yandex_maps_module__WEBPACK_IMPORTED_MODULE_5__["YandexMapsModule"],
            _shared_components_yandex_heat_map_yandex_heat_map_module__WEBPACK_IMPORTED_MODULE_6__["YandexHeatMapModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _page_home_component__WEBPACK_IMPORTED_MODULE_3__["PageHomeComponent"] }])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PageHomeModule, { declarations: [_page_home_component__WEBPACK_IMPORTED_MODULE_3__["PageHomeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_components_item_list_item_list_module__WEBPACK_IMPORTED_MODULE_4__["ItemListModule"],
        _shared_components_yandex_maps_yandex_maps_module__WEBPACK_IMPORTED_MODULE_5__["YandexMapsModule"],
        _shared_components_yandex_heat_map_yandex_heat_map_module__WEBPACK_IMPORTED_MODULE_6__["YandexHeatMapModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageHomeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_page_home_component__WEBPACK_IMPORTED_MODULE_3__["PageHomeComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_components_item_list_item_list_module__WEBPACK_IMPORTED_MODULE_4__["ItemListModule"],
                    _shared_components_yandex_maps_yandex_maps_module__WEBPACK_IMPORTED_MODULE_5__["YandexMapsModule"],
                    _shared_components_yandex_heat_map_yandex_heat_map_module__WEBPACK_IMPORTED_MODULE_6__["YandexHeatMapModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _page_home_component__WEBPACK_IMPORTED_MODULE_3__["PageHomeComponent"] }])
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-page-home-page-home-module.js.map