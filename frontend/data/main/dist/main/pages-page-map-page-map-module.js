(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-page-map-page-map-module"],{

/***/ "+dEJ":
/*!******************************************************!*\
  !*** ./src/app/pages/page-map/page-map.component.ts ***!
  \******************************************************/
/*! exports provided: PageMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageMapComponent", function() { return PageMapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngneat/until-destroy */ "VfN6");
/* harmony import */ var _shared_services_map_map_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/map/map.service */ "6hn5");
/* harmony import */ var src_app_shared_services_backend_backend_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/backend/backend.service */ "ugvO");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/components/pie-chart/pie-chart.component */ "6Iv5");









const _c0 = function () { return ["\u0416\u0435\u043D.", "\u041C\u0443\u0436."]; };
const _c1 = function () { return [18076, 9785]; };
const _c2 = function () { return ["#DF4C4A", "#80BD00"]; };
const _c3 = function () { return ["<7", "7-18", "18-25", "25-45", "45-60", "60-75", "75-90", "90<"]; };
const _c4 = function () { return [280, 2261, 642, 2532, 3952, 13175, 4517, 502]; };
const _c5 = function () { return ["\u041C\u043D\u043E\u0433\u043E\u0434\u0435\u0442\u043D\u044B\u0435", "\u0411\u0435\u0440\u0435\u043C\u0435\u043D\u043D\u043E\u0441\u0442\u044C", "\u0418\u043D\u0432\u0430\u043B\u0438\u0434", "\u041C\u0430\u043B\u043E\u0438\u043C\u0443\u0449\u0438\u0435", "\u041F\u0435\u043D\u0441\u0438\u043E\u043D\u0435\u0440", "\u0412\u0435\u0442\u0435\u0440\u0430\u043D \u0442\u0440\u0443\u0434\u0430", "\u0414\u0435\u0442\u0438 \u0438\u043D\u0432\u0430\u043B\u0438\u0434\u044B", "\u041C\u043E\u043B\u043E\u0434\u044B\u0435 \u0440\u043E\u0434\u0438\u0442\u0435\u043B\u0438"]; };
const _c6 = function () { return [2642, 365, 5144, 833, 12507, 5383, 332, 655]; };
function PageMapComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-pie-chart", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-pie-chart", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-pie-chart", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("labels", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c0))("series", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](8, _c1))("colors", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](9, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("labels", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](10, _c3))("series", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](11, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("labels", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](12, _c5))("series", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](13, _c6));
} }
let PageMapComponent = class PageMapComponent {
    constructor(mapService, backendService) {
        this.mapService = mapService;
        this.backendService = backendService;
        this.mapPinItems = [
            {
                id: 1,
                name: 'item 1',
                map: [55.8077124955766, 37.843035477866]
            }
        ];
    }
    ngOnInit() {
        this.loadData();
    }
    ngOnDestroy() {
    }
    loadData() {
        const loadPointList = this.backendService.getData('point.getList');
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])([loadPointList])
            .pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__["untilDestroyed"])(this))
            .subscribe(([pointList]) => {
            // this.pointList = pointList;
            this.heatMapData = pointList.map(item => {
                return [item.lat, item.lon];
            });
        });
    }
};
PageMapComponent.ɵfac = function PageMapComponent_Factory(t) { return new (t || PageMapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_map_map_service__WEBPACK_IMPORTED_MODULE_4__["MapService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_backend_backend_service__WEBPACK_IMPORTED_MODULE_5__["BackendService"])); };
PageMapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PageMapComponent, selectors: [["app-page-map"]], decls: 1, vars: 1, consts: [[4, "ngIf"], [3, "labels", "series", "colors"], [3, "labels", "series"]], template: function PageMapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, PageMapComponent_div_0_Template, 4, 14, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.heatMapData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _shared_components_pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_7__["PieChartComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhZ2UtbWFwL3BhZ2UtbWFwLmNvbXBvbmVudC5zY3NzIn0= */"] });
PageMapComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_3__["UntilDestroy"])()
], PageMapComponent);

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PageMapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-page-map',
                templateUrl: './page-map.component.html',
                styleUrls: ['./page-map.component.scss']
            }]
    }], function () { return [{ type: _shared_services_map_map_service__WEBPACK_IMPORTED_MODULE_4__["MapService"] }, { type: src_app_shared_services_backend_backend_service__WEBPACK_IMPORTED_MODULE_5__["BackendService"] }]; }, null); })();


/***/ }),

/***/ "1v/2":
/*!***************************************************!*\
  !*** ./src/app/pages/page-map/page-map.module.ts ***!
  \***************************************************/
/*! exports provided: PageMapModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageMapModule", function() { return PageMapModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _page_map_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-map.component */ "+dEJ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_components_yandex_heat_map_yandex_heat_map_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/yandex-heat-map/yandex-heat-map.module */ "3NDY");
/* harmony import */ var _shared_components_pie_chart_pie_chart_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/pie-chart/pie-chart.module */ "X5Fv");








class PageMapModule {
}
PageMapModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PageMapModule });
PageMapModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PageMapModule_Factory(t) { return new (t || PageMapModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{ path: '', component: _page_map_component__WEBPACK_IMPORTED_MODULE_2__["PageMapComponent"] }]),
            _shared_components_yandex_heat_map_yandex_heat_map_module__WEBPACK_IMPORTED_MODULE_4__["YandexHeatMapModule"],
            _shared_components_pie_chart_pie_chart_module__WEBPACK_IMPORTED_MODULE_5__["PieChartModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PageMapModule, { declarations: [_page_map_component__WEBPACK_IMPORTED_MODULE_2__["PageMapComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _shared_components_yandex_heat_map_yandex_heat_map_module__WEBPACK_IMPORTED_MODULE_4__["YandexHeatMapModule"],
        _shared_components_pie_chart_pie_chart_module__WEBPACK_IMPORTED_MODULE_5__["PieChartModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageMapModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_page_map_component__WEBPACK_IMPORTED_MODULE_2__["PageMapComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild([{ path: '', component: _page_map_component__WEBPACK_IMPORTED_MODULE_2__["PageMapComponent"] }]),
                    _shared_components_yandex_heat_map_yandex_heat_map_module__WEBPACK_IMPORTED_MODULE_4__["YandexHeatMapModule"],
                    _shared_components_pie_chart_pie_chart_module__WEBPACK_IMPORTED_MODULE_5__["PieChartModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "6hn5":
/*!****************************************************!*\
  !*** ./src/app/shared/services/map/map.service.ts ***!
  \****************************************************/
/*! exports provided: MapService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapService", function() { return MapService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class MapService {
    // private readonly PI = 3.14159265359;
    constructor() {
        this.EKVL = 40076 / 360;
    }
    geoDistance(lat1, lon1, lat2, lon2) {
        const theta = lon1 - lon2;
        let dist = Math.sin(this.deg2rad(lat1)) * Math.sin(this.deg2rad(lat2)) + Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * Math.cos(this.deg2rad(theta));
        dist = this.rad2deg(Math.acos(dist));
        return dist * this.EKVL;
    }
    deg2rad(deg) {
        return deg * Math.PI / 180;
    }
    rad2deg(rad) {
        return rad * 180 / Math.PI;
    }
}
MapService.ɵfac = function MapService_Factory(t) { return new (t || MapService)(); };
MapService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MapService, factory: MapService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=pages-page-map-page-map-module.js.map