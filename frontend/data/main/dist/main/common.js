(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "3NDY":
/*!*****************************************************************************!*\
  !*** ./src/app/shared/components/yandex-heat-map/yandex-heat-map.module.ts ***!
  \*****************************************************************************/
/*! exports provided: YandexHeatMapModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YandexHeatMapModule", function() { return YandexHeatMapModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _yandex_heat_map_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./yandex-heat-map.component */ "R1Nz");




class YandexHeatMapModule {
}
YandexHeatMapModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: YandexHeatMapModule });
YandexHeatMapModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function YandexHeatMapModule_Factory(t) { return new (t || YandexHeatMapModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](YandexHeatMapModule, { declarations: [_yandex_heat_map_component__WEBPACK_IMPORTED_MODULE_2__["YandexHeatMapComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_yandex_heat_map_component__WEBPACK_IMPORTED_MODULE_2__["YandexHeatMapComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](YandexHeatMapModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_yandex_heat_map_component__WEBPACK_IMPORTED_MODULE_2__["YandexHeatMapComponent"]],
                exports: [
                    _yandex_heat_map_component__WEBPACK_IMPORTED_MODULE_2__["YandexHeatMapComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "5qZE":
/*!******************************************************************!*\
  !*** ./src/app/shared/services/yandex-map/yandex-map.service.ts ***!
  \******************************************************************/
/*! exports provided: YandexMapService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YandexMapService", function() { return YandexMapService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class YandexMapService {
    constructor() {
        this.apiKey = '2db80c4c-704c-4382-906c-9dfe2e3baa8f';
        this.statusScriptLoad = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.statusHeartMapScriptLoad = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
    }
    loadScript(render) {
        if (!this.statusScriptLoad.value) {
            const functionName = 'initYandexMap';
            window[functionName] = () => {
                const ymaps = window['ymaps'];
                if (ymaps) {
                    this.statusScriptLoad.next(ymaps);
                }
            };
            const mapScript = render.createElement('script');
            mapScript.type = 'text/javascript';
            mapScript.src = `https://api-maps.yandex.ru/2.1/?lang=ru_RU&onload=${functionName}&apikey=${this.apiKey}`;
            document.head.appendChild(mapScript);
        }
        return this.statusScriptLoad.asObservable();
    }
    loadHearMapScript(render) {
        if (!this.statusHeartMapScriptLoad.value) {
            this.statusHeartMapScriptLoad.next(true);
            const mapScript = render.createElement('script');
            mapScript.type = 'text/javascript';
            mapScript.src = 'https://yastatic.net/s3/mapsapi-jslibs/heatmap/0.0.1/heatmap.min.js';
            document.head.appendChild(mapScript);
        }
        return this.statusHeartMapScriptLoad.asObservable();
    }
}
YandexMapService.ɵfac = function YandexMapService_Factory(t) { return new (t || YandexMapService)(); };
YandexMapService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: YandexMapService, factory: YandexMapService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](YandexMapService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "R1Nz":
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/yandex-heat-map/yandex-heat-map.component.ts ***!
  \********************************************************************************/
/*! exports provided: YandexHeatMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YandexHeatMapComponent", function() { return YandexHeatMapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngneat/until-destroy */ "VfN6");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-take-until-destroy */ "DnKK");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");







let YandexHeatMapComponent = class YandexHeatMapComponent {
    constructor() {
        this.mapZoom = 10;
        this.pinDataList = [];
        this.afterMapInit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.rndNumber = Math.round(Math.random() * 100000).toString();
        this.id = 'yandex-map-' + this.rndNumber;
        this.mapCenterDefault = [55.76, 37.62];
        this.pinSrcDefault = '/f/media/ui/circle.svg';
        this.pinSize = [10, 10];
        this.pinOffset = [-5, -5];
        this.zoomEvent = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](0);
        this.heatMapRadius = 10;
        // private readonly heatMapRadius = new BehaviorSubject<number>(10);
        this.heatMapOptions = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"]({
            radius: 10,
        });
    }
    // =========================================================================
    // --- Lifecycle Hooks -----------------------------------------------------
    // -------------------------------------------------------------------------
    ngOnInit() {
        this.loadMap();
    }
    ngOnChanges(changes) {
        if (this.mapInstance && changes['pinDataList']) {
            this.addHeatMap();
        }
    }
    ngOnDestroy() {
    }
    // =========================================================================
    // --- Публичные и методы шаблона ------------------------------------------
    // -------------------------------------------------------------------------
    // =========================================================================
    // --- Вспомогательные методы ----------------------------------------------
    // -------------------------------------------------------------------------
    loadMap() {
        const ymaps = window['ymaps'];
        ymaps.ready(['Heatmap']).then(() => {
            this.mapInstance = new ymaps.Map(this.id, {
                center: this.mapCenter || this.mapCenterDefault,
                zoom: this.mapZoom,
                controls: ['zoomControl', 'typeSelector'],
            }, {
                minZoom: 4,
            });
            this.mapInstance.behaviors.disable('scrollZoom');
            if (this.heatMapData && this.heatMapData.length) {
                this.addHeatMap();
                this.startZoomEventListener();
            }
            // this.addPlaceMarks();
            this.afterMapInit.emit(true);
        });
    }
    /**
     * Метод добавляет на карты пины, переданные через инпут компонента
     */
    addPlaceMarks() {
        const ymaps = window['ymaps'];
        if (!ymaps) {
            return;
        }
        if (this.pinDataList && this.pinDataList.length) {
            this.pinDataList.forEach(pin => {
                const hintLayout = ymaps.templateLayoutFactory.createClass(pin.hint || '', {
                    // Определяем метод getShape, который
                    // будет возвращать размеры макета хинта.
                    // Это необходимо для того, чтобы хинт автоматически
                    // сдвигал позицию при выходе за пределы карты.
                    getShape: function () {
                        const el = this.getElement();
                        let result = null;
                        if (el) {
                            const firstChild = el.firstChild;
                            result = new ymaps.shape.Rectangle(new ymaps.geometry.pixel.Rectangle([
                                [0, 0],
                                [firstChild.offsetWidth, firstChild.offsetHeight]
                            ]));
                        }
                        return result;
                    }
                });
                const placemark = new ymaps.Placemark(pin.map, {}, {
                    cursor: 'default',
                    hintLayout: pin.hint ? hintLayout : null,
                    iconLayout: 'default#image',
                    iconImageHref: pin.pinSrcDefault || this.pinSrcDefault,
                    iconImageSize: pin.pinSize || this.pinSize,
                    iconImageOffset: this.pinOffset,
                });
                this.mapInstance.geoObjects.add(placemark);
            });
        }
    }
    addHeatMap() {
        const ymaps = window['ymaps'];
        if (!ymaps) {
            return;
        }
        this.heatMapOptions
            .pipe(Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_4__["untilDestroyed"])(this))
            .subscribe(options => {
            console.log(options);
        });
        const heatmap = new ymaps.Heatmap(this.heatMapData, {
            // Радиус влияния.
            radius: this.heatMapRadius,
            // Нужно ли уменьшать пиксельный размер точек при уменьшении зума. False - не нужно.
            dissipating: false,
            // Прозрачность тепловой карты.
            opacity: 0.8,
            // Прозрачность у медианной по весу точки.
            intensityOfMidpoint: 0.2,
            // JSON описание градиента.
            gradient: {
                0.1: 'rgba(128, 255, 0, 0.7)',
                0.2: 'rgba(255, 255, 0, 0.8)',
                0.7: 'rgba(234, 72, 58, 0.9)',
                1.0: 'rgba(162, 36, 25, 1)'
            }
        });
        // console.log(hearMapData);
        heatmap.setMap(this.mapInstance);
    }
    /**
     * Метод запускает обработку события изменения зума
     */
    startZoomEventListener() {
        this.zoomEvent.next(this.mapZoom);
        this.mapInstance.events.add('boundschange', e => {
            const newZoom = e.originalEvent.newZoom;
            if (newZoom !== this.zoomEvent.getValue()) {
                this.zoomEvent.next(e.originalEvent.newZoom);
            }
        });
        this.zoomEvent.asObservable()
            .pipe(Object(ngx_take_until_destroy__WEBPACK_IMPORTED_MODULE_4__["untilDestroyed"])(this), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])())
            .subscribe(zoom => {
            this.heatMapRadius = 20;
            this.heatMapData['radius'] = 30;
            // console.log('changePinByZoom', zoom);
            // console.log('zoomEvent', this.zoomEvent);
            // this.changePinByZoom(zoom)
        });
    }
};
YandexHeatMapComponent.ɵfac = function YandexHeatMapComponent_Factory(t) { return new (t || YandexHeatMapComponent)(); };
YandexHeatMapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: YandexHeatMapComponent, selectors: [["app-yandex-heat-map"]], inputs: { mapCenter: "mapCenter", mapZoom: "mapZoom", pinDataList: "pinDataList", heatMapData: "heatMapData" }, outputs: { afterMapInit: "afterMapInit" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [[1, "map", "yandex-maps", 3, "id"]], template: function YandexHeatMapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx.id);
    } }, styles: [".map[_ngcontent-%COMP%] {\n  color: #000;\n  width: 100%;\n  height: 80vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMveWFuZGV4LWhlYXQtbWFwL3lhbmRleC1oZWF0LW1hcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMveWFuZGV4LWhlYXQtbWFwL3lhbmRleC1oZWF0LW1hcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXAge1xuICBjb2xvcjogIzAwMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogODB2aDtcbn1cbiJdfQ== */"] });
YandexHeatMapComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__["UntilDestroy"])()
], YandexHeatMapComponent);

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](YandexHeatMapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-yandex-heat-map',
                templateUrl: './yandex-heat-map.component.html',
                styleUrls: ['./yandex-heat-map.component.scss']
            }]
    }], function () { return []; }, { mapCenter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], mapZoom: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], pinDataList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], heatMapData: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], afterMapInit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }] }); })();


/***/ }),

/***/ "go9g":
/*!*********************************************************************!*\
  !*** ./src/app/shared/components/yandex-maps/yandex-maps.module.ts ***!
  \*********************************************************************/
/*! exports provided: YandexMapsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YandexMapsModule", function() { return YandexMapsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _yandex_maps_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./yandex-maps.component */ "nZpB");




class YandexMapsModule {
}
YandexMapsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: YandexMapsModule });
YandexMapsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function YandexMapsModule_Factory(t) { return new (t || YandexMapsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](YandexMapsModule, { declarations: [_yandex_maps_component__WEBPACK_IMPORTED_MODULE_2__["YandexMapsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_yandex_maps_component__WEBPACK_IMPORTED_MODULE_2__["YandexMapsComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](YandexMapsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_yandex_maps_component__WEBPACK_IMPORTED_MODULE_2__["YandexMapsComponent"]],
                exports: [
                    _yandex_maps_component__WEBPACK_IMPORTED_MODULE_2__["YandexMapsComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "nZpB":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/yandex-maps/yandex-maps.component.ts ***!
  \************************************************************************/
/*! exports provided: YandexMapsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YandexMapsComponent", function() { return YandexMapsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngneat/until-destroy */ "VfN6");
/* harmony import */ var _services_yandex_map_yandex_map_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/yandex-map/yandex-map.service */ "5qZE");





let YandexMapsComponent = class YandexMapsComponent {
    constructor(render, yandexMapService) {
        this.render = render;
        this.yandexMapService = yandexMapService;
        this.mapZoom = 8;
        this.pinDataList = [];
        this.afterMapInit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.rndNumber = Math.round(Math.random() * 100000).toString();
        this.id = 'yandex-map-' + this.rndNumber;
        this.mapCenterDefault = [55.76, 37.62];
        this.pinSrcDefault = '/f/media/ui/circle.svg';
        this.pinSize = [10, 10];
        this.pinOffset = [-5, -5];
    }
    // =========================================================================
    // --- Lifecycle Hooks -----------------------------------------------------
    // -------------------------------------------------------------------------
    ngOnInit() {
        this.loadMap();
    }
    ngOnChanges(changes) {
        if (this.mapInstance && changes['pinDataList']) {
            // this.addPlaceMarks();
        }
    }
    ngOnDestroy() {
    }
    // =========================================================================
    // --- Публичные и методы шаблона ------------------------------------------
    // -------------------------------------------------------------------------
    // =========================================================================
    // --- Вспомогательные методы ----------------------------------------------
    // -------------------------------------------------------------------------
    loadMap() {
        const ymaps = window['ymaps'];
        ymaps.ready(['Heatmap']).then(() => {
            this.mapInstance = new ymaps.Map(this.id, {
                center: this.mapCenter || this.mapCenterDefault,
                zoom: this.mapZoom,
                controls: [],
            }, {
                minZoom: 4,
            });
            this.mapInstance.behaviors.disable('scrollZoom');
            this.addCurrentPoint();
            // this.addPlaceMarks();
            this.afterMapInit.emit(true);
        });
    }
    addCurrentPoint() {
        const ymaps = window['ymaps'];
        if (!ymaps) {
            return;
        }
        const placemark = new ymaps.Placemark(this.currentPin.map, {}, {
            cursor: 'default',
            hintLayout: null,
            iconColor: '#FF0000'
        });
        this.mapInstance.geoObjects.add(placemark);
    }
    /**
     * Метод добавляет на карты пины, переданные через инпут компонента
     */
    addPlaceMarks() {
        const ymaps = window['ymaps'];
        if (!ymaps) {
            return;
        }
        if (this.pinDataList && this.pinDataList.length) {
            this.pinDataList.forEach(pin => {
                const hintLayout = ymaps.templateLayoutFactory.createClass(pin.hint || '', {
                    // Определяем метод getShape, который
                    // будет возвращать размеры макета хинта.
                    // Это необходимо для того, чтобы хинт автоматически
                    // сдвигал позицию при выходе за пределы карты.
                    getShape: function () {
                        const el = this.getElement();
                        let result = null;
                        if (el) {
                            const firstChild = el.firstChild;
                            result = new ymaps.shape.Rectangle(new ymaps.geometry.pixel.Rectangle([
                                [0, 0],
                                [firstChild.offsetWidth, firstChild.offsetHeight]
                            ]));
                        }
                        return result;
                    }
                });
                const placemark = new ymaps.Placemark(pin.map, {}, {
                    cursor: 'default',
                    hintLayout: pin.hint ? hintLayout : null,
                    iconLayout: 'default#image',
                    iconImageHref: pin.pinSrcDefault || this.pinSrcDefault,
                    iconImageSize: pin.pinSize || this.pinSize,
                    iconImageOffset: this.pinOffset,
                });
                this.mapInstance.geoObjects.add(placemark);
            });
        }
    }
};
YandexMapsComponent.ɵfac = function YandexMapsComponent_Factory(t) { return new (t || YandexMapsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_yandex_map_yandex_map_service__WEBPACK_IMPORTED_MODULE_3__["YandexMapService"])); };
YandexMapsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: YandexMapsComponent, selectors: [["app-yandex-maps"]], inputs: { mapCenter: "mapCenter", mapZoom: "mapZoom", currentPin: "currentPin", pinDataList: "pinDataList" }, outputs: { afterMapInit: "afterMapInit" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [[1, "map", "yandex-maps", 3, "id"]], template: function YandexMapsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", ctx.id);
    } }, styles: [".map[_ngcontent-%COMP%] {\n  color: #000;\n  width: 100%;\n  height: 50vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMveWFuZGV4LW1hcHMveWFuZGV4LW1hcHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3lhbmRleC1tYXBzL3lhbmRleC1tYXBzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hcCB7XG4gIGNvbG9yOiAjMDAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1MHZoO1xufVxuIl19 */"] });
YandexMapsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_2__["UntilDestroy"])()
], YandexMapsComponent);

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](YandexMapsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-yandex-maps',
                templateUrl: './yandex-maps.component.html',
                styleUrls: ['./yandex-maps.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }, { type: _services_yandex_map_yandex_map_service__WEBPACK_IMPORTED_MODULE_3__["YandexMapService"] }]; }, { mapCenter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], mapZoom: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], currentPin: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], pinDataList: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], afterMapInit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=common.js.map