(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-page-analysis-page-analysis-module"],{

/***/ "BjVQ":
/*!*************************************************************!*\
  !*** ./src/app/pages/page-analysis/page-analysis.module.ts ***!
  \*************************************************************/
/*! exports provided: PageAnalysisModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageAnalysisModule", function() { return PageAnalysisModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _page_analysis_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page-analysis.component */ "HNIV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_components_pie_chart_pie_chart_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/pie-chart/pie-chart.module */ "X5Fv");
/* harmony import */ var _shared_components_bar_chart_bar_chart_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/bar-chart/bar-chart.module */ "ZOjK");
/* harmony import */ var _shared_components_yandex_maps_yandex_maps_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/components/yandex-maps/yandex-maps.module */ "go9g");










class PageAnalysisModule {
}
PageAnalysisModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PageAnalysisModule });
PageAnalysisModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PageAnalysisModule_Factory(t) { return new (t || PageAnalysisModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _page_analysis_component__WEBPACK_IMPORTED_MODULE_3__["PageAnalysisComponent"] }]),
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _shared_components_pie_chart_pie_chart_module__WEBPACK_IMPORTED_MODULE_5__["PieChartModule"],
            _shared_components_bar_chart_bar_chart_module__WEBPACK_IMPORTED_MODULE_6__["BarChartModule"],
            _shared_components_yandex_maps_yandex_maps_module__WEBPACK_IMPORTED_MODULE_7__["YandexMapsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PageAnalysisModule, { declarations: [_page_analysis_component__WEBPACK_IMPORTED_MODULE_3__["PageAnalysisComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _shared_components_pie_chart_pie_chart_module__WEBPACK_IMPORTED_MODULE_5__["PieChartModule"],
        _shared_components_bar_chart_bar_chart_module__WEBPACK_IMPORTED_MODULE_6__["BarChartModule"],
        _shared_components_yandex_maps_yandex_maps_module__WEBPACK_IMPORTED_MODULE_7__["YandexMapsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageAnalysisModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_page_analysis_component__WEBPACK_IMPORTED_MODULE_3__["PageAnalysisComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _page_analysis_component__WEBPACK_IMPORTED_MODULE_3__["PageAnalysisComponent"] }]),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    _shared_components_pie_chart_pie_chart_module__WEBPACK_IMPORTED_MODULE_5__["PieChartModule"],
                    _shared_components_bar_chart_bar_chart_module__WEBPACK_IMPORTED_MODULE_6__["BarChartModule"],
                    _shared_components_yandex_maps_yandex_maps_module__WEBPACK_IMPORTED_MODULE_7__["YandexMapsModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "HNIV":
/*!****************************************************************!*\
  !*** ./src/app/pages/page-analysis/page-analysis.component.ts ***!
  \****************************************************************/
/*! exports provided: PageAnalysisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageAnalysisComponent", function() { return PageAnalysisComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngneat/until-destroy */ "VfN6");
/* harmony import */ var _shared_services_backend_backend_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/backend/backend.service */ "ugvO");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_yandex_maps_yandex_maps_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/components/yandex-maps/yandex-maps.component */ "nZpB");
/* harmony import */ var _shared_components_pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/components/pie-chart/pie-chart.component */ "6Iv5");
/* harmony import */ var _shared_components_bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/components/bar-chart/bar-chart.component */ "zO3A");












function PageAnalysisComponent_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-yandex-maps", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("mapCenter", ctx_r1.currentPoint.map)("currentPin", ctx_r1.currentPoint)("mapZoom", 12);
} }
function PageAnalysisComponent_div_11_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-pie-chart", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("labels", ctx_r2.pieData["sex"]["labels"])("series", ctx_r2.pieData["sex"]["series"]);
} }
function PageAnalysisComponent_div_11_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-bar-chart", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("labels", ctx_r3.pieData["age"]["labels"])("series", ctx_r3.pieData["age"]["series"]);
} }
function PageAnalysisComponent_div_11_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-bar-chart", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("labels", ctx_r4.pieData["soc"]["labels"])("series", ctx_r4.pieData["soc"]["series"]);
} }
function PageAnalysisComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, PageAnalysisComponent_div_11_div_1_Template, 2, 3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, PageAnalysisComponent_div_11_div_2_Template, 2, 2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, PageAnalysisComponent_div_11_div_3_Template, 2, 2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, PageAnalysisComponent_div_11_div_4_Template, 2, 2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.currentPoint.map);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.pieData["sex"]["series"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.pieData["age"]["series"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.pieData["soc"]["series"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 6, ctx_r0.pieData));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 8, ctx_r0.data));
} }
let PageAnalysisComponent = class PageAnalysisComponent {
    constructor(backendService) {
        this.backendService = backendService;
        this.pieData = {
            sex: {
                labels: [],
                series: [],
                colors: [],
            },
            age: {
                labels: [],
                series: [],
                colors: [],
            },
            soc: {
                labels: [],
                series: [],
                colors: [],
            },
        };
    }
    ngOnInit() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('дубнинская улица дом 11', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    }
    ngOnDestroy() {
    }
    submit() {
        const formData = Object.assign({}, this.form.value);
        if (formData.address) {
            this.getData(formData.address);
        }
        // console.log(formData.address);
    }
    getData(address) {
        const loadAddressData = this.backendService.getData('address.getData', { address });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])([loadAddressData])
            .pipe(Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__["untilDestroyed"])(this))
            .subscribe(([addressData]) => {
            this.data = addressData;
            this.getCurrentPoint();
            this.getSexData();
            this.getAgeData();
            this.getSocData();
        });
        // address.getData&address=Южное%20Тушино
    }
    getCurrentPoint() {
        if (this.data['lat'] && this.data['lon']) {
            this.currentPoint = {
                id: 1,
                map: [this.data['lat'], this.data['lon']],
                name: '',
            };
        }
    }
    getSocData() {
        this.pieData['soc']['labels'] = [];
        this.pieData['soc']['series'] = [];
        if (this.data['soc_dem']['Многодетные']) {
            this.pieData['soc']['labels'].push('Многодетные');
            this.pieData['soc']['series'].push(this.data['soc_dem']['Многодетные']);
        }
        if (this.data['soc_dem']['Беременность']) {
            this.pieData['soc']['labels'].push('Беременность');
            this.pieData['soc']['series'].push(this.data['soc_dem']['Беременность']);
        }
        if (this.data['soc_dem']['Инвалид']) {
            this.pieData['soc']['labels'].push('Инвалид');
            this.pieData['soc']['series'].push(this.data['soc_dem']['Инвалид']);
        }
        if (this.data['soc_dem']['Малоимущие']) {
            this.pieData['soc']['labels'].push('Малоимущие');
            this.pieData['soc']['series'].push(this.data['soc_dem']['Малоимущие']);
        }
        if (this.data['soc_dem']['Пенсионер']) {
            this.pieData['soc']['labels'].push('Пенсионер');
            this.pieData['soc']['series'].push(this.data['soc_dem']['Пенсионер']);
        }
        if (this.data['soc_dem']['Ветеран труда']) {
            this.pieData['soc']['labels'].push('Ветеран труда');
            this.pieData['soc']['series'].push(this.data['soc_dem']['Ветеран труда']);
        }
        if (this.data['soc_dem']['Дети инвалиды']) {
            this.pieData['soc']['labels'].push('Дети инвалиды');
            this.pieData['soc']['series'].push(this.data['soc_dem']['Дети инвалиды']);
        }
        if (this.data['soc_dem']['Молодые родители']) {
            this.pieData['soc']['labels'].push('Молодые родители');
            this.pieData['soc']['series'].push(this.data['soc_dem']['Молодые родители']);
        }
        if (this.data['soc_dem']['90']) {
            this.pieData['soc']['labels'].push('90');
            this.pieData['soc']['series'].push(this.data['soc_dem']['90']);
        }
    }
    getAgeData() {
        this.pieData['age']['labels'] = [];
        this.pieData['age']['series'] = [];
        if (this.data['soc_dem']['<7']) {
            this.pieData['age']['labels'].push('<7');
            this.pieData['age']['series'].push(this.data['soc_dem']['<7']);
        }
        if (this.data['soc_dem']['7-18']) {
            this.pieData['age']['labels'].push('7-18');
            this.pieData['age']['series'].push(this.data['soc_dem']['7-18']);
        }
        if (this.data['soc_dem']['18-25']) {
            this.pieData['age']['labels'].push('18-25');
            this.pieData['age']['series'].push(this.data['soc_dem']['18-25']);
        }
        if (this.data['soc_dem']['25-45']) {
            this.pieData['age']['labels'].push('25-45');
            this.pieData['age']['series'].push(this.data['soc_dem']['25-45']);
        }
        if (this.data['soc_dem']['45-60']) {
            this.pieData['age']['labels'].push('45-60');
            this.pieData['age']['series'].push(this.data['soc_dem']['45-60']);
        }
        if (this.data['soc_dem']['60-75']) {
            this.pieData['age']['labels'].push('60-75');
            this.pieData['age']['series'].push(this.data['soc_dem']['60-75']);
        }
        if (this.data['soc_dem']['75-90']) {
            this.pieData['age']['labels'].push('75-90');
            this.pieData['age']['series'].push(this.data['soc_dem']['75-90']);
        }
        if (this.data['soc_dem']['90<']) {
            this.pieData['age']['labels'].push('90<');
            this.pieData['age']['series'].push(this.data['soc_dem']['90<']);
        }
    }
    getSexData() {
        this.pieData['sex']['labels'] = [];
        this.pieData['sex']['series'] = [];
        if (this.data['soc_dem']['f']) {
            this.pieData['sex']['labels'].push('Жен');
            this.pieData['sex']['series'].push(this.data['soc_dem']['f']);
        }
        if (this.data['soc_dem']['m']) {
            // this.pieData['sex'].push(this.data['soc_dem']['m']);
            this.pieData['sex']['labels'].push('Муж');
            this.pieData['sex']['series'].push(this.data['soc_dem']['m']);
        }
        console.log(this.pieData);
    }
};
PageAnalysisComponent.ɵfac = function PageAnalysisComponent_Factory(t) { return new (t || PageAnalysisComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_backend_backend_service__WEBPACK_IMPORTED_MODULE_5__["BackendService"])); };
PageAnalysisComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PageAnalysisComponent, selectors: [["app-page-analysis"]], decls: 12, vars: 3, consts: [[1, "container"], [1, "caption"], [1, "form", 3, "formGroup", "ngSubmit"], [1, "form__row"], [1, "form__col"], ["formControlName", "address", "type", "text", "value", ""], ["value", "\u0410\u043D\u0430\u043B\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u0442\u044C", "type", "submit", 3, "disabled"], ["class", "data", 4, "ngIf"], [1, "data"], [4, "ngIf"], [3, "mapCenter", "currentPin", "mapZoom"], [3, "labels", "series"]], template: function PageAnalysisComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u0410\u043D\u0430\u043B\u0438\u0437 \u043C\u0435\u0441\u0442\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function PageAnalysisComponent_Template_form_ngSubmit_4_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, PageAnalysisComponent_div_11_Template, 11, 10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.form.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.data);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _shared_components_yandex_maps_yandex_maps_component__WEBPACK_IMPORTED_MODULE_7__["YandexMapsComponent"], _shared_components_pie_chart_pie_chart_component__WEBPACK_IMPORTED_MODULE_8__["PieChartComponent"], _shared_components_bar_chart_bar_chart_component__WEBPACK_IMPORTED_MODULE_9__["BarChartComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["JsonPipe"]], styles: [".form__row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGFnZS1hbmFseXNpcy9wYWdlLWFuYWx5c2lzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsYUFBQTtFQUNBLFNBQUE7QUFBSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhZ2UtYW5hbHlzaXMvcGFnZS1hbmFseXNpcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtIHtcbiAgJl9fcm93IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMXJlbTtcbiAgfVxufVxuIl19 */"] });
PageAnalysisComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_ngneat_until_destroy__WEBPACK_IMPORTED_MODULE_4__["UntilDestroy"])()
], PageAnalysisComponent);

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PageAnalysisComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-page-analysis',
                templateUrl: './page-analysis.component.html',
                styleUrls: ['./page-analysis.component.scss']
            }]
    }], function () { return [{ type: _shared_services_backend_backend_service__WEBPACK_IMPORTED_MODULE_5__["BackendService"] }]; }, null); })();


/***/ }),

/***/ "ZOjK":
/*!*****************************************************************!*\
  !*** ./src/app/shared/components/bar-chart/bar-chart.module.ts ***!
  \*****************************************************************/
/*! exports provided: BarChartModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarChartModule", function() { return BarChartModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _bar_chart_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bar-chart.component */ "zO3A");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-apexcharts */ "CV0D");





class BarChartModule {
}
BarChartModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BarChartModule });
BarChartModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BarChartModule_Factory(t) { return new (t || BarChartModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__["NgApexchartsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BarChartModule, { declarations: [_bar_chart_component__WEBPACK_IMPORTED_MODULE_2__["BarChartComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__["NgApexchartsModule"]], exports: [_bar_chart_component__WEBPACK_IMPORTED_MODULE_2__["BarChartComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BarChartModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_bar_chart_component__WEBPACK_IMPORTED_MODULE_2__["BarChartComponent"]],
                exports: [
                    _bar_chart_component__WEBPACK_IMPORTED_MODULE_2__["BarChartComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    ng_apexcharts__WEBPACK_IMPORTED_MODULE_3__["NgApexchartsModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "zO3A":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/bar-chart/bar-chart.component.ts ***!
  \********************************************************************/
/*! exports provided: BarChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarChartComponent", function() { return BarChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-apexcharts */ "CV0D");



const _c0 = ["chart"];
class BarChartComponent {
    constructor() {
    }
    ngOnInit() {
        this.chartOptions = {
            series: [
                {
                    data: this.series
                }
            ],
            chart: {
                type: "bar",
                height: 350
            },
            plotOptions: {
                bar: {
                    horizontal: true
                }
            },
            dataLabels: {
                enabled: false
            },
            xaxis: {
                categories: this.labels
            }
        };
    }
}
BarChartComponent.ɵfac = function BarChartComponent_Factory(t) { return new (t || BarChartComponent)(); };
BarChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BarChartComponent, selectors: [["app-bar-chart"]], viewQuery: function BarChartComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.chart = _t.first);
    } }, inputs: { series: "series", colors: "colors", labels: "labels" }, decls: 2, vars: 5, consts: [["id", "chart"], [3, "series", "chart", "dataLabels", "plotOptions", "xaxis"]], template: function BarChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "apx-chart", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("series", ctx.chartOptions.series)("chart", ctx.chartOptions.chart)("dataLabels", ctx.chartOptions.dataLabels)("plotOptions", ctx.chartOptions.plotOptions)("xaxis", ctx.chartOptions.xaxis);
    } }, directives: [ng_apexcharts__WEBPACK_IMPORTED_MODULE_1__["ChartComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2Jhci1jaGFydC9iYXItY2hhcnQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BarChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-bar-chart',
                templateUrl: './bar-chart.component.html',
                styleUrls: ['./bar-chart.component.scss']
            }]
    }], function () { return []; }, { chart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["chart"]
        }], series: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], colors: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], labels: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=pages-page-analysis-page-analysis-module.js.map