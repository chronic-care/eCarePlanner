(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+8xD":
/*!********************************************************************************!*\
  !*** ./src/app/clinical-imaging-results/clinical-imaging-results.component.ts ***!
  \********************************************************************************/
/*! exports provided: ClinicalImagingResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicalImagingResultsComponent", function() { return ClinicalImagingResultsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/constants */ "XY7g");
/* harmony import */ var _util_utility_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/utility-functions */ "n4X3");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ "EnSQ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function ClinicalImagingResultsComponent_tr_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var res_r1 = ctx.$implicit;
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](res_r1.code.coding[0].display);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.getDisplayValue(res_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.getEffectiveValue(res_r1.effectiveDateTime));
} }
var ClinicalImagingResultsComponent = /** @class */ (function () {
    function ClinicalImagingResultsComponent(dataservice) {
        this.dataservice = dataservice;
    }
    ClinicalImagingResultsComponent.prototype.ngOnInit = function () {
    };
    ClinicalImagingResultsComponent.prototype.getWotIsLoaded = function () {
        return window[_common_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].WotIsLoaded];
    };
    ClinicalImagingResultsComponent.prototype.getBPisLoaded = function () {
        return window[_common_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].BPisLoaded];
    };
    ClinicalImagingResultsComponent.prototype.getDisplayValue = function (value) {
        return Object(_util_utility_functions__WEBPACK_IMPORTED_MODULE_2__["getDisplayValueNew"])(value);
    };
    ClinicalImagingResultsComponent.prototype.getEffectiveValue = function (value) {
        return Object(_util_utility_functions__WEBPACK_IMPORTED_MODULE_2__["formatEffectiveDateNew"])(value);
    };
    ClinicalImagingResultsComponent.ɵfac = function ClinicalImagingResultsComponent_Factory(t) { return new (t || ClinicalImagingResultsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"])); };
    ClinicalImagingResultsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClinicalImagingResultsComponent, selectors: [["app-clinical-imaging-results"]], decls: 14, vars: 1, consts: [[1, "group-header"], ["width", "100%", "valign", "top", 1, "resultTable"], [1, "resultTableHeader"], [4, "ngFor", "ngForOf"]], template: function ClinicalImagingResultsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Imaging Results");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Test");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Result");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Date");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ClinicalImagingResultsComponent_tr_13_Template, 7, 3, "tr", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dataservice.imaging);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["table.internal[_ngcontent-%COMP%], td.internal[_ngcontent-%COMP%], td.internal[_ngcontent-%COMP%] {\n  border: none;\n  border-style: hidden;\n}\n\ntable[_ngcontent-%COMP%], td[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  border: black;\n  border-width: 1px;\n  border-style: solid;\n  margin-inside: 0;\n  margin-outside: 0;\n}\n\ntable.inner-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border:none;\n}\n\ntable.inner-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border:none;\n}\n\ntd[_ngcontent-%COMP%] { \n  padding: 2px 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpbmljYWwtaW1hZ2luZy1yZXN1bHRzL2NsaW5pY2FsLWltYWdpbmctcmVzdWx0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLFlBQVk7RUFDWixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jbGluaWNhbC1pbWFnaW5nLXJlc3VsdHMvY2xpbmljYWwtaW1hZ2luZy1yZXN1bHRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbnRhYmxlLmludGVybmFsLHRkLmludGVybmFsLCB0ZC5pbnRlcm5hbCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXN0eWxlOiBoaWRkZW47XG59XG5cbnRhYmxlLHRkLCB0aCB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlcjogYmxhY2s7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBtYXJnaW4taW5zaWRlOiAwO1xuICBtYXJnaW4tb3V0c2lkZTogMDtcbn1cblxudGFibGUuaW5uZXItdGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOm5vbmU7XG59XG5cbnRhYmxlLmlubmVyLXRhYmxlIHRyIHRkIHtcbiAgYm9yZGVyOm5vbmU7XG59XG5cbnRkIHsgXG4gIHBhZGRpbmc6IDJweCA1cHg7XG59Il19 */"] });
    return ClinicalImagingResultsComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClinicalImagingResultsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-clinical-imaging-results',
                templateUrl: './clinical-imaging-results.component.html',
                styleUrls: ['./clinical-imaging-results.component.css']
            }]
    }], function () { return [{ type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }]; }, null); })();


/***/ }),

/***/ "+NK/":
/*!**********************************************!*\
  !*** ./src/app/services/careplan.service.ts ***!
  \**********************************************/
/*! exports provided: CareplanService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CareplanService", function() { return CareplanService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var e_care_common_data_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! e-care-common-data-services */ "6AkT");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./message.service */ "tZre");









var CareplanService = /** @class */ (function () {
    function CareplanService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.baseURL = '/find/best/careplan';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
    }
    /** GET careplan by id. Will 404 if id not found */
    CareplanService.prototype.getCarePlan = function (id) {
        // const url = `${environment.mccapiUrl}${this.baseURL}/${id}`;
        var _this = this;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(Object(e_care_common_data_services__WEBPACK_IMPORTED_MODULE_5__["getCareplan"])(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log("fetched careplan id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("getCarePlan id=" + id)));
    };
    /** GET careplans by subject id. Will 404 if id not found */
    CareplanService.prototype.getCarePlansBySubject = function (subjectId) {
        // const url = `${environment.mccapiUrl}${this.baseURL}?subject=${subjectId}`;
        var _this = this;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(Object(e_care_common_data_services__WEBPACK_IMPORTED_MODULE_5__["getBestCareplan"])(subjectId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log("fetched careplan subjectId=" + subjectId); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("getCarePlansBySubject subjectId=" + subjectId)));
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    CareplanService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    /** Log a message with the MessageService */
    CareplanService.prototype.log = function (message) {
        this.messageService.add("careplan-service: " + message);
    };
    CareplanService.ɵfac = function CareplanService_Factory(t) { return new (t || CareplanService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_message_service__WEBPACK_IMPORTED_MODULE_6__["MessageService"])); };
    CareplanService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CareplanService, factory: CareplanService.ɵfac, providedIn: 'root' });
    CareplanService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], CareplanService);
    return CareplanService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CareplanService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _message_service__WEBPACK_IMPORTED_MODULE_6__["MessageService"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/seanmuir/git/restartProvder2/ghpages/mcc-provider/src/main.ts */"zUnb");


/***/ }),

/***/ "0vtW":
/*!******************************************!*\
  !*** ./src/app/pipes/null-check.pipe.ts ***!
  \******************************************/
/*! exports provided: NullCheckPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NullCheckPipe", function() { return NullCheckPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


var NullCheckPipe = /** @class */ (function () {
    function NullCheckPipe() {
    }
    NullCheckPipe.prototype.transform = function (value) {
        if (value) {
            var testValue = value.toUpperCase();
            if (testValue === "Undescribed code null".toUpperCase())
                return "";
            if (testValue === "null".toUpperCase())
                return "";
            if (testValue === "Undefined".toUpperCase())
                return "";
            if (testValue === "undefined onward".toUpperCase())
                return "";
            if (testValue.indexOf("null".toUpperCase()) > -1)
                return "";
        }
        return value;
    };
    NullCheckPipe.ɵfac = function NullCheckPipe_Factory(t) { return new (t || NullCheckPipe)(); };
    NullCheckPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "nullCheck", type: NullCheckPipe, pure: true });
    return NullCheckPipe;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NullCheckPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'nullCheck' }]
    }], null, null); })();


/***/ }),

/***/ "1XDx":
/*!*****************************************!*\
  !*** ./src/app/datamodel/vitalSigns.ts ***!
  \*****************************************/
/*! exports provided: emptyVitalSigns, emptyVitalSignsChartData, emptyVitalSignsTableData, emptyVitalSignsData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emptyVitalSigns", function() { return emptyVitalSigns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emptyVitalSignsChartData", function() { return emptyVitalSignsChartData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emptyVitalSignsTableData", function() { return emptyVitalSignsTableData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emptyVitalSignsData", function() { return emptyVitalSignsData; });
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_utility_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/utility-functions */ "n4X3");


var emptyVitalSignsData = {};
var emptyVitalSignsTableData = [];
var emptyVitalSignsChartData = [
    {
        data: [emptyVitalSignsData],
        fill: false,
        label: 'Systolic'
    },
    {
        data: [emptyVitalSignsData],
        fill: false,
        label: 'Diastolic'
    }
];
var emptyVitalSigns = {
    mostRecentSystolic: {},
    mostRecentDiastolic: {},
    tableData: emptyVitalSignsTableData,
    chartData: emptyVitalSignsChartData,
    xAxisLabels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    suggestedMin: moment__WEBPACK_IMPORTED_MODULE_0___default()('2020-01-01'),
    suggestedMax: moment__WEBPACK_IMPORTED_MODULE_0___default()('2020-06-30'),
    lineChartOptions: Object(_util_utility_functions__WEBPACK_IMPORTED_MODULE_1__["getLineChartOptionsObject"])(50, 180, moment__WEBPACK_IMPORTED_MODULE_0___default()('2020-01-01'), moment__WEBPACK_IMPORTED_MODULE_0___default()('2020-06-30'))
};



/***/ }),

/***/ "1f8w":
/*!********************************************************************************!*\
  !*** ./src/app/clinical-history-results/clinical-history-results.component.ts ***!
  \********************************************************************************/
/*! exports provided: ClinicalHistoryResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicalHistoryResultsComponent", function() { return ClinicalHistoryResultsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/constants */ "XY7g");
/* harmony import */ var _util_utility_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/utility-functions */ "n4X3");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ "EnSQ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function ClinicalHistoryResultsComponent_tr_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var res_r1 = ctx.$implicit;
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](res_r1.code.coding[0].display);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.getDisplayValue(res_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.getEffectiveValue(res_r1.effectiveDateTime));
} }
var ClinicalHistoryResultsComponent = /** @class */ (function () {
    function ClinicalHistoryResultsComponent(dataservice) {
        this.dataservice = dataservice;
    }
    ClinicalHistoryResultsComponent.prototype.ngOnInit = function () {
    };
    ClinicalHistoryResultsComponent.prototype.getWotIsLoaded = function () {
        return window[_common_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].WotIsLoaded];
    };
    ClinicalHistoryResultsComponent.prototype.getBPisLoaded = function () {
        return window[_common_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].BPisLoaded];
    };
    ClinicalHistoryResultsComponent.prototype.getDisplayValue = function (value) {
        return Object(_util_utility_functions__WEBPACK_IMPORTED_MODULE_2__["getDisplayValueNew"])(value);
    };
    ClinicalHistoryResultsComponent.prototype.getEffectiveValue = function (value) {
        return Object(_util_utility_functions__WEBPACK_IMPORTED_MODULE_2__["formatEffectiveDateNew"])(value);
    };
    ClinicalHistoryResultsComponent.ɵfac = function ClinicalHistoryResultsComponent_Factory(t) { return new (t || ClinicalHistoryResultsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"])); };
    ClinicalHistoryResultsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClinicalHistoryResultsComponent, selectors: [["app-clinical-history-results"]], decls: 14, vars: 1, consts: [[1, "group-header"], ["width", "100%", "valign", "top", 1, "resultTable"], [1, "resultTableHeader"], [4, "ngFor", "ngForOf"]], template: function ClinicalHistoryResultsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "History");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Test");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Result");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Date");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ClinicalHistoryResultsComponent_tr_13_Template, 7, 3, "tr", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dataservice.history);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["table.internal[_ngcontent-%COMP%], td.internal[_ngcontent-%COMP%], td.internal[_ngcontent-%COMP%] {\n  border: none;\n  border-style: hidden;\n}\n\ntable[_ngcontent-%COMP%], td[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  border: black;\n  border-width: 1px;\n  border-style: solid;\n  margin-inside: 0;\n  margin-outside: 0;\n}\n\ntable.inner-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border:none;\n}\n\ntable.inner-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border:none;\n}\n\ntd[_ngcontent-%COMP%] { \n  padding: 2px 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpbmljYWwtaGlzdG9yeS1yZXN1bHRzL2NsaW5pY2FsLWhpc3RvcnktcmVzdWx0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLFlBQVk7RUFDWixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jbGluaWNhbC1oaXN0b3J5LXJlc3VsdHMvY2xpbmljYWwtaGlzdG9yeS1yZXN1bHRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbnRhYmxlLmludGVybmFsLHRkLmludGVybmFsLCB0ZC5pbnRlcm5hbCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXN0eWxlOiBoaWRkZW47XG59XG5cbnRhYmxlLHRkLCB0aCB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlcjogYmxhY2s7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBtYXJnaW4taW5zaWRlOiAwO1xuICBtYXJnaW4tb3V0c2lkZTogMDtcbn1cblxudGFibGUuaW5uZXItdGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOm5vbmU7XG59XG5cbnRhYmxlLmlubmVyLXRhYmxlIHRyIHRkIHtcbiAgYm9yZGVyOm5vbmU7XG59XG5cbnRkIHsgXG4gIHBhZGRpbmc6IDJweCA1cHg7XG59Il19 */"] });
    return ClinicalHistoryResultsComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClinicalHistoryResultsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-clinical-history-results',
                templateUrl: './clinical-history-results.component.html',
                styleUrls: ['./clinical-history-results.component.css']
            }]
    }], function () { return [{ type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }]; }, null); })();


/***/ }),

/***/ "2Ze4":
/*!*******************************************************************!*\
  !*** ./src/app/app-material-module/app-material-module.module.ts ***!
  \*******************************************************************/
/*! exports provided: AppMaterialModuleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppMaterialModuleModule", function() { return AppMaterialModuleModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/a11y */ "u47x");
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/clipboard */ "UXJo");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/portal */ "+rOU");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/scrolling */ "vxfF");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/stepper */ "B/XX");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/table */ "f6nW");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/tree */ "FvrZ");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "2ChS");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/stepper */ "xHqg");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/tree */ "8yBR");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/forms */ "3Pt+");













































// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// import { AppComponent } from './app.component';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import {MatRadioModule} from '@angular/material/radio';
// import {MatFormFieldModule} from '@angular/material/form-field';
// mport {BrowserModule} from '@angular/platform-browser';
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import {MaterialExampleModule} from '../material.module';
// import {RadioOverviewExample} from './radio-overview-example';
// import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// import {MatNativeDateModule} from '@angular/material/core';
// import {HttpClientModule} from '@angular/common/http';


var AppMaterialModuleModule = /** @class */ (function () {
    function AppMaterialModuleModule() {
    }
    AppMaterialModuleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppMaterialModuleModule });
    AppMaterialModuleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppMaterialModuleModule_Factory(t) { return new (t || AppMaterialModuleModule)(); }, imports: [[
                _angular_forms__WEBPACK_IMPORTED_MODULE_45__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_45__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["A11yModule"],
                _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_3__["ClipboardModule"],
                _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_7__["CdkStepperModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_9__["CdkTreeModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["DragDropModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__["MatAutocompleteModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__["MatBadgeModule"],
                _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_12__["MatBottomSheetModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
                _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__["MatButtonToggleModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__["MatChipsModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__["MatStepperModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__["MatDividerModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__["MatExpansionModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__["MatGridListModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__["MatIconModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_25__["MatInputModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_26__["MatListModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__["MatMenuModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatNativeDateModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__["MatPaginatorModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__["MatProgressBarModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__["MatProgressSpinnerModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__["MatRadioModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatRippleModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_33__["MatSelectModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_34__["MatSidenavModule"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_35__["MatSliderModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_36__["MatSlideToggleModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_37__["MatSnackBarModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__["MatSortModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_39__["MatTableModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_40__["MatTabsModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_41__["MatToolbarModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_42__["MatTooltipModule"],
                _angular_material_tree__WEBPACK_IMPORTED_MODULE_43__["MatTreeModule"],
                _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__["PortalModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ScrollingModule"],
            ], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["A11yModule"],
            _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_3__["ClipboardModule"],
            _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_7__["CdkStepperModule"],
            _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkTableModule"],
            _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_9__["CdkTreeModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["DragDropModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__["MatAutocompleteModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__["MatBadgeModule"],
            _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_12__["MatBottomSheetModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__["MatButtonToggleModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__["MatChipsModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__["MatStepperModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__["MatDividerModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__["MatExpansionModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__["MatGridListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__["MatIconModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_25__["MatInputModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_26__["MatListModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__["MatMenuModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatNativeDateModule"],
            _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__["MatPaginatorModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__["MatProgressBarModule"],
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__["MatProgressSpinnerModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__["MatRadioModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatRippleModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_33__["MatSelectModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_34__["MatSidenavModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_35__["MatSliderModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_36__["MatSlideToggleModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_37__["MatSnackBarModule"],
            _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__["MatSortModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_39__["MatTableModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_40__["MatTabsModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_41__["MatToolbarModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_42__["MatTooltipModule"],
            _angular_material_tree__WEBPACK_IMPORTED_MODULE_43__["MatTreeModule"],
            _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__["PortalModule"],
            _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ScrollingModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_44__["MatFormFieldModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_45__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_45__["ReactiveFormsModule"]] });
    return AppMaterialModuleModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppMaterialModuleModule, { imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_45__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_45__["ReactiveFormsModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["A11yModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_3__["ClipboardModule"],
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_7__["CdkStepperModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkTableModule"],
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_9__["CdkTreeModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["DragDropModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_12__["MatBottomSheetModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_25__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_26__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_33__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_34__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_35__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_36__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_37__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_39__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_40__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_41__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_42__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_43__["MatTreeModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__["PortalModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ScrollingModule"]], exports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["A11yModule"],
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_3__["ClipboardModule"],
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_7__["CdkStepperModule"],
        _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkTableModule"],
        _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_9__["CdkTreeModule"],
        _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["DragDropModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__["MatAutocompleteModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__["MatBadgeModule"],
        _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_12__["MatBottomSheetModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__["MatButtonToggleModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__["MatChipsModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__["MatStepperModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"],
        _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__["MatDividerModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__["MatExpansionModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__["MatGridListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__["MatIconModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_25__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_26__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__["MatMenuModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatNativeDateModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__["MatPaginatorModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__["MatProgressBarModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__["MatProgressSpinnerModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__["MatRadioModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatRippleModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_33__["MatSelectModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_34__["MatSidenavModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_35__["MatSliderModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_36__["MatSlideToggleModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_37__["MatSnackBarModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__["MatSortModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_39__["MatTableModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_40__["MatTabsModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_41__["MatToolbarModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_42__["MatTooltipModule"],
        _angular_material_tree__WEBPACK_IMPORTED_MODULE_43__["MatTreeModule"],
        _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__["PortalModule"],
        _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ScrollingModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_44__["MatFormFieldModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_45__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_45__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppMaterialModuleModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_45__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_45__["ReactiveFormsModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["A11yModule"],
                    _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_3__["ClipboardModule"],
                    _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_7__["CdkStepperModule"],
                    _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkTableModule"],
                    _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_9__["CdkTreeModule"],
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["DragDropModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__["MatAutocompleteModule"],
                    _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__["MatBadgeModule"],
                    _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_12__["MatBottomSheetModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__["MatButtonToggleModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__["MatChipsModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__["MatStepperModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__["MatDividerModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__["MatExpansionModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__["MatGridListModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_25__["MatInputModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_26__["MatListModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__["MatMenuModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatNativeDateModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__["MatPaginatorModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__["MatProgressBarModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__["MatProgressSpinnerModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__["MatRadioModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatRippleModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_33__["MatSelectModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_34__["MatSidenavModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_35__["MatSliderModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_36__["MatSlideToggleModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_37__["MatSnackBarModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__["MatSortModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_39__["MatTableModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_40__["MatTabsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_41__["MatToolbarModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_42__["MatTooltipModule"],
                    _angular_material_tree__WEBPACK_IMPORTED_MODULE_43__["MatTreeModule"],
                    _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__["PortalModule"],
                    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ScrollingModule"],
                ],
                exports: [
                    _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["A11yModule"],
                    _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_3__["ClipboardModule"],
                    _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_7__["CdkStepperModule"],
                    _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkTableModule"],
                    _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_9__["CdkTreeModule"],
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["DragDropModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__["MatAutocompleteModule"],
                    _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__["MatBadgeModule"],
                    _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_12__["MatBottomSheetModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__["MatButtonToggleModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__["MatChipsModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__["MatStepperModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"],
                    _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__["MatDividerModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__["MatExpansionModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__["MatGridListModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__["MatIconModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_25__["MatInputModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_26__["MatListModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__["MatMenuModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatNativeDateModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__["MatPaginatorModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__["MatProgressBarModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__["MatProgressSpinnerModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__["MatRadioModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatRippleModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_33__["MatSelectModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_34__["MatSidenavModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_35__["MatSliderModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_36__["MatSlideToggleModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_37__["MatSnackBarModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__["MatSortModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_39__["MatTableModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_40__["MatTabsModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_41__["MatToolbarModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_42__["MatTooltipModule"],
                    _angular_material_tree__WEBPACK_IMPORTED_MODULE_43__["MatTreeModule"],
                    _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__["PortalModule"],
                    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ScrollingModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_44__["MatFormFieldModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_45__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_45__["ReactiveFormsModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "351w":
/*!*******************************************************!*\
  !*** ./src/app/goals-dialog/goal-dialog.component.ts ***!
  \*******************************************************/
/*! exports provided: GoalDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoalDialogComponent", function() { return GoalDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");





function GoalDialogComponent_content_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.theGoal.achievementStatus.text);
} }
function GoalDialogComponent_content_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.theGoal.lifecycleStatus);
} }
function GoalDialogComponent_content_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.theGoal.startDateText);
} }
function GoalDialogComponent_content_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var target_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](target_r12.measure.text);
} }
function GoalDialogComponent_content_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.theGoal.targetDateText);
} }
function GoalDialogComponent_li_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var addresses_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](addresses_r13.display);
} }
function GoalDialogComponent_content_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.theGoal.priority);
} }
function GoalDialogComponent_content_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.theGoal.expressedBy);
} }
function GoalDialogComponent_content_53_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.theGoal.acceptance.individual.display);
} }
function GoalDialogComponent_content_58_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.theGoal.acceptance.code);
} }
function GoalDialogComponent_li_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var relatedGoal_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", relatedGoal_r14.target.display, "-", relatedGoal_r14.type.text, " ");
} }
function GoalDialogComponent_content_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var note_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](note_r15);
} }
var GoalDialogComponent = /** @class */ (function () {
    function GoalDialogComponent(dialogRef, goal) {
        this.dialogRef = dialogRef;
        console.log('GoalDialogComponentGoalDialogComponent ' + JSON.stringify(goal));
        this.theGoal = goal;
        ;
    }
    GoalDialogComponent.prototype.ngOnInit = function () {
        // this.dataSource = new MatTableDataSource(this.history);
    };
    GoalDialogComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    GoalDialogComponent.ɵfac = function GoalDialogComponent_Factory(t) { return new (t || GoalDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
    GoalDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GoalDialogComponent, selectors: [["app-medication-dialog"]], decls: 72, vars: 13, consts: [["mat-dialog-title", ""], ["border", "1", 2, "width", "100%"], [4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "mat-raised-button", "mat-primary", 3, "click"]], template: function GoalDialogComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Goal Details");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Description");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Achievement");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, GoalDialogComponent_content_13_Template, 2, 1, "content", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Lifecycle Status");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, GoalDialogComponent_content_18_Template, 2, 1, "content", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Start Date");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, GoalDialogComponent_content_23_Template, 2, 1, "content", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Target");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, GoalDialogComponent_content_28_Template, 2, 1, "content", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Target Date");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, GoalDialogComponent_content_33_Template, 2, 1, "content", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Addresses");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, GoalDialogComponent_li_38_Template, 2, 1, "li", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Priority");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, GoalDialogComponent_content_43_Template, 2, 1, "content", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Expressed By");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, GoalDialogComponent_content_48_Template, 2, 1, "content", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Acceptance By");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, GoalDialogComponent_content_53_Template, 2, 1, "content", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Acceptance Status");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, GoalDialogComponent_content_58_Template, 2, 1, "content", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Related Goal");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, GoalDialogComponent_li_63_Template, 2, 2, "li", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Note");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](68, GoalDialogComponent_content_68_Template, 2, 1, "content", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "mat-dialog-actions");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "button", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GoalDialogComponent_Template_button_click_70_listener() { return ctx.close(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Close");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.theGoal.description);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.theGoal.achievementStatus.text);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.theGoal.lifecycleStatus);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.theGoal.startDateText);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.theGoal.targets);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.theGoal.targetDateText);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.theGoal.addresses);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.theGoal.priority);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.theGoal.expressedBy);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.theGoal.acceptance && ctx.theGoal.acceptance.individual);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.theGoal.acceptance && ctx.theGoal.acceptance.code);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.theGoal.relatedGoals);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.theGoal.notes);
        } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"]], styles: ["mat-table[_ngcontent-%COMP%] {\n  vertical-align: top;\n  width: 100%;\n}\n\n  .mat-table {\n  overflow-x: hidden !important;\n}\n\nmat-header-row[_ngcontent-%COMP%] {\n  min-height: 48px;\n  height: 48px !important;\n}\n\nmat-row[_ngcontent-%COMP%] {\n  min-height: 24px;\n  height: 24px !important;\n}\n\n.mat-column-description[_ngcontent-%COMP%] {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 35% !important;\n  width: 35% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n\n.mat-column-onset[_ngcontent-%COMP%] {\n  word-wrap: break-word !important;\n  white-space: normal !important;\n  flex: 0 0 15% !important;\n  width: 15% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n\n.mat-column-recorded[_ngcontent-%COMP%] {\n  word-wrap: break-word !important;\n  white-space: normal !important;\n  flex: 0 0 15% !important;\n  width: 15% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n\n.mat-column-abatement[_ngcontent-%COMP%] {\n  word-wrap: break-word !important;\n  white-space: normal !important;\n  flex: 0 0 15% !important;\n  width: 15% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n\n.mat-column-status[_ngcontent-%COMP%] {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 20% !important;\n  width: 20% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ29hbHMtZGlhbG9nL2dvYWwtZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztBQUNiOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsNkJBQTZCO0VBQzdCLHdCQUF3QjtFQUN4QixxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUdyQixxQkFBcUI7RUFDckIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLDhCQUE4QjtFQUM5Qix3QkFBd0I7RUFDeEIscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFHckIscUJBQXFCO0VBQ3JCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyw4QkFBOEI7RUFDOUIsd0JBQXdCO0VBQ3hCLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIscUJBQXFCO0VBR3JCLHFCQUFxQjtFQUNyQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsOEJBQThCO0VBQzlCLHdCQUF3QjtFQUN4QixxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUdyQixxQkFBcUI7RUFDckIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLDZCQUE2QjtFQUM3Qix3QkFBd0I7RUFDeEIscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFHckIscUJBQXFCO0VBQ3JCLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2dvYWxzLWRpYWxvZy9nb2FsLWRpYWxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LXRhYmxlIHtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi9kZWVwLyAubWF0LXRhYmxlIHtcbiAgb3ZlcmZsb3cteDogaGlkZGVuICFpbXBvcnRhbnQ7XG59XG5cbm1hdC1oZWFkZXItcm93IHtcbiAgbWluLWhlaWdodDogNDhweDtcbiAgaGVpZ2h0OiA0OHB4ICFpbXBvcnRhbnQ7XG59XG5cbm1hdC1yb3cge1xuICBtaW4taGVpZ2h0OiAyNHB4O1xuICBoZWlnaHQ6IDI0cHggIWltcG9ydGFudDtcbn1cblxuLm1hdC1jb2x1bW4tZGVzY3JpcHRpb24ge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcbiAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIGZsZXg6IDAgMCAzNSUgIWltcG9ydGFudDtcbiAgd2lkdGg6IDM1JSAhaW1wb3J0YW50O1xuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIC1tcy1oeXBoZW5zOiBhdXRvO1xuICAtbW96LWh5cGhlbnM6IGF1dG87XG4gIC13ZWJraXQtaHlwaGVuczogYXV0bztcbiAgaHlwaGVuczogYXV0bztcbn1cblxuLm1hdC1jb2x1bW4tb25zZXQge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xuICBmbGV4OiAwIDAgMTUlICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxNSUgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAtbXMtaHlwaGVuczogYXV0bztcbiAgLW1vei1oeXBoZW5zOiBhdXRvO1xuICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XG4gIGh5cGhlbnM6IGF1dG87XG59XG5cbi5tYXQtY29sdW1uLXJlY29yZGVkIHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcbiAgZmxleDogMCAwIDE1JSAhaW1wb3J0YW50O1xuICB3aWR0aDogMTUlICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgLW1zLWh5cGhlbnM6IGF1dG87XG4gIC1tb3otaHlwaGVuczogYXV0bztcbiAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xuICBoeXBoZW5zOiBhdXRvO1xufVxuXG4ubWF0LWNvbHVtbi1hYmF0ZW1lbnQge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbCAhaW1wb3J0YW50O1xuICBmbGV4OiAwIDAgMTUlICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxNSUgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAtbXMtaHlwaGVuczogYXV0bztcbiAgLW1vei1oeXBoZW5zOiBhdXRvO1xuICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XG4gIGh5cGhlbnM6IGF1dG87XG59XG5cbi5tYXQtY29sdW1uLXN0YXR1cyB7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xuICB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcbiAgZmxleDogMCAwIDIwJSAhaW1wb3J0YW50O1xuICB3aWR0aDogMjAlICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgLW1zLWh5cGhlbnM6IGF1dG87XG4gIC1tb3otaHlwaGVuczogYXV0bztcbiAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xuICBoeXBoZW5zOiBhdXRvO1xufSJdfQ== */"] });
    return GoalDialogComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GoalDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-medication-dialog',
                templateUrl: './goal-dialog.component.html',
                styleUrls: ['./goal-dialog.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "49Qf":
/*!**********************************************************************!*\
  !*** ./src/app/active-orders-panel/active-orders-panel.component.ts ***!
  \**********************************************************************/
/*! exports provided: ActiveOrdersPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveOrdersPanelComponent", function() { return ActiveOrdersPanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/data.service */ "EnSQ");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");










function ActiveOrdersPanelComponent_th_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Topic");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ActiveOrdersPanelComponent_td_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r12.topic.text, " ");
} }
function ActiveOrdersPanelComponent_th_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ActiveOrdersPanelComponent_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r13.displayDate, " ");
} }
function ActiveOrdersPanelComponent_th_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Performer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ActiveOrdersPanelComponent_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r14.performer, " ");
} }
function ActiveOrdersPanelComponent_th_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Reason");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ActiveOrdersPanelComponent_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r15.reasons, " ");
} }
function ActiveOrdersPanelComponent_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ActiveOrdersPanelComponent_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, item_r16.status), "");
} }
function ActiveOrdersPanelComponent_tr_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 15);
} }
var _c0 = function (a0) { return { "outofrange": a0 }; };
function ActiveOrdersPanelComponent_tr_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActiveOrdersPanelComponent_tr_19_Template_tr_click_0_listener() { var row_r17 = ctx.$implicit; return row_r17.highlighted = !row_r17.highlighted; })("mouseover", function ActiveOrdersPanelComponent_tr_19_Template_tr_mouseover_0_listener() { var row_r17 = ctx.$implicit; return row_r17.hovered = true; })("mouseout", function ActiveOrdersPanelComponent_tr_19_Template_tr_mouseout_0_listener() { var row_r17 = ctx.$implicit; return row_r17.hovered = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, row_r17.status == "high"));
} }
var ActiveOrdersPanelComponent = /** @class */ (function () {
    function ActiveOrdersPanelComponent(dataService) {
        this.dataService = dataService;
        this.displayedColumns = ['topic', 'displayDate', 'performer', 'reasons'];
    }
    ActiveOrdersPanelComponent.prototype.ngOnInit = function () {
        this.activeOrders = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.dataService.servicerequest);
        this.activeOrders.sortingDataAccessor = function (item, property) {
            switch (property) {
                case 'topic': return item[property].text;
                case 'displayDate': return moment__WEBPACK_IMPORTED_MODULE_3___default()(item[property]).unix();
                case 'outcome': return item[property].text;
                default: return item[property];
            }
        };
    };
    ActiveOrdersPanelComponent.prototype.ngAfterViewInit = function () {
        // this.dataSource.sort = this.sort;
    };
    ActiveOrdersPanelComponent.ɵfac = function ActiveOrdersPanelComponent_Factory(t) { return new (t || ActiveOrdersPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"])); };
    ActiveOrdersPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ActiveOrdersPanelComponent, selectors: [["app-active-orders-panel"]], viewQuery: function ActiveOrdersPanelComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"], true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        } }, decls: 20, vars: 3, consts: [[1, "group-header"], ["mat-table", "", "matSort", "", "width", "100%", 3, "dataSource"], ["matColumnDef", "topic"], ["mat-header-cell", "", "width", "35%", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "displayDate", "width", "10%"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["matColumnDef", "performer", "width", "15%"], ["matColumnDef", "reasons", "width", "20%"], ["matColumnDef", "status", "width", "10%"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "ngClass", "click", "mouseover", "mouseout", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", "width", "35%", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-header-row", ""], ["mat-row", "", 3, "ngClass", "click", "mouseover", "mouseout"]], template: function ActiveOrdersPanelComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Active Orders");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](3, 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ActiveOrdersPanelComponent_th_4_Template, 2, 0, "th", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ActiveOrdersPanelComponent_td_5_Template, 2, 1, "td", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](6, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ActiveOrdersPanelComponent_th_7_Template, 2, 0, "th", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ActiveOrdersPanelComponent_td_8_Template, 2, 1, "td", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](9, 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ActiveOrdersPanelComponent_th_10_Template, 2, 0, "th", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ActiveOrdersPanelComponent_td_11_Template, 2, 1, "td", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](12, 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ActiveOrdersPanelComponent_th_13_Template, 2, 0, "th", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ActiveOrdersPanelComponent_td_14_Template, 2, 1, "td", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](15, 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ActiveOrdersPanelComponent_th_16_Template, 2, 0, "th", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ActiveOrdersPanelComponent_td_17_Template, 3, 3, "td", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ActiveOrdersPanelComponent_tr_18_Template, 1, 0, "tr", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ActiveOrdersPanelComponent_tr_19_Template, 1, 3, "tr", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.activeOrders);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__["DefaultClassDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["TitleCasePipe"]], styles: ["mat-grid-tile[_ngcontent-%COMP%]   .mat-figure[_ngcontent-%COMP%] {\n  justify-content: center;\n  vertical-align: top;\n  background: blue;\n}\n\n.group-header[_ngcontent-%COMP%] {\n  justify-content: center;\n  vertical-align: top;\n  background: blue;\n  color: white;\n}\n\nmat-table[_ngcontent-%COMP%] {\n  vertical-align: top;\n}\n\ntr.mat-table[_ngcontent-%COMP%] {\n  vertical-align: top;\n  min-width: 700px;\n}\n\ntr.mat-header-row[_ngcontent-%COMP%] {\n  min-height: 24px;\n  height: 24px !important;\n}\n\ntr.mat-row[_ngcontent-%COMP%] {\n  min-height: 24px;\n  height: 24px !important;\n}\n\nth.mat-header-cell[_ngcontent-%COMP%], td.mat-cell[_ngcontent-%COMP%] {\n  text-align: left;\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWN0aXZlLW9yZGVycy1wYW5lbC9hY3RpdmUtb3JkZXJzLXBhbmVsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtBQUN6Qjs7QUFHQTtFQUNFLGdCQUFnQjs7QUFFbEIiLCJmaWxlIjoic3JjL2FwcC9hY3RpdmUtb3JkZXJzLXBhbmVsL2FjdGl2ZS1vcmRlcnMtcGFuZWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1ncmlkLXRpbGUgLm1hdC1maWd1cmUge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgYmFja2dyb3VuZDogYmx1ZTtcbn1cblxuLmdyb3VwLWhlYWRlciB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBiYWNrZ3JvdW5kOiBibHVlO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbm1hdC10YWJsZSB7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbnRyLm1hdC10YWJsZSB7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIG1pbi13aWR0aDogNzAwcHg7XG59XG5cbnRyLm1hdC1oZWFkZXItcm93IHtcbiAgbWluLWhlaWdodDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4ICFpbXBvcnRhbnQ7XG59XG5cbnRyLm1hdC1yb3cge1xuICBtaW4taGVpZ2h0OiAyNHB4O1xuICBoZWlnaHQ6IDI0cHggIWltcG9ydGFudDtcbn1cblxuXG50aC5tYXQtaGVhZGVyLWNlbGwsIHRkLm1hdC1jZWxsIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcblxufVxuIl19 */"] });
    return ActiveOrdersPanelComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActiveOrdersPanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-active-orders-panel',
                templateUrl: './active-orders-panel.component.html',
                styleUrls: ['./active-orders-panel.component.css']
            }]
    }], function () { return [{ type: _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] }]; }, { sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"]]
        }] }); })();


/***/ }),

/***/ "5bbp":
/*!******************************************************************************************!*\
  !*** ./src/app/maintenance-and-interventions/maintenance-and-interventions.component.ts ***!
  \******************************************************************************************/
/*! exports provided: MaintenanceAndInterventionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaintenanceAndInterventionsComponent", function() { return MaintenanceAndInterventionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/constants */ "XY7g");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _medication_panel_medication_panel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../medication-panel/medication-panel.component */ "k1Aq");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _active_orders_panel_active_orders_panel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../active-orders-panel/active-orders-panel.component */ "49Qf");







function MaintenanceAndInterventionsComponent_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-medication-panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MaintenanceAndInterventionsComponent_tr_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Active Medications");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-spinner", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MaintenanceAndInterventionsComponent_tr_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-active-orders-panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MaintenanceAndInterventionsComponent_tr_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Active Orders");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-spinner", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var MaintenanceAndInterventionsComponent = /** @class */ (function () {
    function MaintenanceAndInterventionsComponent() {
        this.featureToggling = _common_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].featureToggling;
    }
    MaintenanceAndInterventionsComponent.prototype.ngOnInit = function () {
    };
    MaintenanceAndInterventionsComponent.prototype.getEducationIsReady = function () {
        return window[_common_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].EducationIsLoaded];
    };
    MaintenanceAndInterventionsComponent.prototype.getCounselingIsReady = function () {
        return window[_common_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].CounselingIsLoaded];
    };
    MaintenanceAndInterventionsComponent.prototype.getReferralsIsReady = function () {
        return window[_common_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].ReferralsIsLoaded];
    };
    MaintenanceAndInterventionsComponent.prototype.getMedicationIsReady = function () {
        return window[_common_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].MedicationsIsLoaded];
    };
    MaintenanceAndInterventionsComponent.prototype.getServiceRequestIsReady = function () {
        return window[_common_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].ServiceRequestIsLoaded];
    };
    MaintenanceAndInterventionsComponent.ɵfac = function MaintenanceAndInterventionsComponent_Factory(t) { return new (t || MaintenanceAndInterventionsComponent)(); };
    MaintenanceAndInterventionsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MaintenanceAndInterventionsComponent, selectors: [["app-maintenance-and-interventions"]], decls: 5, vars: 4, consts: [["width", "100%"], [4, "ngIf"], ["colspan", "3", 2, "height", "200px"], [1, "group-header"], ["mode", "indeterminate", 2, "margin", "0 auto"]], template: function MaintenanceAndInterventionsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MaintenanceAndInterventionsComponent_tr_1_Template, 3, 0, "tr", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MaintenanceAndInterventionsComponent_tr_2_Template, 5, 0, "tr", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MaintenanceAndInterventionsComponent_tr_3_Template, 3, 0, "tr", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MaintenanceAndInterventionsComponent_tr_4_Template, 5, 0, "tr", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.featureToggling.maintenanceAndInterventions.medications && ctx.getMedicationIsReady());
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.featureToggling.maintenanceAndInterventions.medications && !ctx.getMedicationIsReady());
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.featureToggling.maintenanceAndInterventions.education && ctx.getServiceRequestIsReady());
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.featureToggling.maintenanceAndInterventions.education && !ctx.getServiceRequestIsReady());
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _medication_panel_medication_panel_component__WEBPACK_IMPORTED_MODULE_3__["MedicationPanelComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_4__["MatSpinner"], _active_orders_panel_active_orders_panel_component__WEBPACK_IMPORTED_MODULE_5__["ActiveOrdersPanelComponent"]], styles: ["mat-grid-tile[_ngcontent-%COMP%]\n{\n  \n}\n\napp-medication-panel[_ngcontent-%COMP%] {\n  width: inherit;\n  vertical-align: top;\n  height: -webkit-fill-available;\n  height: -moz-available;\n  height: stretch;\n}\n\napp-education-panel[_ngcontent-%COMP%]{\n  width: inherit;\n  vertical-align: top;\n  height: -webkit-fill-available;\n  height: -moz-available;\n  height: stretch;\n  overflow: scroll;\n}\n\napp-counseling-panel[_ngcontent-%COMP%]{\n  width: inherit;\n  vertical-align: top;\n  height: -webkit-fill-available;\n  height: -moz-available;\n  height: stretch;\n  overflow: scroll;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbnRlbmFuY2UtYW5kLWludGVydmVudGlvbnMvbWFpbnRlbmFuY2UtYW5kLWludGVydmVudGlvbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixzQkFBc0I7RUFDdEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUdBO0VBQ0UsY0FBYztFQUNkLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9tYWludGVuYW5jZS1hbmQtaW50ZXJ2ZW50aW9ucy9tYWludGVuYW5jZS1hbmQtaW50ZXJ2ZW50aW9ucy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWdyaWQtdGlsZVxue1xuICAvKiBiYWNrZ3JvdW5kOiBsaWdodHNreWJsdWU7ICovXG59XG5cbmFwcC1tZWRpY2F0aW9uLXBhbmVsIHtcbiAgd2lkdGg6IGluaGVyaXQ7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIGhlaWdodDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbiAgaGVpZ2h0OiAtbW96LWF2YWlsYWJsZTtcbiAgaGVpZ2h0OiBzdHJldGNoO1xufVxuXG5hcHAtZWR1Y2F0aW9uLXBhbmVse1xuICB3aWR0aDogaW5oZXJpdDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgaGVpZ2h0OiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuICBoZWlnaHQ6IC1tb3otYXZhaWxhYmxlO1xuICBoZWlnaHQ6IHN0cmV0Y2g7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG59XG5cblxuYXBwLWNvdW5zZWxpbmctcGFuZWx7XG4gIHdpZHRoOiBpbmhlcml0O1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBoZWlnaHQ6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gIGhlaWdodDogLW1vei1hdmFpbGFibGU7XG4gIGhlaWdodDogc3RyZXRjaDtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cblxuIl19 */"] });
    return MaintenanceAndInterventionsComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaintenanceAndInterventionsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-maintenance-and-interventions',
                templateUrl: './maintenance-and-interventions.component.html',
                styleUrls: ['./maintenance-and-interventions.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "5rrq":
/*!*****************************************************!*\
  !*** ./src/app/services/service-request.service.ts ***!
  \*****************************************************/
/*! exports provided: ServiceRequestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceRequestService", function() { return ServiceRequestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var e_care_common_data_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! e-care-common-data-services */ "6AkT");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./message.service */ "tZre");








var ServiceRequestService = /** @class */ (function () {
    function ServiceRequestService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.baseURL = '/summary/servicerequests';
        // httpOptions = {
        //   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        // };
        this.HTTP_OPTIONS = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
    }
    /** GET education summaries by subject id. Will 404 if id not found */
    ServiceRequestService.prototype.ogetServiceRequestSummaries = function (subjectId, careplanId) {
        var _this = this;
        // const url = `${environment.mccapiUrl}${this.baseURL}?subject=${subjectId}&careplan=${careplanId}`;
        return this.http.get('url', this.HTTP_OPTIONS).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { _this.log("fetched ServiceRequest Summaries id=" + subjectId + ", careplan=" + careplanId); console.log("getServiceRequest", _); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getServiceRequestSummaries id=" + subjectId + ", careplan=" + careplanId)));
    };
    /** GET Subject by id. Will 404 if id not found */
    ServiceRequestService.prototype.getServiceRequestSummaries = function (id, careplanId) {
        var _this = this;
        console.log('getServiceRequestSummaries id = ' + id);
        console.log('getServiceRequestSummaries careplanId = ' + careplanId);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(Object(e_care_common_data_services__WEBPACK_IMPORTED_MODULE_4__["getSummaryServiceRequest"])()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("fetched subject id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getSubject id=" + id)));
    };
    // getServiceRequestSummarieszz(subjectId: string, category: string): Observable<MccObservation[]> {
    //   const url = `${environment.mccapiUrl}/${this._observationByCategoryURL}?subject=${subjectId}&category=${category}`;
    //   return this.http.get<MccObservation[]>(url,this.HTTP_OPTIONS).pipe(
    //     tap((_) => { console.log(`getObservationsByCategory id=${subjectId}, careplan=${category}`); console.log("getObservationsByCategory", _); }),
    //     catchError(this.handleError<MccObservation[]>(`getObservationsByCategory id=${subjectId}, careplan=${category}`))
    //   );
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    ServiceRequestService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    /** Log a message with the MessageService */
    ServiceRequestService.prototype.log = function (message) {
        this.messageService.add("contact-service: " + message);
    };
    ServiceRequestService.ɵfac = function ServiceRequestService_Factory(t) { return new (t || ServiceRequestService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"])); };
    ServiceRequestService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ServiceRequestService, factory: ServiceRequestService.ɵfac, providedIn: 'root' });
    return ServiceRequestService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServiceRequestService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"] }]; }, null); })();


/***/ }),

/***/ "69hJ":
/*!********************************************************************************************!*\
  !*** ./src/app/clinical-questionaires-results/clinical-questionaires-results.component.ts ***!
  \********************************************************************************************/
/*! exports provided: ClinicalQuestionairesResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicalQuestionairesResultsComponent", function() { return ClinicalQuestionairesResultsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/constants */ "XY7g");
/* harmony import */ var _util_utility_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/utility-functions */ "n4X3");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ "EnSQ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function ClinicalQuestionairesResultsComponent_tr_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var res_r1 = ctx.$implicit;
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](res_r1.code.coding[0].display);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.getDisplayValue(res_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.getEffectiveValue(res_r1.effectiveDateTime));
} }
var ClinicalQuestionairesResultsComponent = /** @class */ (function () {
    function ClinicalQuestionairesResultsComponent(dataservice) {
        this.dataservice = dataservice;
    }
    ClinicalQuestionairesResultsComponent.prototype.ngOnInit = function () {
    };
    ClinicalQuestionairesResultsComponent.prototype.getWotIsLoaded = function () {
        return window[_common_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].WotIsLoaded];
    };
    ClinicalQuestionairesResultsComponent.prototype.getBPisLoaded = function () {
        return window[_common_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].BPisLoaded];
    };
    ClinicalQuestionairesResultsComponent.prototype.getDisplayValue = function (value) {
        var newDisplay = Object(_util_utility_functions__WEBPACK_IMPORTED_MODULE_2__["getDisplayValueNew"])(value);
        return newDisplay;
    };
    ClinicalQuestionairesResultsComponent.prototype.getEffectiveValue = function (value) {
        return Object(_util_utility_functions__WEBPACK_IMPORTED_MODULE_2__["formatEffectiveDateNew"])(value);
    };
    ClinicalQuestionairesResultsComponent.ɵfac = function ClinicalQuestionairesResultsComponent_Factory(t) { return new (t || ClinicalQuestionairesResultsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"])); };
    ClinicalQuestionairesResultsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClinicalQuestionairesResultsComponent, selectors: [["app-clinical-questionaires-results"]], decls: 14, vars: 1, consts: [[1, "group-header"], ["width", "100%", "valign", "top", 1, "resultTable"], [1, "resultTableHeader"], [4, "ngFor", "ngForOf"]], template: function ClinicalQuestionairesResultsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Questionaires/Surveys");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Test");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Result");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Date");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ClinicalQuestionairesResultsComponent_tr_13_Template, 7, 3, "tr", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dataservice.questionaires);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["table.internal[_ngcontent-%COMP%], td.internal[_ngcontent-%COMP%], td.internal[_ngcontent-%COMP%] {\n  border: none;\n  border-style: hidden;\n}\n\ntable[_ngcontent-%COMP%], td[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  border: black;\n  border-width: 1px;\n  border-style: solid;\n  margin-inside: 0;\n  margin-outside: 0;\n}\n\ntable.inner-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border:none;\n}\n\ntable.inner-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border:none;\n}\n\ntd[_ngcontent-%COMP%] { \n  padding: 2px 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpbmljYWwtcXVlc3Rpb25haXJlcy1yZXN1bHRzL2NsaW5pY2FsLXF1ZXN0aW9uYWlyZXMtcmVzdWx0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLFlBQVk7RUFDWixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jbGluaWNhbC1xdWVzdGlvbmFpcmVzLXJlc3VsdHMvY2xpbmljYWwtcXVlc3Rpb25haXJlcy1yZXN1bHRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbnRhYmxlLmludGVybmFsLHRkLmludGVybmFsLCB0ZC5pbnRlcm5hbCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXN0eWxlOiBoaWRkZW47XG59XG5cbnRhYmxlLHRkLCB0aCB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlcjogYmxhY2s7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBtYXJnaW4taW5zaWRlOiAwO1xuICBtYXJnaW4tb3V0c2lkZTogMDtcbn1cblxudGFibGUuaW5uZXItdGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOm5vbmU7XG59XG5cbnRhYmxlLmlubmVyLXRhYmxlIHRyIHRkIHtcbiAgYm9yZGVyOm5vbmU7XG59XG5cbnRkIHsgXG4gIHBhZGRpbmc6IDJweCA1cHg7XG59Il19 */"] });
    return ClinicalQuestionairesResultsComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClinicalQuestionairesResultsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-clinical-questionaires-results',
                templateUrl: './clinical-questionaires-results.component.html',
                styleUrls: ['./clinical-questionaires-results.component.css']
            }]
    }], function () { return [{ type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }]; }, null); })();


/***/ }),

/***/ "6Fft":
/*!********************************************************************!*\
  !*** ./src/app/consolidated-goals/consolidated-goals.component.ts ***!
  \********************************************************************/
/*! exports provided: ConsolidatedGoalsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsolidatedGoalsComponent", function() { return ConsolidatedGoalsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _goals_dialog_goal_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../goals-dialog/goal-dialog.component */ "351w");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/data.service */ "EnSQ");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _pipes_null_check_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../pipes/null-check.pipe */ "0vtW");
















function ConsolidatedGoalsComponent_th_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Priority");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ConsolidatedGoalsComponent_td_5_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "priority_high");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ConsolidatedGoalsComponent_td_5_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "low_priority");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ConsolidatedGoalsComponent_td_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ConsolidatedGoalsComponent_td_5_mat_icon_1_Template, 2, 0, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ConsolidatedGoalsComponent_td_5_mat_icon_2_Template, 2, 0, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var goal_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", goal_r14.priority.toLowerCase().includes("high"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", goal_r14.priority.toLowerCase().includes("low"));
} }
function ConsolidatedGoalsComponent_th_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Goal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ConsolidatedGoalsComponent_td_8_Template(rf, ctx) { if (rf & 1) {
    var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConsolidatedGoalsComponent_td_8_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); var goal_r17 = ctx.$implicit; var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.openDialog(goal_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var goal_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", goal_r17.description, " ");
} }
function ConsolidatedGoalsComponent_th_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Target Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ConsolidatedGoalsComponent_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var goal_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", goal_r20.targetDateText, " ");
} }
function ConsolidatedGoalsComponent_th_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Achievement Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ConsolidatedGoalsComponent_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "nullCheck");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var goal_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, goal_r21.achievementStatus), " ");
} }
function ConsolidatedGoalsComponent_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Most Recent Result");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ConsolidatedGoalsComponent_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "td", 20);
} }
function ConsolidatedGoalsComponent_th_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Expressed by");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ConsolidatedGoalsComponent_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var goal_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", goal_r23.expressedBy, " ");
} }
function ConsolidatedGoalsComponent_tr_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 28);
} }
var _c0 = function (a0, a1) { return { hovered: a0, highlighted: a1 }; };
function ConsolidatedGoalsComponent_tr_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConsolidatedGoalsComponent_tr_22_Template_tr_click_0_listener() { var row_r24 = ctx.$implicit; return row_r24.highlighted = !row_r24.highlighted; })("mouseover", function ConsolidatedGoalsComponent_tr_22_Template_tr_mouseover_0_listener() { var row_r24 = ctx.$implicit; return row_r24.hovered = true; })("mouseout", function ConsolidatedGoalsComponent_tr_22_Template_tr_mouseout_0_listener() { var row_r24 = ctx.$implicit; return row_r24.hovered = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, row_r24.hovered, row_r24.highlighted));
} }
var _c1 = function () { return [10, 15, 20]; };
var ConsolidatedGoalsComponent = /** @class */ (function () {
    function ConsolidatedGoalsComponent(dataService, dialog) {
        this.dataService = dataService;
        this.dialog = dialog;
        this.displayedColumns = ['rank', 'description', 'targetdate', 'status', 'mostrecentresult', 'expressedby'];
    }
    ConsolidatedGoalsComponent.prototype.ngOnInit = function () {
        this.consolidatedGoalsDataSource = this.dataService.consolidatedGoalsDataSource;
    };
    ConsolidatedGoalsComponent.prototype.ngAfterViewInit = function () {
        this.dataService.targetValues;
        this.consolidatedGoalsDataSource.paginator = this.paginator;
        this.consolidatedGoalsDataSource.sort = this.sort;
        this.consolidatedGoalsDataSource.sortingDataAccessor = function (data, header) {
            switch (header) {
                case ('status'): {
                    return data.achievementStatus.text;
                }
                case ('priority'): {
                    if (data.priority.toLowerCase() === 'undefined') {
                        return 'low-priority';
                    }
                    else {
                        return data[header];
                    }
                }
                case ('startDateText'): {
                    return moment__WEBPACK_IMPORTED_MODULE_3___default()(data[header]).unix();
                }
                case ('targetDateText'): {
                    return moment__WEBPACK_IMPORTED_MODULE_3___default()(data[header]).unix();
                }
                case ("achievementStatus"): {
                    return data[header].text;
                }
                default: {
                    return data[header];
                }
            }
        };
    };
    ConsolidatedGoalsComponent.prototype.refresh = function () {
        this.dataService.consolidatedGoalsDataSource;
    };
    ConsolidatedGoalsComponent.prototype.openDialog = function (goal) {
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.hasBackdrop = true;
        dialogConfig.width = '700px';
        dialogConfig.data = goal;
        // goal.mostrecentresult = this.getMostRecentResult(goal);
        this.dialog.open(_goals_dialog_goal_dialog_component__WEBPACK_IMPORTED_MODULE_5__["GoalDialogComponent"], dialogConfig);
    };
    ConsolidatedGoalsComponent.prototype.getMostRecentResult = function (goal) {
        var _a, _b, _c;
        if (((_a = goal === null || goal === void 0 ? void 0 : goal.targets) === null || _a === void 0 ? void 0 : _a.length) > 0) {
            if (((_c = (_b = goal.targets[0].measure) === null || _b === void 0 ? void 0 : _b.coding) === null || _c === void 0 ? void 0 : _c.length) > 0) {
                var item73 = this.dataService.targetValues.filter(function (targetValue) {
                    // return targetValue.code === goal.targets[0].measure?.coding[0].code;
                });
                if ((item73 === null || item73 === void 0 ? void 0 : item73.length) > 0) {
                    return 'Target: ' + item73[0].measure + ' (' + item73[0].target + '); Last Value: ' + item73[0].mostRecentResult + ' on ' + item73[0].date.substring(0, 10);
                    ;
                }
                // this.dataService.targetValues.find();
                return "Target: " + goal.targets[0].measure.text + ' (' + goal.targets[0].measure.coding[0].code + '); Last Value: None Recorded';
            }
            //  if () { }
            return "Target: " + goal.targets[0].measure.text + '; Last Value: None Recorded (No code provided)';
        }
        else {
            return "Target: None";
        }
    };
    ConsolidatedGoalsComponent.ɵfac = function ConsolidatedGoalsComponent_Factory(t) { return new (t || ConsolidatedGoalsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"])); };
    ConsolidatedGoalsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConsolidatedGoalsComponent, selectors: [["app-consolidated-goals"]], viewQuery: function ConsolidatedGoalsComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        } }, decls: 24, vars: 6, consts: [[1, "group-header"], ["mat-table", "", "matSort", "", "width", "100%", "matSortActive", "priority", "matSortDirection", "asc", 3, "dataSource"], ["matColumnDef", "rank"], ["mat-header-cell", "", "mat-sort-header", "priority", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "description"], ["mat-header-cell", "", "mat-sort-header", "description", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "click", 4, "matCellDef"], ["matColumnDef", "targetdate"], ["mat-header-cell", "", "mat-sort-header", "targetDateText", 4, "matHeaderCellDef"], ["matColumnDef", "status"], ["mat-header-cell", "", "mat-sort-header", "achievementStatus", 4, "matHeaderCellDef"], ["matColumnDef", "mostrecentresult"], ["mat-header-cell", "", "mat-sort-header", "mostrecentresult", 4, "matHeaderCellDef"], ["matColumnDef", "expressedby"], ["mat-header-cell", "", "mat-sort-header", "expressedBy", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "ngClass", "click", "mouseover", "mouseout", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions", "pageSize"], ["mat-header-cell", "", "mat-sort-header", "priority"], ["mat-cell", ""], [4, "ngIf"], ["mat-header-cell", "", "mat-sort-header", "description"], ["mat-cell", "", 3, "click"], ["mat-header-cell", "", "mat-sort-header", "targetDateText"], ["mat-header-cell", "", "mat-sort-header", "achievementStatus"], ["mat-header-cell", "", "mat-sort-header", "mostrecentresult"], ["mat-header-cell", "", "mat-sort-header", "expressedBy"], ["mat-header-row", ""], ["mat-row", "", 3, "ngClass", "click", "mouseover", "mouseout"]], template: function ConsolidatedGoalsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Goals");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](3, 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ConsolidatedGoalsComponent_th_4_Template, 2, 0, "th", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ConsolidatedGoalsComponent_td_5_Template, 3, 2, "td", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](6, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ConsolidatedGoalsComponent_th_7_Template, 2, 0, "th", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ConsolidatedGoalsComponent_td_8_Template, 2, 1, "td", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](9, 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ConsolidatedGoalsComponent_th_10_Template, 2, 0, "th", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ConsolidatedGoalsComponent_td_11_Template, 2, 1, "td", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](12, 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ConsolidatedGoalsComponent_th_13_Template, 2, 0, "th", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ConsolidatedGoalsComponent_td_14_Template, 3, 3, "td", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](15, 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ConsolidatedGoalsComponent_th_16_Template, 2, 0, "th", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ConsolidatedGoalsComponent_td_17_Template, 1, 0, "td", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](18, 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ConsolidatedGoalsComponent_th_19_Template, 2, 0, "th", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ConsolidatedGoalsComponent_td_20_Template, 2, 1, "td", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, ConsolidatedGoalsComponent_tr_21_Template, 1, 0, "tr", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ConsolidatedGoalsComponent_tr_22_Template, 1, 4, "tr", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "mat-paginator", 18);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.consolidatedGoalsDataSource);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1))("pageSize", 20);
        } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatCell"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatRow"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__["DefaultClassDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"]], pipes: [_pipes_null_check_pipe__WEBPACK_IMPORTED_MODULE_11__["NullCheckPipe"]], styles: [".group-header_save[_ngcontent-%COMP%] {\n  justify-content: center;\n  vertical-align: top;\n  background: blue;\n  color: white;\n}\n\nmat-table[_ngcontent-%COMP%] {\n  vertical-align: top;\n}\n\ntr.mat-table[_ngcontent-%COMP%] {\n  vertical-align: top;\n  min-width: 700px;\n}\n\ntr.mat-header-row[_ngcontent-%COMP%] {\n  min-height: 24px;\n  height: 24px !important;\n}\n\ntr.mat-row[_ngcontent-%COMP%] {\n  min-height: 24px;\n  height: 24px !important;\n}\n\nth.mat-header-cell[_ngcontent-%COMP%], td.mat-cell[_ngcontent-%COMP%] {\n  text-align: left;\n\n}\n\n.mat-column-description[_ngcontent-%COMP%] {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 25% !important;\n  width: 25% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n\n  word-break: break-word;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29uc29saWRhdGVkLWdvYWxzL2NvbnNvbGlkYXRlZC1nb2Fscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsdUJBQXVCO0FBQ3pCOztBQUdBO0VBQ0UsZ0JBQWdCOztBQUVsQjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyw2QkFBNkI7RUFDN0Isd0JBQXdCO0VBQ3hCLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIscUJBQXFCOztFQUVyQixzQkFBc0I7RUFJdEIscUJBQXFCO0VBQ3JCLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2NvbnNvbGlkYXRlZC1nb2Fscy9jb25zb2xpZGF0ZWQtZ29hbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncm91cC1oZWFkZXJfc2F2ZSB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBiYWNrZ3JvdW5kOiBibHVlO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbm1hdC10YWJsZSB7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbnRyLm1hdC10YWJsZSB7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIG1pbi13aWR0aDogNzAwcHg7XG59XG5cbnRyLm1hdC1oZWFkZXItcm93IHtcbiAgbWluLWhlaWdodDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4ICFpbXBvcnRhbnQ7XG59XG5cbnRyLm1hdC1yb3cge1xuICBtaW4taGVpZ2h0OiAyNHB4O1xuICBoZWlnaHQ6IDI0cHggIWltcG9ydGFudDtcbn1cblxuXG50aC5tYXQtaGVhZGVyLWNlbGwsIHRkLm1hdC1jZWxsIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcblxufVxuXG4ubWF0LWNvbHVtbi1kZXNjcmlwdGlvbiB7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xuICB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcbiAgZmxleDogMCAwIDI1JSAhaW1wb3J0YW50O1xuICB3aWR0aDogMjUlICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcblxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuXG4gIC1tcy1oeXBoZW5zOiBhdXRvO1xuICAtbW96LWh5cGhlbnM6IGF1dG87XG4gIC13ZWJraXQtaHlwaGVuczogYXV0bztcbiAgaHlwaGVuczogYXV0bztcbn1cblxuIl19 */"] });
    return ConsolidatedGoalsComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConsolidatedGoalsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-consolidated-goals',
                templateUrl: './consolidated-goals.component.html',
                styleUrls: ['./consolidated-goals.component.css']
            }]
    }], function () { return [{ type: _services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }]; }, { paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]]
        }], sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"]]
        }] }); })();


/***/ }),

/***/ "6ynu":
/*!****************************************!*\
  !*** ./src/app/uacr/uacr.component.ts ***!
  \****************************************/
/*! exports provided: UACRComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UACRComponent", function() { return UACRComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chartjs-plugin-annotation */ "Ym+k");
/* harmony import */ var chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _util_utility_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/utility-functions */ "n4X3");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/data.service */ "EnSQ");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-charts */ "LPYB");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");














function UACRComponent_th_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UACRComponent_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var uacr_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, uacr_r6.date, "MM/dd/yyyy"), " ");
} }
function UACRComponent_th_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Result");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UACRComponent_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "td", 15);
} if (rf & 2) {
    var uacr_r7 = ctx.$implicit;
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r3.UacrResult(uacr_r7), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function UACRComponent_tr_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 16);
} }
function UACRComponent_tr_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UACRComponent_tr_16_Template_tr_click_0_listener() { var row_r8 = ctx.$implicit; return row_r8.highlighted = !row_r8.highlighted; })("mouseover", function UACRComponent_tr_16_Template_tr_mouseover_0_listener() { var row_r8 = ctx.$implicit; return row_r8.hovered = true; })("mouseout", function UACRComponent_tr_16_Template_tr_mouseout_0_listener() { var row_r8 = ctx.$implicit; return row_r8.hovered = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r8 = ctx.$implicit;
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r5.getUacrRowCssClass(row_r8));
} }
var _c0 = function () { return [5, 15, 30]; };
var _c1 = function (a0) { return { display: a0 }; };
var UACRComponent = /** @class */ (function () {
    function UACRComponent(dataservice) {
        this.dataservice = dataservice;
        this.uacrRowMax = 7;
        this.lineChartColors = [
            {
                backgroundColor: 'white',
                borderColor: 'black',
            },
        ];
        this.lineChartLegend = false;
        this.lineChartPlugins = [chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_1__];
        this.lineChartType = 'line';
        this.displayedColumns = ['date', 'uacr'];
    }
    UACRComponent.prototype.ngOnInit = function () {
        this.uacrDataSource = this.dataservice.uacrDataSource;
    };
    UACRComponent.prototype.ngAfterViewInit = function () {
        // todo: fix below, paginator doesn't work when assigned, shows all rows, doesn't limit to max, paging doesn't work
        if (this.uacrDataSource.data.length > this.uacrRowMax) {
            this.uacrDataSource.paginator = this.paginator;
        }
        this.uacrDataSource.sort = this.sort;
        this.uacrDataSource.sortingDataAccessor = function (data, header) {
            switch (header) {
                case ('date'): {
                    return moment__WEBPACK_IMPORTED_MODULE_5___default()(data.date).unix();
                }
                default: {
                    return data[header];
                }
            }
        };
    };
    UACRComponent.prototype.UacrResult = function (uacr) {
        return Object(_util_utility_functions__WEBPACK_IMPORTED_MODULE_4__["formatUacrResult"])(uacr.uacr, uacr.unit);
    };
    UACRComponent.prototype.getUacrRowCssClass = function (uacr) {
        var cssClass = '';
        var val = uacr.uacr;
        if (val) {
            switch (true) {
                case (val >= 300):
                    cssClass = 'resultCritical';
                    break;
                case (val < 300 && val >= 30):
                    cssClass = 'resultBorderline';
                    break;
                case (val < 30):
                    cssClass = 'resultGood';
                    break;
                default:
                    break;
            }
        }
        return cssClass;
    };
    UACRComponent.ɵfac = function UACRComponent_Factory(t) { return new (t || UACRComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"])); };
    UACRComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UACRComponent, selectors: [["app-uacr"]], viewQuery: function UACRComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        } }, decls: 18, vars: 14, consts: [["width", "100%"], [1, "col-50"], [1, "chart-wrapper"], ["baseChart", "", "height", "200", 3, "datasets", "options", "colors", "legend", "chartType", "plugins"], ["mat-table", "", "matSort", "", "matSort", "", "width", "100%", 3, "dataSource"], ["matColumnDef", "date"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "uacr"], ["mat-cell", "", 3, "innerHTML", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "ngClass", "click", "mouseover", "mouseout", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions", "ngStyle"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-cell", "", 3, "innerHTML"], ["mat-header-row", ""], ["mat-row", "", 3, "ngClass", "click", "mouseover", "mouseout"]], template: function UACRComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Change in UACR over Time");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "canvas", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "table", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](9, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, UACRComponent_th_10_Template, 2, 0, "th", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, UACRComponent_td_11_Template, 3, 4, "td", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](12, 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, UACRComponent_th_13_Template, 2, 0, "th", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, UACRComponent_td_14_Template, 1, 1, "td", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, UACRComponent_tr_15_Template, 1, 0, "tr", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, UACRComponent_tr_16_Template, 1, 1, "tr", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "mat-paginator", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx.dataservice.uacr.chartData)("options", ctx.dataservice.uacr.lineChartOptions)("colors", ctx.lineChartColors)("legend", ctx.lineChartLegend)("chartType", ctx.lineChartType)("plugins", ctx.lineChartPlugins);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.uacrDataSource);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c0))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c1, ctx.uacrDataSource.data.length > ctx.uacrRowMax ? "block" : "none"));
        } }, directives: [ng2_charts__WEBPACK_IMPORTED_MODULE_7__["BaseChartDirective"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__["DefaultStyleDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgStyle"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_8__["MatRow"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__["DefaultClassDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"]], styles: ["chart-wrapper[_ngcontent-%COMP%] {\n  height: 150px;\n  width: 200px;\n}\n\nmat-table[_ngcontent-%COMP%] {\n  vertical-align: top;\n  overflow: auto;\n  max-height: 400px;\n}\n\ntr.mat-table[_ngcontent-%COMP%] {\n  vertical-align: top;\n  min-width: 350px;\n}\n\ntr.mat-header-row[_ngcontent-%COMP%] {\n  min-height: 24px;\n  height: 24px !important;\n}\n\ntr.mat-row[_ngcontent-%COMP%] {\n  min-height: 24px;\n  height: 24px !important;\n}\n\ntr.mat-row.resultGood[_ngcontent-%COMP%]{\n  background-color: rgba(128, 204, 113, 0.3);\n}\n\ntr.mat-row.resultBorderline[_ngcontent-%COMP%]{\n  background-color: rgba(247, 245, 116, 0.3);\n}\n\ntr.mat-row.resultCritical[_ngcontent-%COMP%]{\n  background-color: rgba(227, 127, 104, 0.3);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWFjci91YWNyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSwwQ0FBMEM7QUFDNUMiLCJmaWxlIjoic3JjL2FwcC91YWNyL3VhY3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImNoYXJ0LXdyYXBwZXIge1xuICBoZWlnaHQ6IDE1MHB4O1xuICB3aWR0aDogMjAwcHg7XG59XG5cbm1hdC10YWJsZSB7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBtYXgtaGVpZ2h0OiA0MDBweDtcbn1cblxudHIubWF0LXRhYmxlIHtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgbWluLXdpZHRoOiAzNTBweDtcbn1cblxudHIubWF0LWhlYWRlci1yb3cge1xuICBtaW4taGVpZ2h0OiAyNHB4O1xuICBoZWlnaHQ6IDI0cHggIWltcG9ydGFudDtcbn1cblxudHIubWF0LXJvdyB7XG4gIG1pbi1oZWlnaHQ6IDI0cHg7XG4gIGhlaWdodDogMjRweCAhaW1wb3J0YW50O1xufVxuXG50ci5tYXQtcm93LnJlc3VsdEdvb2R7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAyMDQsIDExMywgMC4zKTtcbn1cblxudHIubWF0LXJvdy5yZXN1bHRCb3JkZXJsaW5le1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NywgMjQ1LCAxMTYsIDAuMyk7XG59XG5cbnRyLm1hdC1yb3cucmVzdWx0Q3JpdGljYWx7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI3LCAxMjcsIDEwNCwgMC4zKTtcbn1cbiJdfQ== */"] });
    return UACRComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UACRComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-uacr',
                templateUrl: './uacr.component.html',
                styleUrls: ['./uacr.component.css']
            }]
    }], function () { return [{ type: _services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] }]; }, { paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]]
        }], sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"]]
        }] }); })();


/***/ }),

/***/ "7XR+":
/*!**************************************************************************************!*\
  !*** ./src/app/clinical-activities-results/clinical-activities-results.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ClinicalActivitiesResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicalActivitiesResultsComponent", function() { return ClinicalActivitiesResultsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/constants */ "XY7g");
/* harmony import */ var _util_utility_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/utility-functions */ "n4X3");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ "EnSQ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function ClinicalActivitiesResultsComponent_tr_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var res_r1 = ctx.$implicit;
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](res_r1.code.coding[0].display);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.getDisplayValue(res_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.getEffectiveValue(res_r1.effectiveDateTime));
} }
var ClinicalActivitiesResultsComponent = /** @class */ (function () {
    function ClinicalActivitiesResultsComponent(dataservice) {
        this.dataservice = dataservice;
    }
    ClinicalActivitiesResultsComponent.prototype.ngOnInit = function () {
    };
    ClinicalActivitiesResultsComponent.prototype.getWotIsLoaded = function () {
        return window[_common_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].WotIsLoaded];
    };
    ClinicalActivitiesResultsComponent.prototype.getBPisLoaded = function () {
        return window[_common_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].BPisLoaded];
    };
    ClinicalActivitiesResultsComponent.prototype.getDisplayValue = function (value) {
        return Object(_util_utility_functions__WEBPACK_IMPORTED_MODULE_2__["getDisplayValueNew"])(value);
    };
    ClinicalActivitiesResultsComponent.prototype.getEffectiveValue = function (value) {
        return Object(_util_utility_functions__WEBPACK_IMPORTED_MODULE_2__["formatEffectiveDateNew"])(value);
    };
    ClinicalActivitiesResultsComponent.ɵfac = function ClinicalActivitiesResultsComponent_Factory(t) { return new (t || ClinicalActivitiesResultsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"])); };
    ClinicalActivitiesResultsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClinicalActivitiesResultsComponent, selectors: [["app-clinical-activities-results"]], decls: 14, vars: 1, consts: [[1, "group-header"], ["width", "100%", "valign", "top", 1, "resultTable"], [1, "resultTableHeader"], [4, "ngFor", "ngForOf"]], template: function ClinicalActivitiesResultsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Activities");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Test");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Result");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Date");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ClinicalActivitiesResultsComponent_tr_13_Template, 7, 3, "tr", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dataservice.activities);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["table.internal[_ngcontent-%COMP%], td.internal[_ngcontent-%COMP%], td.internal[_ngcontent-%COMP%] {\n  border: none;\n  border-style: hidden;\n}\n\ntable[_ngcontent-%COMP%], td[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  border: black;\n  border-width: 1px;\n  border-style: solid;\n  margin-inside: 0;\n  margin-outside: 0;\n}\n\ntable.inner-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border:none;\n}\n\ntable.inner-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border:none;\n}\n\ntd[_ngcontent-%COMP%] { \n  padding: 2px 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpbmljYWwtYWN0aXZpdGllcy1yZXN1bHRzL2NsaW5pY2FsLWFjdGl2aXRpZXMtcmVzdWx0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLFlBQVk7RUFDWixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jbGluaWNhbC1hY3Rpdml0aWVzLXJlc3VsdHMvY2xpbmljYWwtYWN0aXZpdGllcy1yZXN1bHRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbnRhYmxlLmludGVybmFsLHRkLmludGVybmFsLCB0ZC5pbnRlcm5hbCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXN0eWxlOiBoaWRkZW47XG59XG5cbnRhYmxlLHRkLCB0aCB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlcjogYmxhY2s7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBtYXJnaW4taW5zaWRlOiAwO1xuICBtYXJnaW4tb3V0c2lkZTogMDtcbn1cblxudGFibGUuaW5uZXItdGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOm5vbmU7XG59XG5cbnRhYmxlLmlubmVyLXRhYmxlIHRyIHRkIHtcbiAgYm9yZGVyOm5vbmU7XG59XG5cbnRkIHsgXG4gIHBhZGRpbmc6IDJweCA1cHg7XG59Il19 */"] });
    return ClinicalActivitiesResultsComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClinicalActivitiesResultsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-clinical-activities-results',
                templateUrl: './clinical-activities-results.component.html',
                styleUrls: ['./clinical-activities-results.component.css']
            }]
    }], function () { return [{ type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }]; }, null); })();


/***/ }),

/***/ "8+dV":
/*!******************************************************************!*\
  !*** ./src/app/medication-dialog/medication-dialog.component.ts ***!
  \******************************************************************/
/*! exports provided: MedicationDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicationDialogComponent", function() { return MedicationDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");




var MedicationDialogComponent = /** @class */ (function () {
    function MedicationDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.displayedColumns = ['description', 'onset', 'recorded', 'abatement', 'status'];
        this.medication = data.medication;
        this.dateprescribed = data.dateprescribed;
        this.refillsPermitted = data.refillsPermitted;
        this.dosages = data.dosages;
        this.frequency = data.frequency;
        this.method = data.method;
        this.notes = data.notes;
        this.reasons = data.reasons;
    }
    MedicationDialogComponent.prototype.ngOnInit = function () {
        // this.dataSource = new MatTableDataSource(this.history);
    };
    MedicationDialogComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    MedicationDialogComponent.ɵfac = function MedicationDialogComponent_Factory(t) { return new (t || MedicationDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
    MedicationDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MedicationDialogComponent, selectors: [["app-medication-dialog"]], decls: 42, vars: 8, consts: [["mat-dialog-title", ""], [1, "mat-raised-button", "mat-primary", 3, "click"]], template: function MedicationDialogComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Date prescribed");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Reason");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Refills Permitted");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Dosage");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Frequency");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Method");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Notes");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-dialog-actions");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MedicationDialogComponent_Template_button_click_40_listener() { return ctx.close(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Close");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Medication ", ctx.medication, " Details");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.dateprescribed);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.reasons);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.refillsPermitted);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.dosages);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.frequency);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.method);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.notes);
        } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"]], styles: ["mat-table[_ngcontent-%COMP%] {\n  vertical-align: top;\n  width: 100%;\n}\n\n  .mat-table {\n  overflow-x: hidden !important;\n}\n\nmat-header-row[_ngcontent-%COMP%] {\n  min-height: 48px;\n  height: 48px !important;\n}\n\nmat-row[_ngcontent-%COMP%] {\n  min-height: 24px;\n  height: 24px !important;\n}\n\n.mat-column-description[_ngcontent-%COMP%] {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 35% !important;\n  width: 35% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n\n.mat-column-onset[_ngcontent-%COMP%] {\n  word-wrap: break-word !important;\n  white-space: normal !important;\n  flex: 0 0 15% !important;\n  width: 15% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n\n.mat-column-recorded[_ngcontent-%COMP%] {\n  word-wrap: break-word !important;\n  white-space: normal !important;\n  flex: 0 0 15% !important;\n  width: 15% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n\n.mat-column-abatement[_ngcontent-%COMP%] {\n  word-wrap: break-word !important;\n  white-space: normal !important;\n  flex: 0 0 15% !important;\n  width: 15% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n\n.mat-column-status[_ngcontent-%COMP%] {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 20% !important;\n  width: 20% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVkaWNhdGlvbi1kaWFsb2cvbWVkaWNhdGlvbi1kaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyw2QkFBNkI7RUFDN0Isd0JBQXdCO0VBQ3hCLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIscUJBQXFCO0VBR3JCLHFCQUFxQjtFQUNyQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsOEJBQThCO0VBQzlCLHdCQUF3QjtFQUN4QixxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUdyQixxQkFBcUI7RUFDckIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLDhCQUE4QjtFQUM5Qix3QkFBd0I7RUFDeEIscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFHckIscUJBQXFCO0VBQ3JCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyw4QkFBOEI7RUFDOUIsd0JBQXdCO0VBQ3hCLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIscUJBQXFCO0VBR3JCLHFCQUFxQjtFQUNyQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsNkJBQTZCO0VBQzdCLHdCQUF3QjtFQUN4QixxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUdyQixxQkFBcUI7RUFDckIsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvbWVkaWNhdGlvbi1kaWFsb2cvbWVkaWNhdGlvbi1kaWFsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC10YWJsZSB7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4vZGVlcC8gLm1hdC10YWJsZSB7XG4gIG92ZXJmbG93LXg6IGhpZGRlbiAhaW1wb3J0YW50O1xufVxuXG5tYXQtaGVhZGVyLXJvdyB7XG4gIG1pbi1oZWlnaHQ6IDQ4cHg7XG4gIGhlaWdodDogNDhweCAhaW1wb3J0YW50O1xufVxuXG5tYXQtcm93IHtcbiAgbWluLWhlaWdodDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtY29sdW1uLWRlc2NyaXB0aW9uIHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XG4gIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xuICBmbGV4OiAwIDAgMzUlICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAzNSUgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAtbXMtaHlwaGVuczogYXV0bztcbiAgLW1vei1oeXBoZW5zOiBhdXRvO1xuICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XG4gIGh5cGhlbnM6IGF1dG87XG59XG5cbi5tYXQtY29sdW1uLW9uc2V0IHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcbiAgZmxleDogMCAwIDE1JSAhaW1wb3J0YW50O1xuICB3aWR0aDogMTUlICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgLW1zLWh5cGhlbnM6IGF1dG87XG4gIC1tb3otaHlwaGVuczogYXV0bztcbiAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xuICBoeXBoZW5zOiBhdXRvO1xufVxuXG4ubWF0LWNvbHVtbi1yZWNvcmRlZCB7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIGZsZXg6IDAgMCAxNSUgIWltcG9ydGFudDtcbiAgd2lkdGg6IDE1JSAhaW1wb3J0YW50O1xuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIC1tcy1oeXBoZW5zOiBhdXRvO1xuICAtbW96LWh5cGhlbnM6IGF1dG87XG4gIC13ZWJraXQtaHlwaGVuczogYXV0bztcbiAgaHlwaGVuczogYXV0bztcbn1cblxuLm1hdC1jb2x1bW4tYWJhdGVtZW50IHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWwgIWltcG9ydGFudDtcbiAgZmxleDogMCAwIDE1JSAhaW1wb3J0YW50O1xuICB3aWR0aDogMTUlICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgLW1zLWh5cGhlbnM6IGF1dG87XG4gIC1tb3otaHlwaGVuczogYXV0bztcbiAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xuICBoeXBoZW5zOiBhdXRvO1xufVxuXG4ubWF0LWNvbHVtbi1zdGF0dXMge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcbiAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIGZsZXg6IDAgMCAyMCUgIWltcG9ydGFudDtcbiAgd2lkdGg6IDIwJSAhaW1wb3J0YW50O1xuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG4gIC1tcy1oeXBoZW5zOiBhdXRvO1xuICAtbW96LWh5cGhlbnM6IGF1dG87XG4gIC13ZWJraXQtaHlwaGVuczogYXV0bztcbiAgaHlwaGVuczogYXV0bztcbn0iXX0= */"] });
    return MedicationDialogComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MedicationDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-medication-dialog',
                templateUrl: './medication-dialog.component.html',
                styleUrls: ['./medication-dialog.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "8SzB":
/*!***********************************************!*\
  !*** ./src/app/services/education.service.ts ***!
  \***********************************************/
/*! exports provided: EducationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationService", function() { return EducationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var e_care_common_data_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! e-care-common-data-services */ "6AkT");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./message.service */ "tZre");








var EducationService = /** @class */ (function () {
    function EducationService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.baseURL = '/summary/educations';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
    }
    // Current test data has 0 education summary, hence during testing, we have not match the mapping yet
    /** GET education summaries by subject id. Will 404 if id not found */
    EducationService.prototype.getEducationSummaries = function (subjectId, careplanId) {
        var _this = this;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(Object(e_care_common_data_services__WEBPACK_IMPORTED_MODULE_4__["getSummaryEducations"])(careplanId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("fetched Education Summaries id=" + subjectId + ", careplan=" + careplanId); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getEducationSummaries id=" + subjectId + ", careplan=" + careplanId)));
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    EducationService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    /** Log a message with the MessageService */
    EducationService.prototype.log = function (message) {
        this.messageService.add("contact-service: " + message);
    };
    EducationService.ɵfac = function EducationService_Factory(t) { return new (t || EducationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"])); };
    EducationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EducationService, factory: EducationService.ɵfac, providedIn: 'root' });
    return EducationService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EducationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"] }]; }, null); })();


/***/ }),

/***/ "8T1P":
/*!************************************************!*\
  !*** ./src/app/services/counseling.service.ts ***!
  \************************************************/
/*! exports provided: CounselingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounselingService", function() { return CounselingService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var e_care_common_data_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! e-care-common-data-services */ "6AkT");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./message.service */ "tZre");








var CounselingService = /** @class */ (function () {
    function CounselingService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.baseURL = '/summary/counselings';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
    }
    // Current test data has 0 counseling summary, hence during testing, we have not match the mapping yet
    /** GET contacts by subject id. Will 404 if id not found */
    CounselingService.prototype.getCounselingSummaries = function (subjectId, careplanId) {
        var _this = this;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(Object(e_care_common_data_services__WEBPACK_IMPORTED_MODULE_4__["getSummaryCounselings"])(careplanId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("fetched Counseling Summaries id=" + subjectId + ", careplan=" + careplanId); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getCounselingSummaries id=" + subjectId + ", careplan=" + careplanId)));
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    CounselingService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    /** Log a message with the MessageService */
    CounselingService.prototype.log = function (message) {
        this.messageService.add("contact-service: " + message);
    };
    CounselingService.ɵfac = function CounselingService_Factory(t) { return new (t || CounselingService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"])); };
    CounselingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CounselingService, factory: CounselingService.ɵfac, providedIn: 'root' });
    return CounselingService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CounselingService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"] }]; }, null); })();


/***/ }),

/***/ "9tHu":
/*!**************************************************************************!*\
  !*** ./src/app/clinical-test-results/clinical-test-results.component.ts ***!
  \**************************************************************************/
/*! exports provided: ClinicalTestResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicalTestResultsComponent", function() { return ClinicalTestResultsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/constants */ "XY7g");
/* harmony import */ var _util_utility_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/utility-functions */ "n4X3");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ "EnSQ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _blood_pressure_blood_pressure_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../blood-pressure/blood-pressure.component */ "azuf");
/* harmony import */ var _weight_over_time_weight_over_time_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../weight-over-time/weight-over-time.component */ "Rnzi");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");









function ClinicalTestResultsComponent_app_blood_pressure_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-blood-pressure");
} }
function ClinicalTestResultsComponent_app_weight_over_time_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-weight-over-time");
} }
function ClinicalTestResultsComponent_tr_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-spinner", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ClinicalTestResultsComponent_tr_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var res_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", res_r4.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", res_r4.value, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", res_r4.date, " ");
} }
var ClinicalTestResultsComponent = /** @class */ (function () {
    function ClinicalTestResultsComponent(dataservice) {
        this.dataservice = dataservice;
    }
    ClinicalTestResultsComponent.prototype.ngOnInit = function () {
    };
    ClinicalTestResultsComponent.prototype.getWotIsLoaded = function () {
        return window[_common_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].WotIsLoaded];
    };
    ClinicalTestResultsComponent.prototype.getBPisLoaded = function () {
        return window[_common_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].BPisLoaded];
    };
    ClinicalTestResultsComponent.prototype.getDisplayValue = function (value) {
        return Object(_util_utility_functions__WEBPACK_IMPORTED_MODULE_2__["getDisplayValue"])(value);
    };
    ClinicalTestResultsComponent.prototype.getEffectiveValue = function (value) {
        return Object(_util_utility_functions__WEBPACK_IMPORTED_MODULE_2__["formatEffectiveDate"])(value);
    };
    ClinicalTestResultsComponent.ɵfac = function ClinicalTestResultsComponent_Factory(t) { return new (t || ClinicalTestResultsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"])); };
    ClinicalTestResultsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClinicalTestResultsComponent, selectors: [["app-clinical-test-results"]], decls: 37, vars: 15, consts: [[1, "group-header"], ["width", "100%", "valign", "top", 1, "resultTable"], [1, "resultTableHeader"], ["colspan", "3"], [4, "ngIf"], [3, "colSpan"], [4, "ngFor", "ngForOf"], ["colspan", "3", 2, "height", "200px"], ["mode", "indeterminate", 2, "margin", "0 auto"]], template: function ClinicalTestResultsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Vital Signs and Measures");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Test");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Result");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Date");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Systolic Blood Pressure");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "date");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Diastolic Blood Pressure");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "date");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ClinicalTestResultsComponent_app_blood_pressure_31_Template, 1, 0, "app-blood-pressure", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "td", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, ClinicalTestResultsComponent_app_weight_over_time_34_Template, 1, 0, "app-weight-over-time", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, ClinicalTestResultsComponent_tr_35_Template, 3, 0, "tr", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, ClinicalTestResultsComponent_tr_36_Template, 7, 3, "tr", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.dataservice.vitalSigns.mostRecentSystolic.value);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](20, 9, ctx.dataservice.vitalSigns.mostRecentSystolic.date, "MM/dd/yyyy"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.dataservice.vitalSigns.mostRecentDiastolic.value);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](28, 12, ctx.dataservice.vitalSigns.mostRecentDiastolic.date, "MM/dd/yyyy"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getBPisLoaded());
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("colSpan", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getWotIsLoaded());
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.dataservice.vitalSignResults);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dataservice.vitalSignResults);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _blood_pressure_blood_pressure_component__WEBPACK_IMPORTED_MODULE_5__["BloodPressureComponent"], _weight_over_time_weight_over_time_component__WEBPACK_IMPORTED_MODULE_6__["WeightOverTimeComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__["MatSpinner"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: ["table.internal[_ngcontent-%COMP%], td.internal[_ngcontent-%COMP%], td.internal[_ngcontent-%COMP%] {\n  border: none;\n  border-style: hidden;\n}\n\ntable[_ngcontent-%COMP%], td[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  border: black;\n  border-width: 1px;\n  border-style: solid;\n  margin-inside: 0;\n  margin-outside: 0;\n}\n\ntable.inner-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border:none;\n}\n\ntable.inner-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border:none;\n}\n\ntd[_ngcontent-%COMP%] { \n  padding: 2px 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpbmljYWwtdGVzdC1yZXN1bHRzL2NsaW5pY2FsLXRlc3QtcmVzdWx0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLFlBQVk7RUFDWixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jbGluaWNhbC10ZXN0LXJlc3VsdHMvY2xpbmljYWwtdGVzdC1yZXN1bHRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbnRhYmxlLmludGVybmFsLHRkLmludGVybmFsLCB0ZC5pbnRlcm5hbCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXN0eWxlOiBoaWRkZW47XG59XG5cbnRhYmxlLHRkLCB0aCB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlcjogYmxhY2s7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBtYXJnaW4taW5zaWRlOiAwO1xuICBtYXJnaW4tb3V0c2lkZTogMDtcbn1cblxudGFibGUuaW5uZXItdGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOm5vbmU7XG59XG5cbnRhYmxlLmlubmVyLXRhYmxlIHRyIHRkIHtcbiAgYm9yZGVyOm5vbmU7XG59XG5cbnRkIHsgXG4gIHBhZGRpbmc6IDJweCA1cHg7XG59Il19 */"] });
    return ClinicalTestResultsComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClinicalTestResultsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-clinical-test-results',
                templateUrl: './clinical-test-results.component.html',
                styleUrls: ['./clinical-test-results.component.css']
            }]
    }], function () { return [{ type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }]; }, null); })();


/***/ }),

/***/ "A+SW":
/*!***********************************************!*\
  !*** ./src/app/services/referrals.service.ts ***!
  \***********************************************/
/*! exports provided: ReferralService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferralService", function() { return ReferralService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var e_care_common_data_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! e-care-common-data-services */ "6AkT");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./message.service */ "tZre");








var ReferralService = /** @class */ (function () {
    function ReferralService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
    }
    /** GET referrals by subject id. Will 404 if id not found */
    ReferralService.prototype.getReferralSummaries = function (subjectId, careplanId) {
        var _this = this;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(Object(e_care_common_data_services__WEBPACK_IMPORTED_MODULE_4__["getSummaryReferrals"])(careplanId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("fetched Referral Summaries id=" + subjectId + ", careplan=" + careplanId); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getReferralSummaries id=" + subjectId + ", careplan=" + careplanId)));
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    ReferralService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    /** Log a message with the MessageService */
    ReferralService.prototype.log = function (message) {
        this.messageService.add("contact-service: " + message);
    };
    ReferralService.ɵfac = function ReferralService_Factory(t) { return new (t || ReferralService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"])); };
    ReferralService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ReferralService, factory: ReferralService.ɵfac, providedIn: 'root' });
    return ReferralService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReferralService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"] }]; }, null); })();


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
var environment = {
    production: false,
    logEndpointUri: window['env']['logEndpointUri'],
    logApiKey: window['env']['logApiKey'],
    clientId: window['env']['clientId']
};


/***/ }),

/***/ "BvRP":
/*!****************************************************************************!*\
  !*** ./src/app/active-diagnosis-panel/active-diagnosis-panel.component.ts ***!
  \****************************************************************************/
/*! exports provided: ActiveDiagnosisPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveDiagnosisPanelComponent", function() { return ActiveDiagnosisPanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _diagnosis_dialog_diagnosis_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../diagnosis-dialog/diagnosis-dialog.component */ "kvNL");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/data.service */ "EnSQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _pipes_null_check_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../pipes/null-check.pipe */ "0vtW");



















function ActiveDiagnosisPanelComponent_th_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Condition");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ActiveDiagnosisPanelComponent_td_5_Template(rf, ctx) { if (rf & 1) {
    var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActiveDiagnosisPanelComponent_td_5_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); var condition_r13 = ctx.$implicit; var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.openDialog(condition_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var condition_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", condition_r13.code.text, " ");
} }
function ActiveDiagnosisPanelComponent_th_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 17);
} }
function ActiveDiagnosisPanelComponent_td_8_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActiveDiagnosisPanelComponent_td_8_mat_icon_1_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r18.switchToHM(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " local_pharmacy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ActiveDiagnosisPanelComponent_td_8_Template(rf, ctx) { if (rf & 1) {
    var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActiveDiagnosisPanelComponent_td_8_Template_td_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ActiveDiagnosisPanelComponent_td_8_mat_icon_1_Template, 2, 0, "mat-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var condition_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", condition_r16.profileId != null);
} }
function ActiveDiagnosisPanelComponent_th_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 17);
} }
function ActiveDiagnosisPanelComponent_td_11_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActiveDiagnosisPanelComponent_td_11_mat_icon_1_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r24.switchToHS(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " timeline");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ActiveDiagnosisPanelComponent_td_11_Template(rf, ctx) { if (rf & 1) {
    var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ActiveDiagnosisPanelComponent_td_11_Template_td_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ActiveDiagnosisPanelComponent_td_11_mat_icon_1_Template, 2, 0, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var condition_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", condition_r22.profileId != null);
} }
function ActiveDiagnosisPanelComponent_th_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Date of Initial Diagnosis");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ActiveDiagnosisPanelComponent_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "nullCheck");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var condition_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, condition_r28.firstOnset));
} }
function ActiveDiagnosisPanelComponent_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Diagnosis First Recorded");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ActiveDiagnosisPanelComponent_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "nullCheck");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var condition_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, condition_r29.firstRecordedAsText));
} }
function ActiveDiagnosisPanelComponent_tr_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 24);
} }
function ActiveDiagnosisPanelComponent_tr_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 25);
} }
var _c0 = function () { return [5, 10, 20, 30]; };
function ActiveDiagnosisPanelComponent_mat_paginator_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-paginator", 26);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0))("pageSize", 20);
} }
var ActiveDiagnosisPanelComponent = /** @class */ (function () {
    function ActiveDiagnosisPanelComponent(dataservice, dialog, router) {
        this.dataservice = dataservice;
        this.dialog = dialog;
        this.router = router;
        this.displayedColumns = ['code', 'rxfilter', 'trend', 'firstOnset', 'firstRecorded'];
    }
    ActiveDiagnosisPanelComponent.prototype.ngOnInit = function () {
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.dataservice.conditions.activeConditions);
        this.dataSource.sortingDataAccessor = function (item, property) {
            switch (property) {
                case "firstRecorded": return moment__WEBPACK_IMPORTED_MODULE_5___default()(item[property]).isValid() ? moment__WEBPACK_IMPORTED_MODULE_5___default()(item[property]).unix() : item[property];
                case 'firstOnset': return moment__WEBPACK_IMPORTED_MODULE_5___default()(item[property]).isValid() ? moment__WEBPACK_IMPORTED_MODULE_5___default()(item[property]).unix() : item[property];
                case 'code': return item[property].text.toUpperCase();
                default: return item[property];
            }
        };
    };
    ActiveDiagnosisPanelComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    };
    ActiveDiagnosisPanelComponent.prototype.openDialog = function (row) {
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.hasBackdrop = true;
        dialogConfig.width = '90%';
        // dialogConfig.height = '1000px';
        dialogConfig.data = {
            name: this.dataservice.demographic.name,
            condition: row.code.text,
            history: row.history
        };
        this.dialog.open(_diagnosis_dialog_diagnosis_dialog_component__WEBPACK_IMPORTED_MODULE_2__["DiagnosisDialogComponent"], dialogConfig);
    };
    ActiveDiagnosisPanelComponent.prototype.switchToHM = function () {
        this.router.navigate(['/maint'], { queryParamsHandling: 'merge' });
    };
    ActiveDiagnosisPanelComponent.prototype.switchToHS = function () {
        this.router.navigate(['/status'], { queryParamsHandling: 'merge' });
    };
    ActiveDiagnosisPanelComponent.ɵfac = function ActiveDiagnosisPanelComponent_Factory(t) { return new (t || ActiveDiagnosisPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"])); };
    ActiveDiagnosisPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ActiveDiagnosisPanelComponent, selectors: [["app-active-diagnosis-panel"]], viewQuery: function ActiveDiagnosisPanelComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"], true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        } }, decls: 21, vars: 4, consts: [[1, "group-header"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "code"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["style", "cursor: pointer;", "mat-cell", "", 3, "click", 4, "matCellDef"], ["matColumnDef", "rxfilter"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "click", 4, "matCellDef"], ["matColumnDef", "trend"], ["matColumnDef", "firstOnset"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "firstRecorded"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions", "pageSize", 4, "ngIf"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", "", 2, "cursor", "pointer", 3, "click"], ["mat-header-cell", ""], ["mat-cell", "", 3, "click"], ["style", "cursor: pointer;", "matTooltip", "Switch to Health Maintenance using this codition as a focus", "aria-label", "Selection to change to the Health Maintance and Intervention tab using this condition as a focus", 3, "click", 4, "ngIf"], ["matTooltip", "Switch to Health Maintenance using this codition as a focus", "aria-label", "Selection to change to the Health Maintance and Intervention tab using this condition as a focus", 2, "cursor", "pointer", 3, "click"], ["style", "cursor: pointer;", "matTooltip", "Switch to Heath Status using this condition as a focus", "aria-label", "Selection to change to the the Health Status Evaluation and Outcomes using this condition as a focus", 3, "click", 4, "ngIf"], ["matTooltip", "Switch to Heath Status using this condition as a focus", "aria-label", "Selection to change to the the Health Status Evaluation and Outcomes using this condition as a focus", 2, "cursor", "pointer", 3, "click"], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""], ["showFirstLastButtons", "", 3, "pageSizeOptions", "pageSize"]], template: function ActiveDiagnosisPanelComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-panel-title", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Active Diagnoses");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](3, 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ActiveDiagnosisPanelComponent_th_4_Template, 2, 0, "th", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ActiveDiagnosisPanelComponent_td_5_Template, 2, 1, "td", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](6, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ActiveDiagnosisPanelComponent_th_7_Template, 1, 0, "th", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ActiveDiagnosisPanelComponent_td_8_Template, 2, 1, "td", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](9, 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ActiveDiagnosisPanelComponent_th_10_Template, 1, 0, "th", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ActiveDiagnosisPanelComponent_td_11_Template, 2, 1, "td", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](12, 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ActiveDiagnosisPanelComponent_th_13_Template, 2, 0, "th", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ActiveDiagnosisPanelComponent_td_14_Template, 3, 3, "td", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](15, 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ActiveDiagnosisPanelComponent_th_16_Template, 2, 0, "th", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ActiveDiagnosisPanelComponent_td_17_Template, 3, 3, "td", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ActiveDiagnosisPanelComponent_tr_18_Template, 1, 0, "tr", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ActiveDiagnosisPanelComponent_tr_19_Template, 1, 0, "tr", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ActiveDiagnosisPanelComponent_mat_paginator_20_Template, 1, 3, "mat-paginator", 14);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataservice.conditions.activeConditions.length > 10);
        } }, directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionPanelTitle"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRowDef"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatCell"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MatTooltip"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatRow"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"]], pipes: [_pipes_null_check_pipe__WEBPACK_IMPORTED_MODULE_13__["NullCheckPipe"]], styles: ["tr.mat-table[_ngcontent-%COMP%] {\n  vertical-align: top;\n  min-width: 500px;\n}\n\ntr.mat-header-row[_ngcontent-%COMP%] {\n  min-height: 48px;\n  height: 48px !important;\n}\n\ntr.mat-row[_ngcontent-%COMP%] {\n  min-height: 24px;\n  height: 24px !important;\n}\n\n.mat-column-checked[_ngcontent-%COMP%] {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 10% !important;\n  width: 10% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n\n  word-break: break-word;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n\n.mat-column-condition[_ngcontent-%COMP%]{\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 60% !important;\n  width: 60% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n\n  word-break: break-word;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n\n.mat-column-rxfilter[_ngcontent-%COMP%]{\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 5% !important;\n  width: 5% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n\n  word-break: break-word;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n\n.mat-column-trend[_ngcontent-%COMP%]{\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 5% !important;\n  width: 5% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n\n  word-break: break-word;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n\n.mat-column-date[_ngcontent-%COMP%]{\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 20% !important;\n  width: 20% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n\n  word-break: break-word;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n\nth.mat-header-cell[_ngcontent-%COMP%], td.mat-cell[_ngcontent-%COMP%] {\n  text-align: left;\n  border: 1px solid #CCC;\n\n}\n\n.app-active-diagnosis-panel[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  vertical-align: top;\n  \n}\n\n.mat-expansion-panel-header-title[_ngcontent-%COMP%] {\n  margin-right: 0;\n}\n\ntable.mat-table[_ngcontent-%COMP%] {\n  width:  100%;\n}\n\ntable.mat-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table.mat-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-left: none !important;\n  border-right: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWN0aXZlLWRpYWdub3Npcy1wYW5lbC9hY3RpdmUtZGlhZ25vc2lzLXBhbmVsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsNkJBQTZCO0VBQzdCLHdCQUF3QjtFQUN4QixxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLHFCQUFxQjs7RUFFckIsc0JBQXNCO0VBSXRCLHFCQUFxQjtFQUNyQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsNkJBQTZCO0VBQzdCLHdCQUF3QjtFQUN4QixxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLHFCQUFxQjs7RUFFckIsc0JBQXNCO0VBSXRCLHFCQUFxQjtFQUNyQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsNkJBQTZCO0VBQzdCLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIseUJBQXlCO0VBQ3pCLHFCQUFxQjs7RUFFckIsc0JBQXNCO0VBSXRCLHFCQUFxQjtFQUNyQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsNkJBQTZCO0VBQzdCLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIseUJBQXlCO0VBQ3pCLHFCQUFxQjs7RUFFckIsc0JBQXNCO0VBSXRCLHFCQUFxQjtFQUNyQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsNkJBQTZCO0VBQzdCLHdCQUF3QjtFQUN4QixxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLHFCQUFxQjs7RUFFckIsc0JBQXNCO0VBSXRCLHFCQUFxQjtFQUNyQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsc0JBQXNCOztBQUV4Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsNkJBQTZCO0FBQy9CIiwiZmlsZSI6InNyYy9hcHAvYWN0aXZlLWRpYWdub3Npcy1wYW5lbC9hY3RpdmUtZGlhZ25vc2lzLXBhbmVsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0ci5tYXQtdGFibGUge1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBtaW4td2lkdGg6IDUwMHB4O1xufVxuXG50ci5tYXQtaGVhZGVyLXJvdyB7XG4gIG1pbi1oZWlnaHQ6IDQ4cHg7XG4gIGhlaWdodDogNDhweCAhaW1wb3J0YW50O1xufVxuXG50ci5tYXQtcm93IHtcbiAgbWluLWhlaWdodDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtY29sdW1uLWNoZWNrZWQge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcbiAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIGZsZXg6IDAgMCAxMCUgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwJSAhaW1wb3J0YW50O1xuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG5cbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcblxuICAtbXMtaHlwaGVuczogYXV0bztcbiAgLW1vei1oeXBoZW5zOiBhdXRvO1xuICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XG4gIGh5cGhlbnM6IGF1dG87XG59XG5cbi5tYXQtY29sdW1uLWNvbmRpdGlvbntcbiAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XG4gIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xuICBmbGV4OiAwIDAgNjAlICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA2MCUgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG5cbiAgLW1zLWh5cGhlbnM6IGF1dG87XG4gIC1tb3otaHlwaGVuczogYXV0bztcbiAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xuICBoeXBoZW5zOiBhdXRvO1xufVxuXG4ubWF0LWNvbHVtbi1yeGZpbHRlcntcbiAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XG4gIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xuICBmbGV4OiAwIDAgNSUgIWltcG9ydGFudDtcbiAgd2lkdGg6IDUlICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcblxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuXG4gIC1tcy1oeXBoZW5zOiBhdXRvO1xuICAtbW96LWh5cGhlbnM6IGF1dG87XG4gIC13ZWJraXQtaHlwaGVuczogYXV0bztcbiAgaHlwaGVuczogYXV0bztcbn1cblxuLm1hdC1jb2x1bW4tdHJlbmR7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xuICB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcbiAgZmxleDogMCAwIDUlICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA1JSAhaW1wb3J0YW50O1xuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG5cbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcblxuICAtbXMtaHlwaGVuczogYXV0bztcbiAgLW1vei1oeXBoZW5zOiBhdXRvO1xuICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XG4gIGh5cGhlbnM6IGF1dG87XG59XG5cbi5tYXQtY29sdW1uLWRhdGV7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xuICB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcbiAgZmxleDogMCAwIDIwJSAhaW1wb3J0YW50O1xuICB3aWR0aDogMjAlICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcblxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuXG4gIC1tcy1oeXBoZW5zOiBhdXRvO1xuICAtbW96LWh5cGhlbnM6IGF1dG87XG4gIC13ZWJraXQtaHlwaGVuczogYXV0bztcbiAgaHlwaGVuczogYXV0bztcbn1cblxudGgubWF0LWhlYWRlci1jZWxsLCB0ZC5tYXQtY2VsbCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNDQ0M7XG5cbn1cblxuLmFwcC1hY3RpdmUtZGlhZ25vc2lzLXBhbmVsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgLyogaG9yaXotYWxpZ246IGxlZnQ7ICovXG59XG5cbi5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10aXRsZSB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cblxudGFibGUubWF0LXRhYmxlIHtcbiAgd2lkdGg6ICAxMDAlO1xufVxuXG50YWJsZS5tYXQtdGFibGUgdGgsIHRhYmxlLm1hdC10YWJsZSB0ZCB7XG4gIGJvcmRlci1sZWZ0OiBub25lICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yaWdodDogbm9uZSAhaW1wb3J0YW50O1xufVxuIl19 */"] });
    return ActiveDiagnosisPanelComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActiveDiagnosisPanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-active-diagnosis-panel',
                templateUrl: './active-diagnosis-panel.component.html',
                styleUrls: ['./active-diagnosis-panel.component.css']
            }]
    }], function () { return [{ type: _services_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }]; }, { sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"]]
        }], paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"]]
        }] }); })();


/***/ }),

/***/ "D0PT":
/*!************************************************************************************!*\
  !*** ./src/app/clinical-procedure-results/clinical-procedure-results.component.ts ***!
  \************************************************************************************/
/*! exports provided: ClinicalProcedureResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicalProcedureResultsComponent", function() { return ClinicalProcedureResultsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/constants */ "XY7g");
/* harmony import */ var _util_utility_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/utility-functions */ "n4X3");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ "EnSQ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function ClinicalProcedureResultsComponent_tr_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var res_r1 = ctx.$implicit;
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](res_r1.code.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.getDisplayValue(res_r1.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](res_r1.effectiveDateTime);
} }
var ClinicalProcedureResultsComponent = /** @class */ (function () {
    function ClinicalProcedureResultsComponent(dataservice) {
        this.dataservice = dataservice;
    }
    ClinicalProcedureResultsComponent.prototype.ngOnInit = function () {
    };
    ClinicalProcedureResultsComponent.prototype.getWotIsLoaded = function () {
        return window[_common_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].WotIsLoaded];
    };
    ClinicalProcedureResultsComponent.prototype.getBPisLoaded = function () {
        return window[_common_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].BPisLoaded];
    };
    ClinicalProcedureResultsComponent.prototype.getDisplayValue = function (value) {
        return Object(_util_utility_functions__WEBPACK_IMPORTED_MODULE_2__["getDisplayValueNew"])(value);
    };
    ClinicalProcedureResultsComponent.prototype.getEffectiveValue = function (value) {
        return Object(_util_utility_functions__WEBPACK_IMPORTED_MODULE_2__["formatEffectiveDateNew"])(value);
    };
    ClinicalProcedureResultsComponent.ɵfac = function ClinicalProcedureResultsComponent_Factory(t) { return new (t || ClinicalProcedureResultsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"])); };
    ClinicalProcedureResultsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClinicalProcedureResultsComponent, selectors: [["app-clinical-procedure-results"]], decls: 14, vars: 1, consts: [[1, "group-header"], ["width", "100%", "valign", "top"], [1, "resultTableHeader"], [4, "ngFor", "ngForOf"]], template: function ClinicalProcedureResultsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Procedure Results");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Test");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Result");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Date");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ClinicalProcedureResultsComponent_tr_13_Template, 7, 3, "tr", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dataservice.procedure);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["table.internal[_ngcontent-%COMP%], td.internal[_ngcontent-%COMP%], td.internal[_ngcontent-%COMP%] {\n  border: none;\n  border-style: hidden;\n}\n\ntable[_ngcontent-%COMP%], td[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  border: black;\n  border-width: 1px;\n  border-style: solid;\n  margin-inside: 0;\n  margin-outside: 0;\n}\n\ntable.inner-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border:none;\n}\n\ntable.inner-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border:none;\n}\n\ntd[_ngcontent-%COMP%] { \n  padding: 2px 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpbmljYWwtcHJvY2VkdXJlLXJlc3VsdHMvY2xpbmljYWwtcHJvY2VkdXJlLXJlc3VsdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxZQUFZO0VBQ1osb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvY2xpbmljYWwtcHJvY2VkdXJlLXJlc3VsdHMvY2xpbmljYWwtcHJvY2VkdXJlLXJlc3VsdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxudGFibGUuaW50ZXJuYWwsdGQuaW50ZXJuYWwsIHRkLmludGVybmFsIHtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItc3R5bGU6IGhpZGRlbjtcbn1cblxudGFibGUsdGQsIHRoIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYm9yZGVyOiBibGFjaztcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIG1hcmdpbi1pbnNpZGU6IDA7XG4gIG1hcmdpbi1vdXRzaWRlOiAwO1xufVxuXG50YWJsZS5pbm5lci10YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6bm9uZTtcbn1cblxudGFibGUuaW5uZXItdGFibGUgdHIgdGQge1xuICBib3JkZXI6bm9uZTtcbn1cblxudGQgeyBcbiAgcGFkZGluZzogMnB4IDVweDtcbn0iXX0= */"] });
    return ClinicalProcedureResultsComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClinicalProcedureResultsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-clinical-procedure-results',
                templateUrl: './clinical-procedure-results.component.html',
                styleUrls: ['./clinical-procedure-results.component.css']
            }]
    }], function () { return [{ type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }]; }, null); })();


/***/ }),

/***/ "EnSQ":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _datamodel_mockData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../datamodel/mockData */ "eXWB");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _datamodel_vitalSigns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../datamodel/vitalSigns */ "1XDx");
/* harmony import */ var _datamodel_egfr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../datamodel/egfr */ "wXOW");
/* harmony import */ var _datamodel_uacr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../datamodel/uacr */ "gG28");
/* harmony import */ var _datamodel_weight_over_time__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../datamodel/weight-over-time */ "jrTf");
/* harmony import */ var _util_utility_functions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../util/utility-functions */ "n4X3");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common/constants */ "XY7g");
/* harmony import */ var _subject_data_service_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./subject-data-service.service */ "l7Fd");
/* harmony import */ var _careplan_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./careplan.service */ "+NK/");
/* harmony import */ var _goals_data_service_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./goals-data-service.service */ "zaQB");
/* harmony import */ var _contacts_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./contacts.service */ "dkb4");
/* harmony import */ var _medication_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./medication.service */ "KTRH");
/* harmony import */ var _counseling_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./counseling.service */ "8T1P");
/* harmony import */ var _education_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./education.service */ "8SzB");
/* harmony import */ var _referrals_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./referrals.service */ "A+SW");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./message.service */ "tZre");
/* harmony import */ var _observations_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./observations.service */ "cmPd");
/* harmony import */ var _service_request_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./service-request.service */ "5rrq");


























var DataService = /** @class */ (function () {
    function DataService(subjectdataservice, careplanservice, goalsdataservice, contactdataService, medicationdataService, counselingService, educationService, referralService, messageService, obsService, serviceRequestService) {
        this.subjectdataservice = subjectdataservice;
        this.careplanservice = careplanservice;
        this.goalsdataservice = goalsdataservice;
        this.contactdataService = contactdataService;
        this.medicationdataService = medicationdataService;
        this.counselingService = counselingService;
        this.educationService = educationService;
        this.referralService = referralService;
        this.messageService = messageService;
        this.obsService = obsService;
        this.serviceRequestService = serviceRequestService;
        this.featureToggling = _common_constants__WEBPACK_IMPORTED_MODULE_12__["Constants"].featureToggling;
        this.targetValues = [];
        this.activeMedications = [];
        this.allGoals = [];
        this.vitalSigns = _datamodel_vitalSigns__WEBPACK_IMPORTED_MODULE_6__["emptyVitalSigns"];
        this.egfr = _datamodel_egfr__WEBPACK_IMPORTED_MODULE_7__["emptyEgfr"];
        this.uacr = _datamodel_uacr__WEBPACK_IMPORTED_MODULE_8__["emptyUacr"];
        this.wot = _datamodel_weight_over_time__WEBPACK_IMPORTED_MODULE_9__["emptyWot"];
        this.targetValuesDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.targetValues);
        this.vitalSignsDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.vitalSigns.tableData);
        this.egfrDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.egfr.tableData);
        this.uacrDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.uacr.tableData);
        this.wotDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.wot.tableData);
        this.activeMedicationsDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.activeMedications);
        this.consolidatedGoalsDataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](this.allGoals);
        this.aggregatedChartData = [];
        this.aggregatedTableData = [];
        this.activeMedications = _datamodel_mockData__WEBPACK_IMPORTED_MODULE_2__["emptyMediciationSummary"];
        this.education = _datamodel_mockData__WEBPACK_IMPORTED_MODULE_2__["emptyEducation"];
        this.counseling = _datamodel_mockData__WEBPACK_IMPORTED_MODULE_2__["emptyCounseling"];
        this.referrals = _datamodel_mockData__WEBPACK_IMPORTED_MODULE_2__["emptyReferrals"];
        this.contacts = _datamodel_mockData__WEBPACK_IMPORTED_MODULE_2__["emptyContacts"];
        this.goals = _datamodel_mockData__WEBPACK_IMPORTED_MODULE_2__["emptyGoalsList"];
        this.vitalSigns = _datamodel_vitalSigns__WEBPACK_IMPORTED_MODULE_6__["emptyVitalSigns"];
        this.egfr = _datamodel_egfr__WEBPACK_IMPORTED_MODULE_7__["emptyEgfr"];
        this.uacr = _datamodel_uacr__WEBPACK_IMPORTED_MODULE_8__["emptyUacr"];
        this.wot = _datamodel_weight_over_time__WEBPACK_IMPORTED_MODULE_9__["emptyWot"];
    }
    DataService.prototype.updateFHIRConnection = function (server, token) {
        this.authorizationToken = token;
        console.log('Token = ' + token);
        this.mainfhirserver = server;
        var headersobj = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]();
        headersobj = headersobj
            .set('Content-Type', 'application/json')
            .set('mcc-fhir-server', server)
            .set('mcc-token', token);
        this.commonHttpOptions = {
            headers: headersobj
        };
        this.subjectdataservice.httpOptions = this.commonHttpOptions;
        this.careplanservice.httpOptions = this.commonHttpOptions;
        this.goalsdataservice.httpOptions = this.commonHttpOptions;
        this.contactdataService.httpOptions = this.commonHttpOptions;
        this.medicationdataService.httpOptions = this.commonHttpOptions;
        this.counselingService.httpOptions = this.commonHttpOptions;
        this.educationService.httpOptions = this.commonHttpOptions;
        this.referralService.httpOptions = this.commonHttpOptions;
        this.obsService.HTTP_OPTIONS = this.commonHttpOptions;
        this.serviceRequestService.HTTP_OPTIONS = this.commonHttpOptions;
    };
    DataService.prototype.updateFHIRConnection2 = function (secondaryserver) {
        // this.authorizationToken = token;
        // console.log('Token = ' + token);
        // this.mainfhirserver = server;
        this.secondaryfhirserver = secondaryserver;
        var headersobj = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]();
        headersobj = headersobj
            .set('Content-Type', 'application/json')
            .set('mcc-fhir-server', this.mainfhirserver)
            .set('mcc-token', this.authorizationToken)
            .set('mcc-secondaryfhir-server', this.secondaryfhirserver);
        this.commonHttpOptions = {
            headers: headersobj
        };
        this.subjectdataservice.httpOptions = this.commonHttpOptions;
        this.careplanservice.httpOptions = this.commonHttpOptions;
        this.goalsdataservice.httpOptions = this.commonHttpOptions;
        this.contactdataService.httpOptions = this.commonHttpOptions;
        this.medicationdataService.httpOptions = this.commonHttpOptions;
        this.counselingService.httpOptions = this.commonHttpOptions;
        this.educationService.httpOptions = this.commonHttpOptions;
        this.referralService.httpOptions = this.commonHttpOptions;
        this.obsService.HTTP_OPTIONS = this.commonHttpOptions;
    };
    DataService.prototype.getCurrentPatient = function () {
        return this.subjectdataservice
            .getSubject(this.currentPatientId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) { return data; }));
    };
    DataService.prototype.setCurrentSubject = function (patientId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.log('Setting patient to Id = '.concat(patientId));
                this.currentPatientId = patientId;
                this.targetValues = [];
                this.targetValuesDataSource.data = this.targetValues;
                console.log('DATA-174', this.targetValuesDataSource);
                this.activeMedications = _datamodel_mockData__WEBPACK_IMPORTED_MODULE_2__["emptyMediciationSummary"];
                this.vitalSigns = _datamodel_vitalSigns__WEBPACK_IMPORTED_MODULE_6__["emptyVitalSigns"];
                this.vitalSignsDataSource.data = this.vitalSigns.tableData;
                console.log('DATA-178', this.vitalSignsDataSource);
                this.activeMedicationsDataSource.data = this.activeMedications;
                console.log('DATA-180', this.activeMedicationsDataSource);
                if (!patientId || patientId.trim().length === 0) {
                    this.currentPatientId = _datamodel_mockData__WEBPACK_IMPORTED_MODULE_2__["dummyPatientId"];
                    this.currentCareplanId = _datamodel_mockData__WEBPACK_IMPORTED_MODULE_2__["dummyCareplanId"];
                    this.demographic = _datamodel_mockData__WEBPACK_IMPORTED_MODULE_2__["dummySubject"];
                    this.conditions = _datamodel_mockData__WEBPACK_IMPORTED_MODULE_2__["dummyConditions"];
                    // this.goals  = emptyGoalsList;
                }
                else {
                    this.updateDemographics();
                    this.updateConditions();
                    this.getCarePlansForSubject();
                    this.getPatientGoals();
                    this.updateContacts();
                    this.updateCounseling();
                    this.updateEducation();
                    this.updateReferrals();
                    this.getPatientGoalTargets(this.currentPatientId).then(function () {
                        window[_common_constants__WEBPACK_IMPORTED_MODULE_12__["Constants"].TargetsIsLoaded] = true;
                    });
                    this.getPatientBPInfo(this.currentPatientId);
                    this.getPatientEgfrInfo(this.currentPatientId);
                    this.getPatientUacrInfo(this.currentPatientId);
                    this.getPatientWotInfo(this.currentPatientId);
                    this.updateServiceRequest();
                }
                // this.activeMedications = mockMedicationSummary;
                this.education = _datamodel_mockData__WEBPACK_IMPORTED_MODULE_2__["emptyEducation"];
                this.counseling = _datamodel_mockData__WEBPACK_IMPORTED_MODULE_2__["emptyCounseling"];
                this.referrals = _datamodel_mockData__WEBPACK_IMPORTED_MODULE_2__["emptyReferrals"];
                this.contacts = _datamodel_mockData__WEBPACK_IMPORTED_MODULE_2__["emptyContacts"];
                // this.targetValue
                return [2 /*return*/, true];
            });
        });
    };
    DataService.prototype.setCurrentCarePlan = function (planId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.currentCareplanId = planId;
                        if (!(!planId || planId.trim().length === 0)) return [3 /*break*/, 1];
                        this.socialConcerns = _datamodel_mockData__WEBPACK_IMPORTED_MODULE_2__["emptySocialConcerns"];
                        console.log('dont come here pls');
                        this.careplan = _datamodel_mockData__WEBPACK_IMPORTED_MODULE_2__["dummyCarePlan"];
                        return [3 /*break*/, 9];
                    case 1: return [4 /*yield*/, this.updateCarePlan()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.updateSocialConcerns()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.updateContacts()];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.updateCounseling()];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.updateEducation()];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, this.updateReferrals()];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, this.updateMedications()];
                    case 8:
                        _a.sent();
                        _a.label = 9;
                    case 9: return [2 /*return*/, true];
                }
            });
        });
    };
    DataService.prototype.updateCarePlan = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.careplanservice
                    .getCarePlan(this.currentCareplanId)
                    .subscribe(function (careplan) {
                    // Inject
                    _this.careplan = careplan;
                });
                return [2 /*return*/, true];
            });
        });
    };
    DataService.prototype.getCarePlansForSubject = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.careplanservice
                    .getCarePlansBySubject(this.currentPatientId)
                    .subscribe(function (cp) {
                    console.log({ cp: cp });
                    _this.careplans = cp;
                    if (_this.careplans.length > 0) {
                        _this.careplan = _this.careplans[0];
                        //this.careplan = this.careplans[this.careplans.length - 1]; // Initialize selected careplan to last in MccCarePlan array
                        _this.currentCareplanId = _this.careplan.id;
                        console.log({ currentCareplanId: _this.currentCareplanId });
                        _this.updateContacts();
                        _this.updateCounseling();
                        _this.updateEducation();
                        _this.updateMedications();
                        _this.updateReferrals();
                        _this.updateLabResults(_this.currentPatientId, _this.currentCareplanId);
                        _this.updateVitalSignResults(_this.currentPatientId, _this.currentCareplanId);
                        _this.updateActivities();
                        _this.updateExam();
                        _this.updateQuestionaires();
                        _this.updateProcedure();
                        _this.updateHistory();
                        _this.updateImaging();
                        _this.updateTherapy();
                    }
                    else {
                        _this.careplan = _datamodel_mockData__WEBPACK_IMPORTED_MODULE_2__["dummyCarePlan"]; // Initialize selected careplan to dummy careplan if no care plans available for subject
                        _this.updateContacts();
                        _this.updateLabResults(_this.currentPatientId, 'general');
                        _this.updateVitalSignResults(_this.currentPatientId, 'general');
                    }
                    _this.updateSocialConcerns();
                });
                return [2 /*return*/, true];
            });
        });
    };
    DataService.prototype.updateSocialConcerns = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.subjectdataservice
                    .getSocialConcerns(this.currentPatientId, this.currentCareplanId)
                    .subscribe(function (concerns) {
                    _this.socialConcerns = concerns;
                    window[_common_constants__WEBPACK_IMPORTED_MODULE_12__["Constants"].SocialConcernsIsLoaded] = true;
                });
                return [2 /*return*/, true];
            });
        });
    };
    DataService.prototype.updateContacts = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.contactdataService
                    .getContactsBySubjectAndCareplan(this.currentPatientId, this.currentCareplanId)
                    .subscribe(function (contacts) { return (_this.contacts = contacts); });
                return [2 /*return*/, true];
            });
        });
    };
    DataService.prototype.updateCounseling = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.counselingService
                    .getCounselingSummaries(this.currentPatientId, this.currentCareplanId)
                    .subscribe(function (counseling) {
                    _this.counseling = counseling;
                    window[_common_constants__WEBPACK_IMPORTED_MODULE_12__["Constants"].CounselingIsLoaded] = true;
                });
                return [2 /*return*/, true];
            });
        });
    };
    DataService.prototype.updateReferrals = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.referralService
                    .getReferralSummaries(this.currentPatientId, this.currentCareplanId)
                    .subscribe(function (referrals) {
                    _this.referrals = referrals;
                    window[_common_constants__WEBPACK_IMPORTED_MODULE_12__["Constants"].ReferralsIsLoaded] = true;
                });
                return [2 /*return*/, true];
            });
        });
    };
    DataService.prototype.updateLabResults = function (patientId, longTermCondition) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.obsService
                    .getLabResults(patientId, longTermCondition)
                    .then(function (res) {
                    console.log("EccDS: getLabResults - start with patientid - " + patientId);
                    console.log({
                        serviceName: 'getLabResults',
                        res: res
                    });
                    _this.labResults = res;
                });
                return [2 /*return*/, true];
            });
        });
    };
    DataService.prototype.updateActivities = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.obsService
                    .getObservationsByCategory(this.currentPatientId, 'activity')
                    .then(function (activities) {
                    _this.activities = activities;
                });
                return [2 /*return*/, true];
            });
        });
    };
    DataService.prototype.updateExam = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.obsService
                    .getObservationsByCategory(this.currentPatientId, 'exam')
                    .then(function (exam) { return (_this.exam = exam); });
                return [2 /*return*/, true];
            });
        });
    };
    DataService.prototype.updateQuestionaires = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.obsService
                    .getObservationsByCategory(this.currentPatientId, 'survey')
                    .then(function (questionaires) { return (_this.questionaires = questionaires); });
                return [2 /*return*/, true];
            });
        });
    };
    DataService.prototype.updateProcedure = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.obsService
                    .getObservationsByCategory(this.currentPatientId, 'procedure')
                    .then(function (procedure) { return (_this.procedure = procedure); });
                return [2 /*return*/, true];
            });
        });
    };
    DataService.prototype.updateHistory = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.obsService
                    .getObservationsByCategory(this.currentPatientId, 'social-history')
                    .then(function (history) { return (_this.history = history); });
                return [2 /*return*/, true];
            });
        });
    };
    DataService.prototype.updateImaging = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.obsService
                    .getObservationsByCategory(this.currentPatientId, 'imaging')
                    .then(function (imaging) { return (_this.imaging = imaging); });
                return [2 /*return*/, true];
            });
        });
    };
    DataService.prototype.updateTherapy = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.obsService
                    .getObservationsByCategory(this.currentPatientId, 'therapy')
                    .then(function (therapy) { return (_this.therapy = therapy); });
                return [2 /*return*/, true];
            });
        });
    };
    DataService.prototype.updateVitalSignResults = function (patientId, longTermCondition) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.obsService
                    .getVitalSignResults(patientId, longTermCondition)
                    .then(function (res) {
                    console.log("EccDS: getVitalSignResults - start with patientid - " + patientId);
                    console.log({
                        serviceName: 'getVitalSignResults',
                        res: res
                    });
                    _this.vitalSignResults = res;
                });
                return [2 /*return*/, true];
            });
        });
    };
    DataService.prototype.updateEducation = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.educationService
                    .getEducationSummaries(this.currentPatientId, this.currentCareplanId)
                    .subscribe(function (education) {
                    _this.education = education;
                    window[_common_constants__WEBPACK_IMPORTED_MODULE_12__["Constants"].EducationIsLoaded] = true;
                });
                return [2 /*return*/, true];
            });
        });
    };
    DataService.prototype.updateMedications = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.medicationdataService
                    .getMedicationSummaryBySubjectAndCareplan(this.currentPatientId, this.currentCareplanId)
                    .subscribe(function (medications) {
                    _this.activeMedications = medications.activeMedications;
                    _this.activeMedicationsDataSource.data = _this.activeMedications;
                    _this.inactiveMedications = medications.inactiveMedications;
                    window[_common_constants__WEBPACK_IMPORTED_MODULE_12__["Constants"].MedicationsIsLoaded] = true;
                });
                return [2 /*return*/, true];
            });
        });
    };
    DataService.prototype.updateDemographics = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.subjectdataservice
                    .getSubject(this.currentPatientId)
                    .subscribe(function (demograhic) { return (_this.demographic = demograhic); });
                return [2 /*return*/, true];
            });
        });
    };
    DataService.prototype.updateConditions = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.subjectdataservice
                    .getConditions(this.currentPatientId)
                    .subscribe(function (condition) {
                    _this.conditions = condition;
                    window[_common_constants__WEBPACK_IMPORTED_MODULE_12__["Constants"].ActiveDiagnosisIsLoaded] = true;
                    window[_common_constants__WEBPACK_IMPORTED_MODULE_12__["Constants"].InActiveDiagnosisIsLoaded] = true;
                });
                return [2 /*return*/, true];
            });
        });
    };
    DataService.prototype.getPatientGoals = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.goalsdataservice.getGoals(this.currentPatientId).subscribe(function (goals) {
                    _this.goals = goals;
                    _this.consolidatedGoalsDataSource.data = _this.goals.allGoals;
                    window[_common_constants__WEBPACK_IMPORTED_MODULE_12__["Constants"].GoalsIsLoaded] = true;
                });
                return [2 /*return*/, true];
            });
        });
    };
    DataService.prototype.updateServiceRequest = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.serviceRequestService.getServiceRequestSummaries(this.currentPatientId, this.currentCareplanId).subscribe(function (servicerequests) {
                    _this.servicerequest = servicerequests;
                    // this.consolidatedGoalsDataSource.data = this.goals.allGoals;
                    window[_common_constants__WEBPACK_IMPORTED_MODULE_12__["Constants"].ServiceRequestIsLoaded] = true;
                });
                return [2 /*return*/, true];
            });
        });
    };
    DataService.prototype.getPatientGoalTargets = function (patientId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.goalsdataservice
                    .getGoals(patientId)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])(function (goals) {
                    return _this.goalsdataservice.getPatientGoalTargets(patientId, goals.activeTargets);
                }))
                    .subscribe(function (res) {
                    _this.targetValues.push(res);
                    _this.targetValuesDataSource.data = _this.targetValues;
                });
                return [2 /*return*/, true];
            });
        });
    };
    DataService.prototype.getPatientBPInfo = function (patientId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var systolicChartData, diastolicChartData, xAxisLabels;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                systolicChartData = {
                    data: [],
                    label: 'Systolic',
                    fill: false
                };
                diastolicChartData = {
                    data: [],
                    label: 'Diastolic',
                    fill: false
                };
                xAxisLabels = [];
                this.vitalSigns = _datamodel_vitalSigns__WEBPACK_IMPORTED_MODULE_6__["emptyVitalSigns"];
                this.vitalSigns.tableData = [];
                this.vitalSigns.chartData = [];
                this.goalsdataservice
                    .getPatientVitalSigns(patientId)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
                    _this.vitalSigns.chartData.push(systolicChartData);
                    _this.vitalSigns.chartData.push(diastolicChartData);
                    _this.vitalSignsDataSource.data = _this.vitalSigns.tableData.sort(function (a, b) {
                        return moment__WEBPACK_IMPORTED_MODULE_11___default()(a.date).unix() > moment__WEBPACK_IMPORTED_MODULE_11___default()(b.date).unix() ? -1 : 1;
                    });
                    var vsLowDateRow = _this.vitalSigns.tableData.reduce(function (low, vs) {
                        return Object(_util_utility_functions__WEBPACK_IMPORTED_MODULE_10__["reformatYYYYMMDD"])(low.date) < Object(_util_utility_functions__WEBPACK_IMPORTED_MODULE_10__["reformatYYYYMMDD"])(vs.date) ? low : vs;
                    });
                    var vsHighDateRow = _this.vitalSigns.tableData.reduce(function (high, vs) {
                        return Object(_util_utility_functions__WEBPACK_IMPORTED_MODULE_10__["reformatYYYYMMDD"])(high.date) >= Object(_util_utility_functions__WEBPACK_IMPORTED_MODULE_10__["reformatYYYYMMDD"])(vs.date)
                            ? high
                            : vs;
                    });
                    _this.vitalSigns.mostRecentSystolic.date = vsHighDateRow.date;
                    _this.vitalSigns.mostRecentSystolic.value = vsHighDateRow.systolic;
                    _this.vitalSigns.mostRecentDiastolic.date = vsHighDateRow.date;
                    _this.vitalSigns.mostRecentDiastolic.value = vsHighDateRow.diastolic;
                    var minDate = moment__WEBPACK_IMPORTED_MODULE_11___default()(vsLowDateRow.date);
                    _this.vitalSigns.suggestedMin = minDate;
                    var maxDate = moment__WEBPACK_IMPORTED_MODULE_11___default()(vsHighDateRow.date);
                    _this.vitalSigns.suggestedMax = minDate;
                    _this.vitalSigns.lineChartOptions = Object(_util_utility_functions__WEBPACK_IMPORTED_MODULE_10__["getLineChartOptionsObject"])(50, 180, _this.vitalSigns.suggestedMin, _this.vitalSigns.suggestedMax);
                    _this.vitalSigns.xAxisLabels = [];
                    var yr = '';
                    var prevYr = '';
                    _this.vitalSigns.tableData.map(function (vs) {
                        if (moment__WEBPACK_IMPORTED_MODULE_11___default()(vs.date.toString()).format('YYYY') !== prevYr) {
                            yr = moment__WEBPACK_IMPORTED_MODULE_11___default()(vs.date.toString()).format('YYYY');
                            prevYr = yr;
                        }
                        else {
                            yr = '';
                        }
                        // @ts-ignore
                        xAxisLabels.push([
                            moment__WEBPACK_IMPORTED_MODULE_11___default()(vs.date.toString()).format('MMM'),
                            moment__WEBPACK_IMPORTED_MODULE_11___default()(vs.date.toString()).format('DD'),
                            yr
                        ]);
                    });
                    _this.vitalSigns.xAxisLabels = xAxisLabels;
                    window[_common_constants__WEBPACK_IMPORTED_MODULE_12__["Constants"].BPisLoaded] = true;
                }))
                    .subscribe(function (res) {
                    _this.vitalSigns.tableData.push(res);
                    var systolicVitalSign = {
                        x: new Date(res.date),
                        y: res.systolic
                    };
                    var diastolicVitalSign = {
                        x: new Date(res.date),
                        y: res.diastolic
                    };
                    // @ts-ignore
                    systolicChartData.data.push(systolicVitalSign);
                    // @ts-ignore
                    diastolicChartData.data.push(diastolicVitalSign);
                });
                return [2 /*return*/, true];
            });
        });
    };
    DataService.prototype.getPatientEgfrInfo = function (patientId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                this.egfr = _datamodel_egfr__WEBPACK_IMPORTED_MODULE_7__["emptyEgfr"];
                this.egfr.tableData = [];
                this.egfr.chartData = [];
                this.goalsdataservice
                    .getPatientEgfr(patientId)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
                    _this.filterDataSet(0);
                }))
                    .subscribe(function (res) {
                    var egfr = {
                        x: new Date(res.date),
                        y: res.egfr
                    };
                    if (!_this.aggregatedChartData.find(function (x) { return x.label === res.test; })) {
                        if (res.isNumber) {
                            // if the value is not a number we do not want to chart it
                            _this.aggregatedChartData.push({
                                data: [egfr],
                                label: res.test,
                                fill: false
                            });
                        }
                        _this.aggregatedTableData.push({
                            data: [res],
                            label: res.test
                        });
                    }
                    else {
                        // @ts-ignore
                        if (res.isNumber)
                            _this.aggregatedChartData
                                .find(function (x) { return x.label === res.test; })
                                .data.push(egfr);
                        _this.aggregatedTableData
                            .find(function (x) { return x.label === res.test; })
                            .data.push(res);
                    }
                });
                return [2 /*return*/, true];
            });
        });
    };
    DataService.prototype.filterDataSet = function (index) {
        if (!this.aggregatedChartData || this.aggregatedChartData.length === 0) {
            window[_common_constants__WEBPACK_IMPORTED_MODULE_12__["Constants"].EGFRisLoaded] = true;
            return;
        }
        this.selectedIndex = index;
        var xAxisLabels = [];
        this.egfr.chartData = [];
        this.egfr.chartData.push(this.aggregatedChartData[index]);
        this.egfr.tableData = [];
        this.egfr.tableData = this.aggregatedTableData[index].data;
        this.egfrDataSource.data = this.egfr.tableData.sort(function (a, b) {
            return moment__WEBPACK_IMPORTED_MODULE_11___default()(a.date).unix() > moment__WEBPACK_IMPORTED_MODULE_11___default()(b.date).unix() ? -1 : 1;
        });
        var vsLowDateRow = this.egfr.tableData.reduce(function (low, e) {
            return Object(_util_utility_functions__WEBPACK_IMPORTED_MODULE_10__["reformatYYYYMMDD"])(low.date) < Object(_util_utility_functions__WEBPACK_IMPORTED_MODULE_10__["reformatYYYYMMDD"])(e.date) ? low : e;
        });
        var vsHighDateRow = this.egfr.tableData.reduce(function (high, e) {
            return Object(_util_utility_functions__WEBPACK_IMPORTED_MODULE_10__["reformatYYYYMMDD"])(high.date) >= Object(_util_utility_functions__WEBPACK_IMPORTED_MODULE_10__["reformatYYYYMMDD"])(e.date) ? high : e;
        });
        this.egfr.mostRecentEgfr.date = vsHighDateRow.date;
        this.egfr.mostRecentEgfr.value = vsHighDateRow.egfr;
        this.egfr.mostRecentEgfr.unit = vsHighDateRow.unit;
        this.egfr.mostRecentEgfr.test = vsHighDateRow.test;
        this.egfr.mostRecentEgfr.result = Object(_util_utility_functions__WEBPACK_IMPORTED_MODULE_10__["formatEgfrResult"])(vsHighDateRow.egfr.value, vsHighDateRow.unit);
        var minDate = moment__WEBPACK_IMPORTED_MODULE_11___default()(vsLowDateRow.date);
        this.egfr.suggestedMin = minDate.toDate();
        var maxDate = moment__WEBPACK_IMPORTED_MODULE_11___default()(vsHighDateRow.date);
        this.egfr.suggestedMax = maxDate.toDate();
        var lineChartOptions = Object(_util_utility_functions__WEBPACK_IMPORTED_MODULE_10__["getLineChartOptionsObject"])(10, 70, this.egfr.suggestedMin, this.egfr.suggestedMax);
        var lineChartAnnotations = Object(_util_utility_functions__WEBPACK_IMPORTED_MODULE_10__["getEgrLineChartAnnotationsObject"])();
        this.egfr.lineChartOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, lineChartOptions), { annotation: lineChartAnnotations });
        this.egfr.xAxisLabels = [];
        var yr = '';
        var prevYr = '';
        this.egfr.tableData.map(function (vs) {
            if (moment__WEBPACK_IMPORTED_MODULE_11___default()(vs.date.toString()).format('YYYY') !== prevYr) {
                yr = moment__WEBPACK_IMPORTED_MODULE_11___default()(vs.date.toString()).format('YYYY');
                prevYr = yr;
            }
            else {
                yr = '';
            }
            // @ts-ignore
            xAxisLabels.push([
                moment__WEBPACK_IMPORTED_MODULE_11___default()(vs.date.toString()).format('MMM'),
                moment__WEBPACK_IMPORTED_MODULE_11___default()(vs.date.toString()).format('DD'),
                yr
            ]);
        });
        this.egfr.xAxisLabels = xAxisLabels;
        window[_common_constants__WEBPACK_IMPORTED_MODULE_12__["Constants"].EGFRisLoaded] = true;
    };
    DataService.prototype.emptyChart = function () {
        this.egfr.chartData = [];
        this.egfr.tableData = [];
        // @ts-ignore
        this.egfr.lineChartOptions = {};
    };
    DataService.prototype.getPatientUacrInfo = function (patientId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var uacrChartData, xAxisLabels;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                uacrChartData = {
                    data: [],
                    label: 'Uacr',
                    fill: false
                };
                xAxisLabels = [];
                this.uacr = _datamodel_uacr__WEBPACK_IMPORTED_MODULE_8__["emptyUacr"];
                this.uacr.tableData = [];
                this.uacr.chartData = [];
                this.goalsdataservice
                    .getPatientUacr(patientId)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
                    _this.uacr.chartData.push(uacrChartData);
                    _this.uacrDataSource.data = _this.uacr.tableData.sort(function (a, b) {
                        return moment__WEBPACK_IMPORTED_MODULE_11___default()(a.date).unix() > moment__WEBPACK_IMPORTED_MODULE_11___default()(b.date).unix() ? -1 : 1;
                    });
                    var vsLowDateRow = _this.uacr.tableData.reduce(function (low, e) {
                        return Object(_util_utility_functions__WEBPACK_IMPORTED_MODULE_10__["reformatYYYYMMDD"])(low.date) < Object(_util_utility_functions__WEBPACK_IMPORTED_MODULE_10__["reformatYYYYMMDD"])(e.date) ? low : e;
                    });
                    var vsHighDateRow = _this.uacr.tableData.reduce(function (high, e) {
                        return Object(_util_utility_functions__WEBPACK_IMPORTED_MODULE_10__["reformatYYYYMMDD"])(high.date) >= Object(_util_utility_functions__WEBPACK_IMPORTED_MODULE_10__["reformatYYYYMMDD"])(e.date) ? high : e;
                    });
                    _this.uacr.mostRecentUacr.date = vsHighDateRow.date;
                    _this.uacr.mostRecentUacr.value = vsHighDateRow.uacr;
                    _this.uacr.mostRecentUacr.unit = vsHighDateRow.unit;
                    _this.uacr.mostRecentUacr.test = vsHighDateRow.test;
                    _this.uacr.mostRecentUacr.result = Object(_util_utility_functions__WEBPACK_IMPORTED_MODULE_10__["formatUacrResult"])(vsHighDateRow.uacr, vsHighDateRow.unit);
                    var minDate = moment__WEBPACK_IMPORTED_MODULE_11___default()(vsLowDateRow.date, moment__WEBPACK_IMPORTED_MODULE_11___default.a.defaultFormat);
                    _this.uacr.suggestedMin = minDate;
                    var maxDate = moment__WEBPACK_IMPORTED_MODULE_11___default()(vsHighDateRow.date.toString());
                    _this.uacr.suggestedMax = maxDate;
                    var lineChartOptions = Object(_util_utility_functions__WEBPACK_IMPORTED_MODULE_10__["getLineChartOptionsObject"])(0, 400, _this.uacr.suggestedMin, _this.uacr.suggestedMax);
                    var lineChartAnnotations = Object(_util_utility_functions__WEBPACK_IMPORTED_MODULE_10__["getUacrLineChartAnnotationsObject"])();
                    _this.uacr.lineChartOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, lineChartOptions), { annotation: lineChartAnnotations });
                    _this.uacr.xAxisLabels = [];
                    var yr = '';
                    var prevYr = '';
                    _this.uacr.tableData.map(function (vs) {
                        if (moment__WEBPACK_IMPORTED_MODULE_11___default()(vs.date.toString()).format('YYYY') !== prevYr) {
                            yr = moment__WEBPACK_IMPORTED_MODULE_11___default()(vs.date.toString()).format('YYYY');
                            prevYr = yr;
                        }
                        else {
                            yr = '';
                        }
                        // @ts-ignore
                        xAxisLabels.push([
                            moment__WEBPACK_IMPORTED_MODULE_11___default()(vs.date.toString()).format('MMM'),
                            moment__WEBPACK_IMPORTED_MODULE_11___default()(vs.date.toString()).format('DD'),
                            yr
                        ]);
                    });
                    _this.uacr.xAxisLabels = xAxisLabels;
                    window[_common_constants__WEBPACK_IMPORTED_MODULE_12__["Constants"].UACRisLoaded] = true;
                }))
                    .subscribe(function (res) {
                    _this.uacr.tableData.push(res);
                    var uacr = {
                        x: new Date(res.date),
                        y: res.uacr
                    };
                    // @ts-ignore
                    uacrChartData.data.push(uacr);
                });
                return [2 /*return*/, true];
            });
        });
    };
    DataService.prototype.getPatientWotInfo = function (patientId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var wotChartData, xAxisLabels;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                wotChartData = { data: [], label: 'Wot', fill: false };
                xAxisLabels = [];
                this.wot = _datamodel_weight_over_time__WEBPACK_IMPORTED_MODULE_9__["emptyWot"];
                this.wot.tableData = [];
                this.wot.chartData = [];
                this.goalsdataservice
                    .getPatientWot(patientId)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(function () {
                    _this.wot.chartData.push(wotChartData);
                    _this.wotDataSource.data = _this.wot.tableData.sort(function (a, b) {
                        return moment__WEBPACK_IMPORTED_MODULE_11___default()(a.date).unix() > moment__WEBPACK_IMPORTED_MODULE_11___default()(b.date).unix() ? -1 : 1;
                    });
                    window[_common_constants__WEBPACK_IMPORTED_MODULE_12__["Constants"].WotIsLoaded] = true;
                    var vsHighDateRow = _this.wot.tableData.reduce(function (high, e) {
                        return Object(_util_utility_functions__WEBPACK_IMPORTED_MODULE_10__["reformatYYYYMMDD"])(high.date) >= Object(_util_utility_functions__WEBPACK_IMPORTED_MODULE_10__["reformatYYYYMMDD"])(e.date) ? high : e;
                    });
                    _this.wot.mostRecentWot.date = vsHighDateRow.date;
                    _this.wot.mostRecentWot.value = vsHighDateRow.value;
                    _this.wot.mostRecentWot.unit = vsHighDateRow.unit;
                    _this.wot.mostRecentWot.test = vsHighDateRow.test;
                    _this.wot.mostRecentWot.result = Object(_util_utility_functions__WEBPACK_IMPORTED_MODULE_10__["formatWotResult"])(vsHighDateRow.value, vsHighDateRow.unit);
                    var lineChartOptions = Object(_util_utility_functions__WEBPACK_IMPORTED_MODULE_10__["getLineChartOptionsObject"])();
                    _this.wot.lineChartOptions = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, lineChartOptions), { annotation: {} }); //lineChartAnnotations };
                    _this.wot.xAxisLabels = [];
                    var yr = '';
                    var prevYr = '';
                    _this.wot.tableData.map(function (vs) {
                        if (moment__WEBPACK_IMPORTED_MODULE_11___default()(vs.date.toString()).format('YYYY') !== prevYr) {
                            yr = moment__WEBPACK_IMPORTED_MODULE_11___default()(vs.date.toString()).format('YYYY');
                            prevYr = yr;
                        }
                        else {
                            yr = '';
                        }
                        // @ts-ignore
                        xAxisLabels.push([
                            moment__WEBPACK_IMPORTED_MODULE_11___default()(vs.date.toString()).format('MMM'),
                            moment__WEBPACK_IMPORTED_MODULE_11___default()(vs.date.toString()).format('DD'),
                            yr
                        ]);
                    });
                    _this.wot.xAxisLabels = xAxisLabels;
                }))
                    .subscribe(function (res) {
                    _this.wot.tableData.push(res);
                    var wot = {
                        x: new Date(res.date),
                        y: res.value
                    };
                    // @ts-ignore
                    wotChartData.data.push(wot);
                });
                return [2 /*return*/, true];
            });
        });
    };
    /** Log a message with the MessageService */
    DataService.prototype.log = function (message) {
        this.messageService.add("subject-data-service: " + message);
    };
    DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_subject_data_service_service__WEBPACK_IMPORTED_MODULE_13__["SubjectDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_careplan_service__WEBPACK_IMPORTED_MODULE_14__["CareplanService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_goals_data_service_service__WEBPACK_IMPORTED_MODULE_15__["GoalsDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_contacts_service__WEBPACK_IMPORTED_MODULE_16__["ContactsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_medication_service__WEBPACK_IMPORTED_MODULE_17__["MedicationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_counseling_service__WEBPACK_IMPORTED_MODULE_18__["CounselingService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_education_service__WEBPACK_IMPORTED_MODULE_19__["EducationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_referrals_service__WEBPACK_IMPORTED_MODULE_20__["ReferralService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_message_service__WEBPACK_IMPORTED_MODULE_21__["MessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_observations_service__WEBPACK_IMPORTED_MODULE_22__["ObservationsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_service_request_service__WEBPACK_IMPORTED_MODULE_23__["ServiceRequestService"])); };
    DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });
    return DataService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _subject_data_service_service__WEBPACK_IMPORTED_MODULE_13__["SubjectDataService"] }, { type: _careplan_service__WEBPACK_IMPORTED_MODULE_14__["CareplanService"] }, { type: _goals_data_service_service__WEBPACK_IMPORTED_MODULE_15__["GoalsDataService"] }, { type: _contacts_service__WEBPACK_IMPORTED_MODULE_16__["ContactsService"] }, { type: _medication_service__WEBPACK_IMPORTED_MODULE_17__["MedicationService"] }, { type: _counseling_service__WEBPACK_IMPORTED_MODULE_18__["CounselingService"] }, { type: _education_service__WEBPACK_IMPORTED_MODULE_19__["EducationService"] }, { type: _referrals_service__WEBPACK_IMPORTED_MODULE_20__["ReferralService"] }, { type: _message_service__WEBPACK_IMPORTED_MODULE_21__["MessageService"] }, { type: _observations_service__WEBPACK_IMPORTED_MODULE_22__["ObservationsService"] }, { type: _service_request_service__WEBPACK_IMPORTED_MODULE_23__["ServiceRequestService"] }]; }, null); })();


/***/ }),

/***/ "GqCu":
/*!**********************************!*\
  !*** ./src/app/launch/launch.ts ***!
  \**********************************/
/*! exports provided: Launch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Launch", function() { return Launch; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "AytR");
/* harmony import */ var e_care_common_data_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! e-care-common-data-services */ "6AkT");





var Launch = /** @class */ (function () {
    function Launch() {
    }
    Launch.prototype.ngOnInit = function () {
    };
    Launch.prototype.ngAfterViewInit = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, Object(e_care_common_data_services__WEBPACK_IMPORTED_MODULE_3__["authorize"])({
                            clientId: _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].clientId,
                            scope: 'patient/*.read openid launch'
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Launch.ɵfac = function Launch_Factory(t) { return new (t || Launch)(); };
    Launch.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: Launch, selectors: [["launch"]], decls: 6, vars: 0, consts: [["charset", "UTF-8"]], template: function Launch_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "html");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "head");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "meta", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "title");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "MCC Provider Smart App");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "body");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF1bmNoL2xhdW5jaC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsU0FBUyIsImZpbGUiOiJzcmMvYXBwL2xhdW5jaC9sYXVuY2guY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogbm9vcCAqL1xuIl19 */"] });
    return Launch;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Launch, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'launch',
                templateUrl: './launch.html',
                styleUrls: ['./launch.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "HCQv":
/*!******************************************!*\
  !*** ./src/app/e-gfr/e-gfr.component.ts ***!
  \******************************************/
/*! exports provided: EGFRComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EGFRComponent", function() { return EGFRComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chartjs-plugin-annotation */ "Ym+k");
/* harmony import */ var chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _util_utility_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/utility-functions */ "n4X3");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/data.service */ "EnSQ");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-charts */ "LPYB");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");















function EGFRComponent_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var option_r7 = ctx.$implicit;
    var i_r8 = ctx.index;
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", i_r8 === ctx_r0.dataservice.selectedIndex)("value", i_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", option_r7.label, " ");
} }
function EGFRComponent_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EGFRComponent_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var egfr_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, egfr_r9.date, "MM/dd/yyyy"), " ");
} }
function EGFRComponent_th_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Result");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EGFRComponent_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "td", 22);
} if (rf & 2) {
    var egfr_r10 = ctx.$implicit;
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r4.EgfrResult(egfr_r10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function EGFRComponent_tr_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 23);
} }
function EGFRComponent_tr_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EGFRComponent_tr_22_Template_tr_click_0_listener() { var row_r11 = ctx.$implicit; return row_r11.highlighted = !row_r11.highlighted; })("mouseover", function EGFRComponent_tr_22_Template_tr_mouseover_0_listener() { var row_r11 = ctx.$implicit; return row_r11.hovered = true; })("mouseout", function EGFRComponent_tr_22_Template_tr_mouseout_0_listener() { var row_r11 = ctx.$implicit; return row_r11.hovered = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r11 = ctx.$implicit;
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r6.getEgfrRowCssClass(row_r11));
} }
var _c0 = function () { return [5, 15, 30]; };
var _c1 = function (a0) { return { display: a0 }; };
var EGFRComponent = /** @class */ (function () {
    function EGFRComponent(dataservice) {
        this.dataservice = dataservice;
        this.egfrRowMax = 7;
        this.lineChartColors = [
            {
                borderColor: 'black',
            },
        ];
        this.lineChartLegend = false;
        this.lineChartPlugins = [chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_1__];
        this.lineChartType = 'line';
        this.displayedColumns = ['date', 'egfr'];
    }
    EGFRComponent.prototype.ngOnInit = function () {
        this.egfrDataSource = this.dataservice.egfrDataSource;
    };
    EGFRComponent.prototype.ngAfterViewInit = function () {
        // todo: fix below, paginator doesn't work when assigned, shows all rows, doesn't limit to max, paging doesn't work
        if (this.egfrDataSource.data.length > this.egfrRowMax) {
            this.egfrDataSource.paginator = this.paginator;
        }
        this.egfrDataSource.sort = this.sort;
        this.egfrDataSource.sortingDataAccessor = function (data, header) {
            switch (header) {
                case ('date'): {
                    return moment__WEBPACK_IMPORTED_MODULE_5___default()(data.date).unix();
                }
                default: {
                    return data[header];
                }
            }
        };
    };
    EGFRComponent.prototype.EgfrResult = function (egfr) {
        return Object(_util_utility_functions__WEBPACK_IMPORTED_MODULE_4__["formatEgfrResult"])(egfr.egfr.value, egfr.unit);
    };
    EGFRComponent.prototype.getEgfrRowCssClass = function (egfr) {
        var cssClass = '';
        var val = egfr.egfr;
        if (val) {
            switch (true) {
                case (val >= 60):
                    cssClass = 'resultGood';
                    break;
                case (val < 60 && val >= 15):
                    cssClass = 'resultBorderline';
                    break;
                case (val < 15):
                    cssClass = 'resultCritical';
                    break;
                default:
                    break;
            }
        }
        return cssClass;
    };
    EGFRComponent.prototype.ddlChange = function (indexStr) {
        if (!indexStr) {
            this.dataservice.emptyChart();
            return;
        }
        else {
            var index = parseInt(indexStr);
            this.dataservice.filterDataSet(index);
        }
    };
    EGFRComponent.ɵfac = function EGFRComponent_Factory(t) { return new (t || EGFRComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"])); };
    EGFRComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EGFRComponent, selectors: [["app-e-gfr"]], viewQuery: function EGFRComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        } }, decls: 24, vars: 15, consts: [["width", "100%"], ["colspan", "2"], [3, "change"], ["value", "", "disabled", "", "selected", ""], [3, "selected", "value", 4, "ngFor", "ngForOf"], [1, "col-50"], [1, "chart-wrapper"], ["baseChart", "", "height", "200", 3, "datasets", "options", "colors", "legend", "chartType", "plugins"], ["mat-table", "", "matSort", "", "matSort", "", "width", "100%", 3, "dataSource"], ["matColumnDef", "date"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "egfr"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "innerHTML", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "ngClass", "click", "mouseover", "mouseout", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions", "ngStyle"], [3, "selected", "value"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-cell", ""], ["mat-cell", "", 3, "innerHTML"], ["mat-header-row", ""], ["mat-row", "", 3, "ngClass", "click", "mouseover", "mouseout"]], template: function EGFRComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Change in eGFR over Time");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "select", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EGFRComponent_Template_select_change_5_listener($event) { return ctx.ddlChange($event.target.value); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "option", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Please select a dataset");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, EGFRComponent_option_8_Template, 2, 3, "option", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "canvas", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "table", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](15, 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, EGFRComponent_th_16_Template, 2, 0, "th", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, EGFRComponent_td_17_Template, 3, 4, "td", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](18, 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, EGFRComponent_th_19_Template, 2, 0, "th", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, EGFRComponent_td_20_Template, 1, 1, "td", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, EGFRComponent_tr_21_Template, 1, 0, "tr", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, EGFRComponent_tr_22_Template, 1, 1, "tr", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "mat-paginator", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dataservice.aggregatedChartData);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx.dataservice.egfr.chartData)("options", ctx.dataservice.egfr.lineChartOptions)("colors", ctx.lineChartColors)("legend", ctx.lineChartLegend)("chartType", ctx.lineChartType)("plugins", ctx.lineChartPlugins);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.egfrDataSource);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c0))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c1, ctx.egfrDataSource.data.length > ctx.egfrRowMax ? "block" : "none"));
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], ng2_charts__WEBPACK_IMPORTED_MODULE_9__["BaseChartDirective"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_11__["DefaultStyleDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgStyle"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_10__["MatRow"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_11__["DefaultClassDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]], styles: ["chart-wrapper[_ngcontent-%COMP%] {\n  height: 150px;\n  width: 200px;\n}\n\nmat-table[_ngcontent-%COMP%] {\n  vertical-align: top;\n  overflow: auto;\n  max-height: 400px;\n}\n\ntr.mat-table[_ngcontent-%COMP%] {\n  vertical-align: top;\n  min-width: 350px;\n}\n\ntr.mat-header-row[_ngcontent-%COMP%] {\n  min-height: 24px;\n  height: 24px !important;\n}\n\ntr.mat-row[_ngcontent-%COMP%] {\n  min-height: 24px;\n  height: 24px !important;\n}\n\ntr.mat-row.resultGood[_ngcontent-%COMP%] {\n  background-color: rgba(128, 204, 113, 0.3);\n}\n\ntr.mat-row.resultBorderline[_ngcontent-%COMP%] {\n  background-color: rgba(247, 245, 116, 0.3);\n}\n\ntr.mat-row.resultCritical[_ngcontent-%COMP%] {\n  background-color: rgba(227, 127, 104, 0.3);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZS1nZnIvZS1nZnIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLDBDQUEwQztBQUM1Qzs7QUFFQTtFQUNFLDBDQUEwQztBQUM1QyIsImZpbGUiOiJzcmMvYXBwL2UtZ2ZyL2UtZ2ZyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJjaGFydC13cmFwcGVyIHtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG5tYXQtdGFibGUge1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBvdmVyZmxvdzogYXV0bztcbiAgbWF4LWhlaWdodDogNDAwcHg7XG59XG5cbnRyLm1hdC10YWJsZSB7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIG1pbi13aWR0aDogMzUwcHg7XG59XG5cbnRyLm1hdC1oZWFkZXItcm93IHtcbiAgbWluLWhlaWdodDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4ICFpbXBvcnRhbnQ7XG59XG5cbnRyLm1hdC1yb3cge1xuICBtaW4taGVpZ2h0OiAyNHB4O1xuICBoZWlnaHQ6IDI0cHggIWltcG9ydGFudDtcbn1cblxudHIubWF0LXJvdy5yZXN1bHRHb29kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDIwNCwgMTEzLCAwLjMpO1xufVxuXG50ci5tYXQtcm93LnJlc3VsdEJvcmRlcmxpbmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NywgMjQ1LCAxMTYsIDAuMyk7XG59XG5cbnRyLm1hdC1yb3cucmVzdWx0Q3JpdGljYWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyNywgMTI3LCAxMDQsIDAuMyk7XG59Il19 */"] });
    return EGFRComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EGFRComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-e-gfr',
                templateUrl: './e-gfr.component.html',
                styleUrls: ['./e-gfr.component.css']
            }]
    }], function () { return [{ type: _services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] }]; }, { paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]]
        }], sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_3__["MatSort"]]
        }] }); })();


/***/ }),

/***/ "JLBa":
/*!************************************************************************!*\
  !*** ./src/app/social-concern-panel/social-concern-panel.component.ts ***!
  \************************************************************************/
/*! exports provided: SocialConcernPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialConcernPanelComponent", function() { return SocialConcernPanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/data.service */ "EnSQ");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");














function SocialConcernPanelComponent_th_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "check");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SocialConcernPanelComponent_td_5_Template(rf, ctx) { if (rf & 1) {
    var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-checkbox", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function SocialConcernPanelComponent_td_5_Template_mat_checkbox_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); var diagnosis_r10 = ctx.$implicit; return diagnosis_r10.checked = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var diagnosis_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", diagnosis_r10.checked);
} }
function SocialConcernPanelComponent_th_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Concern");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SocialConcernPanelComponent_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var concern_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", concern_r13.name, " ");
} }
function SocialConcernPanelComponent_th_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SocialConcernPanelComponent_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var concern_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, concern_r14.data), " ");
} }
function SocialConcernPanelComponent_th_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Last update");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function SocialConcernPanelComponent_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var concern_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", concern_r15.date, " ");
} }
function SocialConcernPanelComponent_tr_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 19);
} }
var _c0 = function (a0, a1) { return { hovered: a0, highlighted: a1 }; };
function SocialConcernPanelComponent_tr_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SocialConcernPanelComponent_tr_16_Template_tr_click_0_listener() { var row_r16 = ctx.$implicit; return row_r16.highlighted = !row_r16.highlighted; })("mouseover", function SocialConcernPanelComponent_tr_16_Template_tr_mouseover_0_listener() { var row_r16 = ctx.$implicit; return row_r16.hovered = true; })("mouseout", function SocialConcernPanelComponent_tr_16_Template_tr_mouseout_0_listener() { var row_r16 = ctx.$implicit; return row_r16.hovered = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, row_r16.hovered, row_r16.highlighted));
} }
var SocialConcernPanelComponent = /** @class */ (function () {
    function SocialConcernPanelComponent(dataService) {
        this.dataService = dataService;
        this.displayedColumns = ['name', 'data', 'date'];
    }
    SocialConcernPanelComponent.prototype.ngOnInit = function () {
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.dataService.socialConcerns);
        this.dataSource.sortingDataAccessor = function (item, property) {
            switch (property) {
                case 'date': return moment__WEBPACK_IMPORTED_MODULE_3___default()(item[property]).unix();
                default: return item[property];
            }
        };
    };
    SocialConcernPanelComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.sort = this.sort;
    };
    SocialConcernPanelComponent.ɵfac = function SocialConcernPanelComponent_Factory(t) { return new (t || SocialConcernPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"])); };
    SocialConcernPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SocialConcernPanelComponent, selectors: [["app-social-concern-panel"]], viewQuery: function SocialConcernPanelComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"], true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        } }, decls: 18, vars: 4, consts: [[1, "group-header"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "checked"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "name"], ["mat-header-cell", "", "mat-sort-header", "name", 4, "matHeaderCellDef"], ["matColumnDef", "data"], ["mat-header-cell", "", "mat-sort-header", "data", 4, "matHeaderCellDef"], ["matColumnDef", "date"], ["mat-header-cell", "", "mat-sort-header", "date", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 3, "ngClass", "click", "mouseover", "mouseout", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], [3, "ngModel", "ngModelChange"], ["mat-header-cell", "", "mat-sort-header", "name"], ["mat-header-cell", "", "mat-sort-header", "data"], ["mat-header-cell", "", "mat-sort-header", "date"], ["mat-header-row", ""], ["mat-row", "", 3, "ngClass", "click", "mouseover", "mouseout"]], template: function SocialConcernPanelComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-panel-title", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Health Concerns");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](3, 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SocialConcernPanelComponent_th_4_Template, 3, 0, "th", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SocialConcernPanelComponent_td_5_Template, 2, 1, "td", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](6, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, SocialConcernPanelComponent_th_7_Template, 2, 0, "th", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SocialConcernPanelComponent_td_8_Template, 2, 1, "td", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](9, 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, SocialConcernPanelComponent_th_10_Template, 2, 0, "th", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SocialConcernPanelComponent_td_11_Template, 3, 3, "td", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](12, 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, SocialConcernPanelComponent_th_13_Template, 2, 0, "th", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, SocialConcernPanelComponent_td_14_Template, 2, 1, "td", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, SocialConcernPanelComponent_tr_15_Template, 1, 0, "tr", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, SocialConcernPanelComponent_tr_16_Template, 1, 4, "tr", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " -->\n");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        } }, directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionPanelTitle"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckbox"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__["DefaultClassDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgClass"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["TitleCasePipe"]], styles: ["tr.mat-header-row[_ngcontent-%COMP%] {\n  min-height: 48px;\n  height: 48px !important;\n}\n\ntr.mat-row[_ngcontent-%COMP%] {\n  min-height: 24px;\n  height: 24px !important;\n}\n\n.mat-grid-tile[_ngcontent-%COMP%]   .mat-figure[_ngcontent-%COMP%] {\n  align-items: flex-start;\n  justify-content: normal;\n  vertical-align: top;\n  horiz-align: left;\n  flex: 0 0 auto !important;\n}\n\n.mat-column-concern[_ngcontent-%COMP%] {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 55% !important;\n  width: 55% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n\n  word-break: break-word;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n\n.mat-column-data[_ngcontent-%COMP%] {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 30% !important;\n  width: 30% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n\n  word-break: break-word;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n\n.mat-column-date[_ngcontent-%COMP%] {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 15% !important;\n  width: 15% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n\n  word-break: break-word;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n\nth.mat-header-cell[_ngcontent-%COMP%], td.mat-cell[_ngcontent-%COMP%] {\n  text-align: left;\n  border: 1px solid #CCC;\n\n}\n\n.app-social-concern-panel[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  vertical-align: top;\n  horiz-align: left;\n}\n\n.mat-expansion-panel-header-title[_ngcontent-%COMP%] {\n  margin-right: 0;\n}\n\ntable.mat-table[_ngcontent-%COMP%] {\n  width:  100%;\n}\n\ntable.mat-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table.mat-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-left: none !important;\n  border-right: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc29jaWFsLWNvbmNlcm4tcGFuZWwvc29jaWFsLWNvbmNlcm4tcGFuZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyw2QkFBNkI7RUFDN0Isd0JBQXdCO0VBQ3hCLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIscUJBQXFCOztFQUVyQixzQkFBc0I7RUFJdEIscUJBQXFCO0VBQ3JCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyw2QkFBNkI7RUFDN0Isd0JBQXdCO0VBQ3hCLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIscUJBQXFCOztFQUVyQixzQkFBc0I7RUFJdEIscUJBQXFCO0VBQ3JCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGdDQUFnQztFQUNoQyw2QkFBNkI7RUFDN0Isd0JBQXdCO0VBQ3hCLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIscUJBQXFCOztFQUVyQixzQkFBc0I7RUFJdEIscUJBQXFCO0VBQ3JCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixzQkFBc0I7O0FBRXhCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1Qiw2QkFBNkI7QUFDL0IiLCJmaWxlIjoic3JjL2FwcC9zb2NpYWwtY29uY2Vybi1wYW5lbC9zb2NpYWwtY29uY2Vybi1wYW5lbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidHIubWF0LWhlYWRlci1yb3cge1xuICBtaW4taGVpZ2h0OiA0OHB4O1xuICBoZWlnaHQ6IDQ4cHggIWltcG9ydGFudDtcbn1cblxudHIubWF0LXJvdyB7XG4gIG1pbi1oZWlnaHQ6IDI0cHg7XG4gIGhlaWdodDogMjRweCAhaW1wb3J0YW50O1xufVxuXG4ubWF0LWdyaWQtdGlsZSAubWF0LWZpZ3VyZSB7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IG5vcm1hbDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgaG9yaXotYWxpZ246IGxlZnQ7XG4gIGZsZXg6IDAgMCBhdXRvICFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtY29sdW1uLWNvbmNlcm4ge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcbiAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIGZsZXg6IDAgMCA1NSUgIWltcG9ydGFudDtcbiAgd2lkdGg6IDU1JSAhaW1wb3J0YW50O1xuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG5cbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcblxuICAtbXMtaHlwaGVuczogYXV0bztcbiAgLW1vei1oeXBoZW5zOiBhdXRvO1xuICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XG4gIGh5cGhlbnM6IGF1dG87XG59XG5cbi5tYXQtY29sdW1uLWRhdGEge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcbiAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIGZsZXg6IDAgMCAzMCUgIWltcG9ydGFudDtcbiAgd2lkdGg6IDMwJSAhaW1wb3J0YW50O1xuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG5cbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcblxuICAtbXMtaHlwaGVuczogYXV0bztcbiAgLW1vei1oeXBoZW5zOiBhdXRvO1xuICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XG4gIGh5cGhlbnM6IGF1dG87XG59XG5cbi5tYXQtY29sdW1uLWRhdGUge1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcbiAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIGZsZXg6IDAgMCAxNSUgIWltcG9ydGFudDtcbiAgd2lkdGg6IDE1JSAhaW1wb3J0YW50O1xuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG5cbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcblxuICAtbXMtaHlwaGVuczogYXV0bztcbiAgLW1vei1oeXBoZW5zOiBhdXRvO1xuICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XG4gIGh5cGhlbnM6IGF1dG87XG59XG5cbnRoLm1hdC1oZWFkZXItY2VsbCwgdGQubWF0LWNlbGwge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBib3JkZXI6IDFweCBzb2xpZCAjQ0NDO1xuXG59XG5cbi5hcHAtc29jaWFsLWNvbmNlcm4tcGFuZWwge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBob3Jpei1hbGlnbjogbGVmdDtcbn1cblxuLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxlIHtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuXG50YWJsZS5tYXQtdGFibGUge1xuICB3aWR0aDogIDEwMCU7XG59XG5cbnRhYmxlLm1hdC10YWJsZSB0aCwgdGFibGUubWF0LXRhYmxlIHRkIHtcbiAgYm9yZGVyLWxlZnQ6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJpZ2h0OiBub25lICFpbXBvcnRhbnQ7XG59Il19 */"] });
    return SocialConcernPanelComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocialConcernPanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-social-concern-panel',
                templateUrl: './social-concern-panel.component.html',
                styleUrls: ['./social-concern-panel.component.css']
            }]
    }], function () { return [{ type: _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] }]; }, { sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"]]
        }] }); })();


/***/ }),

/***/ "JVal":
/*!********************************************************************************!*\
  !*** ./src/app/inactive-diagnosis-panel/inactive-diagnosis-panel.component.ts ***!
  \********************************************************************************/
/*! exports provided: InactiveDiagnosisPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InactiveDiagnosisPanelComponent", function() { return InactiveDiagnosisPanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _diagnosis_dialog_diagnosis_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../diagnosis-dialog/diagnosis-dialog.component */ "kvNL");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/data.service */ "EnSQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _pipes_null_check_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../pipes/null-check.pipe */ "0vtW");



















function InactiveDiagnosisPanelComponent_th_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Condition");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InactiveDiagnosisPanelComponent_td_5_Template(rf, ctx) { if (rf & 1) {
    var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InactiveDiagnosisPanelComponent_td_5_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); var condition_r13 = ctx.$implicit; var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.openDialog(condition_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var condition_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", condition_r13.code.text, " ");
} }
function InactiveDiagnosisPanelComponent_th_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 16);
} }
function InactiveDiagnosisPanelComponent_td_8_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InactiveDiagnosisPanelComponent_td_8_mat_icon_1_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); var condition_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.switchToHM(condition_r16.code); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " local_pharmacy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InactiveDiagnosisPanelComponent_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InactiveDiagnosisPanelComponent_td_8_mat_icon_1_Template, 2, 0, "mat-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var condition_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", condition_r16.profileId != null);
} }
function InactiveDiagnosisPanelComponent_th_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 16);
} }
function InactiveDiagnosisPanelComponent_td_11_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InactiveDiagnosisPanelComponent_td_11_mat_icon_1_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); var condition_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.switchToHS(condition_r21.code); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " timeline");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InactiveDiagnosisPanelComponent_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InactiveDiagnosisPanelComponent_td_11_mat_icon_1_Template, 2, 0, "mat-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var condition_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", condition_r21.profileId != null);
} }
function InactiveDiagnosisPanelComponent_th_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Date of Initial Diagnosis");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InactiveDiagnosisPanelComponent_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "nullCheck");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var condition_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, condition_r26.firstOnset), " ");
} }
function InactiveDiagnosisPanelComponent_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Diagnosis First Recorded");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function InactiveDiagnosisPanelComponent_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "nullCheck");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var condition_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, condition_r27.firstRecordedAsText), " ");
} }
function InactiveDiagnosisPanelComponent_tr_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 22);
} }
function InactiveDiagnosisPanelComponent_tr_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 23);
} }
var _c0 = function () { return [5, 10, 20]; };
function InactiveDiagnosisPanelComponent_mat_paginator_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-paginator", 24);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0))("pageSize", 20);
} }
var InactiveDiagnosisPanelComponent = /** @class */ (function () {
    function InactiveDiagnosisPanelComponent(dataservice, dialog, rt, rtr) {
        this.dataservice = dataservice;
        this.dialog = dialog;
        this.rt = rt;
        this.rtr = rtr;
        this.displayedColumns = ['code', 'rxfilter', 'trend', 'firstOnset', 'firstRecorded'];
        this.route = rt;
        this.router = rtr;
    }
    InactiveDiagnosisPanelComponent.prototype.ngOnInit = function () {
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.dataservice.conditions.inactiveConditions);
        this.dataSource.sortingDataAccessor = function (item, property) {
            switch (property) {
                case "firstRecorded": return moment__WEBPACK_IMPORTED_MODULE_4___default()(item[property]).isValid() ? moment__WEBPACK_IMPORTED_MODULE_4___default()(item[property]).unix() : item[property];
                case 'firstOnset': return moment__WEBPACK_IMPORTED_MODULE_4___default()(item[property]).isValid() ? moment__WEBPACK_IMPORTED_MODULE_4___default()(item[property]).unix() : item[property];
                case 'code': return item[property].text.toUpperCase();
                default: return item[property];
            }
        };
    };
    InactiveDiagnosisPanelComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
    };
    InactiveDiagnosisPanelComponent.prototype.openDialog = function (row) {
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.hasBackdrop = true;
        dialogConfig.width = '700px';
        dialogConfig.data = {
            name: this.dataservice.demographic.name,
            condition: row.code.text,
            history: row.history
        };
        this.dialog.open(_diagnosis_dialog_diagnosis_dialog_component__WEBPACK_IMPORTED_MODULE_2__["DiagnosisDialogComponent"], dialogConfig);
    };
    InactiveDiagnosisPanelComponent.prototype.switchToHM = function (code) {
        // console.log('Switch to Health Maintenance icon clicked. code=', code);
        this.router.navigate(['/maint'], { queryParamsHandling: 'merge' });
    };
    InactiveDiagnosisPanelComponent.prototype.switchToHS = function (code) {
        // console.log('Switch to Health Status icon clicked. code=', code);
        this.router.navigate(['/status'], { queryParamsHandling: 'merge' });
    };
    InactiveDiagnosisPanelComponent.ɵfac = function InactiveDiagnosisPanelComponent_Factory(t) { return new (t || InactiveDiagnosisPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"])); };
    InactiveDiagnosisPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InactiveDiagnosisPanelComponent, selectors: [["app-inactive-diagnosis-panel"]], viewQuery: function InactiveDiagnosisPanelComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"], true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"], true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
        } }, decls: 21, vars: 4, consts: [[1, "group-header"], ["mat-table", "", "matSort", "", 3, "dataSource"], ["matColumnDef", "code"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", "style", "cursor: pointer;", 3, "click", 4, "matCellDef"], ["matColumnDef", "rxfilter"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "trend"], ["matColumnDef", "firstOnset"], ["matColumnDef", "firstRecorded"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions", "pageSize", 4, "ngIf"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", "", 2, "cursor", "pointer", 3, "click"], ["mat-header-cell", ""], ["mat-cell", ""], ["matTooltip", "Switch to Health Maintance using this codition as a focus", "aria-label", "Selection to change to the Health Maintance and Intervention tab using this condition as a focus", 3, "click", 4, "ngIf"], ["matTooltip", "Switch to Health Maintance using this codition as a focus", "aria-label", "Selection to change to the Health Maintance and Intervention tab using this condition as a focus", 3, "click"], ["matTooltip", "Switch to Heath Status using this condition as a focus", "aria-label", "Selection to change to the the Health Status Evaluation and Outcomes using this condition as a focus", 3, "click", 4, "ngIf"], ["matTooltip", "Switch to Heath Status using this condition as a focus", "aria-label", "Selection to change to the the Health Status Evaluation and Outcomes using this condition as a focus", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], ["showFirstLastButtons", "", 3, "pageSizeOptions", "pageSize"]], template: function InactiveDiagnosisPanelComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-panel-title", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Inactive Diagnoses");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](3, 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, InactiveDiagnosisPanelComponent_th_4_Template, 2, 0, "th", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, InactiveDiagnosisPanelComponent_td_5_Template, 2, 1, "td", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](6, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, InactiveDiagnosisPanelComponent_th_7_Template, 1, 0, "th", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, InactiveDiagnosisPanelComponent_td_8_Template, 2, 1, "td", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](9, 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, InactiveDiagnosisPanelComponent_th_10_Template, 1, 0, "th", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, InactiveDiagnosisPanelComponent_td_11_Template, 2, 1, "td", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](12, 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, InactiveDiagnosisPanelComponent_th_13_Template, 2, 0, "th", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, InactiveDiagnosisPanelComponent_td_14_Template, 3, 3, "td", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](15, 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, InactiveDiagnosisPanelComponent_th_16_Template, 2, 0, "th", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, InactiveDiagnosisPanelComponent_td_17_Template, 3, 3, "td", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, InactiveDiagnosisPanelComponent_tr_18_Template, 1, 0, "tr", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, InactiveDiagnosisPanelComponent_tr_19_Template, 1, 0, "tr", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, InactiveDiagnosisPanelComponent_mat_paginator_20_Template, 1, 3, "mat-paginator", 13);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dataSource && ctx.dataSource.length > 10);
        } }, directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionPanelTitle"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MatTooltip"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"]], pipes: [_pipes_null_check_pipe__WEBPACK_IMPORTED_MODULE_13__["NullCheckPipe"]], styles: ["tr.mat-header-row[_ngcontent-%COMP%] {\n  min-height: 48px;\n  height: 48px !important;\n}\n\ntr.mat-row[_ngcontent-%COMP%] {\n  min-height: 24px;\n  height: 24px !important;\n}\n\n.mat-column-checked[_ngcontent-%COMP%] {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 10% !important;\n  width: 10% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n\n  word-break: break-word;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n\n.mat-column-condition[_ngcontent-%COMP%]{\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 60% !important;\n  width: 60% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n\n  word-break: break-word;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n\n.mat-column-rxfilter[_ngcontent-%COMP%]{\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 5% !important;\n  width: 5% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n\n  word-break: break-word;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n\n.mat-column-trend[_ngcontent-%COMP%]{\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 5% !important;\n  width: 5% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n\n  word-break: break-word;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n\n.mat-column-date[_ngcontent-%COMP%]{\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 20% !important;\n  width: 20% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n\n  word-break: break-word;\n  -webkit-hyphens: auto;\n  hyphens: auto;\n}\n\nth.mat-header-cell[_ngcontent-%COMP%], td.mat-cell[_ngcontent-%COMP%] {\n  text-align: left;\n  border: 1px solid #CCC;\n\n}\n\n.mat-expansion-panel-header-title[_ngcontent-%COMP%] {\n  margin-right: 0;\n}\n\ntable.mat-table[_ngcontent-%COMP%] {\n  width:  100%;\n}\n\ntable.mat-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], table.mat-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-left: none !important;\n  border-right: none !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5hY3RpdmUtZGlhZ25vc2lzLXBhbmVsL2luYWN0aXZlLWRpYWdub3Npcy1wYW5lbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsNkJBQTZCO0VBQzdCLHdCQUF3QjtFQUN4QixxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLHFCQUFxQjs7RUFFckIsc0JBQXNCO0VBSXRCLHFCQUFxQjtFQUNyQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsNkJBQTZCO0VBQzdCLHdCQUF3QjtFQUN4QixxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLHFCQUFxQjs7RUFFckIsc0JBQXNCO0VBSXRCLHFCQUFxQjtFQUNyQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsNkJBQTZCO0VBQzdCLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIseUJBQXlCO0VBQ3pCLHFCQUFxQjs7RUFFckIsc0JBQXNCO0VBSXRCLHFCQUFxQjtFQUNyQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsNkJBQTZCO0VBQzdCLHVCQUF1QjtFQUN2QixvQkFBb0I7RUFDcEIseUJBQXlCO0VBQ3pCLHFCQUFxQjs7RUFFckIsc0JBQXNCO0VBSXRCLHFCQUFxQjtFQUNyQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsNkJBQTZCO0VBQzdCLHdCQUF3QjtFQUN4QixxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLHFCQUFxQjs7RUFFckIsc0JBQXNCO0VBSXRCLHFCQUFxQjtFQUNyQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsc0JBQXNCOztBQUV4Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBR0E7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsNkJBQTZCO0FBQy9CIiwiZmlsZSI6InNyYy9hcHAvaW5hY3RpdmUtZGlhZ25vc2lzLXBhbmVsL2luYWN0aXZlLWRpYWdub3Npcy1wYW5lbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidHIubWF0LWhlYWRlci1yb3cge1xuICBtaW4taGVpZ2h0OiA0OHB4O1xuICBoZWlnaHQ6IDQ4cHggIWltcG9ydGFudDtcbn1cblxudHIubWF0LXJvdyB7XG4gIG1pbi1oZWlnaHQ6IDI0cHg7XG4gIGhlaWdodDogMjRweCAhaW1wb3J0YW50O1xufVxuXG4ubWF0LWNvbHVtbi1jaGVja2VkIHtcbiAgd29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XG4gIHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xuICBmbGV4OiAwIDAgMTAlICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMCUgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG5cbiAgLW1zLWh5cGhlbnM6IGF1dG87XG4gIC1tb3otaHlwaGVuczogYXV0bztcbiAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xuICBoeXBoZW5zOiBhdXRvO1xufVxuXG4ubWF0LWNvbHVtbi1jb25kaXRpb257XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xuICB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcbiAgZmxleDogMCAwIDYwJSAhaW1wb3J0YW50O1xuICB3aWR0aDogNjAlICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcblxuICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuXG4gIC1tcy1oeXBoZW5zOiBhdXRvO1xuICAtbW96LWh5cGhlbnM6IGF1dG87XG4gIC13ZWJraXQtaHlwaGVuczogYXV0bztcbiAgaHlwaGVuczogYXV0bztcbn1cblxuLm1hdC1jb2x1bW4tcnhmaWx0ZXJ7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xuICB3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcbiAgZmxleDogMCAwIDUlICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA1JSAhaW1wb3J0YW50O1xuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG5cbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcblxuICAtbXMtaHlwaGVuczogYXV0bztcbiAgLW1vei1oeXBoZW5zOiBhdXRvO1xuICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XG4gIGh5cGhlbnM6IGF1dG87XG59XG5cbi5tYXQtY29sdW1uLXRyZW5ke1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcbiAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIGZsZXg6IDAgMCA1JSAhaW1wb3J0YW50O1xuICB3aWR0aDogNSUgIWltcG9ydGFudDtcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xuXG4gIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG5cbiAgLW1zLWh5cGhlbnM6IGF1dG87XG4gIC1tb3otaHlwaGVuczogYXV0bztcbiAgLXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xuICBoeXBoZW5zOiBhdXRvO1xufVxuXG4ubWF0LWNvbHVtbi1kYXRle1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcbiAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XG4gIGZsZXg6IDAgMCAyMCUgIWltcG9ydGFudDtcbiAgd2lkdGg6IDIwJSAhaW1wb3J0YW50O1xuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XG5cbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcblxuICAtbXMtaHlwaGVuczogYXV0bztcbiAgLW1vei1oeXBoZW5zOiBhdXRvO1xuICAtd2Via2l0LWh5cGhlbnM6IGF1dG87XG4gIGh5cGhlbnM6IGF1dG87XG59XG5cbnRoLm1hdC1oZWFkZXItY2VsbCwgdGQubWF0LWNlbGwge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBib3JkZXI6IDFweCBzb2xpZCAjQ0NDO1xuXG59XG5cbi5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10aXRsZSB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn1cblxuXG50YWJsZS5tYXQtdGFibGUge1xuICB3aWR0aDogIDEwMCU7XG59XG5cbnRhYmxlLm1hdC10YWJsZSB0aCwgdGFibGUubWF0LXRhYmxlIHRkIHtcbiAgYm9yZGVyLWxlZnQ6IG5vbmUgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJpZ2h0OiBub25lICFpbXBvcnRhbnQ7XG59Il19 */"] });
    return InactiveDiagnosisPanelComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InactiveDiagnosisPanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-inactive-diagnosis-panel',
                templateUrl: './inactive-diagnosis-panel.component.html',
                styleUrls: ['./inactive-diagnosis-panel.component.css']
            }]
    }], function () { return [{ type: _services_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }]; }, { sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"]]
        }], paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"]]
        }] }); })();


/***/ }),

/***/ "Jn28":
/*!****************************************************************!*\
  !*** ./src/app/counseling-panel/counseling-panel.component.ts ***!
  \****************************************************************/
/*! exports provided: CounselingPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounselingPanelComponent", function() { return CounselingPanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/data.service */ "EnSQ");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");










function CounselingPanelComponent_th_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Topic");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CounselingPanelComponent_td_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r14.topic.text, " ");
} }
function CounselingPanelComponent_th_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CounselingPanelComponent_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r15.displayDate, " ");
} }
function CounselingPanelComponent_th_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Performer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CounselingPanelComponent_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r16.performer, " ");
} }
function CounselingPanelComponent_th_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Reason");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CounselingPanelComponent_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r17.reasons, " ");
} }
function CounselingPanelComponent_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Outcome");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CounselingPanelComponent_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r18.outcome.text, "");
} }
function CounselingPanelComponent_th_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CounselingPanelComponent_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, item_r19.status), "");
} }
function CounselingPanelComponent_tr_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 16);
} }
var _c0 = function (a0) { return { "outofrange": a0 }; };
function CounselingPanelComponent_tr_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CounselingPanelComponent_tr_22_Template_tr_click_0_listener() { var row_r20 = ctx.$implicit; return row_r20.highlighted = !row_r20.highlighted; })("mouseover", function CounselingPanelComponent_tr_22_Template_tr_mouseover_0_listener() { var row_r20 = ctx.$implicit; return row_r20.hovered = true; })("mouseout", function CounselingPanelComponent_tr_22_Template_tr_mouseout_0_listener() { var row_r20 = ctx.$implicit; return row_r20.hovered = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, row_r20.status == "high"));
} }
var CounselingPanelComponent = /** @class */ (function () {
    function CounselingPanelComponent(dataService) {
        this.dataService = dataService;
        this.displayedColumns = ['topic', 'displayDate', 'performer', 'reasons', 'outcome', 'status'];
    }
    CounselingPanelComponent.prototype.ngOnInit = function () {
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.dataService.counseling);
        this.dataSource.sortingDataAccessor = function (item, property) {
            switch (property) {
                case 'topic': return item[property].text;
                case 'displayDate': return moment__WEBPACK_IMPORTED_MODULE_3___default()(item[property]).unix();
                case 'outcome': return item[property].text;
                default: return item[property];
            }
        };
    };
    CounselingPanelComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.sort = this.sort;
    };
    CounselingPanelComponent.ɵfac = function CounselingPanelComponent_Factory(t) { return new (t || CounselingPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"])); };
    CounselingPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CounselingPanelComponent, selectors: [["app-counseling-panel"]], viewQuery: function CounselingPanelComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"], true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        } }, decls: 23, vars: 3, consts: [[1, "group-header"], ["mat-table", "", "matSort", "", "width", "100%", 3, "dataSource"], ["matColumnDef", "topic"], ["mat-header-cell", "", "width", "35%", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "displayDate", "width", "10%"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["matColumnDef", "performer", "width", "15%"], ["matColumnDef", "reasons", "width", "20%"], ["matColumnDef", "outcome", "width", "10%"], ["matColumnDef", "status", "width", "10%"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "ngClass", "click", "mouseover", "mouseout", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", "width", "35%", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-header-row", ""], ["mat-row", "", 3, "ngClass", "click", "mouseover", "mouseout"]], template: function CounselingPanelComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Counseling");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](3, 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CounselingPanelComponent_th_4_Template, 2, 0, "th", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CounselingPanelComponent_td_5_Template, 2, 1, "td", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](6, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CounselingPanelComponent_th_7_Template, 2, 0, "th", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CounselingPanelComponent_td_8_Template, 2, 1, "td", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](9, 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CounselingPanelComponent_th_10_Template, 2, 0, "th", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CounselingPanelComponent_td_11_Template, 2, 1, "td", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](12, 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CounselingPanelComponent_th_13_Template, 2, 0, "th", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CounselingPanelComponent_td_14_Template, 2, 1, "td", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](15, 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, CounselingPanelComponent_th_16_Template, 2, 0, "th", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CounselingPanelComponent_td_17_Template, 2, 1, "td", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](18, 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, CounselingPanelComponent_th_19_Template, 2, 0, "th", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, CounselingPanelComponent_td_20_Template, 3, 3, "td", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, CounselingPanelComponent_tr_21_Template, 1, 0, "tr", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, CounselingPanelComponent_tr_22_Template, 1, 3, "tr", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__["DefaultClassDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["TitleCasePipe"]], styles: ["mat-grid-tile[_ngcontent-%COMP%]   .mat-figure[_ngcontent-%COMP%] {\n  justify-content: center;\n  vertical-align: top;\n  background: blue;\n}\n\n.group-header[_ngcontent-%COMP%] {\n  justify-content: center;\n  vertical-align: top;\n  background: blue;\n  color: white;\n}\n\nmat-table[_ngcontent-%COMP%] {\n  vertical-align: top;\n}\n\ntr.mat-table[_ngcontent-%COMP%] {\n  vertical-align: top;\n  min-width: 700px;\n}\n\ntr.mat-header-row[_ngcontent-%COMP%] {\n  min-height: 24px;\n  height: 24px !important;\n}\n\ntr.mat-row[_ngcontent-%COMP%] {\n  min-height: 24px;\n  height: 24px !important;\n}\n\nth.mat-header-cell[_ngcontent-%COMP%], td.mat-cell[_ngcontent-%COMP%] {\n  text-align: left;\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY291bnNlbGluZy1wYW5lbC9jb3Vuc2VsaW5nLXBhbmVsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtBQUN6Qjs7QUFHQTtFQUNFLGdCQUFnQjs7QUFFbEIiLCJmaWxlIjoic3JjL2FwcC9jb3Vuc2VsaW5nLXBhbmVsL2NvdW5zZWxpbmctcGFuZWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1ncmlkLXRpbGUgLm1hdC1maWd1cmUge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgYmFja2dyb3VuZDogYmx1ZTtcbn1cblxuLmdyb3VwLWhlYWRlciB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBiYWNrZ3JvdW5kOiBibHVlO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbm1hdC10YWJsZSB7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbnRyLm1hdC10YWJsZSB7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIG1pbi13aWR0aDogNzAwcHg7XG59XG5cbnRyLm1hdC1oZWFkZXItcm93IHtcbiAgbWluLWhlaWdodDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4ICFpbXBvcnRhbnQ7XG59XG5cbnRyLm1hdC1yb3cge1xuICBtaW4taGVpZ2h0OiAyNHB4O1xuICBoZWlnaHQ6IDI0cHggIWltcG9ydGFudDtcbn1cblxuXG50aC5tYXQtaGVhZGVyLWNlbGwsIHRkLm1hdC1jZWxsIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcblxufVxuIl19 */"] });
    return CounselingPanelComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CounselingPanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-counseling-panel',
                templateUrl: './counseling-panel.component.html',
                styleUrls: ['./counseling-panel.component.css']
            }]
    }], function () { return [{ type: _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] }]; }, { sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"]]
        }] }); })();


/***/ }),

/***/ "KTRH":
/*!************************************************!*\
  !*** ./src/app/services/medication.service.ts ***!
  \************************************************/
/*! exports provided: MedicationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicationService", function() { return MedicationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var e_care_common_data_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! e-care-common-data-services */ "6AkT");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./message.service */ "tZre");








var MedicationService = /** @class */ (function () {
    function MedicationService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
    }
    /** GET medicationsummary by subject id and careplan Id.  Will 404 if id not found */
    MedicationService.prototype.getMedicationSummaryBySubjectAndCareplan = function (subjectId, careplanId) {
        var _this = this;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(Object(e_care_common_data_services__WEBPACK_IMPORTED_MODULE_4__["getSummaryMedicationRequests"])(careplanId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { _this.log("fetched Medication Lists id=" + subjectId + ", careplan=" + careplanId); console.log("Fetched Medications", _); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getContacts id=" + subjectId + ", careplan=" + careplanId)));
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    MedicationService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    /** Log a message with the MessageService */
    MedicationService.prototype.log = function (message) {
        this.messageService.add("contact-service: " + message);
    };
    MedicationService.ɵfac = function MedicationService_Factory(t) { return new (t || MedicationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"])); };
    MedicationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MedicationService, factory: MedicationService.ɵfac, providedIn: 'root' });
    return MedicationService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MedicationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"] }]; }, null); })();


/***/ }),

/***/ "MfLE":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/e-care-common-data-services/build/module/resources lazy ^\.\/.*\.json$ namespace object ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./2.16.840.1.113762.1.4.1032.52.json": [
		"D9WS",
		0
	],
	"./2.16.840.1.113762.1.4.1032.9.json": [
		"g31M",
		1
	],
	"./2.16.840.1.113762.1.4.1222.102.json": [
		"qTzT",
		2
	],
	"./2.16.840.1.113762.1.4.1222.103.json": [
		"Wgcf",
		3
	],
	"./2.16.840.1.113762.1.4.1222.111.json": [
		"qdj2",
		4
	],
	"./2.16.840.1.113762.1.4.1222.113.json": [
		"zaVD",
		5
	],
	"./2.16.840.1.113762.1.4.1222.114.json": [
		"DeZ0",
		6
	],
	"./2.16.840.1.113762.1.4.1222.118.json": [
		"X4vU",
		7
	],
	"./2.16.840.1.113762.1.4.1222.119.json": [
		"3jYB",
		8
	],
	"./2.16.840.1.113762.1.4.1222.120.json": [
		"fNrw",
		9
	],
	"./2.16.840.1.113762.1.4.1222.122.json": [
		"4//N",
		10
	],
	"./2.16.840.1.113762.1.4.1222.123.json": [
		"fvKe",
		11
	],
	"./2.16.840.1.113762.1.4.1222.126.json": [
		"cyxy",
		12
	],
	"./2.16.840.1.113762.1.4.1222.128.json": [
		"Cpck",
		13
	],
	"./2.16.840.1.113762.1.4.1222.129.json": [
		"6Bii",
		14
	],
	"./2.16.840.1.113762.1.4.1222.130.json": [
		"fGU/",
		15
	],
	"./2.16.840.1.113762.1.4.1222.131.json": [
		"EMmc",
		16
	],
	"./2.16.840.1.113762.1.4.1222.132.json": [
		"qKmU",
		17
	],
	"./2.16.840.1.113762.1.4.1222.135.json": [
		"KHF+",
		18
	],
	"./2.16.840.1.113762.1.4.1222.137.json": [
		"JaPl",
		19
	],
	"./2.16.840.1.113762.1.4.1222.138.json": [
		"sXCV",
		20
	],
	"./2.16.840.1.113762.1.4.1222.139.json": [
		"OGWR",
		21
	],
	"./2.16.840.1.113762.1.4.1222.14.json": [
		"if5F",
		22
	],
	"./2.16.840.1.113762.1.4.1222.140.json": [
		"Dhz4",
		23
	],
	"./2.16.840.1.113762.1.4.1222.141.json": [
		"YLf5",
		24
	],
	"./2.16.840.1.113762.1.4.1222.142.json": [
		"Ee0b",
		25
	],
	"./2.16.840.1.113762.1.4.1222.143.json": [
		"2/rW",
		26
	],
	"./2.16.840.1.113762.1.4.1222.144.json": [
		"4xjY",
		27
	],
	"./2.16.840.1.113762.1.4.1222.145.json": [
		"31w/",
		28
	],
	"./2.16.840.1.113762.1.4.1222.147.json": [
		"Tk1G",
		29
	],
	"./2.16.840.1.113762.1.4.1222.148.json": [
		"FJa4",
		30
	],
	"./2.16.840.1.113762.1.4.1222.149.json": [
		"fTh4",
		31
	],
	"./2.16.840.1.113762.1.4.1222.15.json": [
		"Eew0",
		32
	],
	"./2.16.840.1.113762.1.4.1222.150.json": [
		"vpgI",
		33
	],
	"./2.16.840.1.113762.1.4.1222.151.json": [
		"DOPn",
		34
	],
	"./2.16.840.1.113762.1.4.1222.153.json": [
		"tPAa",
		35
	],
	"./2.16.840.1.113762.1.4.1222.154.json": [
		"9MhF",
		36
	],
	"./2.16.840.1.113762.1.4.1222.159.json": [
		"3ETx",
		37
	],
	"./2.16.840.1.113762.1.4.1222.161.json": [
		"53oA",
		38
	],
	"./2.16.840.1.113762.1.4.1222.166.json": [
		"SkwX",
		39
	],
	"./2.16.840.1.113762.1.4.1222.176.json": [
		"YI6M",
		40
	],
	"./2.16.840.1.113762.1.4.1222.179.json": [
		"TQMV",
		41
	],
	"./2.16.840.1.113762.1.4.1222.24.json": [
		"WdY5",
		42
	],
	"./2.16.840.1.113762.1.4.1222.27.json": [
		"l9d1",
		43
	],
	"./2.16.840.1.113762.1.4.1222.30.json": [
		"ZejX",
		44
	],
	"./2.16.840.1.113762.1.4.1222.33.json": [
		"VhJA",
		45
	],
	"./2.16.840.1.113762.1.4.1222.36.json": [
		"HX63",
		46
	],
	"./2.16.840.1.113762.1.4.1222.40.json": [
		"/Jhn",
		47
	],
	"./2.16.840.1.113762.1.4.1222.43.json": [
		"mJK9",
		48
	],
	"./2.16.840.1.113762.1.4.1222.47.json": [
		"YvgL",
		49
	],
	"./2.16.840.1.113762.1.4.1222.50.json": [
		"Qsl8",
		50
	],
	"./2.16.840.1.113762.1.4.1222.53.json": [
		"t4kf",
		51
	],
	"./2.16.840.1.113762.1.4.1222.6.json": [
		"hfTd",
		52
	],
	"./2.16.840.1.113762.1.4.1222.60.json": [
		"r59/",
		53
	],
	"./2.16.840.1.113762.1.4.1222.61.json": [
		"+25I",
		54
	],
	"./2.16.840.1.113762.1.4.1222.66.json": [
		"NjC9",
		55
	],
	"./2.16.840.1.113762.1.4.1222.67.json": [
		"DmGx",
		56
	],
	"./2.16.840.1.113762.1.4.1222.70.json": [
		"gHAQ",
		57
	],
	"./2.16.840.1.113762.1.4.1222.73.json": [
		"whzz",
		58
	],
	"./2.16.840.1.113762.1.4.1222.76.json": [
		"RPGl",
		59
	],
	"./2.16.840.1.113762.1.4.1222.81.json": [
		"0kvr",
		60
	],
	"./2.16.840.1.113762.1.4.1222.84.json": [
		"EwOx",
		61
	],
	"./2.16.840.1.113762.1.4.1222.85.json": [
		"IDq+",
		62
	],
	"./2.16.840.1.113762.1.4.1222.90.json": [
		"cKHq",
		63
	],
	"./2.16.840.1.113762.1.4.1222.93.json": [
		"KezH",
		64
	],
	"./2.16.840.1.113762.1.4.1222.96.json": [
		"3ql1",
		65
	],
	"./2.16.840.1.113762.1.4.1222.97.json": [
		"wN4K",
		66
	],
	"./2.16.840.1.113883.3.117.1.7.1.215.json": [
		"ewrL",
		67
	],
	"./2.16.840.1.113883.3.464.1003.103.12.1020.json": [
		"7vwN",
		68
	],
	"./2.16.840.1.113883.3.464.1003.103.12.1021.json": [
		"rfg7",
		69
	],
	"./2.16.840.1.113883.3.464.1003.104.12.1017.json": [
		"v1/N",
		70
	],
	"./2.16.840.1.113883.3.464.1003.105.12.1104.json": [
		"0bK4",
		71
	],
	"./2.16.840.1.113883.3.464.1003.106.12.1004.json": [
		"eeyq",
		72
	],
	"./2.16.840.1.113883.3.464.1003.109.12.1011.json": [
		"NI0Q",
		73
	],
	"./2.16.840.1.113883.3.464.1003.117.12.1016.json": [
		"Dar9",
		74
	],
	"./2.16.840.1.113883.3.464.1003.120.12.1003.json": [
		"wbsG",
		75
	],
	"./2.16.840.1.113883.3.526.3.327.json": [
		"Vl9n",
		76
	],
	"./2.16.840.1.113883.3.526.3.369.json": [
		"RAp1",
		77
	],
	"./2.16.840.1.113883.3.526.3.376.json": [
		"8UVz",
		78
	],
	"./2.16.840.1.113883.3.600.145.json": [
		"BPaB",
		79
	],
	"./2.16.840.1.113883.3.600.450.json": [
		"luxD",
		80
	],
	"./2.16.840.1.113883.3.67.1.101.1.269.json": [
		"TIQl",
		81
	],
	"./2.16.840.1.113883.3.6929.2.1002.json": [
		"a0ui",
		82
	],
	"./2.16.840.1.113883.3.6929.3.1000.json": [
		"3RbE",
		83
	],
	"./social-concern.json": [
		"wMha",
		84
	],
	"./valueset_loadlist.json": [
		"qb6k",
		"resources-valueset_loadlist-json"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__.t(id, 3);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "MfLE";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "MnK3":
/*!**********************************************************!*\
  !*** ./src/app/health-status/health-status.component.ts ***!
  \**********************************************************/
/*! exports provided: HealthStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthStatusComponent", function() { return HealthStatusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/constants */ "XY7g");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _clinical_test_results_clinical_test_results_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../clinical-test-results/clinical-test-results.component */ "9tHu");
/* harmony import */ var _lab_test_result_lab_test_result_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lab-test-result/lab-test-result.component */ "Vedv");
/* harmony import */ var _clinical_activities_results_clinical_activities_results_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../clinical-activities-results/clinical-activities-results.component */ "7XR+");
/* harmony import */ var _clinical_exam_results_clinical_exam_results_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../clinical-exam-results/clinical-exam-results.component */ "lVyc");
/* harmony import */ var _clinical_questionaires_results_clinical_questionaires_results_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../clinical-questionaires-results/clinical-questionaires-results.component */ "69hJ");
/* harmony import */ var _clinical_procedure_results_clinical_procedure_results_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../clinical-procedure-results/clinical-procedure-results.component */ "D0PT");
/* harmony import */ var _clinical_history_results_clinical_history_results_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../clinical-history-results/clinical-history-results.component */ "1f8w");
/* harmony import */ var _clinical_imaging_results_clinical_imaging_results_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../clinical-imaging-results/clinical-imaging-results.component */ "+8xD");
/* harmony import */ var _clinical_therapy_results_clinical_therapy_results_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../clinical-therapy-results/clinical-therapy-results.component */ "TyBp");













function HealthStatusComponent_app_clinical_test_results_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-clinical-test-results");
} }
function HealthStatusComponent_app_lab_test_result_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-lab-test-result");
} }
function HealthStatusComponent_app_clinical_activities_results_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-clinical-activities-results");
} }
function HealthStatusComponent_app_clinical_exam_results_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-clinical-exam-results");
} }
function HealthStatusComponent_app_clinical_questionaires_results_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-clinical-questionaires-results");
} }
function HealthStatusComponent_app_clinical_procedure_results_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-clinical-procedure-results");
} }
function HealthStatusComponent_app_clinical_history_results_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-clinical-history-results");
} }
function HealthStatusComponent_app_clinical_imaging_results_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-clinical-imaging-results");
} }
function HealthStatusComponent_app_clinical_therapy_results_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-clinical-therapy-results");
} }
var HealthStatusComponent = /** @class */ (function () {
    function HealthStatusComponent() {
        this.featureToggling = _common_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].featureToggling;
    }
    HealthStatusComponent.prototype.ngOnInit = function () {
    };
    HealthStatusComponent.ɵfac = function HealthStatusComponent_Factory(t) { return new (t || HealthStatusComponent)(); };
    HealthStatusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HealthStatusComponent, selectors: [["app-health-status"]], decls: 19, vars: 9, consts: [[1, "wrapper"], [1, "clearfix"], [4, "ngIf"]], template: function HealthStatusComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HealthStatusComponent_app_clinical_test_results_2_Template, 1, 0, "app-clinical-test-results", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HealthStatusComponent_app_lab_test_result_4_Template, 1, 0, "app-lab-test-result", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "section", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HealthStatusComponent_app_clinical_activities_results_6_Template, 1, 0, "app-clinical-activities-results", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, HealthStatusComponent_app_clinical_exam_results_8_Template, 1, 0, "app-clinical-exam-results", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "section", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, HealthStatusComponent_app_clinical_questionaires_results_10_Template, 1, 0, "app-clinical-questionaires-results", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "section", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HealthStatusComponent_app_clinical_procedure_results_12_Template, 1, 0, "app-clinical-procedure-results", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "section", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, HealthStatusComponent_app_clinical_history_results_14_Template, 1, 0, "app-clinical-history-results", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "section", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, HealthStatusComponent_app_clinical_imaging_results_16_Template, 1, 0, "app-clinical-imaging-results", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "section", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, HealthStatusComponent_app_clinical_therapy_results_18_Template, 1, 0, "app-clinical-therapy-results", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.featureToggling.status.clinicalResults);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.featureToggling.status.labResults);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.featureToggling.status.activities);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.featureToggling.status.exam);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.featureToggling.status.questionaires);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.featureToggling.status.procedure);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.featureToggling.status.history);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.featureToggling.status.imaging);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.featureToggling.status.therapy);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _clinical_test_results_clinical_test_results_component__WEBPACK_IMPORTED_MODULE_3__["ClinicalTestResultsComponent"], _lab_test_result_lab_test_result_component__WEBPACK_IMPORTED_MODULE_4__["LabTestResultComponent"], _clinical_activities_results_clinical_activities_results_component__WEBPACK_IMPORTED_MODULE_5__["ClinicalActivitiesResultsComponent"], _clinical_exam_results_clinical_exam_results_component__WEBPACK_IMPORTED_MODULE_6__["ClinicalExamResultsComponent"], _clinical_questionaires_results_clinical_questionaires_results_component__WEBPACK_IMPORTED_MODULE_7__["ClinicalQuestionairesResultsComponent"], _clinical_procedure_results_clinical_procedure_results_component__WEBPACK_IMPORTED_MODULE_8__["ClinicalProcedureResultsComponent"], _clinical_history_results_clinical_history_results_component__WEBPACK_IMPORTED_MODULE_9__["ClinicalHistoryResultsComponent"], _clinical_imaging_results_clinical_imaging_results_component__WEBPACK_IMPORTED_MODULE_10__["ClinicalImagingResultsComponent"], _clinical_therapy_results_clinical_therapy_results_component__WEBPACK_IMPORTED_MODULE_11__["ClinicalTherapyResultsComponent"]], styles: ["@media all and (max-width: 1350px) {\n  section[_ngcontent-%COMP%] {\n    width: 100%;\n    float: left;\n    padding: 10px 0;\n  }\n}\n\n@media all and (min-width: 1350px) {\n  section[_ngcontent-%COMP%] {\n    width: 50%;\n    float: left;\n    padding: 0;\n  }\n  section[_ngcontent-%COMP%]:first-of-type {\n    padding: 0;\n  }\n}\n\n@media screen and (-ms-high-contrast: active), screen and (-ms-high-contrast: none) {\n  @media (min-width: 1450px) {\n    section[_ngcontent-%COMP%] {\n      width: 100%;\n      float: left;\n      padding: 10px 0;\n    }\n  }\n  @media (max-width: 1450px) {\n    section[_ngcontent-%COMP%] {\n      width: 50%;\n      float: left;\n      padding: 0;\n    }\n    section[_ngcontent-%COMP%]:first-of-type {\n      padding: 0;\n    }\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhbHRoLXN0YXR1cy9oZWFsdGgtc3RhdHVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRTtJQUNFLFdBQVc7SUFDWCxXQUFXO0lBQ1gsZUFBZTtFQUNqQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxVQUFVO0lBQ1YsV0FBVztJQUNYLFVBQVU7RUFDWjtFQUNBO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFO01BQ0UsV0FBVztNQUNYLFdBQVc7TUFDWCxlQUFlO0lBQ2pCO0VBQ0Y7RUFDQTtJQUNFO01BQ0UsVUFBVTtNQUNWLFdBQVc7TUFDWCxVQUFVO0lBQ1o7SUFDQTtNQUNFLFVBQVU7SUFDWjtFQUNGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9oZWFsdGgtc3RhdHVzL2hlYWx0aC1zdGF0dXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBhbGwgYW5kIChtYXgtd2lkdGg6IDEzNTBweCkge1xuICBzZWN0aW9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBwYWRkaW5nOiAxMHB4IDA7XG4gIH1cbn1cblxuQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogMTM1MHB4KSB7XG4gIHNlY3Rpb24ge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgcGFkZGluZzogMDtcbiAgfVxuICBzZWN0aW9uOmZpcnN0LW9mLXR5cGUge1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0OiBhY3RpdmUpLCBzY3JlZW4gYW5kICgtbXMtaGlnaC1jb250cmFzdDogbm9uZSkge1xuICBAbWVkaWEgKG1pbi13aWR0aDogMTQ1MHB4KSB7XG4gICAgc2VjdGlvbiB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgcGFkZGluZzogMTBweCAwO1xuICAgIH1cbiAgfVxuICBAbWVkaWEgKG1heC13aWR0aDogMTQ1MHB4KSB7XG4gICAgc2VjdGlvbiB7XG4gICAgICB3aWR0aDogNTAlO1xuICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgIH1cbiAgICBzZWN0aW9uOmZpcnN0LW9mLXR5cGUge1xuICAgICAgcGFkZGluZzogMDtcbiAgICB9XG4gIH1cbn0iXX0= */"] });
    return HealthStatusComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HealthStatusComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-health-status',
                templateUrl: './health-status.component.html',
                styleUrls: ['./health-status.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Mt3Z":
/*!*********************************!*\
  !*** ./src/app/health.guard.ts ***!
  \*********************************/
/*! exports provided: HealthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthGuard", function() { return HealthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


var HealthGuard = /** @class */ (function () {
    function HealthGuard() {
    }
    HealthGuard.prototype.canActivate = function (next, state) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve(true);
            }, 500);
        });
    };
    HealthGuard.ɵfac = function HealthGuard_Factory(t) { return new (t || HealthGuard)(); };
    HealthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HealthGuard, factory: HealthGuard.ɵfac, providedIn: 'root' });
    return HealthGuard;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HealthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();


/***/ }),

/***/ "NDgY":
/*!**********************************************!*\
  !*** ./src/app/bpgraph/bpgraph.component.ts ***!
  \**********************************************/
/*! exports provided: BPGraphComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BPGraphComponent", function() { return BPGraphComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/data.service */ "EnSQ");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-charts */ "LPYB");




var BPGraphComponent = /** @class */ (function () {
    function BPGraphComponent(dataservice) {
        this.dataservice = dataservice;
        this.lineChartData = [
            { data: [
                    {
                        x: new Date('2016-12-12T00:00:00Z'),
                        y: 155
                    },
                    {
                        x: new Date('2017-01-10T00:00:00Z'),
                        y: 147
                    },
                    {
                        x: new Date('2017-02-11T00:00:00Z'),
                        y: 147
                    },
                    {
                        x: new Date('2017-03-11T00:00:00Z'),
                        y: 155
                    },
                    {
                        x: new Date('2017-04-23T00:00:00Z'),
                        y: 155
                    },
                    {
                        x: new Date('2017-05-21T00:00:00Z'),
                        y: 155
                    }
                ],
                label: 'Systolic', fill: false },
            { data: [
                    {
                        x: new Date('2016-12-12T00:00:00Z'),
                        y: 91
                    },
                    {
                        x: new Date('2017-01-10T00:00:00Z'),
                        y: 91
                    },
                    {
                        x: new Date('2017-02-11T00:00:00Z'),
                        y: 89
                    },
                    {
                        x: new Date('2017-03-11T00:00:00Z'),
                        y: 90
                    },
                    {
                        x: new Date('2017-04-23T00:00:00Z'),
                        y: 89
                    },
                    {
                        x: new Date('2017-05-21T00:00:00Z'),
                        y: 102
                    }
                ], label: 'Diastolic', fill: false },
        ];
        this.lineChartLabels = ['Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May'];
        this.lineChartOptions = {
            responsive: false,
            maintainAspectRatio: true,
            scales: {
                yAxes: {
                    ticks: {
                        suggestedMax: 180
                    }
                },
                xAxes: {
                    type: 'time',
                    time: {
                        unit: 'month',
                    }
                }
            }
        };
        this.lineChartColors = [
            {
                borderColor: 'black',
            },
        ];
        this.lineChartLegend = true;
        this.lineChartPlugins = [
            {
                annotation: {
                    annotations: {
                        drawTime: 'beforeDatasetsDraw',
                        type: 'box',
                        xScaleID: 'x-axis-0',
                        yScaleID: 'y-axis-0',
                        borderWidth: 0,
                        yMin: 70,
                        yMax: 130,
                        backgroundColor: 'rgba(46, 204, 113,0.3)'
                    }
                }
            }
        ];
        this.lineChartType = 'line';
    }
    BPGraphComponent.prototype.ngOnInit = function () {
    };
    BPGraphComponent.ɵfac = function BPGraphComponent_Factory(t) { return new (t || BPGraphComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"])); };
    BPGraphComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BPGraphComponent, selectors: [["app-bpgraph"]], decls: 2, vars: 6, consts: [[1, "chart-wrapper"], ["baseChart", "", "height", "200", 3, "datasets", "options", "colors", "legend", "chartType", "plugins"]], template: function BPGraphComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "canvas", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx.dataservice.vitalSigns.chartData)("options", ctx.dataservice.vitalSigns.lineChartOptions)("colors", ctx.lineChartColors)("legend", ctx.lineChartLegend)("chartType", ctx.lineChartType)("plugins", ctx.lineChartPlugins);
        } }, directives: [ng2_charts__WEBPACK_IMPORTED_MODULE_2__["BaseChartDirective"]], styles: ["chart-wrapper[_ngcontent-%COMP%] {\n  height: 150px;\n  width: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnBncmFwaC9icGdyYXBoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvYnBncmFwaC9icGdyYXBoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJjaGFydC13cmFwcGVyIHtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgd2lkdGg6IDIwMHB4O1xufVxuIl19 */"] });
    return BPGraphComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BPGraphComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-bpgraph',
                templateUrl: './bpgraph.component.html',
                styleUrls: ['./bpgraph.component.css']
            }]
    }], function () { return [{ type: _services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }]; }, null); })();


/***/ }),

/***/ "OFcc":
/*!************************************************************!*\
  !*** ./src/app/clinical-goals/clinical-goals.component.ts ***!
  \************************************************************/
/*! exports provided: ClinicalGoalsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicalGoalsComponent", function() { return ClinicalGoalsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/data.service */ "EnSQ");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");







function ClinicalGoalsComponent_th_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Priority");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ClinicalGoalsComponent_td_5_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "priority_high");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ClinicalGoalsComponent_td_5_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "low_priority");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ClinicalGoalsComponent_td_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ClinicalGoalsComponent_td_5_mat_icon_1_Template, 2, 0, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ClinicalGoalsComponent_td_5_mat_icon_2_Template, 2, 0, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var goal_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", goal_r12.priority.toLowerCase().includes("high"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", goal_r12.priority.toLowerCase().includes("low"));
} }
function ClinicalGoalsComponent_th_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Goal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ClinicalGoalsComponent_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var goal_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", goal_r15.description, " ");
} }
function ClinicalGoalsComponent_th_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Created");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ClinicalGoalsComponent_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var goal_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", goal_r16.startDateText, " ");
} }
function ClinicalGoalsComponent_th_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Target Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ClinicalGoalsComponent_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var goal_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", goal_r17.targetDateText, " ");
} }
function ClinicalGoalsComponent_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ClinicalGoalsComponent_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var goal_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", goal_r18.achievementStatus.text, " ");
} }
function ClinicalGoalsComponent_tr_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 14);
} }
var _c0 = function (a0, a1) { return { hovered: a0, highlighted: a1 }; };
function ClinicalGoalsComponent_tr_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ClinicalGoalsComponent_tr_19_Template_tr_click_0_listener() { var row_r19 = ctx.$implicit; return row_r19.highlighted = !row_r19.highlighted; })("mouseover", function ClinicalGoalsComponent_tr_19_Template_tr_mouseover_0_listener() { var row_r19 = ctx.$implicit; return row_r19.hovered = true; })("mouseout", function ClinicalGoalsComponent_tr_19_Template_tr_mouseout_0_listener() { var row_r19 = ctx.$implicit; return row_r19.hovered = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, row_r19.hovered, row_r19.highlighted));
} }
var ClinicalGoalsComponent = /** @class */ (function () {
    function ClinicalGoalsComponent(dataservice) {
        this.dataservice = dataservice;
        this.displayedColumns = ['rank', 'description', 'created', 'targetdate', 'status'];
    }
    ClinicalGoalsComponent.prototype.ngOnInit = function () {
    };
    ClinicalGoalsComponent.ɵfac = function ClinicalGoalsComponent_Factory(t) { return new (t || ClinicalGoalsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"])); };
    ClinicalGoalsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClinicalGoalsComponent, selectors: [["app-clinical-goals"]], decls: 20, vars: 3, consts: [[1, "group-header"], ["mat-table", "", "width", "100%", 3, "dataSource"], ["matColumnDef", "rank"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "description"], ["matColumnDef", "created"], ["matColumnDef", "targetdate"], ["matColumnDef", "status"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "ngClass", "click", "mouseover", "mouseout", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], [4, "ngIf"], ["mat-header-row", ""], ["mat-row", "", 3, "ngClass", "click", "mouseover", "mouseout"]], template: function ClinicalGoalsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Practitioner Goals");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](3, 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ClinicalGoalsComponent_th_4_Template, 2, 0, "th", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ClinicalGoalsComponent_td_5_Template, 3, 2, "td", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](6, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ClinicalGoalsComponent_th_7_Template, 2, 0, "th", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ClinicalGoalsComponent_td_8_Template, 2, 1, "td", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](9, 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ClinicalGoalsComponent_th_10_Template, 2, 0, "th", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ClinicalGoalsComponent_td_11_Template, 2, 1, "td", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](12, 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ClinicalGoalsComponent_th_13_Template, 2, 0, "th", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ClinicalGoalsComponent_td_14_Template, 2, 1, "td", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](15, 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ClinicalGoalsComponent_th_16_Template, 2, 0, "th", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ClinicalGoalsComponent_td_17_Template, 2, 1, "td", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ClinicalGoalsComponent_tr_18_Template, 1, 0, "tr", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ClinicalGoalsComponent_tr_19_Template, 1, 4, "tr", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataservice.goals.activeClinicalGoals);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__["DefaultClassDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], styles: [".group-header_save[_ngcontent-%COMP%] {\n  justify-content: center;\n  vertical-align: top;\n  background: blue;\n  color: white;\n}\n\nmat-table[_ngcontent-%COMP%] {\n  vertical-align: top;\n}\n\ntr.mat-table[_ngcontent-%COMP%] {\n  vertical-align: top;\n  min-width: 700px;\n}\n\ntr.mat-header-row[_ngcontent-%COMP%] {\n  min-height: 24px;\n  height: 24px !important;\n}\n\ntr.mat-row[_ngcontent-%COMP%] {\n  min-height: 24px;\n  height: 24px !important;\n}\n\nth.mat-header-cell[_ngcontent-%COMP%], td.mat-cell[_ngcontent-%COMP%] {\n  text-align: left;\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpbmljYWwtZ29hbHMvY2xpbmljYWwtZ29hbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsdUJBQXVCO0FBQ3pCOztBQUdBO0VBQ0UsZ0JBQWdCOztBQUVsQiIsImZpbGUiOiJzcmMvYXBwL2NsaW5pY2FsLWdvYWxzL2NsaW5pY2FsLWdvYWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLmdyb3VwLWhlYWRlcl9zYXZlIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIGJhY2tncm91bmQ6IGJsdWU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxubWF0LXRhYmxlIHtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxudHIubWF0LXRhYmxlIHtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgbWluLXdpZHRoOiA3MDBweDtcbn1cblxudHIubWF0LWhlYWRlci1yb3cge1xuICBtaW4taGVpZ2h0OiAyNHB4O1xuICBoZWlnaHQ6IDI0cHggIWltcG9ydGFudDtcbn1cblxudHIubWF0LXJvdyB7XG4gIG1pbi1oZWlnaHQ6IDI0cHg7XG4gIGhlaWdodDogMjRweCAhaW1wb3J0YW50O1xufVxuXG5cbnRoLm1hdC1oZWFkZXItY2VsbCwgdGQubWF0LWNlbGwge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuXG59XG5cblxuIl19 */"] });
    return ClinicalGoalsComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClinicalGoalsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-clinical-goals',
                templateUrl: './clinical-goals.component.html',
                styleUrls: ['./clinical-goals.component.css']
            }]
    }], function () { return [{ type: _services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }]; }, null); })();


/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "Rnzi":
/*!****************************************************************!*\
  !*** ./src/app/weight-over-time/weight-over-time.component.ts ***!
  \****************************************************************/
/*! exports provided: WeightOverTimeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeightOverTimeComponent", function() { return WeightOverTimeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chartjs-plugin-annotation */ "Ym+k");
/* harmony import */ var chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _util_utility_functions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/utility-functions */ "n4X3");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/constants */ "XY7g");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/data.service */ "EnSQ");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-charts */ "LPYB");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");















function WeightOverTimeComponent_th_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WeightOverTimeComponent_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var wot_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, wot_r6.date, "MM/dd/yyyy"), " ");
} }
function WeightOverTimeComponent_th_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Result");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WeightOverTimeComponent_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "td", 15);
} if (rf & 2) {
    var wot_r7 = ctx.$implicit;
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r3.WotResult(wot_r7), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function WeightOverTimeComponent_tr_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 16);
} }
function WeightOverTimeComponent_tr_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WeightOverTimeComponent_tr_16_Template_tr_click_0_listener() { var row_r8 = ctx.$implicit; return row_r8.highlighted = !row_r8.highlighted; })("mouseover", function WeightOverTimeComponent_tr_16_Template_tr_mouseover_0_listener() { var row_r8 = ctx.$implicit; return row_r8.hovered = true; })("mouseout", function WeightOverTimeComponent_tr_16_Template_tr_mouseout_0_listener() { var row_r8 = ctx.$implicit; return row_r8.hovered = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var _c0 = function () { return [5, 15, 30]; };
var _c1 = function (a0) { return { display: a0 }; };
var WeightOverTimeComponent = /** @class */ (function () {
    function WeightOverTimeComponent(dataservice) {
        this.dataservice = dataservice;
        this.Constants = _common_constants__WEBPACK_IMPORTED_MODULE_6__["Constants"];
        this.wotRowMax = 7;
        this.lineChartColors = [
            {
                borderColor: 'black',
            },
        ];
        this.lineChartLegend = false;
        this.lineChartPlugins = [chartjs_plugin_annotation__WEBPACK_IMPORTED_MODULE_1__];
        this.lineChartType = 'line';
        this.displayedColumns = ['date', 'result'];
    }
    WeightOverTimeComponent.prototype.ngOnInit = function () {
        this.wotDataSource = this.dataservice.wotDataSource;
    };
    WeightOverTimeComponent.prototype.ngAfterViewInit = function () {
        if (this.wotDataSource.data.length > this.wotRowMax) {
            this.wotDataSource.paginator = this.paginator;
        }
        this.wotDataSource.sort = this.sort;
        this.wotDataSource.sortingDataAccessor = function (data, header) {
            switch (header) {
                case ('result'): {
                    return data.value;
                }
                case ('date'): {
                    return moment__WEBPACK_IMPORTED_MODULE_4___default()(data.date).unix();
                }
                default: {
                    return data[header];
                }
            }
        };
    };
    WeightOverTimeComponent.prototype.WotResult = function (wot) {
        return Object(_util_utility_functions__WEBPACK_IMPORTED_MODULE_3__["formatWotResult"])(wot.value, wot.unit);
    };
    WeightOverTimeComponent.prototype.getWotRowCssClass = function (wot) {
        return "";
        var cssClass = '';
        var val = wot.value;
        if (val) {
            switch (true) {
                case (val >= 200):
                    cssClass = 'resultCritical';
                    break;
                case (val < 200 && val >= 105):
                    cssClass = 'resultBorderline';
                    break;
                case (val < 105):
                    cssClass = 'resultGood';
                    break;
                default:
                    break;
            }
        }
        return cssClass;
    };
    WeightOverTimeComponent.ɵfac = function WeightOverTimeComponent_Factory(t) { return new (t || WeightOverTimeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"])); };
    WeightOverTimeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WeightOverTimeComponent, selectors: [["app-weight-over-time"]], viewQuery: function WeightOverTimeComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"], true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        } }, decls: 18, vars: 15, consts: [["width", "100%"], [1, "col-50"], [1, "chart-wrapper"], ["baseChart", "", "height", "200", 3, "datasets", "options", "colors", "legend", "chartType", "plugins"], ["mat-table", "", "matSort", "", "width", "100%", 3, "dataSource"], ["matColumnDef", "date"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "result"], ["mat-cell", "", 3, "innerHTML", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "click", "mouseover", "mouseout", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions", "ngStyle"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-cell", "", 3, "innerHTML"], ["mat-header-row", ""], ["mat-row", "", 3, "click", "mouseover", "mouseout"]], template: function WeightOverTimeComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "canvas", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "table", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](9, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, WeightOverTimeComponent_th_10_Template, 2, 0, "th", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, WeightOverTimeComponent_td_11_Template, 3, 4, "td", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](12, 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, WeightOverTimeComponent_th_13_Template, 2, 0, "th", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, WeightOverTimeComponent_td_14_Template, 1, 1, "td", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, WeightOverTimeComponent_tr_15_Template, 1, 0, "tr", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, WeightOverTimeComponent_tr_16_Template, 1, 0, "tr", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "mat-paginator", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Change in weight over Time (", ctx.Constants.featureToggling.preferredUnits.wot + "s", ")");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx.dataservice.wot.chartData)("options", ctx.dataservice.wot.lineChartOptions)("colors", ctx.lineChartColors)("legend", ctx.lineChartLegend)("chartType", ctx.lineChartType)("plugins", ctx.lineChartPlugins);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.wotDataSource);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c0))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c1, ctx.wotDataSource.data.length > ctx.wotRowMax ? "block" : "none"));
        } }, directives: [ng2_charts__WEBPACK_IMPORTED_MODULE_8__["BaseChartDirective"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_10__["DefaultStyleDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgStyle"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_9__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"]], styles: ["chart-wrapper[_ngcontent-%COMP%] {\n  height: 150px;\n  width: 200px;\n}\n\nmat-table[_ngcontent-%COMP%] {\n  vertical-align: top;\n  overflow: auto;\n  max-height: 400px;\n}\n\ntr.mat-table[_ngcontent-%COMP%] {\n  vertical-align: top;\n  min-width: 350px;\n}\n\ntr.mat-header-row[_ngcontent-%COMP%] {\n  min-height: 24px;\n  height: 24px !important;\n}\n\ntr.mat-row[_ngcontent-%COMP%] {\n  min-height: 24px;\n  height: 24px !important;\n}\n\ntr.mat-row.resultGood[_ngcontent-%COMP%]{\n  background-color: rgba(128, 204, 113, 0.3);\n}\n\ntr.mat-row.resultBorderline[_ngcontent-%COMP%]{\n  background-color: rgba(247, 245, 116, 0.3);\n}\n\ntr.mat-row.resultCritical[_ngcontent-%COMP%]{\n  background-color: rgba(227, 127, 104, 0.3);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VpZ2h0LW92ZXItdGltZS93ZWlnaHQtb3Zlci10aW1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSwwQ0FBMEM7QUFDNUM7O0FBRUE7RUFDRSwwQ0FBMEM7QUFDNUMiLCJmaWxlIjoic3JjL2FwcC93ZWlnaHQtb3Zlci10aW1lL3dlaWdodC1vdmVyLXRpbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImNoYXJ0LXdyYXBwZXIge1xuICBoZWlnaHQ6IDE1MHB4O1xuICB3aWR0aDogMjAwcHg7XG59XG5cbm1hdC10YWJsZSB7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBtYXgtaGVpZ2h0OiA0MDBweDtcbn1cblxudHIubWF0LXRhYmxlIHtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgbWluLXdpZHRoOiAzNTBweDtcbn1cblxudHIubWF0LWhlYWRlci1yb3cge1xuICBtaW4taGVpZ2h0OiAyNHB4O1xuICBoZWlnaHQ6IDI0cHggIWltcG9ydGFudDtcbn1cblxudHIubWF0LXJvdyB7XG4gIG1pbi1oZWlnaHQ6IDI0cHg7XG4gIGhlaWdodDogMjRweCAhaW1wb3J0YW50O1xufVxuXG50ci5tYXQtcm93LnJlc3VsdEdvb2R7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAyMDQsIDExMywgMC4zKTtcbn1cblxudHIubWF0LXJvdy5yZXN1bHRCb3JkZXJsaW5le1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NywgMjQ1LCAxMTYsIDAuMyk7XG59XG5cbnRyLm1hdC1yb3cucmVzdWx0Q3JpdGljYWx7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI3LCAxMjcsIDEwNCwgMC4zKTtcbn1cblxuXG4iXX0= */"] });
    return WeightOverTimeComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WeightOverTimeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-weight-over-time',
                templateUrl: './weight-over-time.component.html',
                styleUrls: ['./weight-over-time.component.css']
            }]
    }], function () { return [{ type: _services_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"] }]; }, { paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]]
        }], sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_5__["MatSort"]]
        }] }); })();


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
/* harmony import */ var e_care_common_data_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! e-care-common-data-services */ "6AkT");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../package.json */ "kiQV");
var _package_json__WEBPACK_IMPORTED_MODULE_6___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../package.json */ "kiQV", 1);
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/constants */ "XY7g");
/* harmony import */ var _assets_json_data_feature_toggling_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/json/data/feature-toggling.json */ "oMHM");
var _assets_json_data_feature_toggling_json__WEBPACK_IMPORTED_MODULE_8___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../assets/json/data/feature-toggling.json */ "oMHM", 1);
/* harmony import */ var _assets_json_data_lab_mappings_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/json/data/lab-mappings.json */ "nNx6");
var _assets_json_data_lab_mappings_json__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../assets/json/data/lab-mappings.json */ "nNx6", 1);
/* harmony import */ var _assets_json_data_vital_mappings_json__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/json/data/vital-mappings.json */ "nCGp");
var _assets_json_data_vital_mappings_json__WEBPACK_IMPORTED_MODULE_10___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../assets/json/data/vital-mappings.json */ "nCGp", 1);
/* harmony import */ var _assets_json_data_category_mappings_json__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/json/data/category-mappings.json */ "kipZ");
var _assets_json_data_category_mappings_json__WEBPACK_IMPORTED_MODULE_11___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../assets/json/data/category-mappings.json */ "kipZ", 1);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/data.service */ "EnSQ");
/* harmony import */ var _services_subject_data_service_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/subject-data-service.service */ "l7Fd");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/tooltip */ "Qu3c");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _demographics_panel_demographics_panel_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./demographics-panel/demographics-panel.component */ "bLIc");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/autocomplete */ "/1cH");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/core */ "FKr1");































var _c0 = ["patSearch"];
function AppComponent_input_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "input", 22, 23);
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](65);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("placeholder", "Enter at least ", ctx_r0.minSearchCharacters, " characters to search patient by name");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx_r0.patientSearch)("matAutocomplete", _r6);
} }
function AppComponent_mat_icon_11_Template(rf, ctx) { if (rf & 1) {
    var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_mat_icon_11_Template_mat_icon_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.togglePatientSearch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "person ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AppComponent_button_16_Template(rf, ctx) { if (rf & 1) {
    var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_button_16_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); var plan_r12 = ctx.$implicit; var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.dataservice.setCurrentCarePlan(plan_r12.fhirid); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var plan_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", plan_r12.title, " ");
} }
function AppComponent_mat_option_66_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var patient_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", patient_r15.fhirid);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", patient_r15.name, " ");
} }
function AppComponent_a_69_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 27, 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var link_r16 = ctx.$implicit;
    var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", link_r16.link)("active", _r17.isActive);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", link_r16.label, "\u00A0 ");
} }
var AppComponent = /** @class */ (function () {
    function AppComponent(dataservice, subjectdataservice, route, changeDetector, router, document, http) {
        this.dataservice = dataservice;
        this.subjectdataservice = subjectdataservice;
        this.route = route;
        this.changeDetector = changeDetector;
        this.router = router;
        this.document = document;
        this.http = http;
        this.version = _package_json__WEBPACK_IMPORTED_MODULE_6__["version"] + " – " + "BETA – Data may be incomplete!";
        this.activeLinkIndex = -1;
        this.basefhirserver = 'https://api.logicahealth.org/MCCeCarePlanTest/open/';
        this.secondaryfhirserver = 'NONE';
        this.title = 'providersmartapp';
        this.events = [];
        this.currentSubjectId = '';
        this.currentCarePlanId = '';
        this.patientSearch = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required);
        this.selectedPatientId = '';
        this.showPatientSearch = false;
        this.smartLaunch = false;
        this.refreshedForced = false;
        this.minSearchCharacters = 3;
        this.devmode = false;
        this.window = this.document.defaultView;
        this.navLinks = [
            {
                label: 'Goals',
                link: './goals',
                index: 0
            }, {
                label: 'Health Concerns',
                link: './health',
                index: 1
            }, {
                label: 'Health Maintenance & Interventions',
                link: './maint',
                index: 2
            }, {
                label: 'Health Status Evaluation & Outcomes',
                link: './status',
                index: 2
            }, {
                label: 'Care Team',
                link: './care',
                index: 2
            }
        ];
    }
    AppComponent.prototype.parseOverrides = function () {
        _common_constants__WEBPACK_IMPORTED_MODULE_7__["Constants"].featureToggling = _assets_json_data_feature_toggling_json__WEBPACK_IMPORTED_MODULE_8__;
        _common_constants__WEBPACK_IMPORTED_MODULE_7__["Constants"].labMappings = _assets_json_data_lab_mappings_json__WEBPACK_IMPORTED_MODULE_9__;
        _common_constants__WEBPACK_IMPORTED_MODULE_7__["Constants"].vitalMappings = _assets_json_data_vital_mappings_json__WEBPACK_IMPORTED_MODULE_10__;
        _common_constants__WEBPACK_IMPORTED_MODULE_7__["Constants"].categoryMappings = _assets_json_data_category_mappings_json__WEBPACK_IMPORTED_MODULE_11__;
    };
    AppComponent.prototype.update = function (foobarsecondaryfhirserver) {
        console.error('secondaryfhirserver ahahhhh ' + foobarsecondaryfhirserver);
        this.dataservice.updateFHIRConnection2(foobarsecondaryfhirserver);
        this.dataservice.getPatientGoals();
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.myForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            secondaryfhirserver: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]()
        });
        console.error('this.myForm.controls[secondaryfhirserver]' + this.myForm.controls['secondaryfhirserver'].value);
        this.myForm.controls['secondaryfhirserver'].setValue(this.secondaryfhirserver);
        this.parseOverrides();
        this.dataservice.mainfhirserver = this.basefhirserver;
        this.dataservice.secondaryfhirserver = this.secondaryfhirserver;
        // this.apiURL = environment.mccapiUrl;
        this.initFilteredPatients();
        this.dataservice.setCurrentSubject(this.currentSubjectId);
        this.dataservice.setCurrentCarePlan(this.currentCarePlanId);
        this.route.queryParams.subscribe(function (params) {
            // @ts-ign
            console.log(params); // { order: "popular" }
            var dev = params.devmode;
            _this.devmode = (dev === 'true');
            console.log('Development Mode: ' + _this.devmode);
            if (params.subject != null) {
                _this.currentSubjectId = params.subject;
                _this.dataservice.setCurrentSubject(_this.currentSubjectId);
            }
        });
        this.router.events.subscribe(function (res) {
            _this.activeLinkIndex = _this.navLinks.indexOf(_this.navLinks.find(function (tab) { return tab.link === '.' + _this.router.url; }));
        });
        var skey = this.window.sessionStorage.SMART_KEY;
        var key = skey ? skey.replace(/['"]+/g, '') : "";
        console.log('Ang: Smart Key is ' + key);
        if (key != null) {
            Object(e_care_common_data_services__WEBPACK_IMPORTED_MODULE_2__["checkAuthorize"])().then(function (val) {
                console.log({ val: val });
            }).catch(function (err) {
                console.log({ err: err });
            });
            this.updateDataContext(key, 14);
        }
    };
    AppComponent.prototype.waitFor = function (time) {
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve('I promise to return after ' + time + 'milliseconds!');
            }, time);
        });
    };
    AppComponent.prototype.updateDataContext = function (key, count) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var info, tokenResp, t;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('Updating Context aaaaaaaaaaa' + key);
                        console.log('Updating Context aaaaaaaaaaa');
                        info = JSON.parse(this.window.sessionStorage.getItem(key));
                        if (!(info != null)) return [3 /*break*/, 4];
                        console.log('server: ' + info.serverUrl);
                        tokenResp = info.tokenResponse;
                        if (!(tokenResp.access_token != null)) return [3 /*break*/, 1];
                        console.log('access_token: ' + tokenResp.access_token);
                        console.log('patient: ' + tokenResp.patient);
                        this.dataservice.updateFHIRConnection(info.serverUrl, tokenResp.access_token);
                        this.patientSelected(tokenResp.patient);
                        this.smartLaunch = true;
                        this.changeDetector.detectChanges();
                        return [3 /*break*/, 3];
                    case 1:
                        if (!(count > 0)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.waitFor(1000)];
                    case 2:
                        t = _a.sent();
                        console.log(t + '(' + count + ')');
                        this.updateDataContext(key, count - 1);
                        _a.label = 3;
                    case 3: return [3 /*break*/, 5];
                    case 4:
                        console.log('No info for key ' + key + ' found');
                        _a.label = 5;
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    AppComponent.prototype.ngAfterViewInit = function () {
    };
    AppComponent.prototype.patientSelected = function (data) {
        this.currentSubjectId = data;
        this.patientCarePlans = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"](); // Initialize patient care plans to empty object.
        this.dataservice.setCurrentSubject(this.currentSubjectId); // Care Plan selection for patient done in dataservice.setCurrentSubject
        this.patientSearch.setValue('');
        this.showPatientSearch = false;
        this.initFilteredPatients();
        // this.goalscmp.refreshTargets();
    };
    AppComponent.prototype.togglePatientSearch = function () {
        this.showPatientSearch = !this.showPatientSearch;
        if (this.showPatientSearch) {
            this.patientSearch.setValue('');
            this.patSearch.nativeElement.focus();
        }
    };
    AppComponent.prototype.initFilteredPatients = function () {
        // this.filteredPatients = new Observable<any[]>();
        // this.filteredPatients = this.patientSearch.valueChanges
        //   .pipe(
        //     startWith(''),
        //     // debounceTime(300),
        //     distinctUntilChanged(),
        //     switchMap(value => this._dataFilter(value || ''))
        //   );
    };
    AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_12__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_subject_data_service_service__WEBPACK_IMPORTED_MODULE_13__["SubjectDataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClient"])); };
    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c0, true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.patSearch = _t.first);
        } }, decls: 71, vars: 18, consts: [["color", "primary", 2, "height", "36px", "min-height", "36px"], [1, "center-name"], [1, "example-fill-remaining-space"], ["type", "text", "style", "float: right; width:400px; height:60%; font-size: .8em; background: white; color: black; padding-left: .5em;", "matInput", "", 3, "placeholder", "formControl", "matAutocomplete", 4, "ngIf"], ["matTooltip", "Select a new patient", "aria-label", "Button to select a new patient", 3, "click", 4, "ngIf"], ["matTooltip", "Select a careplan", "aria-label", "Button to select and new careplan", 3, "matMenuTriggerFor"], ["menuCareplan", "matMenu"], ["mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["matTooltip", "Show current user information", "aria-label", "Button to show the users information"], ["matTooltip", "Show control panel", "aria-label", "Buttn to show or hide the control panel", 1, "settings-icon", 3, "click"], ["position", "end", "mode", "side", 3, "opened", "openedChange", "closed"], ["sidenav", ""], ["color", "primary", "id", "search-input", "appearance", "outline", 1, "full-width", 3, "ngSubmit"], ["color", "red"], ["matInput", "", "name", "secondaryfhirserver", 3, "ngModel", "value", "ngModelChange", "keyup.enter"], ["searchBar", ""], ["mat-raised-button", "", "color", "primary", "id", "submit-search", "type", "submit", "for", "searchBar", 3, "click"], [3, "optionSelected"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-tab-nav-bar", ""], ["mat-tab-link", "", "queryParamsHandling", "preserve", "routerLinkActive", "", 3, "routerLink", "active", 4, "ngFor", "ngForOf"], ["type", "text", "matInput", "", 2, "float", "right", "width", "400px", "height", "60%", "font-size", ".8em", "background", "white", "color", "black", "padding-left", ".5em", 3, "placeholder", "formControl", "matAutocomplete"], ["patSearch", ""], ["matTooltip", "Select a new patient", "aria-label", "Button to select a new patient", 3, "click"], ["mat-menu-item", "", 3, "click"], [3, "value"], ["mat-tab-link", "", "queryParamsHandling", "preserve", "routerLinkActive", "", 3, "routerLink", "active"], ["rla", "routerLinkActive"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
            var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-toolbar", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-toolbar-row");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Careplan\u00A0\u00A0");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "small");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "v");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "span", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, AppComponent_input_10_Template, 2, 3, "input", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, AppComponent_mat_icon_11_Template, 2, 0, "mat-icon", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-icon", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "folder ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-menu", null, 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, AppComponent_button_16_Template, 2, 1, "button", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "mat-icon", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " account_circle ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "mat-icon", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_mat_icon_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](23); return _r4.toggle(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "settings ");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-sidenav-container");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-sidenav", 10, 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("openedChange", function AppComponent_Template_mat_sidenav_openedChange_22_listener($event) { return ctx.opened = $event; })("opened", function AppComponent_Template_mat_sidenav_opened_22_listener() { return ctx.events.push("open!"); })("closed", function AppComponent_Template_mat_sidenav_closed_22_listener() { return ctx.events.push("close!"); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "table");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "FHIR Server URL:");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "API Server URL");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Development Mode");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Smart Launch");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "mat-form-field", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngSubmit", function AppComponent_Template_mat_form_field_ngSubmit_55_listener($event) { return ctx.update($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "mat-label", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Secondary FHIR Server");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "input", 14, 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_58_listener($event) { return ctx.secondaryfhirserver = $event; })("keyup.enter", function AppComponent_Template_input_keyup_enter_58_listener($event) { return ctx.update($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "button", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_button_click_60_listener() { return ctx.update(ctx.secondaryfhirserver); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, "Submit");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "mat-sidenav-content");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "app-demographics-panel");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "mat-autocomplete", 17, 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("optionSelected", function AppComponent_Template_mat_autocomplete_optionSelected_64_listener($event) { return ctx.patientSelected($event.option.value); });
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](66, AppComponent_mat_option_66_Template, 2, 2, "mat-option", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](67, "async");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "nav", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](69, AppComponent_a_69_Template, 3, 3, "a", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](70, "router-outlet");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.version);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", ctx.dataservice.demographic.name, ", DOB: ", ctx.dataservice.demographic.dateOfBirth, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showPatientSearch);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.devmode);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.dataservice.careplans);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("opened", ctx.opened);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.dataservice.mainfhirserver);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.apiURL);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.devmode);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.smartLaunch);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.secondaryfhirserver)("value", ctx.secondaryfhirserver);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](67, 16, ctx.filteredPatients));
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.navLinks);
        } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__["MatToolbar"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_16__["MatToolbarRow"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_17__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_18__["MatTooltip"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__["_MatMenu"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__["MatSidenav"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_22__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_23__["MatButton"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_20__["MatSidenavContent"], _demographics_panel_demographics_panel_component__WEBPACK_IMPORTED_MODULE_24__["DemographicsPanelComponent"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_25__["MatAutocomplete"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_26__["MatTabNav"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterOutlet"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_25__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlDirective"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_19__["MatMenuItem"], _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatOption"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterLinkWithHref"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_26__["MatTabLink"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterLinkActive"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: ["mat-tab-group {\n  margin: 2%;\n  width: 96%;\n  max-width: 96%;\n  height: -webkit-fill-available;\n  height: -moz-available;\n  height: stretch;\n}\n\n.mat-tab-label {\n  min-width: 20rem;\n  padding: 2%;\n  /*\n  background-color: lightblue;\n  color: black;\n\n   */\n  width: 22%;\n  border-width: 2px;\n  border-color: black;\n  border-style: solid;\n}\n\n.mat-tab-label.mat-tab-label-active {\n  min-width: 20rem;\n  padding: 2%;\n  background-color: white;\n  border-color: black;\n  color: black;\n  width: 22%;\n  border-width: 2px;\n  border-style: solid;\n}\n\n::ng-deep.mat-tab-label .mat-tab-label-content {\n  flex-wrap: wrap;\n}\n\n::ng-deep.mat-tab-label .mat-tab-label-content span {\n  display: flex;\n  flex: 1 0 100%;\n  justify-content: center;\n}\n\n.example-fill-remaining-space {\n  /* This fills the remaining space, by using flexbox.\n     Every toolbar row uses a flexbox row layout. */\n  flex: 1 1 auto;\n}\n\nmat-tab-nav-bar {\n  margin: 2%;\n  width: 96%;\n  max-width: 96%;\n  height: -webkit-fill-available;\n  height: -moz-available;\n  height: stretch;\n}\n\n.mat-tab-link {\n  min-width: 20rem;\n  padding: 2%;\n  /*\n  background-color: lightblue;\n  color: black;\n\n   */\n  width: 22%;\n  border-width: 2px;\n  border-color: black;\n  border-style: solid;\n}\n\n.mat-tab-link.mat-tab-label-active {\n  min-width: 20rem;\n  padding: 2%;\n  background-color: white;\n  border-color: black;\n  color: black;\n  width: 22%;\n  border-width: 2px;\n  border-style: solid;\n}\n\n::ng-deep.mat-tab-link .mat-tab-link-content {\n  flex-wrap: wrap;\n}\n\n::ng-deep.mat-tab-link .mat-tab-link-content span {\n  display: flex;\n  flex: 1 0 100%;\n  justify-content: center;\n}\n\n.example-fill-remaining-space {\n  /* This fills the remaining space, by using flexbox.\n     Every toolbar row uses a flexbox row layout. */\n  flex: 1 1 auto;\n}\n\n.tile-header\n{\n  display: flex;\n  flex: 1 0 100%;\n  justify-content: center;\n}\n\n.group-header {\n  display: flex;\n  flex: 1 0 100%;\n  justify-content: center;\n  vertical-align: top;\n  background: blue;\n  color: white;\n}\n\n.center-name\n{\n  flex: 1 1 auto;\n  text-align: center;\n}\n\n.resultTable {\n  min-width: 20rem;\n  padding: 2%;\n\n  /* background-color: lightblue; */\n  color: black;\n\n  border-width: 2px;\n  border-color: black;\n  border-style: solid;\n}\n\n.resultTableHeader {\n  background-color: aliceblue;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsVUFBVTtFQUNWLGNBQWM7RUFDZCw4QkFBOEI7RUFDOUIsc0JBQXNCO0VBQ3RCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYOzs7O0lBSUU7RUFDRixVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixjQUFjO0VBQ2QsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0U7bURBQ2lEO0VBQ2pELGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsVUFBVTtFQUNWLGNBQWM7RUFDZCw4QkFBOEI7RUFDOUIsc0JBQXNCO0VBQ3RCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYOzs7O0lBSUU7RUFDRixVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixjQUFjO0VBQ2QsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0U7bURBQ2lEO0VBQ2pELGNBQWM7QUFDaEI7O0FBR0E7O0VBRUUsYUFBYTtFQUNiLGNBQWM7RUFDZCx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsY0FBYztFQUNkLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQTs7RUFFRSxjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7O0VBRVgsaUNBQWlDO0VBQ2pDLFlBQVk7O0VBRVosaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC10YWItZ3JvdXAge1xuICBtYXJnaW46IDIlO1xuICB3aWR0aDogOTYlO1xuICBtYXgtd2lkdGg6IDk2JTtcbiAgaGVpZ2h0OiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuICBoZWlnaHQ6IC1tb3otYXZhaWxhYmxlO1xuICBoZWlnaHQ6IHN0cmV0Y2g7XG59XG5cbi5tYXQtdGFiLWxhYmVsIHtcbiAgbWluLXdpZHRoOiAyMHJlbTtcbiAgcGFkZGluZzogMiU7XG4gIC8qXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcbiAgY29sb3I6IGJsYWNrO1xuXG4gICAqL1xuICB3aWR0aDogMjIlO1xuICBib3JkZXItd2lkdGg6IDJweDtcbiAgYm9yZGVyLWNvbG9yOiBibGFjaztcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbn1cblxuLm1hdC10YWItbGFiZWwubWF0LXRhYi1sYWJlbC1hY3RpdmUge1xuICBtaW4td2lkdGg6IDIwcmVtO1xuICBwYWRkaW5nOiAyJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci1jb2xvcjogYmxhY2s7XG4gIGNvbG9yOiBibGFjaztcbiAgd2lkdGg6IDIyJTtcbiAgYm9yZGVyLXdpZHRoOiAycHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG59XG5cbjo6bmctZGVlcC5tYXQtdGFiLWxhYmVsIC5tYXQtdGFiLWxhYmVsLWNvbnRlbnQge1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbjo6bmctZGVlcC5tYXQtdGFiLWxhYmVsIC5tYXQtdGFiLWxhYmVsLWNvbnRlbnQgc3BhbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDEgMCAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmV4YW1wbGUtZmlsbC1yZW1haW5pbmctc3BhY2Uge1xuICAvKiBUaGlzIGZpbGxzIHRoZSByZW1haW5pbmcgc3BhY2UsIGJ5IHVzaW5nIGZsZXhib3guXG4gICAgIEV2ZXJ5IHRvb2xiYXIgcm93IHVzZXMgYSBmbGV4Ym94IHJvdyBsYXlvdXQuICovXG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG5tYXQtdGFiLW5hdi1iYXIge1xuICBtYXJnaW46IDIlO1xuICB3aWR0aDogOTYlO1xuICBtYXgtd2lkdGg6IDk2JTtcbiAgaGVpZ2h0OiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xuICBoZWlnaHQ6IC1tb3otYXZhaWxhYmxlO1xuICBoZWlnaHQ6IHN0cmV0Y2g7XG59XG5cbi5tYXQtdGFiLWxpbmsge1xuICBtaW4td2lkdGg6IDIwcmVtO1xuICBwYWRkaW5nOiAyJTtcbiAgLypcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xuICBjb2xvcjogYmxhY2s7XG5cbiAgICovXG4gIHdpZHRoOiAyMiU7XG4gIGJvcmRlci13aWR0aDogMnB4O1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xufVxuXG4ubWF0LXRhYi1saW5rLm1hdC10YWItbGFiZWwtYWN0aXZlIHtcbiAgbWluLXdpZHRoOiAyMHJlbTtcbiAgcGFkZGluZzogMiU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xuICBjb2xvcjogYmxhY2s7XG4gIHdpZHRoOiAyMiU7XG4gIGJvcmRlci13aWR0aDogMnB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xufVxuXG46Om5nLWRlZXAubWF0LXRhYi1saW5rIC5tYXQtdGFiLWxpbmstY29udGVudCB7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuOjpuZy1kZWVwLm1hdC10YWItbGluayAubWF0LXRhYi1saW5rLWNvbnRlbnQgc3BhbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDEgMCAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmV4YW1wbGUtZmlsbC1yZW1haW5pbmctc3BhY2Uge1xuICAvKiBUaGlzIGZpbGxzIHRoZSByZW1haW5pbmcgc3BhY2UsIGJ5IHVzaW5nIGZsZXhib3guXG4gICAgIEV2ZXJ5IHRvb2xiYXIgcm93IHVzZXMgYSBmbGV4Ym94IHJvdyBsYXlvdXQuICovXG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG5cbi50aWxlLWhlYWRlclxue1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAxIDAgMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5ncm91cC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAxIDAgMTAwJTtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIGJhY2tncm91bmQ6IGJsdWU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNlbnRlci1uYW1lXG57XG4gIGZsZXg6IDEgMSBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5yZXN1bHRUYWJsZSB7XG4gIG1pbi13aWR0aDogMjByZW07XG4gIHBhZGRpbmc6IDIlO1xuXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTsgKi9cbiAgY29sb3I6IGJsYWNrO1xuXG4gIGJvcmRlci13aWR0aDogMnB4O1xuICBib3JkZXItY29sb3I6IGJsYWNrO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xufVxuXG4ucmVzdWx0VGFibGVIZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XG59XG4iXX0= */"], encapsulation: 2 });
    return AppComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            }]
    }], function () { return [{ type: _services_data_service__WEBPACK_IMPORTED_MODULE_12__["DataService"] }, { type: _services_subject_data_service_service__WEBPACK_IMPORTED_MODULE_13__["SubjectDataService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_14__["ActivatedRoute"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
            }] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClient"] }]; }, { patSearch: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['patSearch', { static: true }]
        }] }); })();
function bootstrap(arg0, arg1) {
    throw new Error('Function not implemented.');
}
function Window(Window, arg1) {
    throw new Error('Function not implemented.');
}


/***/ }),

/***/ "TyBp":
/*!********************************************************************************!*\
  !*** ./src/app/clinical-therapy-results/clinical-therapy-results.component.ts ***!
  \********************************************************************************/
/*! exports provided: ClinicalTherapyResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicalTherapyResultsComponent", function() { return ClinicalTherapyResultsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/constants */ "XY7g");
/* harmony import */ var _util_utility_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/utility-functions */ "n4X3");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ "EnSQ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function ClinicalTherapyResultsComponent_tr_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var res_r1 = ctx.$implicit;
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](res_r1.code.coding[0].display);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.getDisplayValue(res_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.getEffectiveValue(res_r1.effectiveDateTime));
} }
var ClinicalTherapyResultsComponent = /** @class */ (function () {
    function ClinicalTherapyResultsComponent(dataservice) {
        this.dataservice = dataservice;
    }
    ClinicalTherapyResultsComponent.prototype.ngOnInit = function () {
    };
    ClinicalTherapyResultsComponent.prototype.getWotIsLoaded = function () {
        return window[_common_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].WotIsLoaded];
    };
    ClinicalTherapyResultsComponent.prototype.getBPisLoaded = function () {
        return window[_common_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].BPisLoaded];
    };
    ClinicalTherapyResultsComponent.prototype.getDisplayValue = function (value) {
        return Object(_util_utility_functions__WEBPACK_IMPORTED_MODULE_2__["getDisplayValueNew"])(value);
    };
    ClinicalTherapyResultsComponent.prototype.getEffectiveValue = function (value) {
        return Object(_util_utility_functions__WEBPACK_IMPORTED_MODULE_2__["formatEffectiveDateNew"])(value);
    };
    ClinicalTherapyResultsComponent.ɵfac = function ClinicalTherapyResultsComponent_Factory(t) { return new (t || ClinicalTherapyResultsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"])); };
    ClinicalTherapyResultsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClinicalTherapyResultsComponent, selectors: [["app-clinical-therapy-results"]], decls: 14, vars: 1, consts: [[1, "group-header"], ["width", "100%", "valign", "top", 1, "resultTable"], [1, "resultTableHeader"], [4, "ngFor", "ngForOf"]], template: function ClinicalTherapyResultsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Therapy");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Test");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Result");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Date");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ClinicalTherapyResultsComponent_tr_13_Template, 7, 3, "tr", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dataservice.therapy);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["table.internal[_ngcontent-%COMP%], td.internal[_ngcontent-%COMP%], td.internal[_ngcontent-%COMP%] {\n  border: none;\n  border-style: hidden;\n}\n\ntable[_ngcontent-%COMP%], td[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  border: black;\n  border-width: 1px;\n  border-style: solid;\n  margin-inside: 0;\n  margin-outside: 0;\n}\n\ntable.inner-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border:none;\n}\n\ntable.inner-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border:none;\n}\n\ntd[_ngcontent-%COMP%] { \n  padding: 2px 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpbmljYWwtdGhlcmFweS1yZXN1bHRzL2NsaW5pY2FsLXRoZXJhcHktcmVzdWx0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLFlBQVk7RUFDWixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jbGluaWNhbC10aGVyYXB5LXJlc3VsdHMvY2xpbmljYWwtdGhlcmFweS1yZXN1bHRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbnRhYmxlLmludGVybmFsLHRkLmludGVybmFsLCB0ZC5pbnRlcm5hbCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXN0eWxlOiBoaWRkZW47XG59XG5cbnRhYmxlLHRkLCB0aCB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlcjogYmxhY2s7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBtYXJnaW4taW5zaWRlOiAwO1xuICBtYXJnaW4tb3V0c2lkZTogMDtcbn1cblxudGFibGUuaW5uZXItdGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOm5vbmU7XG59XG5cbnRhYmxlLmlubmVyLXRhYmxlIHRyIHRkIHtcbiAgYm9yZGVyOm5vbmU7XG59XG5cbnRkIHsgXG4gIHBhZGRpbmc6IDJweCA1cHg7XG59Il19 */"] });
    return ClinicalTherapyResultsComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClinicalTherapyResultsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-clinical-therapy-results',
                templateUrl: './clinical-therapy-results.component.html',
                styleUrls: ['./clinical-therapy-results.component.css']
            }]
    }], function () { return [{ type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }]; }, null); })();


/***/ }),

/***/ "UaPD":
/*!****************************************************!*\
  !*** ./src/app/testgraph1/testgraph1.component.ts ***!
  \****************************************************/
/*! exports provided: Testgraph1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Testgraph1Component", function() { return Testgraph1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-charts */ "LPYB");



var Testgraph1Component = /** @class */ (function () {
    function Testgraph1Component() {
        this.barChartOptions = {
            responsive: true,
            scales: {
                // xAxes: [{
                //   type: 'time',
                //   time: {
                //     unit: 'month'
                //   }
                // }],
                // yAxes: [{
                //   ticks: {
                //     suggestedMax: 10,
                //     suggestedMin: 0
                //   }
                // }]
                xAxes: [{
                        type: 'time',
                        distribution: 'linear',
                        time: {
                            unit: 'month'
                        }
                    }],
                yAxes: [{
                        ticks: {
                            suggestedMax: 10,
                            suggestedMin: 0
                        }
                    }]
            }
        };
        this.barChartType = 'line';
        this.barChartLegend = true;
        this.barChartData = [
            { data: [
                    { x: new Date('2020-02-20'), y: '1' },
                    { x: new Date('2020-03-22'), y: '2' },
                    { x: new Date('2020-03-23'), y: '6' },
                    { x: new Date('2020-05-24'), y: '8' }
                ],
                fill: false,
                label: 'TEST 1'
            },
            { data: [
                    { x: new Date('2020-01-22'), y: '7' },
                    { x: new Date('2020-02-24'), y: '4' },
                    { x: new Date('2020-03-26'), y: '1' },
                    { x: new Date('2020-04-29'), y: '9' }
                ],
                fill: false,
                label: 'TEST 2'
            },
        ];
    }
    Testgraph1Component.prototype.ngOnInit = function () {
    };
    Testgraph1Component.ɵfac = function Testgraph1Component_Factory(t) { return new (t || Testgraph1Component)(); };
    Testgraph1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Testgraph1Component, selectors: [["app-testgraph1"]], decls: 2, vars: 4, consts: [[2, "display", "block"], ["baseChart", "", 3, "datasets", "options", "legend", "chartType"]], template: function Testgraph1Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "canvas", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datasets", ctx.barChartData)("options", ctx.barChartOptions)("legend", ctx.barChartLegend)("chartType", ctx.barChartType);
        } }, directives: [ng2_charts__WEBPACK_IMPORTED_MODULE_1__["BaseChartDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3RncmFwaDEvdGVzdGdyYXBoMS5jb21wb25lbnQuY3NzIn0= */"] });
    return Testgraph1Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Testgraph1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-testgraph1',
                templateUrl: './testgraph1.component.html',
                styleUrls: ['./testgraph1.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Vedv":
/*!**************************************************************!*\
  !*** ./src/app/lab-test-result/lab-test-result.component.ts ***!
  \**************************************************************/
/*! exports provided: LabTestResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabTestResultComponent", function() { return LabTestResultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/constants */ "XY7g");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/data.service */ "EnSQ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _e_gfr_e_gfr_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../e-gfr/e-gfr.component */ "HCQv");
/* harmony import */ var _uacr_uacr_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../uacr/uacr.component */ "6ynu");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");








function LabTestResultComponent_app_e_gfr_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-e-gfr");
} }
function LabTestResultComponent_app_uacr_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-uacr");
} }
function LabTestResultComponent_tr_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-spinner", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LabTestResultComponent_tr_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var res_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](res_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](res_r4.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](res_r4.date);
} }
var LabTestResultComponent = /** @class */ (function () {
    function LabTestResultComponent(dataservice) {
        this.dataservice = dataservice;
        this.loadingText = "Loading...";
        this.results = [];
    }
    LabTestResultComponent.prototype.ngOnInit = function () {
        console.log("in LabTestResultComponent ngOnInit(): this.dataservices.egfr : ", this.dataservice.egfr);
        // Determine if there is no careplan selected)
    };
    LabTestResultComponent.prototype.getEGFRisLoaded = function () {
        return window[_common_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].EGFRisLoaded];
    };
    LabTestResultComponent.prototype.getUACRisLoaded = function () {
        return window[_common_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].UACRisLoaded];
    };
    LabTestResultComponent.ɵfac = function LabTestResultComponent_Factory(t) { return new (t || LabTestResultComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"])); };
    LabTestResultComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LabTestResultComponent, selectors: [["app-lab-test-result"]], decls: 28, vars: 10, consts: [[1, "group-header"], ["width", "100%"], [1, "resultTableHeader"], [3, "innerHTML"], ["colspan", "3"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["colspan", "3", 2, "height", "200px"], ["mode", "indeterminate", 2, "margin", "0 auto"]], template: function LabTestResultComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Tests");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Test");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Result");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Date");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "td", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "date");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "td", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, LabTestResultComponent_app_e_gfr_22_Template, 1, 0, "app-e-gfr", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, LabTestResultComponent_app_uacr_25_Template, 1, 0, "app-uacr", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, LabTestResultComponent_tr_26_Template, 3, 0, "tr", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, LabTestResultComponent_tr_27_Template, 7, 3, "tr", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.dataservice.egfr.mostRecentEgfr.test);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.dataservice.egfr.mostRecentEgfr.result, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](19, 7, ctx.dataservice.egfr.mostRecentEgfr.date, "MM/dd/yyyy"));
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getEGFRisLoaded());
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getUACRisLoaded());
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.dataservice.labResults);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dataservice.labResults);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _e_gfr_e_gfr_component__WEBPACK_IMPORTED_MODULE_4__["EGFRComponent"], _uacr_uacr_component__WEBPACK_IMPORTED_MODULE_5__["UACRComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatSpinner"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: ["table.internal[_ngcontent-%COMP%], td.internal[_ngcontent-%COMP%], td.internal[_ngcontent-%COMP%] {\n  border: none;\n  border-style: hidden;\n}\n\ntable[_ngcontent-%COMP%], td[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  border: black;\n  border-width: 1px;\n  border-style: solid;\n  margin-inside: 0;\n  margin-outside: 0;\n}\n\ntd[_ngcontent-%COMP%] {\n  padding: 2px 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGFiLXRlc3QtcmVzdWx0L2xhYi10ZXN0LXJlc3VsdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvbGFiLXRlc3QtcmVzdWx0L2xhYi10ZXN0LXJlc3VsdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUuaW50ZXJuYWwsIHRkLmludGVybmFsLCB0ZC5pbnRlcm5hbCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXN0eWxlOiBoaWRkZW47XG59XG5cbnRhYmxlLCB0ZCwgdGgge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXI6IGJsYWNrO1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgbWFyZ2luLWluc2lkZTogMDtcbiAgbWFyZ2luLW91dHNpZGU6IDA7XG59XG5cbnRkIHtcbiAgcGFkZGluZzogMnB4IDVweDtcbn0iXX0= */"] });
    return LabTestResultComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LabTestResultComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-lab-test-result',
                templateUrl: './lab-test-result.component.html',
                styleUrls: ['./lab-test-result.component.css']
            }]
    }], function () { return [{ type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"] }]; }, null); })();


/***/ }),

/***/ "X0sK":
/*!**************************************************!*\
  !*** ./src/app/goals/course-dialog.component.ts ***!
  \**************************************************/
/*! exports provided: CourseDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseDialogComponent", function() { return CourseDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ "EnSQ");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");











var CourseDialogComponent = /** @class */ (function () {
    function CourseDialogComponent(dataservice, http) {
        this.dataservice = dataservice;
        this.http = http;
    }
    CourseDialogComponent.prototype.ngOnInit = function () {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            priority: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            expressedByType: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(60)]),
            achievementStatus: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            achievementText: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            lifecycleStatus: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            startDateText: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            targetDateText: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            addresses: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            expressedBy: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            acceptance: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](),
            targets: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]()
        });
    };
    CourseDialogComponent.prototype.save = function () {
        var _this = this;
        console.trace('priority ' + this.form.controls['priority'].value);
        console.trace('expressedByType ' + this.form.controls['expressedByType'].value);
        console.trace('description ' + this.form.controls['description'].value);
        console.trace('achievementStatus ' + this.form.controls['achievementStatus'].value);
        console.trace('achievementText ' + this.form.controls['achievementText'].value);
        if (!this.form.controls['startDateText'].dirty) {
            console.trace('startDateText ' + this.form.controls['startDateText'].value);
        }
        if (!this.form.controls['targetDateText'].pristine) {
            console.trace('targetDateText ' + this.form.controls['targetDateText'].value);
        }
        console.trace('addresses ' + this.form.controls['addresses'].value);
        console.trace('expressedBy ' + this.form.controls['expressedBy'].value);
        console.trace('acceptance ' + this.form.controls['acceptance'].value);
        console.trace('targets ' + this.form.controls['targets'].value);
        console.trace('lifecycleStatus ' + this.form.controls['lifecycleStatus'].value);
        var url = '/creategoal?patientId=';
        var gtmeasure = {
            text: this.form.controls['targets'].value
        };
        var gt = {
            measure: gtmeasure,
            dueAsText: this.form.controls['targetDateText'].value
        };
        var gts = [gt];
        var acs = {
            code: this.form.controls['achievementStatus'].value
        };
        var acss = [acs];
        var achievementStatus = {
            text: this.form.controls['achievementStatus'].value,
            coding: acss
        };
        var ada = {
            priority: this.form.controls['priority'].value,
            lifecycleStatus: this.form.controls['lifecycleStatus'].value,
            description: this.form.controls['description'].value,
            achievementStatus: achievementStatus,
            startDateText: this.form.controls['startDateText'].dirty ? moment__WEBPACK_IMPORTED_MODULE_2___default()(this.form.controls['startDateText'].value).format("YYYY-MM-DD") : null,
            targetDateText: this.form.controls['targetDateText'].dirty ? moment__WEBPACK_IMPORTED_MODULE_2___default()(this.form.controls['targetDateText'].value).format("YYYY-MM-DD") : null,
            addresses: this.form.controls['addresses'].value,
            expressedBy: this.form.controls['expressedBy'].value,
            acceptance: this.form.controls['acceptance'].value,
            targets: gts,
            server: this.dataservice.mainfhirserver
        };
        console.log("ada  = " + JSON.stringify(ada));
        this.http.post(url + this.dataservice.currentPatientId, ada).subscribe({
            next: function (data) {
                _this.postId = data.id;
            },
            error: function (error) {
                _this.errorMessage = error.message;
                console.error('There was an error!', error);
            }
        });
    };
    CourseDialogComponent.prototype.close = function () {
        this.dataservice.getPatientGoals();
    };
    CourseDialogComponent.prototype.isDisabled = function () {
        console.error('this.form.valid ', this.form.valid);
        console.error('this.form.valid ', this.form.valid);
        console.error('this.form.valid ', this.form.valid);
        console.error('this.form.valid ', this.form.valid);
        console.error('this.form.valid ', this.form.valid);
        console.error('this.form.valid ', this.form.valid);
        return this.form.valid;
        // return true;
    };
    CourseDialogComponent.ɵfac = function CourseDialogComponent_Factory(t) { return new (t || CourseDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
    CourseDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CourseDialogComponent, selectors: [["course-dialog"]], decls: 92, vars: 9, consts: [["mat-dialog-title", ""], [3, "formGroup"], ["matInput", "", "required", "", "placeholder", "Goal Description", "formControlName", "description"], ["appearance", "fill"], ["matNativeControl", "", "required", "", "formControlName", "lifecycleStatus"], ["value", "proposed"], ["value", "planned"], ["value", "accepted"], ["value", "active"], ["value", "on-hold"], ["value", "completed"], ["value", "cancelled"], ["value", "entered-in-error"], ["value", "rejected"], ["matNativeControl", "", "formControlName", "priority"], ["value", "high-priority"], ["value", "medium-priority"], ["value", "Low-priority"], ["matNativeControl", "", "formControlName", "achievementStatus"], ["value", "in-progress"], ["value", "improving"], ["value", "worsening"], ["value", "no-change"], ["value", "achieved"], ["value", "sustaining"], ["value", "not-achieved"], ["value", "no-progress"], ["value", "not-attainable"], ["matInput", "", "formControlName", "startDateText", 3, "matDatepicker"], ["matSuffix", "", 3, "for"], ["startDateTextpicker", ""], ["matInput", "", "formControlName", "targetDateText", 3, "matDatepicker"], ["targetDateTextpicker", ""], ["matInput", "", "placeholder", "Goal addresses", "formControlName", "addresses"], ["matInput", "", "placeholder", "Goal expressedBy", "formControlName", "expressedBy"], ["matInput", "", "placeholder", "Goal expressedByType", "formControlName", "expressedByType"], ["matInput", "", "placeholder", "Goal acceptance", "formControlName", "acceptance"], ["matInput", "", "placeholder", "Goal targets", "formControlName", "targets"], [1, "mat-raised-button", 3, "mat-dialog-close", "click"], [1, "mat-raised-button", "mat-primary", 3, "mat-dialog-close", "disabled", "click"]], template: function CourseDialogComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Goal Lifecycle Status");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "select", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "option", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Proposed A goal is proposed for this patient.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "option", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Planned A goal is planned for this patient.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "option", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Accepted A proposed goal was accepted or acknowledged.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "option", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Active The goal is being sought actively.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "option", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "On Hold The goal remains a long term objective but is no longer being actively pursued for a temporary period of time");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "option", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Completed The goal is no longer being sought.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "option", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Cancelled The goal has been abandoned.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "option", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Entered in Error The goal was entered in error and voided.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "option", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Rejected A proposed goal was rejected.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-form-field", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Goal priority");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "select", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "option", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "High Priority");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "option", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Medium Priority");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "option", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Low Priority");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-form-field");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Goal Achievement Status");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "select", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "option", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "In Progress");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "option", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Improving");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "option", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Worsening");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "option", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "No Change");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "option", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Achieved");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "option", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Sustaining");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "option", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Not Achieved");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "option", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "No Progress");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "option", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Not Attainable");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-form-field");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Goal startDateText");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "input", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-hint");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "MM/DD/YYYY");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "mat-datepicker-toggle", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "mat-datepicker", null, 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "mat-form-field");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Goal targetDateText");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "input", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "mat-hint");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "MM/DD/YYYY");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "mat-datepicker-toggle", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "mat-datepicker", null, 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "mat-form-field");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "input", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "mat-form-field");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "input", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "mat-form-field");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "input", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "mat-form-field");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "input", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "mat-form-field");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "input", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "mat-dialog-actions");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "button", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CourseDialogComponent_Template_button_click_88_listener() { return ctx.close(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Close");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "button", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CourseDialogComponent_Template_button_click_90_listener() { return ctx.save(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Save Goal");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](67);
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](76);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.description);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](60);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true)("disabled", ctx.form.invalid);
        } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerInput"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatHint"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_8__["MatDatepicker"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogActions"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogClose"]], styles: [".mat-form-field[_ngcontent-%COMP%] {\n  display: block;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  height: 100px;\n  resize: vertical;\n}\n\nbutton[_ngcontent-%COMP%]:disabled, button[disabled][_ngcontent-%COMP%]{\n  border: 1px solid #999999;\n  background-color: #cccccc;\n  color: #666666;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ29hbHMvY291cnNlLWRpYWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7QUFHQTs7RUFFRSx5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9nb2Fscy9jb3Vyc2UtZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbnRleHRhcmVhIHtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcbn1cblxuXG5idXR0b246ZGlzYWJsZWQsXG5idXR0b25bZGlzYWJsZWRde1xuICBib3JkZXI6IDFweCBzb2xpZCAjOTk5OTk5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjY2NjO1xuICBjb2xvcjogIzY2NjY2Njtcbn1cbiJdfQ== */"] });
    return CourseDialogComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CourseDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'course-dialog',
                templateUrl: './course-dialog.component.html',
                styleUrls: ['./course-dialog.component.css']
            }]
    }], function () { return [{ type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "XY7g":
/*!*************************************!*\
  !*** ./src/app/common/constants.ts ***!
  \*************************************/
/*! exports provided: Constants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Constants", function() { return Constants; });
var Constants = /** @class */ (function () {
    function Constants() {
    }
    Constants.WotIsLoaded = "WOT-Is-Loaded-provider-app-1";
    Constants.BPisLoaded = "BP-is-Loaded-provider-app-1";
    Constants.EGFRisLoaded = "EGFR-is-Loaded-provider-app-1";
    Constants.UACRisLoaded = "UACR-is-Loaded-provider-app-1";
    Constants.ActiveDiagnosisIsLoaded = "ActiveDiagnosis-is-ready-provider-app-1";
    Constants.SocialConcernsIsLoaded = "SocialConcerns-is-ready-provider-app-1";
    Constants.InActiveDiagnosisIsLoaded = "InActiveDiagnosis-is-ready-provider-app-1";
    Constants.EducationIsLoaded = "Education-is-loaded-provider-app-1";
    Constants.CounselingIsLoaded = "Counseling-is-loaded-provider-app-1";
    Constants.ReferralsIsLoaded = "Referrals-is-loaded-provider-app-1";
    Constants.MedicationsIsLoaded = "Medications-is-loaded-provider-app-1";
    Constants.ServiceRequestIsLoaded = "ServiceRequest-is-loaded-provider-app-1";
    Constants.GoalsIsLoaded = "Goals-is-loaded-provider-app-1";
    Constants.TargetsIsLoaded = "Targets-is-loaded-provider-app-1";
    Constants.ChoicesIsLoaded = "Choices-is-loaded-provider-app-1";
    return Constants;
}());



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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/service-worker */ "Jho9");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-charts */ "LPYB");
/* harmony import */ var _app_material_module_app_material_module_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-material-module/app-material-module.module */ "2Ze4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _demographics_panel_demographics_panel_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./demographics-panel/demographics-panel.component */ "bLIc");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _health_and_social_concerns_health_and_social_concerns_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./health-and-social-concerns/health-and-social-concerns.component */ "gh5G");
/* harmony import */ var _goals_goals_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./goals/goals.component */ "e3Z9");
/* harmony import */ var _active_diagnosis_panel_active_diagnosis_panel_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./active-diagnosis-panel/active-diagnosis-panel.component */ "BvRP");
/* harmony import */ var _inactive_diagnosis_panel_inactive_diagnosis_panel_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./inactive-diagnosis-panel/inactive-diagnosis-panel.component */ "JVal");
/* harmony import */ var _diagnosis_panel_diagnosis_panel_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./diagnosis-panel/diagnosis-panel.component */ "bBBk");
/* harmony import */ var _social_concern_panel_social_concern_panel_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./social-concern-panel/social-concern-panel.component */ "JLBa");
/* harmony import */ var _clinical_goals_clinical_goals_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./clinical-goals/clinical-goals.component */ "OFcc");
/* harmony import */ var _patient_choices_patient_choices_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./patient-choices/patient-choices.component */ "ppQH");
/* harmony import */ var _target_values_target_values_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./target-values/target-values.component */ "wxQT");
/* harmony import */ var _patient_goals_patient_goals_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./patient-goals/patient-goals.component */ "nZ6o");
/* harmony import */ var _maintenance_and_interventions_maintenance_and_interventions_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./maintenance-and-interventions/maintenance-and-interventions.component */ "5bbp");
/* harmony import */ var _medication_panel_medication_panel_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./medication-panel/medication-panel.component */ "k1Aq");
/* harmony import */ var _education_panel_education_panel_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./education-panel/education-panel.component */ "nZko");
/* harmony import */ var _counseling_panel_counseling_panel_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./counseling-panel/counseling-panel.component */ "Jn28");
/* harmony import */ var _referral_panel_referral_panel_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./referral-panel/referral-panel.component */ "wUVO");
/* harmony import */ var _health_status_health_status_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./health-status/health-status.component */ "MnK3");
/* harmony import */ var _care_team_care_team_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./care-team/care-team.component */ "wHvi");
/* harmony import */ var _clinical_test_results_clinical_test_results_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./clinical-test-results/clinical-test-results.component */ "9tHu");
/* harmony import */ var _clinical_exam_results_clinical_exam_results_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./clinical-exam-results/clinical-exam-results.component */ "lVyc");
/* harmony import */ var _clinical_procedure_results_clinical_procedure_results_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./clinical-procedure-results/clinical-procedure-results.component */ "D0PT");
/* harmony import */ var _clinical_imaging_results_clinical_imaging_results_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./clinical-imaging-results/clinical-imaging-results.component */ "+8xD");
/* harmony import */ var _clinical_activities_results_clinical_activities_results_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./clinical-activities-results/clinical-activities-results.component */ "7XR+");
/* harmony import */ var _clinical_questionaires_results_clinical_questionaires_results_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./clinical-questionaires-results/clinical-questionaires-results.component */ "69hJ");
/* harmony import */ var _clinical_history_results_clinical_history_results_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./clinical-history-results/clinical-history-results.component */ "1f8w");
/* harmony import */ var _clinical_therapy_results_clinical_therapy_results_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./clinical-therapy-results/clinical-therapy-results.component */ "TyBp");
/* harmony import */ var _lab_test_result_lab_test_result_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./lab-test-result/lab-test-result.component */ "Vedv");
/* harmony import */ var _blood_pressure_blood_pressure_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./blood-pressure/blood-pressure.component */ "azuf");
/* harmony import */ var _e_gfr_e_gfr_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./e-gfr/e-gfr.component */ "HCQv");
/* harmony import */ var _weight_over_time_weight_over_time_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./weight-over-time/weight-over-time.component */ "Rnzi");
/* harmony import */ var _uacr_uacr_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./uacr/uacr.component */ "6ynu");
/* harmony import */ var _bpgraph_bpgraph_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./bpgraph/bpgraph.component */ "NDgY");
/* harmony import */ var _diagnosis_dialog_diagnosis_dialog_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./diagnosis-dialog/diagnosis-dialog.component */ "kvNL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _consolidated_goals_consolidated_goals_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./consolidated-goals/consolidated-goals.component */ "6Fft");
/* harmony import */ var _testgraph1_testgraph1_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./testgraph1/testgraph1.component */ "UaPD");
/* harmony import */ var _services_observations_service__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./services/observations.service */ "cmPd");
/* harmony import */ var _pipes_null_check_pipe__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./pipes/null-check.pipe */ "0vtW");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _interceptors_404_retry_interceptor__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./interceptors/404.retry.interceptor */ "qfn1");
/* harmony import */ var _goals_course_dialog_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./goals/course-dialog.component */ "X0sK");
/* harmony import */ var _medication_dialog_medication_dialog_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./medication-dialog/medication-dialog.component */ "8+dV");
/* harmony import */ var _goals_dialog_goal_dialog_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./goals-dialog/goal-dialog.component */ "351w");
/* harmony import */ var _active_orders_panel_active_orders_panel_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./active-orders-panel/active-orders-panel.component */ "49Qf");
















// import { CourseDialogComponent} from './goals/course-dialog.component';












































var routes = []; // sets up routes constant where you define your routes
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]] });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_services_observations_service__WEBPACK_IMPORTED_MODULE_48__["ObservationsService"], { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _interceptors_404_retry_interceptor__WEBPACK_IMPORTED_MODULE_51__["RetryInterceptor"], multi: true }], imports: [[
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_50__["MatSortModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                ng2_charts__WEBPACK_IMPORTED_MODULE_7__["ChartsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                _app_material_module_app_material_module_module__WEBPACK_IMPORTED_MODULE_8__["AppMaterialModuleModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { enableTracing: false }),
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_6__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].production }),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_45__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
            ], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]] });
    return AppModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_active_orders_panel_active_orders_panel_component__WEBPACK_IMPORTED_MODULE_55__["ActiveOrdersPanelComponent"],
        _goals_dialog_goal_dialog_component__WEBPACK_IMPORTED_MODULE_54__["GoalDialogComponent"],
        _medication_dialog_medication_dialog_component__WEBPACK_IMPORTED_MODULE_53__["MedicationDialogComponent"],
        _goals_course_dialog_component__WEBPACK_IMPORTED_MODULE_52__["CourseDialogComponent"],
        _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
        _demographics_panel_demographics_panel_component__WEBPACK_IMPORTED_MODULE_11__["DemographicsPanelComponent"],
        _health_and_social_concerns_health_and_social_concerns_component__WEBPACK_IMPORTED_MODULE_13__["HealthAndSocialConcernsComponent"],
        _goals_goals_component__WEBPACK_IMPORTED_MODULE_14__["GoalsComponent"],
        _active_diagnosis_panel_active_diagnosis_panel_component__WEBPACK_IMPORTED_MODULE_15__["ActiveDiagnosisPanelComponent"],
        _inactive_diagnosis_panel_inactive_diagnosis_panel_component__WEBPACK_IMPORTED_MODULE_16__["InactiveDiagnosisPanelComponent"],
        _diagnosis_panel_diagnosis_panel_component__WEBPACK_IMPORTED_MODULE_17__["DiagnosisPanelComponent"],
        _social_concern_panel_social_concern_panel_component__WEBPACK_IMPORTED_MODULE_18__["SocialConcernPanelComponent"],
        _clinical_goals_clinical_goals_component__WEBPACK_IMPORTED_MODULE_19__["ClinicalGoalsComponent"],
        _patient_choices_patient_choices_component__WEBPACK_IMPORTED_MODULE_20__["PatientChoicesComponent"],
        _target_values_target_values_component__WEBPACK_IMPORTED_MODULE_21__["TargetValuesComponent"],
        _patient_goals_patient_goals_component__WEBPACK_IMPORTED_MODULE_22__["PatientGoalsComponent"],
        _maintenance_and_interventions_maintenance_and_interventions_component__WEBPACK_IMPORTED_MODULE_23__["MaintenanceAndInterventionsComponent"],
        _medication_panel_medication_panel_component__WEBPACK_IMPORTED_MODULE_24__["MedicationPanelComponent"],
        _education_panel_education_panel_component__WEBPACK_IMPORTED_MODULE_25__["EducationPanelComponent"],
        _counseling_panel_counseling_panel_component__WEBPACK_IMPORTED_MODULE_26__["CounselingPanelComponent"],
        _referral_panel_referral_panel_component__WEBPACK_IMPORTED_MODULE_27__["ReferralPanelComponent"],
        _health_status_health_status_component__WEBPACK_IMPORTED_MODULE_28__["HealthStatusComponent"],
        _care_team_care_team_component__WEBPACK_IMPORTED_MODULE_29__["CareTeamComponent"],
        _clinical_test_results_clinical_test_results_component__WEBPACK_IMPORTED_MODULE_30__["ClinicalTestResultsComponent"],
        _clinical_imaging_results_clinical_imaging_results_component__WEBPACK_IMPORTED_MODULE_33__["ClinicalImagingResultsComponent"],
        _clinical_exam_results_clinical_exam_results_component__WEBPACK_IMPORTED_MODULE_31__["ClinicalExamResultsComponent"],
        _clinical_procedure_results_clinical_procedure_results_component__WEBPACK_IMPORTED_MODULE_32__["ClinicalProcedureResultsComponent"],
        _clinical_activities_results_clinical_activities_results_component__WEBPACK_IMPORTED_MODULE_34__["ClinicalActivitiesResultsComponent"],
        _clinical_questionaires_results_clinical_questionaires_results_component__WEBPACK_IMPORTED_MODULE_35__["ClinicalQuestionairesResultsComponent"],
        _clinical_therapy_results_clinical_therapy_results_component__WEBPACK_IMPORTED_MODULE_37__["ClinicalTherapyResultsComponent"],
        _clinical_history_results_clinical_history_results_component__WEBPACK_IMPORTED_MODULE_36__["ClinicalHistoryResultsComponent"],
        _lab_test_result_lab_test_result_component__WEBPACK_IMPORTED_MODULE_38__["LabTestResultComponent"],
        _blood_pressure_blood_pressure_component__WEBPACK_IMPORTED_MODULE_39__["BloodPressureComponent"],
        _e_gfr_e_gfr_component__WEBPACK_IMPORTED_MODULE_40__["EGFRComponent"],
        _weight_over_time_weight_over_time_component__WEBPACK_IMPORTED_MODULE_41__["WeightOverTimeComponent"],
        _uacr_uacr_component__WEBPACK_IMPORTED_MODULE_42__["UACRComponent"],
        _bpgraph_bpgraph_component__WEBPACK_IMPORTED_MODULE_43__["BPGraphComponent"],
        _diagnosis_dialog_diagnosis_dialog_component__WEBPACK_IMPORTED_MODULE_44__["DiagnosisDialogComponent"],
        _consolidated_goals_consolidated_goals_component__WEBPACK_IMPORTED_MODULE_46__["ConsolidatedGoalsComponent"],
        _testgraph1_testgraph1_component__WEBPACK_IMPORTED_MODULE_47__["Testgraph1Component"],
        _pipes_null_check_pipe__WEBPACK_IMPORTED_MODULE_49__["NullCheckPipe"]], imports: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_50__["MatSortModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
        ng2_charts__WEBPACK_IMPORTED_MODULE_7__["ChartsModule"],
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
        _app_material_module_app_material_module_module__WEBPACK_IMPORTED_MODULE_8__["AppMaterialModuleModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_6__["ServiceWorkerModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_45__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _active_orders_panel_active_orders_panel_component__WEBPACK_IMPORTED_MODULE_55__["ActiveOrdersPanelComponent"],
                    _goals_dialog_goal_dialog_component__WEBPACK_IMPORTED_MODULE_54__["GoalDialogComponent"],
                    _medication_dialog_medication_dialog_component__WEBPACK_IMPORTED_MODULE_53__["MedicationDialogComponent"],
                    _goals_course_dialog_component__WEBPACK_IMPORTED_MODULE_52__["CourseDialogComponent"],
                    _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                    _demographics_panel_demographics_panel_component__WEBPACK_IMPORTED_MODULE_11__["DemographicsPanelComponent"],
                    _health_and_social_concerns_health_and_social_concerns_component__WEBPACK_IMPORTED_MODULE_13__["HealthAndSocialConcernsComponent"],
                    _goals_goals_component__WEBPACK_IMPORTED_MODULE_14__["GoalsComponent"],
                    _active_diagnosis_panel_active_diagnosis_panel_component__WEBPACK_IMPORTED_MODULE_15__["ActiveDiagnosisPanelComponent"],
                    _inactive_diagnosis_panel_inactive_diagnosis_panel_component__WEBPACK_IMPORTED_MODULE_16__["InactiveDiagnosisPanelComponent"],
                    _diagnosis_panel_diagnosis_panel_component__WEBPACK_IMPORTED_MODULE_17__["DiagnosisPanelComponent"],
                    _social_concern_panel_social_concern_panel_component__WEBPACK_IMPORTED_MODULE_18__["SocialConcernPanelComponent"],
                    _clinical_goals_clinical_goals_component__WEBPACK_IMPORTED_MODULE_19__["ClinicalGoalsComponent"],
                    _patient_choices_patient_choices_component__WEBPACK_IMPORTED_MODULE_20__["PatientChoicesComponent"],
                    _target_values_target_values_component__WEBPACK_IMPORTED_MODULE_21__["TargetValuesComponent"],
                    _patient_goals_patient_goals_component__WEBPACK_IMPORTED_MODULE_22__["PatientGoalsComponent"],
                    _maintenance_and_interventions_maintenance_and_interventions_component__WEBPACK_IMPORTED_MODULE_23__["MaintenanceAndInterventionsComponent"],
                    _medication_panel_medication_panel_component__WEBPACK_IMPORTED_MODULE_24__["MedicationPanelComponent"],
                    _education_panel_education_panel_component__WEBPACK_IMPORTED_MODULE_25__["EducationPanelComponent"],
                    _counseling_panel_counseling_panel_component__WEBPACK_IMPORTED_MODULE_26__["CounselingPanelComponent"],
                    _referral_panel_referral_panel_component__WEBPACK_IMPORTED_MODULE_27__["ReferralPanelComponent"],
                    _health_status_health_status_component__WEBPACK_IMPORTED_MODULE_28__["HealthStatusComponent"],
                    _care_team_care_team_component__WEBPACK_IMPORTED_MODULE_29__["CareTeamComponent"],
                    _clinical_test_results_clinical_test_results_component__WEBPACK_IMPORTED_MODULE_30__["ClinicalTestResultsComponent"],
                    _clinical_imaging_results_clinical_imaging_results_component__WEBPACK_IMPORTED_MODULE_33__["ClinicalImagingResultsComponent"],
                    _clinical_exam_results_clinical_exam_results_component__WEBPACK_IMPORTED_MODULE_31__["ClinicalExamResultsComponent"],
                    _clinical_procedure_results_clinical_procedure_results_component__WEBPACK_IMPORTED_MODULE_32__["ClinicalProcedureResultsComponent"],
                    _clinical_activities_results_clinical_activities_results_component__WEBPACK_IMPORTED_MODULE_34__["ClinicalActivitiesResultsComponent"],
                    _clinical_questionaires_results_clinical_questionaires_results_component__WEBPACK_IMPORTED_MODULE_35__["ClinicalQuestionairesResultsComponent"],
                    _clinical_therapy_results_clinical_therapy_results_component__WEBPACK_IMPORTED_MODULE_37__["ClinicalTherapyResultsComponent"],
                    _clinical_history_results_clinical_history_results_component__WEBPACK_IMPORTED_MODULE_36__["ClinicalHistoryResultsComponent"],
                    _lab_test_result_lab_test_result_component__WEBPACK_IMPORTED_MODULE_38__["LabTestResultComponent"],
                    _blood_pressure_blood_pressure_component__WEBPACK_IMPORTED_MODULE_39__["BloodPressureComponent"],
                    _e_gfr_e_gfr_component__WEBPACK_IMPORTED_MODULE_40__["EGFRComponent"],
                    _weight_over_time_weight_over_time_component__WEBPACK_IMPORTED_MODULE_41__["WeightOverTimeComponent"],
                    _uacr_uacr_component__WEBPACK_IMPORTED_MODULE_42__["UACRComponent"],
                    _bpgraph_bpgraph_component__WEBPACK_IMPORTED_MODULE_43__["BPGraphComponent"],
                    _diagnosis_dialog_diagnosis_dialog_component__WEBPACK_IMPORTED_MODULE_44__["DiagnosisDialogComponent"],
                    _consolidated_goals_consolidated_goals_component__WEBPACK_IMPORTED_MODULE_46__["ConsolidatedGoalsComponent"],
                    _testgraph1_testgraph1_component__WEBPACK_IMPORTED_MODULE_47__["Testgraph1Component"],
                    _pipes_null_check_pipe__WEBPACK_IMPORTED_MODULE_49__["NullCheckPipe"]
                ],
                imports: [
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_50__["MatSortModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                    ng2_charts__WEBPACK_IMPORTED_MODULE_7__["ChartsModule"],
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                    _app_material_module_app_material_module_module__WEBPACK_IMPORTED_MODULE_8__["AppMaterialModuleModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { enableTracing: false }),
                    _angular_service_worker__WEBPACK_IMPORTED_MODULE_6__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].production }),
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_45__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
                providers: [_services_observations_service__WEBPACK_IMPORTED_MODULE_48__["ObservationsService"], { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _interceptors_404_retry_interceptor__WEBPACK_IMPORTED_MODULE_51__["RetryInterceptor"], multi: true }],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "azuf":
/*!************************************************************!*\
  !*** ./src/app/blood-pressure/blood-pressure.component.ts ***!
  \************************************************************/
/*! exports provided: BloodPressureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BloodPressureComponent", function() { return BloodPressureComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/data.service */ "EnSQ");
/* harmony import */ var _bpgraph_bpgraph_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../bpgraph/bpgraph.component */ "NDgY");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");












function BloodPressureComponent_th_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BloodPressureComponent_td_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var vs_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, vs_r8.date, "MM/dd/yyyy"), " ");
} }
function BloodPressureComponent_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Systolic");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BloodPressureComponent_td_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var vs_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", vs_r9.systolic, " ");
} }
function BloodPressureComponent_th_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Diastolic");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BloodPressureComponent_td_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var vs_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", vs_r10.diastolic, " ");
} }
function BloodPressureComponent_tr_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 18);
} }
function BloodPressureComponent_tr_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BloodPressureComponent_tr_18_Template_tr_click_0_listener() { var row_r11 = ctx.$implicit; return row_r11.highlighted = !row_r11.highlighted; })("mouseover", function BloodPressureComponent_tr_18_Template_tr_mouseover_0_listener() { var row_r11 = ctx.$implicit; return row_r11.hovered = true; })("mouseout", function BloodPressureComponent_tr_18_Template_tr_mouseout_0_listener() { var row_r11 = ctx.$implicit; return row_r11.hovered = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var _c0 = function () { return [5, 15, 30]; };
var _c1 = function (a0) { return { display: a0 }; };
var BloodPressureComponent = /** @class */ (function () {
    function BloodPressureComponent(dataservice) {
        var _this = this;
        this.dataservice = dataservice;
        this.vitalSignsRowMax = 7;
        this.displayedColumns = ['date', 'systolic', 'diastolic'];
        this.refreshVitalSigns = function () {
            _this.vitalSignsDataSource = _this.dataservice.vitalSignsDataSource;
        };
    }
    BloodPressureComponent.prototype.ngOnInit = function () {
        this.vitalSignsDataSource = this.dataservice.vitalSignsDataSource;
    };
    BloodPressureComponent.prototype.ngAfterViewInit = function () {
        // todo: fix below, paginator doesn't work when assigned, shows all rows, doesn't limit to max, paging doesn't work
        if (this.vitalSignsDataSource.data.length > this.vitalSignsRowMax) {
            this.vitalSignsDataSource.paginator = this.paginator;
        }
        this.vitalSignsDataSource.sort = this.sort;
        this.vitalSignsDataSource.sortingDataAccessor = function (data, header) {
            switch (header) {
                case ('systolic'): {
                    return data.systolic;
                }
                case ('diastolic'): {
                    return data.diastolic;
                }
                case ('date'): {
                    return moment__WEBPACK_IMPORTED_MODULE_3___default()(data[header]).unix();
                }
                default: {
                    return data[header];
                }
            }
        };
    };
    BloodPressureComponent.ɵfac = function BloodPressureComponent_Factory(t) { return new (t || BloodPressureComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"])); };
    BloodPressureComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BloodPressureComponent, selectors: [["app-blood-pressure"]], viewQuery: function BloodPressureComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"], true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        } }, decls: 20, vars: 8, consts: [["width", "100%"], ["width", "50%", "height", "250"], ["width", "50%"], ["mat-table", "", "matSort", "", "width", "100%", 3, "dataSource"], ["matColumnDef", "date"], ["mat-header-cell", "", "mat-sort-header", "date", "minlength", "12", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "systolic"], ["mat-header-cell", "", "mat-sort-header", "systolic", 4, "matHeaderCellDef"], ["matColumnDef", "diastolic"], ["mat-header-cell", "", "mat-sort-header", "diastolic", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "click", "mouseover", "mouseout", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions", "ngStyle"], ["mat-header-cell", "", "mat-sort-header", "date", "minlength", "12"], ["mat-cell", ""], ["mat-header-cell", "", "mat-sort-header", "systolic"], ["mat-header-cell", "", "mat-sort-header", "diastolic"], ["mat-header-row", ""], ["mat-row", "", 3, "click", "mouseover", "mouseout"]], template: function BloodPressureComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Change in Blood Pressure over Time");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-bpgraph");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8, 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, BloodPressureComponent_th_9_Template, 2, 0, "th", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, BloodPressureComponent_td_10_Template, 3, 4, "td", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](11, 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, BloodPressureComponent_th_12_Template, 2, 0, "th", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, BloodPressureComponent_td_13_Template, 2, 1, "td", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](14, 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, BloodPressureComponent_th_15_Template, 2, 0, "th", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, BloodPressureComponent_td_16_Template, 2, 1, "td", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, BloodPressureComponent_tr_17_Template, 1, 0, "tr", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, BloodPressureComponent_tr_18_Template, 1, 0, "tr", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "mat-paginator", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.vitalSignsDataSource);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, ctx.vitalSignsDataSource.data.length > ctx.vitalSignsRowMax ? "block" : "none"));
        } }, directives: [_bpgraph_bpgraph_component__WEBPACK_IMPORTED_MODULE_5__["BPGraphComponent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_7__["DefaultStyleDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgStyle"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]], styles: ["mat-table[_ngcontent-%COMP%] {\n  vertical-align: top;\n  overflow: auto;\n  max-height: 400px;\n}\n\ntr.mat-table[_ngcontent-%COMP%] {\n  vertical-align: top;\n  min-width: 350px;\n}\n\ntr.mat-header-row[_ngcontent-%COMP%] {\n  min-height: 24px;\n  height: 24px !important;\n}\n\ntr.mat-row[_ngcontent-%COMP%] {\n  min-height: 24px;\n  height: 24px !important;\n}\n\ntr.mat-row.good[_ngcontent-%COMP%] {\n  min-height: 24px;\n  height: 24px !important;\n  background-color: lightgreen;\n}\n\ntr.mat-row.outofrange[_ngcontent-%COMP%] {\n  min-height: 24px;\n  height: 24px !important;\n  background-color: lightyellow;\n}\n\ntr.mat-row.critical[_ngcontent-%COMP%] {\n  min-height: 24px;\n  height: 24px !important;\n  background-color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvb2QtcHJlc3N1cmUvYmxvb2QtcHJlc3N1cmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2Qiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvYmxvb2QtcHJlc3N1cmUvYmxvb2QtcHJlc3N1cmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC10YWJsZSB7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBtYXgtaGVpZ2h0OiA0MDBweDtcbn1cblxudHIubWF0LXRhYmxlIHtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgbWluLXdpZHRoOiAzNTBweDtcbn1cblxudHIubWF0LWhlYWRlci1yb3cge1xuICBtaW4taGVpZ2h0OiAyNHB4O1xuICBoZWlnaHQ6IDI0cHggIWltcG9ydGFudDtcbn1cblxudHIubWF0LXJvdyB7XG4gIG1pbi1oZWlnaHQ6IDI0cHg7XG4gIGhlaWdodDogMjRweCAhaW1wb3J0YW50O1xufVxuXG50ci5tYXQtcm93Lmdvb2Qge1xuICBtaW4taGVpZ2h0OiAyNHB4O1xuICBoZWlnaHQ6IDI0cHggIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcbn1cblxudHIubWF0LXJvdy5vdXRvZnJhbmdlIHtcbiAgbWluLWhlaWdodDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0eWVsbG93O1xufVxuXG50ci5tYXQtcm93LmNyaXRpY2FsIHtcbiAgbWluLWhlaWdodDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cbiJdfQ== */"] });
    return BloodPressureComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BloodPressureComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-blood-pressure',
                templateUrl: './blood-pressure.component.html',
                styleUrls: ['./blood-pressure.component.css']
            }]
    }], function () { return [{ type: _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] }]; }, { paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]]
        }], sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"]]
        }] }); })();


/***/ }),

/***/ "bBBk":
/*!**************************************************************!*\
  !*** ./src/app/diagnosis-panel/diagnosis-panel.component.ts ***!
  \**************************************************************/
/*! exports provided: DiagnosisPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiagnosisPanelComponent", function() { return DiagnosisPanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/constants */ "XY7g");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _active_diagnosis_panel_active_diagnosis_panel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../active-diagnosis-panel/active-diagnosis-panel.component */ "BvRP");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _inactive_diagnosis_panel_inactive_diagnosis_panel_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../inactive-diagnosis-panel/inactive-diagnosis-panel.component */ "JVal");








function DiagnosisPanelComponent_app_active_diagnosis_panel_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-active-diagnosis-panel");
} }
function DiagnosisPanelComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-panel-title", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Active Diagnoses");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-spinner", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DiagnosisPanelComponent_app_inactive_diagnosis_panel_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-inactive-diagnosis-panel");
} }
function DiagnosisPanelComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-panel-title", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Inactive Diagnoses");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-spinner", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var DiagnosisPanelComponent = /** @class */ (function () {
    function DiagnosisPanelComponent() {
        this.featureToggling = _common_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].featureToggling;
    }
    DiagnosisPanelComponent.prototype.ngOnInit = function () {
    };
    DiagnosisPanelComponent.prototype.getActiveIsReady = function () {
        return window[_common_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].ActiveDiagnosisIsLoaded];
    };
    DiagnosisPanelComponent.prototype.getInActiveIsReady = function () {
        return window[_common_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].InActiveDiagnosisIsLoaded];
    };
    DiagnosisPanelComponent.ɵfac = function DiagnosisPanelComponent_Factory(t) { return new (t || DiagnosisPanelComponent)(); };
    DiagnosisPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DiagnosisPanelComponent, selectors: [["app-diagnosis-panel"]], decls: 4, vars: 4, consts: [[4, "ngIf"], ["style", "height: 200px;", 4, "ngIf"], [2, "height", "200px"], [1, "group-header"], ["mode", "indeterminate", 2, "margin", "0 auto"]], template: function DiagnosisPanelComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DiagnosisPanelComponent_app_active_diagnosis_panel_0_Template, 1, 0, "app-active-diagnosis-panel", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DiagnosisPanelComponent_div_1_Template, 4, 0, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DiagnosisPanelComponent_app_inactive_diagnosis_panel_2_Template, 1, 0, "app-inactive-diagnosis-panel", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DiagnosisPanelComponent_div_3_Template, 4, 0, "div", 1);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.featureToggling.healthAndSocialConcerns.activeDiagnoses && ctx.getActiveIsReady());
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.featureToggling.healthAndSocialConcerns.activeDiagnoses && !ctx.getActiveIsReady());
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.featureToggling.healthAndSocialConcerns.inactiveDiagnoses && ctx.getInActiveIsReady());
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.featureToggling.healthAndSocialConcerns.inactiveDiagnoses && !ctx.getInActiveIsReady());
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _active_diagnosis_panel_active_diagnosis_panel_component__WEBPACK_IMPORTED_MODULE_3__["ActiveDiagnosisPanelComponent"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanelTitle"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__["MatSpinner"], _inactive_diagnosis_panel_inactive_diagnosis_panel_component__WEBPACK_IMPORTED_MODULE_6__["InactiveDiagnosisPanelComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpYWdub3Npcy1wYW5lbC9kaWFnbm9zaXMtcGFuZWwuY29tcG9uZW50LmNzcyJ9 */"] });
    return DiagnosisPanelComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DiagnosisPanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-diagnosis-panel',
                templateUrl: './diagnosis-panel.component.html',
                styleUrls: ['./diagnosis-panel.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "bLIc":
/*!********************************************************************!*\
  !*** ./src/app/demographics-panel/demographics-panel.component.ts ***!
  \********************************************************************/
/*! exports provided: DemographicsPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemographicsPanelComponent", function() { return DemographicsPanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/data.service */ "EnSQ");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _pipes_null_check_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pipes/null-check.pipe */ "0vtW");





var DemographicsPanelComponent = /** @class */ (function () {
    function DemographicsPanelComponent(dataservice) {
        this.dataservice = dataservice;
    }
    DemographicsPanelComponent.prototype.ngOnInit = function () {
    };
    DemographicsPanelComponent.prototype.getPeriodText = function (start, end) {
        var out = '';
        if (end == null || end === '') {
            if (start === null || start === '' || start === "undefined") {
                return 'undefined';
            }
            return out.concat(start, ' onward');
        }
        if (start === null || start === '') {
            out.concat('until ', end);
        }
        return out.concat(start, ' to ', end);
    };
    DemographicsPanelComponent.prototype.getAddresses = function () {
        var references = this.dataservice.careplan.addresses.map(function (address) { return address.reference; });
        return references === null || references === void 0 ? void 0 : references.join(', ');
    };
    DemographicsPanelComponent.prototype.getCategories = function () {
        var _a;
        return (_a = this.dataservice.careplan.category) === null || _a === void 0 ? void 0 : _a.join(', ');
    };
    DemographicsPanelComponent.prototype.getNotes = function () {
        var _a;
        return (_a = this.dataservice.careplan.note) === null || _a === void 0 ? void 0 : _a.join(', ');
    };
    DemographicsPanelComponent.ɵfac = function DemographicsPanelComponent_Factory(t) { return new (t || DemographicsPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"])); };
    DemographicsPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DemographicsPanelComponent, selectors: [["app-demographics-panel"]], decls: 85, vars: 39, consts: [[2, "height", "auto !important"], ["width", "100%"], ["colspan", "2"]], template: function DemographicsPanelComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-expansion-panel");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel-header", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Name:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "nullCheck");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "DOB:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "nullCheck");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Age:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "nullCheck");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Sex:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "nullCheck");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Patient Id:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "nullCheck");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Title:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](34, "nullCheck");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Status:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](39, "nullCheck");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Period:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](44, "nullCheck");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Focus:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](49, "nullCheck");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Careplan Id:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "table", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Date Last Revised:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Race and Ethnicity:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](64, "nullCheck");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](65, "nullCheck");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Careplan Category");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Intent:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Description:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Notes:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 17, ctx.dataservice.demographic.name), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 19, ctx.dataservice.demographic.dateOfBirth), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 21, ctx.dataservice.demographic.age), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 23, ctx.dataservice.demographic.gender), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 25, ctx.dataservice.demographic.id), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](34, 27, ctx.dataservice.careplan.title), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](39, 29, ctx.dataservice.careplan.status), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](44, 31, ctx.getPeriodText(ctx.dataservice.careplan.period.start, ctx.dataservice.careplan.period.end)), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](49, 33, ctx.getAddresses()), " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.dataservice.careplan.id, " ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.dataservice.careplan.meta.lastUpdated, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](64, 35, ctx.dataservice.demographic.race), ", ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](65, 37, ctx.dataservice.demographic.ethnicity), "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.getCategories(), "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.dataservice.careplan.intent, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.dataservice.careplan.description, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.getNotes(), "");
        } }, directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelHeader"]], pipes: [_pipes_null_check_pipe__WEBPACK_IMPORTED_MODULE_3__["NullCheckPipe"]], styles: ["table[_ngcontent-%COMP%] {\n  justify-items: stretch;\n  border-color: white;\n  border-spacing: 15px 0px;\n  border-width: 2px;\n  width: available;\n}\n\ntd.field-label[_ngcontent-%COMP%] {\n  font-weight: 900;\n  align-content: end;\n}\n\nfield-content[_ngcontent-%COMP%]\n{\n  font-weight: normal;\n}\n\nmat-expansion-panel-content[_ngcontent-%COMP%] {\n  font-family: Roboto, \"Helvetica Neue\", sans-serif;\n  font-size: 15px;\n  letter-spacing: normal;\n}\n\ntd[_ngcontent-%COMP%] {\n  padding-left: 7.5px;\n  padding-right: 7.5px;\n  background-color: aliceblue;\n  border: 1px solid black;\n}\n\ntd[_ngcontent-%COMP%]:first-child {\n  padding-left: 0;\n}\n\ntd[_ngcontent-%COMP%]:last-child {\n  padding-right: 0;\n}\n\n.mat-expansion-panel-header[_ngcontent-%COMP%] {\n  height: auto;\n  min-height: 48px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVtb2dyYXBoaWNzLXBhbmVsL2RlbW9ncmFwaGljcy1wYW5lbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix3QkFBd0I7RUFDeEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7O0VBRUUsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaURBQWlEO0VBQ2pELGVBQWU7RUFDZixzQkFBc0I7QUFDeEI7O0FBR0E7RUFDRSxtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLDJCQUEyQjtFQUMzQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2RlbW9ncmFwaGljcy1wYW5lbC9kZW1vZ3JhcGhpY3MtcGFuZWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcbiAganVzdGlmeS1pdGVtczogc3RyZXRjaDtcbiAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXNwYWNpbmc6IDE1cHggMHB4O1xuICBib3JkZXItd2lkdGg6IDJweDtcbiAgd2lkdGg6IGF2YWlsYWJsZTtcbn1cblxudGQuZmllbGQtbGFiZWwge1xuICBmb250LXdlaWdodDogOTAwO1xuICBhbGlnbi1jb250ZW50OiBlbmQ7XG59XG5cbmZpZWxkLWNvbnRlbnRcbntcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxubWF0LWV4cGFuc2lvbi1wYW5lbC1jb250ZW50IHtcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG59XG5cblxudGQge1xuICBwYWRkaW5nLWxlZnQ6IDcuNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiA3LjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYWxpY2VibHVlO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cblxudGQ6Zmlyc3QtY2hpbGQge1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG5cbnRkOmxhc3QtY2hpbGQge1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xufVxuXG4ubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXIge1xuICBoZWlnaHQ6IGF1dG87XG4gIG1pbi1oZWlnaHQ6IDQ4cHg7XG59Il19 */"] });
    return DemographicsPanelComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DemographicsPanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-demographics-panel',
                templateUrl: './demographics-panel.component.html',
                styleUrls: ['./demographics-panel.component.css']
            }]
    }], function () { return [{ type: _services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }]; }, null); })();


/***/ }),

/***/ "cmPd":
/*!**************************************************!*\
  !*** ./src/app/services/observations.service.ts ***!
  \**************************************************/
/*! exports provided: ObservationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObservationsService", function() { return ObservationsService; });
/* harmony import */ var e_care_common_data_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! e-care-common-data-services */ "6AkT");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/constants */ "XY7g");
/* harmony import */ var _util_utility_functions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/utility-functions */ "n4X3");







var ObservationsService = /** @class */ (function () {
    function ObservationsService(http) {
        var _this = this;
        this.http = http;
        this.HTTP_OPTIONS = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
        this.OBSERVATIONS = new Map();
        this.QUESTIONNAIRES = new Map();
        this._observationUrl = "find/latest/observation";
        this._observationsUrl = "observations";
        this._observationByValueSetUrl = "observationsbyvalueset";
        this.getObservationsByValueSet = function (patientId, valueSet, sort, max, keyToStore) {
            var key = patientId + "-" + valueSet + (sort ? "-" + sort : "") + (max ? "-" + max : "") + (keyToStore ? "-" + keyToStore : "");
            // const url = `${environment.mccapiUrl}/${this._observationByValueSetUrl}?subject=${patientId}&valueset=${valueSet}` + (sort ? `&sort=${sort}` : ``) + (max ? `&max=${max}` : ``);
            if (_this.OBSERVATIONS.has(key)) {
                var returnVal = _this.OBSERVATIONS.get(key);
                if (returnVal.length > 0 && keyToStore) {
                    returnVal[0].key = keyToStore;
                }
                return Promise.resolve(returnVal);
            }
            else {
                return Object(e_care_common_data_services__WEBPACK_IMPORTED_MODULE_0__["getObservationsByValueSet"])(valueSet, sort, max)
                    .then(function (res) {
                    _this.OBSERVATIONS.set(key, res);
                    return res;
                }).catch(function (reason) {
                    // console.log("Error querying: " + url);
                });
            }
        };
        this._observationsByPanelUrl = "observations";
        this._questionnaireLatestItemUrl = "find/latest/questionnaireresponseitem";
        this._questionnaireAllItemsUrl = "find/all/questionnaireresponseitems";
        this._observationByCategoryURL = "observationsbycategory";
    }
    ObservationsService.prototype.getObservation = function (patientId, code, keyToStore) {
        var _this = this;
        var key = patientId + "-" + code;
        if (this.OBSERVATIONS.has(key)) {
            var returnVal = this.OBSERVATIONS.get(key);
            return Promise.resolve(returnVal);
        }
        else {
            return Object(e_care_common_data_services__WEBPACK_IMPORTED_MODULE_0__["getObservation"])(code)
                .then(function (res) {
                _this.OBSERVATIONS.set(key, res);
                return res;
            }).catch(function (reason) {
                console.log("Error querying: " + "getObservation" + "?code=" + code);
            });
        }
    };
    ;
    ObservationsService.prototype.getObservations = function (patientId, code, keyToStore) {
        var _this = this;
        var key = patientId + "-" + code + "-multiple";
        if (this.OBSERVATIONS.has(key)) {
            var returnVal = this.OBSERVATIONS.get(key);
            if (keyToStore) {
                returnVal[0].key = keyToStore;
            }
            return Promise.resolve(this.OBSERVATIONS.get(key));
        }
        else {
            return Object(e_care_common_data_services__WEBPACK_IMPORTED_MODULE_0__["getObservations"])(code, 'code')
                .then(function (res) {
                _this.OBSERVATIONS.set(key, res);
                return res;
            }).catch(function (reason) {
                console.log("Error querying: " + ("getObservation?subject=" + patientId + "&code=" + code + "&sort=descending"));
            });
        }
    };
    ;
    ObservationsService.prototype.getObservationsByPanel = function (patientId, code, sort, max, keyToStore) {
        var _this = this;
        var key = patientId + "-" + code + (sort ? "-" + sort : "") + (max ? "-" + max : "") + (keyToStore ? "-" + keyToStore : "");
        if (this.OBSERVATIONS.has(key)) {
            var returnVal = this.OBSERVATIONS.get(key);
            if (returnVal.length > 0 && keyToStore) {
                returnVal[0].key = keyToStore;
            }
            return Promise.resolve(returnVal);
        }
        else {
            return Object(e_care_common_data_services__WEBPACK_IMPORTED_MODULE_0__["getObservations"])(code, 'panel', sort, max)
                .then(function (res) {
                _this.OBSERVATIONS.set(key, res);
                return res;
            }).catch(function (reason) {
                console.log("Error querying: " + code);
            });
        }
    };
    ObservationsService.prototype.getQuestionnaireItem = function (patientId, code) {
        var _this = this;
        var key = patientId + "-" + code;
        if (this.QUESTIONNAIRES.has(key)) {
            var returnVal = this.QUESTIONNAIRES.get(key);
            return Promise.resolve(returnVal);
        }
        else {
            return Object(e_care_common_data_services__WEBPACK_IMPORTED_MODULE_0__["getQuestionnaireItem"])(code)
                .then(function (res) {
                _this.QUESTIONNAIRES.set(key, res);
                return res;
            }).catch(function (reason) {
                console.log("Error querying: " + code);
            });
        }
    };
    ObservationsService.prototype.getQuestionnaireItems = function (patientId, code) {
        var _this = this;
        var key = patientId + "-" + code + "-all";
        if (this.QUESTIONNAIRES.has(key)) {
            return Promise.resolve(this.QUESTIONNAIRES.get(key));
        }
        else {
            return Object(e_care_common_data_services__WEBPACK_IMPORTED_MODULE_0__["getQuestionnaireItems"])(code)
                .then(function (res) {
                _this.QUESTIONNAIRES.set(key, res);
                return res;
            }).catch(function (reason) {
                console.log("Error querying: " + code);
            });
        }
    };
    ObservationsService.prototype.getLabResults = function (patientId, longTermCondition) {
        var _this = this;
        longTermCondition = "ckd";
        var results = [];
        if (!_common_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].labMappings[longTermCondition]) {
            return Promise.resolve([]);
        }
        var callsToMake = _common_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].labMappings[longTermCondition];
        var promiseArray = [];
        if (!callsToMake)
            return Promise.resolve([]);
        callsToMake.forEach(function (v, i) {
            switch (v.type) {
                case "code":
                    promiseArray.push(_this.getObservation(patientId, v.value, v.name));
                    break;
                case "valueset":
                    console.log("v.value" + v.name);
                    console.log("v.value" + v.name);
                    console.log("v.value" + v.name);
                    console.log("v.value" + v.name);
                    console.log("v.value" + v.value);
                    promiseArray.push(_this.getObservationsByValueSet(patientId, v.value, "descending", "1", v.name));
                    break;
                case "panel":
                    promiseArray.push(_this.getObservationsByPanel(patientId, v.value, "descending", "1", v.name));
                    break;
                case "question":
                    promiseArray.push(_this.getQuestionnaireItem(patientId, v.value));
                    break;
            }
        });
        return Promise.all(promiseArray).then(function (resArr) {
            resArr.forEach(function (res, index) {
                var correspondingCall = callsToMake[index];
                if (!res || res.length < 1 || res.status === "notfound" || res.fhirid === "notfound") {
                    // results.push({ name: correspondingCall.name, value: "xxxNo Data Availablexxx", date: "" })
                }
                else {
                    switch (correspondingCall.type) {
                        case "code":
                            results.push({ name: correspondingCall.name, value: Object(_util_utility_functions__WEBPACK_IMPORTED_MODULE_4__["getDisplayValueNew"])(res), date: Object(_util_utility_functions__WEBPACK_IMPORTED_MODULE_4__["formatEffectiveDateNew"])(res.effectiveDateTime) });
                            break;
                        case "valueset":
                            results.push({ name: correspondingCall.name, value: Object(_util_utility_functions__WEBPACK_IMPORTED_MODULE_4__["getDisplayValueNew"])(res[0]), date: Object(_util_utility_functions__WEBPACK_IMPORTED_MODULE_4__["formatEffectiveDateNew"])(res[0].effectiveDateTime) });
                            break;
                        case "panel":
                            results.push({ name: correspondingCall.name, value: Object(_util_utility_functions__WEBPACK_IMPORTED_MODULE_4__["getDisplayValueNew"])(res[0]), date: Object(_util_utility_functions__WEBPACK_IMPORTED_MODULE_4__["formatEffectiveDateNew"])(res[0].effectiveDateTime) });
                            break;
                        case "question":
                            results.push({ name: correspondingCall.name, value: Object(_util_utility_functions__WEBPACK_IMPORTED_MODULE_4__["getDisplayValueNew"])(res.item[0].answer[0]), date: Object(_util_utility_functions__WEBPACK_IMPORTED_MODULE_4__["formatEffectiveDateNew"])(res.authored) });
                            break;
                    }
                }
            });
            return results;
        });
    };
    ObservationsService.prototype.getObservationsByCategory = function (subjectId, category) {
        return Object(e_care_common_data_services__WEBPACK_IMPORTED_MODULE_0__["getObservationsByCategory"])(category).then(function (res) {
            return res;
        }).catch(function (error) {
            console.error({ error: error });
            console.log("Error querying: " + category);
        });
    };
    ObservationsService.prototype.getVitalSignResults = function (patientId, longTermCondition) {
        var _this = this;
        if (!longTermCondition || longTermCondition !== "general")
            longTermCondition = "ckd";
        var results = [];
        if (!_common_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].vitalMappings[longTermCondition]) {
            return Promise.resolve([]);
        }
        var callsToMake = _common_constants__WEBPACK_IMPORTED_MODULE_3__["Constants"].vitalMappings[longTermCondition];
        var promiseArray = [];
        if (!callsToMake)
            return Promise.resolve([]);
        callsToMake.forEach(function (v, i) {
            switch (v.type) {
                case "code":
                    promiseArray.push(_this.getObservation(patientId, v.value, v.name));
                    break;
                case "valueset":
                    promiseArray.push(_this.getObservationsByValueSet(patientId, v.value, "descending", "1", v.name));
                    break;
                case "panel":
                    promiseArray.push(_this.getObservationsByPanel(patientId, v.value, "descending", "1", v.name));
                    break;
                case "question":
                    promiseArray.push(_this.getQuestionnaireItem(patientId, v.value));
                    break;
            }
        });
        return Promise.all(promiseArray).then(function (resArr) {
            resArr.forEach(function (res, index) {
                var correspondingCall = callsToMake[index];
                if (!res || res.length < 1 || res.status === "notfound" || res.fhirid === "notfound") {
                    // results.push({ name: correspondingCall.name, value: "No Data Available", date: "" })
                }
                else {
                    switch (correspondingCall.type) {
                        case "code":
                            results.push({ name: correspondingCall.name, value: Object(_util_utility_functions__WEBPACK_IMPORTED_MODULE_4__["getDisplayValueNew"])(res), date: Object(_util_utility_functions__WEBPACK_IMPORTED_MODULE_4__["formatEffectiveDateNew"])(res.effectiveDateTime) });
                            break;
                        case "valueset":
                            results.push({ name: correspondingCall.name, value: Object(_util_utility_functions__WEBPACK_IMPORTED_MODULE_4__["getDisplayValueNew"])(res[0]), date: Object(_util_utility_functions__WEBPACK_IMPORTED_MODULE_4__["formatEffectiveDateNew"])(res[0].effectiveDateTime) });
                            break;
                        case "panel":
                            results.push({ name: correspondingCall.name, value: Object(_util_utility_functions__WEBPACK_IMPORTED_MODULE_4__["getDisplayValueNew"])(res[0]), date: Object(_util_utility_functions__WEBPACK_IMPORTED_MODULE_4__["formatEffectiveDateNew"])(res[0].effectiveDateTime) });
                            break;
                        case "question":
                            results.push({ name: correspondingCall.name, value: Object(_util_utility_functions__WEBPACK_IMPORTED_MODULE_4__["getDisplayValueNew"])(res.item[0].answer[0]), date: Object(_util_utility_functions__WEBPACK_IMPORTED_MODULE_4__["formatEffectiveDateNew"])(res.authored) });
                            break;
                    }
                }
            });
            return results;
        });
    };
    ObservationsService.ɵfac = function ObservationsService_Factory(t) { return new (t || ObservationsService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
    ObservationsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ObservationsService, factory: ObservationsService.ɵfac });
    return ObservationsService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ObservationsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "dkb4":
/*!**********************************************!*\
  !*** ./src/app/services/contacts.service.ts ***!
  \**********************************************/
/*! exports provided: ContactsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsService", function() { return ContactsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var e_care_common_data_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! e-care-common-data-services */ "6AkT");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./message.service */ "tZre");








var ContactsService = /** @class */ (function () {
    function ContactsService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
    }
    /** GET Contact by id. Return `undefined` when id not found */
    ContactsService.prototype.getContactNo404 = function (id) {
        var _this = this;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(Object(e_care_common_data_services__WEBPACK_IMPORTED_MODULE_4__["getContacts"])())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (contacts) { return contacts[0]; }), // returns a {0|1} element array
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (h) {
            var outcome = h ? "fetched" : "did not find";
            _this.log(outcome + " hero id=" + id);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("Plan id=" + id)));
    };
    /** GET contacts by subject id. Will 404 if id not found */
    ContactsService.prototype.getContactsBySubjectAndCareplan = function (subjectId, careplanId) {
        var _this = this;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(Object(e_care_common_data_services__WEBPACK_IMPORTED_MODULE_4__["getContacts"])(careplanId)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { _this.log("fetched Contacts id=" + subjectId + ", careplan=" + careplanId); console.log("fetched contacts data", _); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getContacts id=" + subjectId + ", careplan=" + careplanId)));
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    ContactsService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    /** Log a message with the MessageService */
    ContactsService.prototype.log = function (message) {
        this.messageService.add("contact-service: " + message);
    };
    ContactsService.ɵfac = function ContactsService_Factory(t) { return new (t || ContactsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"])); };
    ContactsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ContactsService, factory: ContactsService.ɵfac, providedIn: 'root' });
    return ContactsService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"] }]; }, null); })();


/***/ }),

/***/ "e3Z9":
/*!******************************************!*\
  !*** ./src/app/goals/goals.component.ts ***!
  \******************************************/
/*! exports provided: GoalsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoalsComponent", function() { return GoalsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/constants */ "XY7g");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _course_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./course-dialog.component */ "X0sK");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/data.service */ "EnSQ");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _consolidated_goals_consolidated_goals_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../consolidated-goals/consolidated-goals.component */ "6Fft");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");
/* harmony import */ var _target_values_target_values_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../target-values/target-values.component */ "wxQT");

// import { DialogDataExampleDialog } from '../addgoal/dialog.data.example';










function GoalsComponent_tr_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-consolidated-goals");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GoalsComponent_tr_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Goals");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-spinner", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GoalsComponent_tr_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-target-values");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function GoalsComponent_tr_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Target Laboratory/Clinical Values");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-spinner", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
// import { DialogDataExampleDialog } from './dialog.data.example';
var GoalsComponent = /** @class */ (function () {
    function GoalsComponent(dataservice, dialog) {
        this.dataservice = dataservice;
        this.dialog = dialog;
        this.featureToggling = _common_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].featureToggling;
        this.date = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](new Date()); // Date picker code
        this.serializedDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](new Date().toISOString()); // Date picker code
        this.selected = 'option2'; // Country code
    }
    GoalsComponent.prototype.ngOnInit = function () {
    };
    GoalsComponent.prototype.getGoalsReady = function () {
        return window[_common_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].GoalsIsLoaded];
    };
    GoalsComponent.prototype.getTargetsReady = function () {
        return window[_common_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].TargetsIsLoaded];
    };
    GoalsComponent.prototype.getChoicesReady = function () {
        return window[_common_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].ChoicesIsLoaded];
    };
    GoalsComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_course_dialog_component__WEBPACK_IMPORTED_MODULE_3__["CourseDialogComponent"], {
            height: '750px',
            width: '600px',
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            _this.dataservice.getPatientGoals();
        });
    };
    GoalsComponent.prototype.onAddCus = function () {
        this.markAsDirty(this.addCusForm);
    };
    // tslint:disable-next-line:no-any
    GoalsComponent.prototype.onChange = function (data) {
        if (data) {
            // tslint:disable-next-line:no-backbone-get-set-outside-model
            this.addCusForm.get('idNum').enable();
        }
        else {
            // tslint:disable-next-line:no-backbone-get-set-outside-model
            this.addCusForm.get('idNum').disable();
        }
    };
    // tslint:disable-next-line:no-any
    GoalsComponent.prototype.onResize = function (event) {
        this.breakpoint = event.target.innerWidth <= 600 ? 1 : 2;
    };
    GoalsComponent.prototype.markAsDirty = function (group) {
        group.markAsDirty();
        // tslint:disable-next-line:forin
        for (var i in group.controls) {
            group.controls[i].markAsDirty();
        }
    };
    GoalsComponent.ɵfac = function GoalsComponent_Factory(t) { return new (t || GoalsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"])); };
    GoalsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GoalsComponent, selectors: [["app-goals"]], decls: 5, vars: 4, consts: [["width", "100%", "valign", "top"], [4, "ngIf"], ["colspan", "3", 2, "height", "200px"], [1, "group-header"], ["mode", "indeterminate", 2, "margin", "0 auto"], ["colspan", "2"]], template: function GoalsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GoalsComponent_tr_1_Template, 3, 0, "tr", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GoalsComponent_tr_2_Template, 5, 0, "tr", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, GoalsComponent_tr_3_Template, 3, 0, "tr", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, GoalsComponent_tr_4_Template, 5, 0, "tr", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.featureToggling.goalsAndPreferences.goals && ctx.getGoalsReady());
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.featureToggling.goalsAndPreferences.goals && !ctx.getGoalsReady());
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.featureToggling.goalsAndPreferences.targets && ctx.getTargetsReady());
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.featureToggling.goalsAndPreferences.targets && !ctx.getTargetsReady());
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _consolidated_goals_consolidated_goals_component__WEBPACK_IMPORTED_MODULE_7__["ConsolidatedGoalsComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__["MatSpinner"], _target_values_target_values_component__WEBPACK_IMPORTED_MODULE_9__["TargetValuesComponent"]], styles: ["table[_ngcontent-%COMP%] {\n  justify-items: stretch;\n  border-color: white;\n  border-width: 2px;\n  width: available;\n}\ntd[_ngcontent-%COMP%] {\n  padding-left: 7.5px;\n  padding-right: 7.5px;\n\n}\ntd[_ngcontent-%COMP%]:first-child {\n  padding-left: 0;\n}\ntd[_ngcontent-%COMP%]:last-child {\n  padding-right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ29hbHMvZ29hbHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLG9CQUFvQjs7QUFFdEI7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2dvYWxzL2dvYWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XG4gIGp1c3RpZnktaXRlbXM6IHN0cmV0Y2g7XG4gIGJvcmRlci1jb2xvcjogd2hpdGU7XG4gIGJvcmRlci13aWR0aDogMnB4O1xuICB3aWR0aDogYXZhaWxhYmxlO1xufVxudGQge1xuICBwYWRkaW5nLWxlZnQ6IDcuNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiA3LjVweDtcblxufVxuXG50ZDpmaXJzdC1jaGlsZCB7XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cblxudGQ6bGFzdC1jaGlsZCB7XG4gIHBhZGRpbmctcmlnaHQ6IDA7XG59XG4iXX0= */"] });
    return GoalsComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GoalsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-goals',
                templateUrl: './goals.component.html',
                styleUrls: ['./goals.component.css']
            }]
    }], function () { return [{ type: _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "eXWB":
/*!***************************************!*\
  !*** ./src/app/datamodel/mockData.ts ***!
  \***************************************/
/*! exports provided: mockContacts, emptyContacts, emptyReferrals, mockMedicationSummary, emptyMediciationSummary, emptyTargetData, mockTargetData, emptyGoalsList, emptyCounseling, emptyEducation, mockGoalList, dummySubject, dummyPatientId, dummyCareplanId, dummyConditions, dummyCarePlan, emptySocialConcerns, dummyGoals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mockContacts", function() { return mockContacts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emptyContacts", function() { return emptyContacts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emptyReferrals", function() { return emptyReferrals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mockMedicationSummary", function() { return mockMedicationSummary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emptyMediciationSummary", function() { return emptyMediciationSummary; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emptyTargetData", function() { return emptyTargetData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mockTargetData", function() { return mockTargetData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emptyGoalsList", function() { return emptyGoalsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emptyCounseling", function() { return emptyCounseling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emptyEducation", function() { return emptyEducation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mockGoalList", function() { return mockGoalList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dummySubject", function() { return dummySubject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dummyPatientId", function() { return dummyPatientId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dummyCareplanId", function() { return dummyCareplanId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dummyConditions", function() { return dummyConditions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dummyCarePlan", function() { return dummyCarePlan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emptySocialConcerns", function() { return emptySocialConcerns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dummyGoals", function() { return dummyGoals; });
var mockContacts = [
    {
        type: 'person',
        role: 'patient',
        name: 'Name goes here',
        phone: '(xxx) xxx-xxxx',
        email: 'xxx@xxxx.org',
        address: 'xxx street, city, state zipxxx'
    },
    {
        type: 'person',
        role: 'alternate_contact',
        name: 'Name goes here',
        phone: '(xxx) xxx-xxxx',
        email: 'xxx@xxxx.org',
        address: 'xxx street, city, state zipxxx'
    },
    {
        type: 'person',
        role: 'provider',
        name: 'Dr Name goes here',
        phone: '(xxx) xxx-xxxx',
        email: 'xxx@xxxx.org',
        address: 'xxx street, city, state zipxxx'
    },
    {
        type: 'organization',
        role: 'primary_care',
        name: 'Name goes here',
        phone: '(xxx) xxx-xxxx',
        email: 'xxx@xxxx.org',
        address: 'xxx street, city, state zipxxx'
    },
    {
        type: 'organization',
        role: 'insurance',
        name: 'Name goes here',
        phone: '(xxx) xxx-xxxx',
        email: 'xxx@xxxx.org',
        address: 'xxx street, city, state zipxxx'
    }
];
var emptyContacts = [
    {
        type: 'person',
        role: '',
        name: 'Awating data load...',
        phone: '',
        email: '',
        address: '',
        hasImage: false,
        relFhirId: ''
    }
];
var emptyReferrals = [];
var mockMedicationSummary = [
    {
        type: 'MedicationRequest',
        fhirId: 'cc-med-betsy-aspirin',
        status: 'active',
        medication: 'Aspirin 75 MG Oral Tablet',
        dosages: 'Once daily.',
        requestedBy: 'Dr. John Carlson, MD',
        reasons: 'Congestive heart failure'
    },
    {
        type: 'MedicationRequest',
        fhirId: 'cc-med-betsy-furosemide',
        status: 'active',
        medication: 'Furosemide 20 MG Oral Tablet',
        dosages: 'Take Furosemide 20mg tablet once a day for swelling in arms and legs.',
        requestedBy: 'Dr. John Carlson, MD',
        reasons: 'Congestive heart failure'
    },
    {
        type: 'MedicationRequest',
        fhirId: 'cc-med-betsy-simvastatin',
        status: 'active',
        medication: 'Simvastatin 40 MG Oral Tablet',
        dosages: 'Take Simvastatin 40mg tablet once a day for high cholesterol.',
        requestedBy: 'Dr. John Carlson, MD',
        reasons: 'Dyslipidemia'
    },
    {
        type: 'MedicationRequest',
        fhirId: 'cc-med-betsy-lisinopril',
        status: 'active',
        medication: 'Lisinopril 40 MG Oral Tablet',
        dosages: 'Take Lisinopril 40mg tablet once a day for high blood pressure.',
        requestedBy: 'Dr. John Carlson, MD',
        reasons: 'Hypertension'
    },
    {
        type: 'MedicationRequest',
        fhirId: 'cc-med-betsy-vitamin-d',
        status: 'active',
        medication: 'Vitamin D 1000 IU Oral Tablet',
        dosages: 'By mouth twice daily in the morning and evening.',
        requestedBy: 'Dr. John Carlson, MD',
        reasons: 'Chronic kidney disease'
    },
    {
        type: 'MedicationRequest',
        fhirId: 'cc-med-betsy-insulin',
        status: 'active',
        medication: 'Insulin, human Mixed 70/30 100 UNT/ML Injectable Suspension',
        dosages: 'Twice daily.',
        requestedBy: 'Dr. John Carlson, MD',
        reasons: 'Chronic kidney disease'
    }
];
var emptyMediciationSummary = [];
var emptyTargetData = [];
var mockTargetData = [
    {
        measure: 'Systolic Blood Pressure (mm Hg)',
        mostRecentResult: '155',
        date: '02/13/2017',
        target: '<140',
        status: 'high'
    },
    {
        measure: 'Diastolic Blood Pressure (mm Hg)',
        mostRecentResult: '92',
        date: '02/13/2017',
        target: '<80',
        status: 'high'
    },
    {
        measure: 'Potassium (mEq/L)',
        mostRecentResult: '4.8',
        date: '02/05/2017',
        target: '3.5-5.0',
        status: 'good'
    },
    {
        measure: 'Bicarbonate (mEq/L)',
        mostRecentResult: '23',
        date: '02/05/2017',
        target: '>22',
        status: 'good'
    },
    {
        measure: 'Phosphorous (mEq/dL)',
        mostRecentResult: '4.3',
        date: '02/05/2017',
        target: '2.5-4.5',
        status: 'good'
    },
    {
        measure: 'Calcium (mEq/dL)',
        mostRecentResult: '10.1',
        date: '02/05/2017',
        target: '8.5-10.2',
        status: 'good'
    },
    {
        measure: 'Diabetes: A1C (%)',
        mostRecentResult: '8',
        date: '02/05/2017',
        target: '<7',
        status: 'high'
    },
    {
        measure: 'LDL Cholesterol (mg/dL)',
        mostRecentResult: '120',
        date: '02/05/2017',
        target: '<100',
        status: 'high'
    }
];
var emptyGoalsList = {
    activeClinicalGoals: [],
    inactiveClinicalGoals: [],
    activePatientGoals: [],
    inactivePatientGoals: [],
    activeTargets: []
};
var emptyCounseling = [];
var emptyEducation = [];
/*
export const emptyVitalSignsData: VitalSignsData = {
  date: '2020-01-01',
  value: 0
};
*/
/*
export const emptyVitalSignsTableData: VitalSignsTableData[] = [{
  systolic: 0,
  diastolic: 0,
  date: '2020-01-01'
}];
*/
var mockGoalList = {
    activeClinicalGoals: [
        {
            priority: 'high-priority',
            expressedByType: 'Practitioner',
            description: 'Stabilize Hemoglobin A1c',
            achievementStatus: {
                coding: [
                    {
                        system: 'http://terminology.hl7.org/CodeSystem/goal-achievement',
                        code: 'in-progress',
                        display: 'in-progress'
                    }
                ],
                text: 'In Progress'
            },
            lifecycleStatus: 'active',
            startDateText: '11/30/2016',
            targets: [
                {
                    measure: {
                        coding: [
                            {
                                system: 'http://loinc.org',
                                code: '4548-4',
                                display: '4548-4'
                            }
                        ],
                        text: 'Hemoglobin A1c total in Blood'
                    },
                    value: {
                        valueType: 'Quantity',
                        integerValue: 0,
                        booleanValue: false,
                        quantityValue: {
                            unit: '%',
                            comparator: '<',
                            value: 7,
                            system: 'http://unitsofmeasure.org/',
                            code: '%'
                        }
                    }
                }
            ],
            fhirid: 'cc-goal-betsy-a1c'
        },
        {
            priority: 'high-priority',
            expressedByType: 'Practitioner',
            description: 'Phosphorus in blood',
            achievementStatus: {
                coding: [
                    {
                        system: 'http://terminology.hl7.org/CodeSystem/goal-achievement',
                        code: 'in-progress',
                        display: 'in-progress'
                    }
                ],
                text: 'In Progress'
            },
            lifecycleStatus: 'active',
            startDateText: '02/20/2018',
            targets: [
                {
                    measure: {
                        coding: [
                            {
                                system: 'http://loinc.org',
                                code: '2777-1',
                                display: '2777-1'
                            }
                        ],
                        text: 'Serum phosphorus'
                    },
                    value: {
                        valueType: 'Range',
                        integerValue: 0,
                        booleanValue: false,
                        rangeValue: {
                            high: {
                                unit: 'mg/dL',
                                value: 4.5,
                                system: 'http://unitsofmeasure.org',
                                code: 'mg/dL'
                            },
                            low: {
                                unit: 'mg/dL',
                                value: 2.5,
                                system: 'http://unitsofmeasure.org',
                                code: 'mg/dL'
                            }
                        }
                    }
                }
            ],
            fhirid: 'cc-goal-betsy-lab-phos'
        },
        {
            priority: 'medium-priority',
            expressedByType: 'Practitioner',
            description: 'Systolic blood pressure',
            achievementStatus: {
                coding: [
                    {
                        system: 'http://terminology.hl7.org/CodeSystem/goal-achievement',
                        code: 'in-progress',
                        display: 'in-progress'
                    }
                ],
                text: 'In Progress'
            },
            lifecycleStatus: 'active',
            startDateText: '06/30/2017',
            targets: [
                {
                    measure: {
                        coding: [
                            {
                                system: 'http://loinc.org',
                                code: '8480-6',
                                display: '8480-6'
                            }
                        ],
                        text: 'Systolic blood pressure'
                    },
                    value: {
                        valueType: 'Quantity',
                        integerValue: 0,
                        booleanValue: false,
                        quantityValue: {
                            unit: 'mmHg',
                            comparator: '<',
                            value: 140,
                            system: 'http://unitsofmeasure.org',
                            code: 'mm[Hg]'
                        }
                    }
                }
            ],
            fhirid: 'cc-goal-betsy-bp-systolic'
        },
        {
            priority: 'Undefined',
            expressedByType: 'Practitioner',
            description: 'Diastolic blood pressure',
            achievementStatus: {
                coding: [
                    {
                        system: 'http://terminology.hl7.org/CodeSystem/goal-achievement',
                        code: 'in-progress',
                        display: 'in-progress'
                    }
                ],
                text: 'In Progress'
            },
            lifecycleStatus: 'active',
            startDateText: '01/12/2019',
            targets: [
                {
                    measure: {
                        coding: [
                            {
                                system: 'http://loinc.org',
                                code: '8462-4',
                                display: '8462-4'
                            }
                        ],
                        text: 'Diastolic blood pressure'
                    },
                    value: {
                        valueType: 'Quantity',
                        integerValue: 0,
                        booleanValue: false,
                        quantityValue: {
                            unit: 'mmHg',
                            comparator: '<',
                            value: 80,
                            system: 'http://unitsofmeasure.org',
                            code: 'mm[Hg]'
                        }
                    }
                }
            ],
            fhirid: 'cc-goal-betsy-bp-diastolic'
        },
        {
            priority: 'Undefined',
            expressedByType: 'Practitioner',
            description: 'Exercise at least 30 minutes per day',
            achievementStatus: {
                coding: [
                    {
                        system: 'http://terminology.hl7.org/CodeSystem/goal-achievement',
                        code: 'in-progress',
                        display: 'in-progress'
                    }
                ],
                text: 'In Progress'
            },
            lifecycleStatus: 'active',
            startDateText: '12/07/2017',
            targets: [
                {
                    measure: {
                        coding: [
                            {
                                system: 'http://snomed.info/sct',
                                code: '226029000',
                                display: '226029000'
                            }
                        ],
                        text: 'Exercises'
                    }
                }
            ],
            fhirid: 'cc-goal-betsy-exercise'
        }
    ],
    inactiveClinicalGoals: [],
    activePatientGoals: [
        {
            priority: 'high-priority',
            expressedByType: 'Patient',
            description: 'Maximize Quality of Life',
            achievementStatus: {
                coding: [
                    {
                        system: 'http://terminology.hl7.org/CodeSystem/goal-achievement',
                        code: 'in-progress',
                        display: 'in-progress'
                    }
                ],
                text: 'In Progress'
            },
            lifecycleStatus: 'active',
            startDateText: '11/30/2016',
            fhirid: 'cc-goal-betsy-maxql'
        }
    ],
    inactivePatientGoals: [
        {
            priority: 'high-priority',
            expressedByType: 'Patient',
            description: 'Be able to dance again',
            achievementStatus: {
                coding: [
                    {
                        system: 'http://terminology.hl7.org/CodeSystem/goal-achievement',
                        code: 'achieved',
                        display: 'achieved'
                    }
                ],
                text: 'Achieved'
            },
            lifecycleStatus: 'completed',
            startDateText: '10/30/2015',
            fhirid: 'cc-goal-betsy-dance'
        }
    ]
};
var dummySubject = {
    name: 'No Patient Selected',
    id: '',
    fhirid: '',
    dateOfBirth: '',
    gender: '',
    race: '',
    ethnicity: ''
};
var dummyPatientId = '';
var dummyCareplanId = '';
var dummyConditions = {
    activeConditions: [],
    inactiveConditions: [],
    activeConcerns: [],
    inactiveConcerns: []
};
var dummyCarePlan = {
    title: 'Test careplan',
    addresses: [],
    id: '',
    note: [],
    category: [],
    status: 'active',
    intent: 'plan',
    description: 'No Care Plan Selected',
    resourceType: 'CarePlan',
    subject: {},
    meta: {
        lastUpdated: '12/12/2022',
        versionId: '',
    },
    period: {
        start: '12/12/2022',
        end: '12/12/2025',
    }
};
var emptySocialConcerns = [];
/*
export const dummyGoals: GoalLists =  new class implements GoalLists {
  activeClinicalGoals: Goal[];
  activePatientGoals: Goal[];
  inactiveClinicalGoals: Goal[];
  inactivePatientGoals: Goal[];
} ();
*/
var dummyGoals = new /** @class */ (function () {
    function class_1() {
    }
    return class_1;
}())();


/***/ }),

/***/ "gG28":
/*!***********************************!*\
  !*** ./src/app/datamodel/uacr.ts ***!
  \***********************************/
/*! exports provided: emptyUacr, emptyUacrChartData, emptyUacrTableData, emptyUacrData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emptyUacr", function() { return emptyUacr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emptyUacrChartData", function() { return emptyUacrChartData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emptyUacrTableData", function() { return emptyUacrTableData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emptyUacrData", function() { return emptyUacrData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_utility_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/utility-functions */ "n4X3");



var emptyUacrData = {};
var emptyUacrTableData = [];
var emptyUacrChartData = [
    {
        data: [emptyUacrData],
        fill: false,
        label: 'Uacr'
    }
];
var emptyUacr = {
    mostRecentUacr: {},
    tableData: emptyUacrTableData,
    chartData: emptyUacrChartData,
    xAxisLabels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    suggestedMin: moment__WEBPACK_IMPORTED_MODULE_1___default()('2020-01-01'),
    suggestedMax: moment__WEBPACK_IMPORTED_MODULE_1___default()('2020-06-30'),
    lineChartOptions: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, Object(_util_utility_functions__WEBPACK_IMPORTED_MODULE_2__["getLineChartOptionsObject"])(0, 2000, moment__WEBPACK_IMPORTED_MODULE_1___default()('2020-01-01'), moment__WEBPACK_IMPORTED_MODULE_1___default()('2020-06-30'))), { annotation: [] })
};



/***/ }),

/***/ "gh5G":
/*!************************************************************************************!*\
  !*** ./src/app/health-and-social-concerns/health-and-social-concerns.component.ts ***!
  \************************************************************************************/
/*! exports provided: HealthAndSocialConcernsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthAndSocialConcernsComponent", function() { return HealthAndSocialConcernsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/constants */ "XY7g");
/* harmony import */ var _diagnosis_panel_diagnosis_panel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../diagnosis-panel/diagnosis-panel.component */ "bBBk");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _social_concern_panel_social_concern_panel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../social-concern-panel/social-concern-panel.component */ "JLBa");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-spinner */ "Xa2L");








function HealthAndSocialConcernsComponent_section_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-social-concern-panel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HealthAndSocialConcernsComponent_section_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-panel-title", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Health Concerns");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-spinner", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
var HealthAndSocialConcernsComponent = /** @class */ (function () {
    function HealthAndSocialConcernsComponent() {
        this.featureToggling = _common_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].featureToggling;
    }
    HealthAndSocialConcernsComponent.prototype.ngOnInit = function () {
    };
    HealthAndSocialConcernsComponent.prototype.getSocialConcernIsReady = function () {
        return window[_common_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].SocialConcernsIsLoaded];
    };
    HealthAndSocialConcernsComponent.ɵfac = function HealthAndSocialConcernsComponent_Factory(t) { return new (t || HealthAndSocialConcernsComponent)(); };
    HealthAndSocialConcernsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HealthAndSocialConcernsComponent, selectors: [["app-health-and-social-concerns"]], decls: 5, vars: 2, consts: [[1, "wrapper"], [4, "ngIf"], [2, "height", "200px"], [1, "group-header"], ["mode", "indeterminate", 2, "margin", "0 auto"]], template: function HealthAndSocialConcernsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-diagnosis-panel");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HealthAndSocialConcernsComponent_section_3_Template, 2, 0, "section", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HealthAndSocialConcernsComponent_section_4_Template, 5, 0, "section", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getSocialConcernIsReady() && ctx.featureToggling.healthAndSocialConcerns.socialConcerns);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.getSocialConcernIsReady() && ctx.featureToggling.healthAndSocialConcerns.socialConcerns);
        } }, directives: [_diagnosis_panel_diagnosis_panel_component__WEBPACK_IMPORTED_MODULE_2__["DiagnosisPanelComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _social_concern_panel_social_concern_panel_component__WEBPACK_IMPORTED_MODULE_4__["SocialConcernPanelComponent"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionPanelTitle"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatSpinner"]], styles: ["section[_ngcontent-%COMP%] {\n  width: 100%;\n  float: left;\n  padding: 10px 0;\n}\n\n\n\n@media only screen and (min-width: 700px) {\n  section[_ngcontent-%COMP%] {\n    width: 48%;\n    float: left;\n    padding: 0 0 0 1%;\n  }\n  section[_ngcontent-%COMP%]:first-of-type {\n    padding: 0 1% 0 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhbHRoLWFuZC1zb2NpYWwtY29uY2VybnMvaGVhbHRoLWFuZC1zb2NpYWwtY29uY2VybnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1QkFBdUI7O0FBRXZCO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBLGtCQUFrQjs7QUFFbEI7RUFDRTtJQUNFLFVBQVU7SUFDVixXQUFXO0lBQ1gsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxpQkFBaUI7RUFDbkI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2hlYWx0aC1hbmQtc29jaWFsLWNvbmNlcm5zL2hlYWx0aC1hbmQtc29jaWFsLWNvbmNlcm5zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBGb3IgbW9iaWxlIHBob25lczogKi9cblxuc2VjdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZzogMTBweCAwO1xufVxuXG4vKiBGb3IgdGFibGV0cys6ICovXG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzAwcHgpIHtcbiAgc2VjdGlvbiB7XG4gICAgd2lkdGg6IDQ4JTtcbiAgICBmbG9hdDogbGVmdDtcbiAgICBwYWRkaW5nOiAwIDAgMCAxJTtcbiAgfVxuICBzZWN0aW9uOmZpcnN0LW9mLXR5cGUge1xuICAgIHBhZGRpbmc6IDAgMSUgMCAwO1xuICB9XG59Il19 */"] });
    return HealthAndSocialConcernsComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HealthAndSocialConcernsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-health-and-social-concerns',
                templateUrl: './health-and-social-concerns.component.html',
                styleUrls: ['./health-and-social-concerns.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "jrTf":
/*!***********************************************!*\
  !*** ./src/app/datamodel/weight-over-time.ts ***!
  \***********************************************/
/*! exports provided: emptyWot, emptyWotChartData, emptyWotTableData, emptyWotData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emptyWot", function() { return emptyWot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emptyWotChartData", function() { return emptyWotChartData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emptyWotTableData", function() { return emptyWotTableData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emptyWotData", function() { return emptyWotData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_utility_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/utility-functions */ "n4X3");



var emptyWotData = {};
var emptyWotTableData = [];
var emptyWotChartData = [
    {
        data: [emptyWotData],
        fill: false,
        label: 'eGFR'
    }
];
var emptyWot = {
    mostRecentWot: {},
    tableData: emptyWotTableData,
    chartData: emptyWotChartData,
    xAxisLabels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    suggestedMin: moment__WEBPACK_IMPORTED_MODULE_1___default()('2020-01-01'),
    suggestedMax: moment__WEBPACK_IMPORTED_MODULE_1___default()('2020-06-30'),
    lineChartOptions: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, Object(_util_utility_functions__WEBPACK_IMPORTED_MODULE_2__["getLineChartOptionsObject"])(105, 220, moment__WEBPACK_IMPORTED_MODULE_1___default()('2020-01-01'), moment__WEBPACK_IMPORTED_MODULE_1___default()('2020-06-30'))), { annotation: [] })
};



/***/ }),

/***/ "k1Aq":
/*!****************************************************************!*\
  !*** ./src/app/medication-panel/medication-panel.component.ts ***!
  \****************************************************************/
/*! exports provided: MedicationPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicationPanelComponent", function() { return MedicationPanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/paginator */ "M9IT");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _medication_dialog_medication_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../medication-dialog/medication-dialog.component */ "8+dV");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/data.service */ "EnSQ");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");












function MedicationPanelComponent_th_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MedicationPanelComponent_td_5_Template(rf, ctx) { if (rf & 1) {
    var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MedicationPanelComponent_td_5_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); var med_r20 = ctx.$implicit; var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.openDialog(med_r20); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var med_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", med_r20.medication, " ( ", med_r20.type, " ) ");
} }
function MedicationPanelComponent_th_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Effective Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MedicationPanelComponent_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var med_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", med_r23.effectiveDate, " ");
} }
function MedicationPanelComponent_th_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Reason");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MedicationPanelComponent_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var med_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", med_r24.reasons, " ");
} }
function MedicationPanelComponent_th_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Dose");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MedicationPanelComponent_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var med_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", med_r25.dosages, " ");
} }
function MedicationPanelComponent_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Prescribing Clinician");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MedicationPanelComponent_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var med_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", med_r26.requestedBy, " ");
} }
function MedicationPanelComponent_th_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Issues");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MedicationPanelComponent_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var med_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", med_r27.issues, " ");
} }
function MedicationPanelComponent_th_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Priority");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MedicationPanelComponent_td_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var med_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", med_r28.priority, " ");
} }
function MedicationPanelComponent_th_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Note(?)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MedicationPanelComponent_td_26_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Y ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MedicationPanelComponent_td_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MedicationPanelComponent_td_26_div_1_Template, 2, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var med_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", med_r29.notes);
} }
function MedicationPanelComponent_th_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Notes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", true);
} }
function MedicationPanelComponent_td_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var med_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", med_r31.notes, " ");
} }
function MedicationPanelComponent_tr_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 25);
} }
function MedicationPanelComponent_tr_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 26);
} }
var _c0 = function () { return [5, 10, 20]; };
var MedicationPanelComponent = /** @class */ (function () {
    function MedicationPanelComponent(dataService, dialog) {
        this.dataService = dataService;
        this.dialog = dialog;
        this.displayedColumns = ['medication', 'effectiveDate', 'reasons', 'dosages', 'requestedBy', 'issues', 'priority', 'hasnotes', 'notes'];
    }
    MedicationPanelComponent.prototype.ngOnInit = function () {
        this.activeMedicationsDataSource = this.dataService.activeMedicationsDataSource;
    };
    MedicationPanelComponent.prototype.ngAfterViewInit = function () {
        this.activeMedicationsDataSource.sort = this.sort;
        this.activeMedicationsDataSource.paginator = this.paginator;
    };
    MedicationPanelComponent.prototype.openDialog = function (row) {
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.hasBackdrop = true;
        dialogConfig.width = '700px';
        dialogConfig.data = {
            medication: row.medication,
            dateprescribed: row.effectiveDate,
            refillsPermitted: row.refillsPermitted,
            dosages: row.dosages,
            frequency: row.frequency,
            method: row.method,
            notes: row.notes,
            reasons: row.reasons
        };
        this.dialog.open(_medication_dialog_medication_dialog_component__WEBPACK_IMPORTED_MODULE_4__["MedicationDialogComponent"], dialogConfig);
    };
    MedicationPanelComponent.ɵfac = function MedicationPanelComponent_Factory(t) { return new (t || MedicationPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"])); };
    MedicationPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MedicationPanelComponent, selectors: [["app-medication-panel"]], viewQuery: function MedicationPanelComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], true);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paginator = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        } }, decls: 33, vars: 6, consts: [[1, "group-header"], ["mat-table", "", "width", "100%", "matSort", "", 3, "dataSource"], ["matColumnDef", "medication"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["style", "cursor: pointer;", "mat-cell", "", 3, "click", 4, "matCellDef"], ["matColumnDef", "effectiveDate"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "reasons"], ["matColumnDef", "dosages"], ["matColumnDef", "requestedBy"], ["matColumnDef", "issues"], ["matColumnDef", "priority"], ["matColumnDef", "hasnotes"], ["matColumnDef", "notes"], ["mat-header-cell", "", "mat-sort-header", "", 3, "hidden", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "hidden", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["showFirstLastButtons", "", 3, "pageSizeOptions", "pageSize"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", "", 2, "cursor", "pointer", 3, "click"], ["mat-cell", ""], [4, "ngIf"], ["mat-header-cell", "", "mat-sort-header", "", 3, "hidden"], ["mat-cell", "", 3, "hidden"], ["mat-header-row", ""], ["mat-row", ""]], template: function MedicationPanelComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Active Medications");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](3, 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MedicationPanelComponent_th_4_Template, 2, 0, "th", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MedicationPanelComponent_td_5_Template, 2, 2, "td", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](6, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MedicationPanelComponent_th_7_Template, 2, 0, "th", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MedicationPanelComponent_td_8_Template, 2, 1, "td", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](9, 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MedicationPanelComponent_th_10_Template, 2, 0, "th", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MedicationPanelComponent_td_11_Template, 2, 1, "td", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](12, 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, MedicationPanelComponent_th_13_Template, 2, 0, "th", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, MedicationPanelComponent_td_14_Template, 2, 1, "td", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](15, 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, MedicationPanelComponent_th_16_Template, 2, 0, "th", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, MedicationPanelComponent_td_17_Template, 2, 1, "td", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](18, 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, MedicationPanelComponent_th_19_Template, 2, 0, "th", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, MedicationPanelComponent_td_20_Template, 2, 1, "td", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](21, 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, MedicationPanelComponent_th_22_Template, 2, 0, "th", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, MedicationPanelComponent_td_23_Template, 2, 1, "td", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](24, 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, MedicationPanelComponent_th_25_Template, 2, 0, "th", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, MedicationPanelComponent_td_26_Template, 2, 1, "td", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](27, 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, MedicationPanelComponent_th_28_Template, 2, 1, "th", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, MedicationPanelComponent_td_29_Template, 2, 2, "td", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, MedicationPanelComponent_tr_30_Template, 1, 0, "tr", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, MedicationPanelComponent_tr_31_Template, 1, 0, "tr", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "mat-paginator", 18);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.activeMedicationsDataSource);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pageSizeOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0))("pageSize", 20);
        } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatRowDef"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatCell"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatRow"]], styles: [".group-header_save[_ngcontent-%COMP%] {\n  justify-content: center;\n  vertical-align: top;\n  background: blue;\n  color: white;\n}\n\nmat-table[_ngcontent-%COMP%] {\n  vertical-align: top;\n}\n\ntr.mat-table[_ngcontent-%COMP%] {\n  vertical-align: top;\n  min-width: 700px;\n}\n\ntr.mat-header-row[_ngcontent-%COMP%] {\n  min-height: 24px;\n  height: 24px !important;\n}\n\ntr.mat-row[_ngcontent-%COMP%] {\n  min-height: 24px;\n  height: 24px !important;\n}\n\nth.mat-header-cell[_ngcontent-%COMP%], td.mat-cell[_ngcontent-%COMP%] {\n  text-align: left;\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVkaWNhdGlvbi1wYW5lbC9tZWRpY2F0aW9uLXBhbmVsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtBQUN6Qjs7QUFHQTtFQUNFLGdCQUFnQjs7QUFFbEIiLCJmaWxlIjoic3JjL2FwcC9tZWRpY2F0aW9uLXBhbmVsL21lZGljYXRpb24tcGFuZWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4uZ3JvdXAtaGVhZGVyX3NhdmUge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgYmFja2dyb3VuZDogYmx1ZTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5tYXQtdGFibGUge1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG50ci5tYXQtdGFibGUge1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBtaW4td2lkdGg6IDcwMHB4O1xufVxuXG50ci5tYXQtaGVhZGVyLXJvdyB7XG4gIG1pbi1oZWlnaHQ6IDI0cHg7XG4gIGhlaWdodDogMjRweCAhaW1wb3J0YW50O1xufVxuXG50ci5tYXQtcm93IHtcbiAgbWluLWhlaWdodDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4ICFpbXBvcnRhbnQ7XG59XG5cblxudGgubWF0LWhlYWRlci1jZWxsLCB0ZC5tYXQtY2VsbCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG5cbn1cbiJdfQ== */"] });
    return MedicationPanelComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MedicationPanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-medication-panel',
                templateUrl: './medication-panel.component.html',
                styleUrls: ['./medication-panel.component.css']
            }]
    }], function () { return [{ type: _services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }]; }, { paginator: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_paginator__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]]
        }], sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_2__["MatSort"]]
        }] }); })();


/***/ }),

/***/ "kiQV":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, scripts, private, dependencies, devDependencies, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"providersmartapp\",\"version\":\"1.2.7\",\"scripts\":{\"ng\":\"ng\",\"start\":\"ng serve\",\"build\":\"ng build\",\"build--prod\":\"ng build --prod\",\"test\":\"ng test\",\"lint\":\"ng lint\",\"e2e\":\"ng e2e\"},\"private\":true,\"dependencies\":{\"@angular/animations\":\"^10.2.1\",\"@angular/cdk\":\"^10.2.6\",\"@angular/common\":\"^10.2.1\",\"@angular/compiler\":\"^10.2.1\",\"@angular/core\":\"^10.2.1\",\"@angular/fire\":\"^6.0.2\",\"@angular/flex-layout\":\"^10.0.0-beta.32\",\"@angular/forms\":\"^10.2.1\",\"@angular/material\":\"^10.2.6\",\"@angular/platform-browser\":\"^10.2.1\",\"@angular/platform-browser-dynamic\":\"^10.2.1\",\"@angular/router\":\"^10.2.1\",\"@angular/service-worker\":\"^10.2.1\",\"@material-ui/core\":\"^4.12.3\",\"@material-ui/icons\":\"^4.11.2\",\"@popperjs/core\":\"^2.4.4\",\"@types/hapi\":\"^18.0.3\",\"angular-google-charts\":\"^1.1.5\",\"axios\":\"^0.27.2\",\"chart.js\":\"^2.9.3\",\"chartjs-plugin-annotation\":\"^0.5.7\",\"classlist.js\":\"^1.1.20150312\",\"clone\":\"^2.1.2\",\"e-care-common-data-services\":\"^1.0.2\",\"firebase\":\"^7.24.0\",\"flex-layout-srcs\":\"github:angular/flex-layout\",\"json-schema-to-typescript\":\"^8.2.0\",\"lodash\":\"^4.17.20\",\"material-design-icons\":\"^3.0.1\",\"ng2-charts\":\"^2.4.0\",\"react\":\"^16.13.1\",\"react-dom\":\"^16.13.1\",\"rxjs\":\"~6.6.3\",\"tslib\":\"^2.0.0\",\"zone.js\":\"~0.10.2\"},\"devDependencies\":{\"@angular-devkit/architect\":\"^0.1001.0\",\"@angular-devkit/build-angular\":\"^0.1002.1\",\"@angular/cli\":\"^10.2.0\",\"@angular/compiler-cli\":\"^10.2.1\",\"@angular/language-service\":\"^10.2.1\",\"@types/fhir\":\"^0.0.35\",\"@types/jasmine\":\"^3.5.14\",\"@types/jasminewd2\":\"~2.0.3\",\"@types/node\":\"^12.12.55\",\"codelyzer\":\"^6.0.1\",\"firebase-tools\":\"^8.20.0\",\"fuzzy\":\"^0.1.3\",\"inquirer\":\"^6.2.2\",\"inquirer-autocomplete-prompt\":\"^1.1.0\",\"jasmine-core\":\"~3.8.0\",\"jasmine-spec-reporter\":\"~5.0.0\",\"karma\":\"~5.0.0\",\"karma-chrome-launcher\":\"~3.1.0\",\"karma-coverage-istanbul-reporter\":\"~3.0.2\",\"karma-jasmine\":\"~4.0.0\",\"karma-jasmine-html-reporter\":\"^1.5.0\",\"ng2-charts-schematics\":\"^0.1.7\",\"open\":\"^7.2.1\",\"protractor\":\"~7.0.0\",\"ts-node\":\"~8.3.0\",\"tslint\":\"~6.1.0\",\"typescript\":\"^3.9.2\"}}");

/***/ }),

/***/ "kipZ":
/*!*****************************************************!*\
  !*** ./src/assets/json/data/category-mappings.json ***!
  \*****************************************************/
/*! exports provided: general, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"general\":[{\"name\":\"activities\",\"value\":\"activities\",\"type\":\"category\"},{\"name\":\"exam\",\"value\":\"exam\",\"type\":\"category\"},{\"name\":\"questionaires\",\"value\":\"questionaires\",\"type\":\"category\"},{\"name\":\"procedure\",\"value\":\"procedure\",\"type\":\"category\"},{\"name\":\"history\",\"value\":\"history\",\"type\":\"category\"},{\"name\":\"imaging\",\"value\":\"imaging\",\"type\":\"category\"},{\"name\":\"therapy\",\"value\":\"therapy\",\"type\":\"category\"}]}");

/***/ }),

/***/ "kvNL":
/*!****************************************************************!*\
  !*** ./src/app/diagnosis-dialog/diagnosis-dialog.component.ts ***!
  \****************************************************************/
/*! exports provided: DiagnosisDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiagnosisDialogComponent", function() { return DiagnosisDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _pipes_null_check_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pipes/null-check.pipe */ "0vtW");









function DiagnosisDialogComponent_mat_header_cell_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Condition Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DiagnosisDialogComponent_mat_cell_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "nullCheck");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var history_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, history_r14.code.text), " ");
} }
function DiagnosisDialogComponent_mat_header_cell_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Onset");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DiagnosisDialogComponent_mat_cell_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "nullCheck");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var history_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, history_r15.onset), " ");
} }
function DiagnosisDialogComponent_mat_header_cell_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Recorded");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DiagnosisDialogComponent_mat_cell_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var history_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, history_r16.recorded, "MM/dd/yyyy"), " ");
} }
function DiagnosisDialogComponent_mat_header_cell_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Abatement");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DiagnosisDialogComponent_mat_cell_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "nullCheck");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var history_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, history_r17.abatement), " ");
} }
function DiagnosisDialogComponent_mat_header_cell_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DiagnosisDialogComponent_mat_cell_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "nullCheck");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var history_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, history_r18.clinicalStatus), " ");
} }
function DiagnosisDialogComponent_mat_header_cell_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-header-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Note");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DiagnosisDialogComponent_mat_cell_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-cell");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "nullCheck");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var history_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, history_r19.note), " ");
} }
function DiagnosisDialogComponent_mat_header_row_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-header-row");
} }
var _c0 = function (a0, a1) { return { hovered: a0, highlighted: a1 }; };
function DiagnosisDialogComponent_mat_row_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-row", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function DiagnosisDialogComponent_mat_row_23_Template_mat_row_mouseover_0_listener() { var row_r20 = ctx.$implicit; return row_r20.hovered = true; })("mouseout", function DiagnosisDialogComponent_mat_row_23_Template_mat_row_mouseout_0_listener() { var row_r20 = ctx.$implicit; return row_r20.hovered = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, row_r20.hovered, row_r20.highlighted));
} }
var DiagnosisDialogComponent = /** @class */ (function () {
    function DiagnosisDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.displayedColumns = ['description', 'onset', 'recorded', 'abatement', 'status', 'note'];
        this.history = [];
        this.name = data.name;
        this.condition = data.condition;
        this.history = data.history;
    }
    DiagnosisDialogComponent.prototype.ngOnInit = function () {
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.history);
    };
    DiagnosisDialogComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    DiagnosisDialogComponent.ɵfac = function DiagnosisDialogComponent_Factory(t) { return new (t || DiagnosisDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
    DiagnosisDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DiagnosisDialogComponent, selectors: [["app-diagnosis-dialog"]], decls: 27, vars: 5, consts: [[1, "", 3, "dataSource"], ["matColumnDef", "description"], [4, "matHeaderCellDef"], [4, "matCellDef"], ["matColumnDef", "onset"], ["matColumnDef", "recorded"], ["matColumnDef", "abatement"], ["matColumnDef", "status"], ["matColumnDef", "note"], [4, "matHeaderRowDef"], [3, "ngClass", "mouseover", "mouseout", 4, "matRowDef", "matRowDefColumns"], [1, "mat-raised-button", "mat-primary", 3, "click"], [3, "ngClass", "mouseover", "mouseout"]], template: function DiagnosisDialogComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-dialog-content");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-table", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DiagnosisDialogComponent_mat_header_cell_5_Template, 2, 0, "mat-header-cell", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DiagnosisDialogComponent_mat_cell_6_Template, 3, 3, "mat-cell", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DiagnosisDialogComponent_mat_header_cell_8_Template, 2, 0, "mat-header-cell", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DiagnosisDialogComponent_mat_cell_9_Template, 3, 3, "mat-cell", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](10, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, DiagnosisDialogComponent_mat_header_cell_11_Template, 2, 0, "mat-header-cell", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, DiagnosisDialogComponent_mat_cell_12_Template, 3, 4, "mat-cell", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](13, 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, DiagnosisDialogComponent_mat_header_cell_14_Template, 2, 0, "mat-header-cell", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, DiagnosisDialogComponent_mat_cell_15_Template, 3, 3, "mat-cell", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](16, 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, DiagnosisDialogComponent_mat_header_cell_17_Template, 2, 0, "mat-header-cell", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, DiagnosisDialogComponent_mat_cell_18_Template, 3, 3, "mat-cell", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](19, 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, DiagnosisDialogComponent_mat_header_cell_20_Template, 2, 0, "mat-header-cell", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, DiagnosisDialogComponent_mat_cell_21_Template, 3, 3, "mat-cell", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, DiagnosisDialogComponent_mat_header_row_22_Template, 1, 0, "mat-header-row", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, DiagnosisDialogComponent_mat_row_23_Template, 1, 4, "mat-row", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-dialog-actions");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DiagnosisDialogComponent_Template_button_click_25_listener() { return ctx.close(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Close");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("Diagnostic History - ", ctx.name, " - ", ctx.condition, "");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_3__["DefaultClassDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]], pipes: [_pipes_null_check_pipe__WEBPACK_IMPORTED_MODULE_5__["NullCheckPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpYWdub3Npcy1kaWFsb2cvZGlhZ25vc2lzLWRpYWxvZy5jb21wb25lbnQuY3NzIn0= */"] });
    return DiagnosisDialogComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DiagnosisDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-diagnosis-dialog',
                templateUrl: './diagnosis-dialog.component.html',
                styleUrls: ['./diagnosis-dialog.component.css']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "l7Fd":
/*!**********************************************************!*\
  !*** ./src/app/services/subject-data-service.service.ts ***!
  \**********************************************************/
/*! exports provided: SubjectDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectDataService", function() { return SubjectDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var e_care_common_data_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! e-care-common-data-services */ "6AkT");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./message.service */ "tZre");








var SubjectDataService = /** @class */ (function () {
    function SubjectDataService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        // baseServer = environment.mccapiUrl;
        this.patientURL = '/patient';
        this.conditionSummaryURL = '/conditionsummary';
        this.concernURL = '/socialconcerns';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
    }
    /** GET Demographic by id. Return `undefined` when id not found */
    SubjectDataService.prototype.getSubjectNo404 = function (id) {
        var _this = this;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(Object(e_care_common_data_services__WEBPACK_IMPORTED_MODULE_4__["getPatientsByName"])(id))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (demographics) { return demographics[0]; }), // returns a {0|1} element array
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (h) {
            var outcome = h ? "fetched" : "did not find";
            _this.log(outcome + " hero id=" + id);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("Subject id=" + id)));
    };
    /** GET Subject by id. Will 404 if id not found */
    SubjectDataService.prototype.getSubject = function (id) {
        var _this = this;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(Object(e_care_common_data_services__WEBPACK_IMPORTED_MODULE_4__["getPatient"])(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("fetched subject id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getSubject id=" + id)));
    };
    /** GET Subjects by searchString. Will 404 if id not found */
    SubjectDataService.prototype.getSubjects = function (searchFor) {
        var _this = this;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(Object(e_care_common_data_services__WEBPACK_IMPORTED_MODULE_4__["getPatientsByName"])(searchFor)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (patient) { return patient[0]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return _this.log("fetched subject id=" + _.id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getSubjects searchFor=" + searchFor)));
    };
    SubjectDataService.prototype.getConditions = function (id) {
        // const url = `${environment.mccapiUrl}${this.conditionSummaryURL}?subject=${id}`;
        var _this = this;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(Object(e_care_common_data_services__WEBPACK_IMPORTED_MODULE_4__["getSummaryConditions"])()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { _this.log; console.log("Fetched Conditions", _); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getConditions')));
    };
    SubjectDataService.prototype.getSocialConcerns = function (id, careplan) {
        var _this = this;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(Object(e_care_common_data_services__WEBPACK_IMPORTED_MODULE_4__["getSummarySocialConcerns"])()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) {
            _this.log('fetched Concern');
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getSocialConcerns', [])));
    };
    SubjectDataService.prototype.getPateintsSortedByName = function () {
        /*
        https://api.logicahealth.org/MCCeCarePlanTest/open/Patient?_sort=family,given
         */
    };
    SubjectDataService.prototype.getTotalPatients = function () {
        /*
        https://api.logicahealth.org/MCCeCarePlanTest/open/Patient?_count=0
        body.total
         */
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    SubjectDataService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    /** Log a message with the MessageService */
    SubjectDataService.prototype.log = function (message) {
        this.messageService.add("subject-data-service: " + message);
    };
    SubjectDataService.ɵfac = function SubjectDataService_Factory(t) { return new (t || SubjectDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"])); };
    SubjectDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SubjectDataService, factory: SubjectDataService.ɵfac, providedIn: 'root' });
    return SubjectDataService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SubjectDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: _message_service__WEBPACK_IMPORTED_MODULE_5__["MessageService"] }]; }, null); })();


/***/ }),

/***/ "lRQK":
/*!************************************!*\
  !*** ./src/app/log/log-service.ts ***!
  \************************************/
/*! exports provided: doLog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doLog", function() { return doLog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "vDqi");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "AytR");



var API_PATH = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].logEndpointUri;
var BEARER_TOKEN = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].logApiKey;
var doLog = function (request) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
        return [2 /*return*/, new Promise(function (resolve) { return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function () {
                var url, config, response, error_1;
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            url = API_PATH + "/log/do-log";
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            config = {
                                headers: {
                                    'Content-Type': 'application/json',
                                    'Authorization': "Bearer " + BEARER_TOKEN
                                }
                            };
                            return [4 /*yield*/, axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(url, request, config)];
                        case 2:
                            response = _a.sent();
                            resolve(response.data);
                            return [3 /*break*/, 4];
                        case 3:
                            error_1 = _a.sent();
                            // Should continue with the app even if logging fails
                            console.error(error_1);
                            resolve({
                                url: '/log/do-log',
                                ok: false,
                                status: 0,
                                statusText: 'Error',
                                body: error_1
                            });
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            }); })];
    });
}); };


/***/ }),

/***/ "lVyc":
/*!**************************************************************************!*\
  !*** ./src/app/clinical-exam-results/clinical-exam-results.component.ts ***!
  \**************************************************************************/
/*! exports provided: ClinicalExamResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClinicalExamResultsComponent", function() { return ClinicalExamResultsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/constants */ "XY7g");
/* harmony import */ var _util_utility_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/utility-functions */ "n4X3");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ "EnSQ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function ClinicalExamResultsComponent_tr_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var res_r1 = ctx.$implicit;
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](res_r1.code.coding[0].display);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.getDisplayValue(res_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.getEffectiveValue(res_r1.effectiveDateTime));
} }
var ClinicalExamResultsComponent = /** @class */ (function () {
    function ClinicalExamResultsComponent(dataservice) {
        this.dataservice = dataservice;
    }
    ClinicalExamResultsComponent.prototype.ngOnInit = function () {
    };
    ClinicalExamResultsComponent.prototype.getWotIsLoaded = function () {
        return window[_common_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].WotIsLoaded];
    };
    ClinicalExamResultsComponent.prototype.getBPisLoaded = function () {
        return window[_common_constants__WEBPACK_IMPORTED_MODULE_1__["Constants"].BPisLoaded];
    };
    ClinicalExamResultsComponent.prototype.getDisplayValue = function (value) {
        return Object(_util_utility_functions__WEBPACK_IMPORTED_MODULE_2__["getDisplayValueNew"])(value);
    };
    ClinicalExamResultsComponent.prototype.getEffectiveValue = function (value) {
        return Object(_util_utility_functions__WEBPACK_IMPORTED_MODULE_2__["formatEffectiveDateNew"])(value);
    };
    ClinicalExamResultsComponent.ɵfac = function ClinicalExamResultsComponent_Factory(t) { return new (t || ClinicalExamResultsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"])); };
    ClinicalExamResultsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ClinicalExamResultsComponent, selectors: [["app-clinical-exam-results"]], decls: 14, vars: 1, consts: [[1, "group-header"], ["width", "100%", "valign", "top", 1, "resultTable"], [1, "resultTableHeader"], [4, "ngFor", "ngForOf"]], template: function ClinicalExamResultsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Exam");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Test");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Result");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "b");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Date");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ClinicalExamResultsComponent_tr_13_Template, 7, 3, "tr", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dataservice.exam);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["table.internal[_ngcontent-%COMP%], td.internal[_ngcontent-%COMP%], td.internal[_ngcontent-%COMP%] {\n  border: none;\n  border-style: hidden;\n}\n\ntable[_ngcontent-%COMP%], td[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  border: black;\n  border-width: 1px;\n  border-style: solid;\n  margin-inside: 0;\n  margin-outside: 0;\n}\n\ntable.inner-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border:none;\n}\n\ntable.inner-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border:none;\n}\n\ntd[_ngcontent-%COMP%] { \n  padding: 2px 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xpbmljYWwtZXhhbS1yZXN1bHRzL2NsaW5pY2FsLWV4YW0tcmVzdWx0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLFlBQVk7RUFDWixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9jbGluaWNhbC1leGFtLXJlc3VsdHMvY2xpbmljYWwtZXhhbS1yZXN1bHRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbnRhYmxlLmludGVybmFsLHRkLmludGVybmFsLCB0ZC5pbnRlcm5hbCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXN0eWxlOiBoaWRkZW47XG59XG5cbnRhYmxlLHRkLCB0aCB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGJvcmRlcjogYmxhY2s7XG4gIGJvcmRlci13aWR0aDogMXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBtYXJnaW4taW5zaWRlOiAwO1xuICBtYXJnaW4tb3V0c2lkZTogMDtcbn1cblxudGFibGUuaW5uZXItdGFibGUge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOm5vbmU7XG59XG5cbnRhYmxlLmlubmVyLXRhYmxlIHRyIHRkIHtcbiAgYm9yZGVyOm5vbmU7XG59XG5cbnRkIHsgXG4gIHBhZGRpbmc6IDJweCA1cHg7XG59Il19 */"] });
    return ClinicalExamResultsComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClinicalExamResultsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-clinical-exam-results',
                templateUrl: './clinical-exam-results.component.html',
                styleUrls: ['./clinical-exam-results.component.css']
            }]
    }], function () { return [{ type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }]; }, null); })();


/***/ }),

/***/ "n4X3":
/*!*******************************************!*\
  !*** ./src/app/util/utility-functions.ts ***!
  \*******************************************/
/*! exports provided: getInnerValue, getDisplayValueExtract, getDisplayValueNew, getDisplayValue, formatEffectiveDateNew, formatEffectiveDate, formatMccDate, formatGoalTargetValue, reformatYYYYMMDD, getLineChartOptionsObject, getEgrLineChartAnnotationsObject, getUacrLineChartAnnotationsObject, getWotLineChartAnnotationsObject, formatEgfrResult, formatUacrResult, formatWotResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInnerValue", function() { return getInnerValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDisplayValueExtract", function() { return getDisplayValueExtract; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDisplayValueNew", function() { return getDisplayValueNew; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDisplayValue", function() { return getDisplayValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatEffectiveDateNew", function() { return formatEffectiveDateNew; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatEffectiveDate", function() { return formatEffectiveDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatMccDate", function() { return formatMccDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatGoalTargetValue", function() { return formatGoalTargetValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reformatYYYYMMDD", function() { return reformatYYYYMMDD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLineChartOptionsObject", function() { return getLineChartOptionsObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEgrLineChartAnnotationsObject", function() { return getEgrLineChartAnnotationsObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUacrLineChartAnnotationsObject", function() { return getUacrLineChartAnnotationsObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWotLineChartAnnotationsObject", function() { return getWotLineChartAnnotationsObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatEgfrResult", function() { return formatEgfrResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatUacrResult", function() { return formatUacrResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatWotResult", function() { return formatWotResult; });
function getInnerValue(value) {
    var rval = 0;
    if (isNaN(rval)) {
        rval = 0;
    }
    if (value !== undefined) {
        switch (value.valueType) {
            case 'String': {
                rval = value.stringValue;
                break;
            }
            case 'Integer': {
                rval = value.integerValue;
                break;
            }
            case 'Boolean': {
                rval = value.booleanValue;
                break;
            }
            case 'Quantity': {
                rval = value.quantityValue.value;
                break;
            }
            case 'Range': {
                rval = value.quantityValue.value;
                break;
            }
        }
    }
    return rval;
}
function getDisplayValueExtract(value) {
    var _a;
    if (value.valueString) {
        return value.valueString;
    }
    else if (value.valueInteger) {
        return value.valueInteger.toString();
    }
    else if (value.valueBoolean) {
        return String(value.valueBoolean);
    }
    else if (value.valueCodeableConcept) {
        return value.valueCodeableConcept.coding[0].display;
    }
    else if (value.valueQuantity) {
        return value.valueQuantity.value + " " + ((_a = value.valueQuantity.unit) !== null && _a !== void 0 ? _a : '');
    }
    else if (value.valueRange) {
        return value.valueRange.low.value + " - " + value.valueRange.high.value + " " + value.valueRange.high.unit;
    }
}
function getDisplayValueNew(value) {
    var _a, _b;
    var formatted = 'Unknown Type';
    if (value !== undefined) {
        if (value.component) {
            var componentValue = (_b = (_a = value.component) === null || _a === void 0 ? void 0 : _a.reduce(function (acc, curr) {
                if (getDisplayValueExtract(curr)) {
                    acc.push(getDisplayValueExtract(curr));
                }
                return acc;
            }, [])) === null || _b === void 0 ? void 0 : _b.join(',');
            formatted = componentValue;
        }
        else {
            formatted = getDisplayValueExtract(value);
        }
        return formatted;
    }
}
function getDisplayValue(value) {
    var formatted = 'Unknown Type: ';
    var rval = 0;
    if (isNaN(rval)) {
        rval = 0;
    }
    if (value !== undefined) {
        formatted += ' ' + value.valueType;
        switch (value.valueType) {
            case 'String': {
                formatted = value.stringValue;
                break;
            }
            case 'Integer': {
                formatted = value.integerValue.toString();
                break;
            }
            case 'Boolean': {
                formatted = String(value.booleanValue);
                break;
            }
            case 'boolean': {
                formatted = String(value.booleanValue);
                break;
            }
            case 'CodeableConcept': {
                formatted = value.codeableConceptValue.text;
                break;
            }
            case 'Quantity': {
                formatted = value.quantityValue.value + ' ' + (value.quantityValue.unit ? value.quantityValue.unit : "");
                break;
            }
            case 'Range': {
                formatted = value.rangeValue.low.value
                    + ' - ' + value.rangeValue.high.value
                    + ' ' + value.rangeValue.high.unit;
                break;
            }
            case "decimal": {
                formatted = value.decimalValue.toString();
                break;
            }
            case "string":
                formatted = value.stringValue;
                break;
        }
        return formatted;
    }
}
function formatEffectiveDateNew(ef) {
    if (!ef) {
        return "";
    }
    if (ef) {
        var date = new Date(ef);
        return new Date(date.getTime() - (date.getTimezoneOffset() * 60000))
            .toISOString()
            .split('T')[0];
    }
}
function formatEffectiveDate(ef) {
    if (!ef) {
        return "";
    }
    if (ef.dateTime && ef.dateTime.date) {
        var date = new Date(ef.dateTime.date);
        return new Date(date.getTime() - (date.getTimezoneOffset() * 60000))
            .toISOString()
            .split('T')[0];
    }
}
function formatMccDate(mccDate) {
    if (!mccDate) {
        return "";
    }
    if (mccDate.date) {
        var date = new Date(mccDate.date);
        return new Date(date.getTime() - (date.getTimezoneOffset() * 60000))
            .toISOString()
            .split('T')[0];
    }
}
function formatGoalTargetValue(target, mostRecentResultValue) {
    var formatted = '';
    var highlighted = false;
    var rval = 0;
    var qval = 0;
    var highval = 0;
    var lowval = 0;
    rval = Number(mostRecentResultValue);
    if (isNaN(rval)) {
        rval = 0;
    }
    if (target !== undefined) {
        if (target.detailString) {
            formatted = target.detailString;
        }
        else if (target.detailInteger) {
            formatted = target.detailInteger.toString();
        }
        else if (target.detailBoolean) {
            formatted = String(target.detailBoolean);
        }
        else if (target.detailCodeableConcept) {
            formatted = target.detailCodeableConcept.text;
        }
        else if (target.detailQuantity) {
            formatted = target.detailQuantity.comparator
                + target.detailQuantity.value.toString()
                + ' ' + target.detailQuantity.unit;
            qval = Number(target.detailQuantity.value);
            if (!isNaN(qval)) {
                if (target.detailQuantity.comparator === '<') {
                    if (rval >= qval) {
                        highlighted = true;
                    }
                }
                if (target.detailQuantity.comparator === '>') {
                    if (rval <= qval) {
                        highlighted = true;
                    }
                }
            }
        }
        else if (target.detailRange) {
            formatted = target.detailRange.low.value
                + ' - ' + target.detailRange.high.value
                + ' ' + target.detailRange.high.unit;
            highval = Number(target.detailRange.high.value);
            lowval = Number(target.detailRange.low.value);
            if (!isNaN(lowval) && !isNaN(highval)) {
                if (rval < lowval || rval > highval) {
                    highlighted = true;
                }
            }
        }
        else {
            formatted += '';
        }
    }
    return [formatted, highlighted];
}
function reformatYYYYMMDD(dt) {
    return dt;
    if (dt) {
        var date = new Date(dt);
        return new Date(date.getTime() - (date.getTimezoneOffset() * 60000))
            .toISOString()
            .split('T')[0];
    }
    else {
        return '';
    }
}
function getLineChartOptionsObject(min, max, suggestedMinDate, suggestedMaxDate) {
    var opts = {
        elements: {
            line: {
                tension: 0
            }
        },
        responsive: false,
        maintainAspectRatio: true,
        scales: {
            yAxes: [(min && max) ? ({
                    ticks: {
                        suggestedMax: max,
                        suggestedMin: min
                    }
                }) : ({})],
            xAxes: [{
                    type: 'time',
                    distribution: 'linear',
                    ticks: {
                        // min: suggestedMinDate,
                        // max: suggestedMaxDate,
                        maxTicksLimit: 7
                    },
                    time: {
                        // unit: 'month',
                        // format: 'dateFormat',
                        displayFormats: {
                            millisecond: 'D MMM, h:mm a',
                            second: 'D MMM, h:mm a',
                            minute: 'D MMM, h:mm a',
                            hour: 'D MMM, h:mm a',
                            day: 'D MMM',
                            week: 'll',
                            month: 'MMM',
                            quarter: 'll',
                            year: 'll'
                        },
                        tooltipFormat: 'MM-DD-YYYY',
                    }
                }]
        }
    };
    /*
              millisecond: 'MMM DD',
              second: 'MMM DD',
              minute: 'MMM DD',
              hour: 'MMM DD',
              day: 'MMM DD',
              week: 'MMM DD',
              month: 'MMM DD',
              quarter: 'MMM DD',
              year: 'MMM DD',
     */
    return opts;
}
function getEgrLineChartAnnotationsObject() {
    var annotations = {
        annotations: [
            {
                drawTime: 'beforeDatasetsDraw',
                type: 'box',
                id: 'egfr-critical',
                xScaleID: 'x-axis-0',
                yScaleID: 'y-axis-0',
                borderWidth: 0,
                yMin: 0,
                yMax: 15,
                backgroundColor: 'rgba(227, 127, 104,0.3)'
            },
            {
                drawTime: 'beforeDatasetsDraw',
                type: 'box',
                id: 'egfr-ok',
                xScaleID: 'x-axis-0',
                yScaleID: 'y-axis-0',
                borderWidth: 0,
                yMin: 15,
                yMax: 60,
                backgroundColor: 'rgba(247, 245, 116,0.3)'
            },
            {
                drawTime: 'beforeDatasetsDraw',
                type: 'box',
                id: 'egfr-warning',
                xScaleID: 'x-axis-0',
                yScaleID: 'y-axis-0',
                borderWidth: 0,
                yMin: 60,
                backgroundColor: 'rgba(128, 204, 113,0.3)'
            }
        ]
    };
    return annotations;
}
function getUacrLineChartAnnotationsObject() {
    var annotations = {
        annotations: [{
                drawTime: 'beforeDatasetsDraw',
                type: 'box',
                id: 'uacr-warning',
                xScaleID: 'x-axis-0',
                yScaleID: 'y-axis-0',
                borderWidth: 0,
                yMin: 0,
                yMax: 30,
                backgroundColor: 'rgba(128, 204, 113,0.3)'
            },
            {
                drawTime: 'beforeDatasetsDraw',
                type: 'box',
                id: 'uacr-ok',
                xScaleID: 'x-axis-0',
                yScaleID: 'y-axis-0',
                borderWidth: 0,
                yMin: 30,
                yMax: 300,
                backgroundColor: 'rgba(247, 245, 116,0.3)'
            },
            {
                drawTime: 'beforeDatasetsDraw',
                type: 'box',
                id: 'uacr-critical',
                xScaleID: 'x-axis-0',
                yScaleID: 'y-axis-0',
                borderWidth: 0,
                yMin: 300,
                backgroundColor: 'rgba(227, 127, 104,0.3)'
            }
        ]
    };
    return annotations;
}
function getWotLineChartAnnotationsObject() {
    var annotations = {
        annotations: [{
                drawTime: 'beforeDatasetsDraw',
                type: 'box',
                id: 'wot-warning',
                xScaleID: 'x-axis-0',
                yScaleID: 'y-axis-0',
                borderWidth: 0,
                yMin: 50,
                yMax: 105,
                backgroundColor: 'rgba(128, 204, 113,0.3)'
            },
            {
                drawTime: 'beforeDatasetsDraw',
                type: 'box',
                id: 'wot-ok',
                xScaleID: 'x-axis-0',
                yScaleID: 'y-axis-0',
                borderWidth: 0,
                yMin: 105,
                yMax: 260,
                backgroundColor: 'rgba(247, 245, 116,0.3)'
            },
            {
                drawTime: 'beforeDatasetsDraw',
                type: 'box',
                id: 'wot-critical',
                xScaleID: 'x-axis-0',
                yScaleID: 'y-axis-0',
                borderWidth: 0,
                yMin: 260,
                backgroundColor: 'rgba(227, 127, 104,0.3)'
            }
        ]
    };
    return annotations;
}
function formatEgfrResult(egfr, unit) {
    var ret = '';
    if (egfr && unit) {
        ret = egfr.toString() + ' '
            + unit.substring(0, unit.length - 1)
            + '<sup>' + unit.substring(unit.length - 1) + '</sup>';
    }
    else if (egfr && !unit) {
        ret = egfr.toString() + ' ' + 'mL/min/1.73m<sup>2</sup>';
    }
    return ret;
}
function formatUacrResult(uacr, unit) {
    var ret = '';
    if (uacr && unit) {
        ret = uacr.toString() + ' ' + unit;
    }
    return ret;
}
function formatWotResult(value, unit) {
    var ret = '';
    if (value && unit) {
        ret = value.toString() + ' ' + unit;
    }
    return ret;
}


/***/ }),

/***/ "nCGp":
/*!**************************************************!*\
  !*** ./src/assets/json/data/vital-mappings.json ***!
  \**************************************************/
/*! exports provided: general, ckd, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"general\":[{\"name\":\"Blood Pressure\",\"value\":\"85354-9\",\"type\":\"panel\"},{\"name\":\"Weight\",\"value\":\"29463-7\",\"type\":\"panel\"}],\"ckd\":[{\"name\":\"Cognitive Status (MoCA)\",\"value\":\"72172-0\",\"type\":\"question\"},{\"name\":\"Fatigue (PROMIS T-score)\",\"value\":\"77864-7\",\"type\":\"question\"},{\"name\":\"Functional Status (PROMIS raw score)\",\"value\":\"77827-4\",\"type\":\"question\"},{\"name\":\"Pain Interference (PROMIS T-score)\",\"value\":\"77865-4\",\"type\":\"question\"},{\"name\":\"Pain Severity (Wong-Baker FACES)\",\"value\":\"38221-8\",\"type\":\"question\"},{\"name\":\"PHQ9\",\"value\":\"44261-6\",\"type\":\"question\"}]}");

/***/ }),

/***/ "nNx6":
/*!************************************************!*\
  !*** ./src/assets/json/data/lab-mappings.json ***!
  \************************************************/
/*! exports provided: general, ckd, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"general\":[{\"name\":\"Serum Creatinine\",\"value\":\"2.16.840.1.113762.1.4.1222.111\",\"type\":\"valueset\"},{\"name\":\"Hemoglobin\",\"value\":\"2.16.840.1.113762.1.4.1222.114\",\"type\":\"valueset\"},{\"name\":\"A1C\",\"value\":\"2.16.840.1.113762.1.4.1222.119\",\"type\":\"valueset\"},{\"name\":\"Serum Potassium\",\"value\":\"2.16.840.1.113762.1.4.1222.120\",\"type\":\"valueset\"},{\"name\":\"Serum Phosphorus\",\"value\":\"2.16.840.1.113762.1.4.1222.123\",\"type\":\"valueset\"},{\"name\":\"Calcium\",\"value\":\"17861-6\",\"type\":\"code\"},{\"name\":\"Serum Albumin\",\"value\":\"2.16.840.1.113762.1.4.1222.151\",\"type\":\"valueset\"},{\"name\":\"Blood Urea Nitrogen\",\"value\":\"2.16.840.1.113762.1.4.1222.113\",\"type\":\"valueset\"},{\"name\":\"LDL\",\"value\":\"2.16.840.1.113883.3.117.1.7.1.215\",\"type\":\"valueset\"},{\"name\":\"HDL\",\"value\":\"2.16.840.1.113762.1.4.1222.135\",\"type\":\"valueset\"},{\"name\":\"Triglycerides\",\"value\":\"2.16.840.1.113762.1.4.1222.137\",\"type\":\"valueset\"},{\"name\":\"Total Cholesterol\",\"value\":\"2.16.840.1.113762.1.4.1222.139\",\"type\":\"valueset\"},{\"name\":\"Vitamin D\",\"value\":\"2.16.840.1.113762.1.4.1222.126\",\"type\":\"valueset\"},{\"name\":\"Serum Bicarbonate\",\"value\":\"2.16.840.1.113762.1.4.1222.130\",\"type\":\"valueset\"},{\"name\":\"Sodium\",\"value\":\"2.16.840.1.113762.1.4.1222.131\",\"type\":\"valueset\"},{\"name\":\"Chloride\",\"value\":\"2.16.840.1.113762.1.4.1222.132\",\"type\":\"valueset\"}],\"ckd\":[{\"name\":\"UACR\",\"value\":\"2.16.840.1.113883.3.6929.2.1002\",\"type\":\"valueset\"},{\"name\":\"Serum Creatinine\",\"value\":\"2.16.840.1.113762.1.4.1222.111\",\"type\":\"valueset\"},{\"name\":\"Hemoglobin\",\"value\":\"2.16.840.1.113762.1.4.1222.114\",\"type\":\"valueset\"},{\"name\":\"A1C\",\"value\":\"2.16.840.1.113762.1.4.1222.119\",\"type\":\"valueset\"},{\"name\":\"Serum Potassium\",\"value\":\"2.16.840.1.113762.1.4.1222.120\",\"type\":\"valueset\"},{\"name\":\"Serum Phosphorus\",\"value\":\"2.16.840.1.113762.1.4.1222.123\",\"type\":\"valueset\"},{\"name\":\"Calcium\",\"value\":\"17861-6\",\"type\":\"code\"},{\"name\":\"Serum Albumin\",\"value\":\"2.16.840.1.113762.1.4.1222.151\",\"type\":\"valueset\"},{\"name\":\"Transferrin Saturation\",\"value\":\"2.16.840.1.113762.1.4.1222.118\",\"type\":\"valueset\"},{\"name\":\"Ferritin\",\"value\":\"2.16.840.1.113762.1.4.1222.140\",\"type\":\"valueset\"},{\"name\":\"Blood Urea Nitrogen\",\"value\":\"2.16.840.1.113762.1.4.1222.113\",\"type\":\"valueset\"},{\"name\":\"LDL\",\"value\":\"2.16.840.1.113883.3.117.1.7.1.215\",\"type\":\"valueset\"},{\"name\":\"HDL\",\"value\":\"2.16.840.1.113762.1.4.1222.135\",\"type\":\"valueset\"},{\"name\":\"Triglycerides\",\"value\":\"2.16.840.1.113762.1.4.1222.137\",\"type\":\"valueset\"},{\"name\":\"Total Cholesterol\",\"value\":\"2.16.840.1.113762.1.4.1222.139\",\"type\":\"valueset\"},{\"name\":\"Vitamin D\",\"value\":\"2.16.840.1.113762.1.4.1222.126\",\"type\":\"valueset\"},{\"name\":\"KT/V\",\"value\":\"2.16.840.1.113762.1.4.1222.128\",\"type\":\"valueset\"},{\"name\":\"Intact Parathyroid Hormone\",\"value\":\"2.16.840.1.113762.1.4.1222.129\",\"type\":\"valueset\"},{\"name\":\"Serum Bicarbonate\",\"value\":\"2.16.840.1.113762.1.4.1222.130\",\"type\":\"valueset\"},{\"name\":\"Sodium\",\"value\":\"2.16.840.1.113762.1.4.1222.131\",\"type\":\"valueset\"},{\"name\":\"Chloride\",\"value\":\"2.16.840.1.113762.1.4.1222.132\",\"type\":\"valueset\"},{\"name\":\"PTH\",\"value\":\"2.16.840.1.113762.1.4.1222.129\",\"type\":\"valueset\"}]}");

/***/ }),

/***/ "nZ6o":
/*!**********************************************************!*\
  !*** ./src/app/patient-goals/patient-goals.component.ts ***!
  \**********************************************************/
/*! exports provided: PatientGoalsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientGoalsComponent", function() { return PatientGoalsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/data.service */ "EnSQ");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");







function PatientGoalsComponent_th_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Priority");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PatientGoalsComponent_td_5_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "priority_high");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PatientGoalsComponent_td_5_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "low_priority");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PatientGoalsComponent_td_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PatientGoalsComponent_td_5_mat_icon_1_Template, 2, 0, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PatientGoalsComponent_td_5_mat_icon_2_Template, 2, 0, "mat-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var goal_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", goal_r12.priority.toLowerCase().includes("high"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", goal_r12.priority.toLowerCase().includes("low"));
} }
function PatientGoalsComponent_th_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Goal");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PatientGoalsComponent_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var goal_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", goal_r15.description, " ");
} }
function PatientGoalsComponent_th_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Created");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PatientGoalsComponent_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var goal_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", goal_r16.startDateText, " ");
} }
function PatientGoalsComponent_th_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Target Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PatientGoalsComponent_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var goal_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", goal_r17.targetDateText, " ");
} }
function PatientGoalsComponent_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PatientGoalsComponent_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var goal_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", goal_r18.achievementStatus.text, " ");
} }
function PatientGoalsComponent_tr_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 14);
} }
var _c0 = function (a0, a1) { return { hovered: a0, highlighted: a1 }; };
function PatientGoalsComponent_tr_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PatientGoalsComponent_tr_19_Template_tr_click_0_listener() { var row_r19 = ctx.$implicit; return row_r19.highlighted = !row_r19.highlighted; })("mouseover", function PatientGoalsComponent_tr_19_Template_tr_mouseover_0_listener() { var row_r19 = ctx.$implicit; return row_r19.hovered = true; })("mouseout", function PatientGoalsComponent_tr_19_Template_tr_mouseout_0_listener() { var row_r19 = ctx.$implicit; return row_r19.hovered = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, row_r19.hovered, row_r19.highlighted));
} }
var PatientGoalsComponent = /** @class */ (function () {
    function PatientGoalsComponent(dataservice) {
        this.dataservice = dataservice;
        this.displayedColumns = ['rank', 'description', 'created', 'targetdate', 'status'];
    }
    PatientGoalsComponent.prototype.ngOnInit = function () {
    };
    PatientGoalsComponent.ɵfac = function PatientGoalsComponent_Factory(t) { return new (t || PatientGoalsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"])); };
    PatientGoalsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PatientGoalsComponent, selectors: [["app-patient-goals"]], decls: 22, vars: 3, consts: [[1, "group-header"], ["mat-table", "", "width", "100%", 3, "dataSource"], ["matColumnDef", "rank"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "description"], ["matColumnDef", "created"], ["matColumnDef", "targetdate"], ["matColumnDef", "status"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "ngClass", "click", "mouseover", "mouseout", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], [4, "ngIf"], ["mat-header-row", ""], ["mat-row", "", 3, "ngClass", "click", "mouseover", "mouseout"]], template: function PatientGoalsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Patient Goals");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](3, 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PatientGoalsComponent_th_4_Template, 2, 0, "th", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PatientGoalsComponent_td_5_Template, 3, 2, "td", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](6, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PatientGoalsComponent_th_7_Template, 2, 0, "th", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PatientGoalsComponent_td_8_Template, 2, 1, "td", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](9, 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, PatientGoalsComponent_th_10_Template, 2, 0, "th", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, PatientGoalsComponent_td_11_Template, 2, 1, "td", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](12, 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, PatientGoalsComponent_th_13_Template, 2, 0, "th", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, PatientGoalsComponent_td_14_Template, 2, 1, "td", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](15, 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, PatientGoalsComponent_th_16_Template, 2, 0, "th", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, PatientGoalsComponent_td_17_Template, 2, 1, "td", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, PatientGoalsComponent_tr_18_Template, 1, 0, "tr", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, PatientGoalsComponent_tr_19_Template, 1, 4, "tr", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Add Patient Goal");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataservice.goals.activePatientGoals);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__["DefaultClassDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], styles: [".group-header_save[_ngcontent-%COMP%] {\n  justify-content: center;\n  vertical-align: top;\n  background: blue;\n  color: white;\n}\n\nmat-table[_ngcontent-%COMP%] {\n  vertical-align: top;\n}\n\ntr.mat-table[_ngcontent-%COMP%] {\n  vertical-align: top;\n  min-width: 700px;\n}\n\ntr.mat-header-row[_ngcontent-%COMP%] {\n  min-height: 24px;\n  height: 24px !important;\n}\n\ntr.mat-row[_ngcontent-%COMP%] {\n  min-height: 24px;\n  height: 24px !important;\n}\n\nth.mat-header-cell[_ngcontent-%COMP%], td.mat-cell[_ngcontent-%COMP%] {\n  text-align: left;\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF0aWVudC1nb2Fscy9wYXRpZW50LWdvYWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtBQUN6Qjs7QUFHQTtFQUNFLGdCQUFnQjs7QUFFbEIiLCJmaWxlIjoic3JjL2FwcC9wYXRpZW50LWdvYWxzL3BhdGllbnQtZ29hbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4uZ3JvdXAtaGVhZGVyX3NhdmUge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgYmFja2dyb3VuZDogYmx1ZTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5tYXQtdGFibGUge1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG50ci5tYXQtdGFibGUge1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBtaW4td2lkdGg6IDcwMHB4O1xufVxuXG50ci5tYXQtaGVhZGVyLXJvdyB7XG4gIG1pbi1oZWlnaHQ6IDI0cHg7XG4gIGhlaWdodDogMjRweCAhaW1wb3J0YW50O1xufVxuXG50ci5tYXQtcm93IHtcbiAgbWluLWhlaWdodDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4ICFpbXBvcnRhbnQ7XG59XG5cblxudGgubWF0LWhlYWRlci1jZWxsLCB0ZC5tYXQtY2VsbCB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG5cbn1cbiJdfQ== */"] });
    return PatientGoalsComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PatientGoalsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-patient-goals',
                templateUrl: './patient-goals.component.html',
                styleUrls: ['./patient-goals.component.css']
            }]
    }], function () { return [{ type: _services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }]; }, null); })();


/***/ }),

/***/ "nZko":
/*!**************************************************************!*\
  !*** ./src/app/education-panel/education-panel.component.ts ***!
  \**************************************************************/
/*! exports provided: EducationPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EducationPanelComponent", function() { return EducationPanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/data.service */ "EnSQ");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");










function EducationPanelComponent_th_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Topic");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EducationPanelComponent_td_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r14.topic.text, " ");
} }
function EducationPanelComponent_th_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EducationPanelComponent_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r15.displayDate, " ");
} }
function EducationPanelComponent_th_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Performer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EducationPanelComponent_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r16.performer, " ");
} }
function EducationPanelComponent_th_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Reason");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EducationPanelComponent_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r17.reasons, " ");
} }
function EducationPanelComponent_th_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Outcome");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EducationPanelComponent_td_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r18.outcome.text, "");
} }
function EducationPanelComponent_th_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EducationPanelComponent_td_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, item_r19.status), "");
} }
function EducationPanelComponent_tr_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 16);
} }
var _c0 = function (a0) { return { "outofrange": a0 }; };
function EducationPanelComponent_tr_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EducationPanelComponent_tr_22_Template_tr_click_0_listener() { var row_r20 = ctx.$implicit; return row_r20.highlighted = !row_r20.highlighted; })("mouseover", function EducationPanelComponent_tr_22_Template_tr_mouseover_0_listener() { var row_r20 = ctx.$implicit; return row_r20.hovered = true; })("mouseout", function EducationPanelComponent_tr_22_Template_tr_mouseout_0_listener() { var row_r20 = ctx.$implicit; return row_r20.hovered = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, row_r20.status == "high"));
} }
var EducationPanelComponent = /** @class */ (function () {
    function EducationPanelComponent(dataService) {
        this.dataService = dataService;
        this.displayedColumns = ['topic', 'displayDate', 'performer', 'reasons', 'outcome', 'status'];
    }
    EducationPanelComponent.prototype.ngOnInit = function () {
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.dataService.education);
        this.dataSource.sortingDataAccessor = function (item, property) {
            switch (property) {
                case 'topic': return item[property].text;
                case 'displayDate': return moment__WEBPACK_IMPORTED_MODULE_3___default()(item[property]).unix();
                case 'outcome': return item[property].text;
                default: return item[property];
            }
        };
    };
    EducationPanelComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.sort = this.sort;
    };
    EducationPanelComponent.ɵfac = function EducationPanelComponent_Factory(t) { return new (t || EducationPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"])); };
    EducationPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EducationPanelComponent, selectors: [["app-education-panel"]], viewQuery: function EducationPanelComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"], true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        } }, decls: 23, vars: 3, consts: [[1, "group-header"], ["mat-table", "", "matSort", "", "width", "100%", 3, "dataSource"], ["matColumnDef", "topic"], ["mat-header-cell", "", "width", "35%", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "displayDate", "width", "10%"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["matColumnDef", "performer", "width", "15%"], ["matColumnDef", "reasons", "width", "20%"], ["matColumnDef", "outcome", "width", "10%"], ["matColumnDef", "status", "width", "10%"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "ngClass", "click", "mouseover", "mouseout", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", "width", "35%", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-header-row", ""], ["mat-row", "", 3, "ngClass", "click", "mouseover", "mouseout"]], template: function EducationPanelComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Education");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](3, 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EducationPanelComponent_th_4_Template, 2, 0, "th", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EducationPanelComponent_td_5_Template, 2, 1, "td", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](6, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, EducationPanelComponent_th_7_Template, 2, 0, "th", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, EducationPanelComponent_td_8_Template, 2, 1, "td", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](9, 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, EducationPanelComponent_th_10_Template, 2, 0, "th", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, EducationPanelComponent_td_11_Template, 2, 1, "td", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](12, 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, EducationPanelComponent_th_13_Template, 2, 0, "th", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, EducationPanelComponent_td_14_Template, 2, 1, "td", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](15, 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, EducationPanelComponent_th_16_Template, 2, 0, "th", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, EducationPanelComponent_td_17_Template, 2, 1, "td", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](18, 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, EducationPanelComponent_th_19_Template, 2, 0, "th", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, EducationPanelComponent_td_20_Template, 3, 3, "td", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, EducationPanelComponent_tr_21_Template, 1, 0, "tr", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, EducationPanelComponent_tr_22_Template, 1, 3, "tr", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSource);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__["DefaultClassDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["TitleCasePipe"]], styles: ["mat-grid-tile[_ngcontent-%COMP%]   .mat-figure[_ngcontent-%COMP%] {\n  justify-content: center;\n  vertical-align: top;\n  background: blue;\n}\n\n.group-header[_ngcontent-%COMP%] {\n  justify-content: center;\n  vertical-align: top;\n  background: blue;\n  color: white;\n}\n\nmat-table[_ngcontent-%COMP%] {\n  vertical-align: top;\n}\n\ntr.mat-table[_ngcontent-%COMP%] {\n  vertical-align: top;\n  min-width: 700px;\n}\n\ntr.mat-header-row[_ngcontent-%COMP%] {\n  min-height: 24px;\n  height: 24px !important;\n}\n\ntr.mat-row[_ngcontent-%COMP%] {\n  min-height: 24px;\n  height: 24px !important;\n}\n\nth.mat-header-cell[_ngcontent-%COMP%], td.mat-cell[_ngcontent-%COMP%] {\n  text-align: left;\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWR1Y2F0aW9uLXBhbmVsL2VkdWNhdGlvbi1wYW5lbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix1QkFBdUI7QUFDekI7O0FBR0E7RUFDRSxnQkFBZ0I7O0FBRWxCIiwiZmlsZSI6InNyYy9hcHAvZWR1Y2F0aW9uLXBhbmVsL2VkdWNhdGlvbi1wYW5lbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWdyaWQtdGlsZSAubWF0LWZpZ3VyZSB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBiYWNrZ3JvdW5kOiBibHVlO1xufVxuXG4uZ3JvdXAtaGVhZGVyIHtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIGJhY2tncm91bmQ6IGJsdWU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxubWF0LXRhYmxlIHtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxudHIubWF0LXRhYmxlIHtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgbWluLXdpZHRoOiA3MDBweDtcbn1cblxudHIubWF0LWhlYWRlci1yb3cge1xuICBtaW4taGVpZ2h0OiAyNHB4O1xuICBoZWlnaHQ6IDI0cHggIWltcG9ydGFudDtcbn1cblxudHIubWF0LXJvdyB7XG4gIG1pbi1oZWlnaHQ6IDI0cHg7XG4gIGhlaWdodDogMjRweCAhaW1wb3J0YW50O1xufVxuXG5cbnRoLm1hdC1oZWFkZXItY2VsbCwgdGQubWF0LWNlbGwge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuXG59XG4iXX0= */"] });
    return EducationPanelComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EducationPanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-education-panel',
                templateUrl: './education-panel.component.html',
                styleUrls: ['./education-panel.component.css']
            }]
    }], function () { return [{ type: _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] }]; }, { sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"]]
        }] }); })();


/***/ }),

/***/ "oMHM":
/*!****************************************************!*\
  !*** ./src/assets/json/data/feature-toggling.json ***!
  \****************************************************/
/*! exports provided: healthAndSocialConcerns, goalsAndPreferences, maintenanceAndInterventions, status, preferredUnits, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"healthAndSocialConcerns\":{\"activeDiagnoses\":true,\"inactiveDiagnoses\":true,\"socialConcerns\":true},\"goalsAndPreferences\":{\"goals\":true,\"targets\":true,\"patientChoices\":true},\"maintenanceAndInterventions\":{\"medications\":true,\"education\":true,\"counseling\":true,\"referrals\":true},\"status\":{\"clinicalResults\":true,\"labResults\":true,\"activities\":true,\"exam\":true,\"questionaires\":true,\"procedure\":true,\"history\":true,\"imaging\":true,\"therapy\":true},\"preferredUnits\":{\"wot\":\"lb\"}}");

/***/ }),

/***/ "ppQH":
/*!**************************************************************!*\
  !*** ./src/app/patient-choices/patient-choices.component.ts ***!
  \**************************************************************/
/*! exports provided: PatientChoicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientChoicesComponent", function() { return PatientChoicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/core */ "FKr1");





var PatientChoicesComponent = /** @class */ (function () {
    function PatientChoicesComponent() {
    }
    PatientChoicesComponent.prototype.ngOnInit = function () {
    };
    PatientChoicesComponent.ɵfac = function PatientChoicesComponent_Factory(t) { return new (t || PatientChoicesComponent)(); };
    PatientChoicesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PatientChoicesComponent, selectors: [["app-patient-choices"]], decls: 25, vars: 0, consts: [[1, "group-header"], ["value", "Hemodialysis"], ["value", "Peritoneal Dialysis"], ["value", "Transplant"], ["value", "Supportive Care with No RRT"], ["value", "Undecided"], ["value", "Other"]], template: function PatientChoicesComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Patient Choices");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Renal Replacement Therapy:");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Select Preferred Modality");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-select");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-option");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "None");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-option", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Hemodialysis");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-option", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Peritoneal Dialysis");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-option", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Transplant");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-option", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Supportive Care with No RRT");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-option", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Undecided");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-option", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Other");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_2__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatOption"]], styles: [".group-header_save[_ngcontent-%COMP%] {\n  justify-content: center;\n  vertical-align: top;\n  background: blue;\n  color: white;\n}\n\nmat-table[_ngcontent-%COMP%] {\n  vertical-align: top;\n}\n\ntr.mat-table[_ngcontent-%COMP%] {\n  vertical-align: top;\n  min-width: 700px;\n}\n\ntr.mat-header-row[_ngcontent-%COMP%] {\n  min-height: 24px;\n  height: 24px !important;\n}\n\ntr.mat-row[_ngcontent-%COMP%] {\n  min-height: 24px;\n  height: 24px !important;\n}\n\nth.mat-header-cell[_ngcontent-%COMP%], td.mat-cell[_ngcontent-%COMP%] {\n  text-align: left;\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF0aWVudC1jaG9pY2VzL3BhdGllbnQtY2hvaWNlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix1QkFBdUI7QUFDekI7O0FBR0E7RUFDRSxnQkFBZ0I7O0FBRWxCIiwiZmlsZSI6InNyYy9hcHAvcGF0aWVudC1jaG9pY2VzL3BhdGllbnQtY2hvaWNlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbi5ncm91cC1oZWFkZXJfc2F2ZSB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBiYWNrZ3JvdW5kOiBibHVlO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbm1hdC10YWJsZSB7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbnRyLm1hdC10YWJsZSB7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIG1pbi13aWR0aDogNzAwcHg7XG59XG5cbnRyLm1hdC1oZWFkZXItcm93IHtcbiAgbWluLWhlaWdodDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4ICFpbXBvcnRhbnQ7XG59XG5cbnRyLm1hdC1yb3cge1xuICBtaW4taGVpZ2h0OiAyNHB4O1xuICBoZWlnaHQ6IDI0cHggIWltcG9ydGFudDtcbn1cblxuXG50aC5tYXQtaGVhZGVyLWNlbGwsIHRkLm1hdC1jZWxsIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcblxufVxuIl19 */"] });
    return PatientChoicesComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PatientChoicesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-patient-choices',
                templateUrl: './patient-choices.component.html',
                styleUrls: ['./patient-choices.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "qfn1":
/*!*******************************************************!*\
  !*** ./src/app/interceptors/404.retry.interceptor.ts ***!
  \*******************************************************/
/*! exports provided: retryCount, retryWaitMilliSeconds, RetryInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "retryCount", function() { return retryCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "retryWaitMilliSeconds", function() { return retryWaitMilliSeconds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RetryInterceptor", function() { return RetryInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");




var retryCount = 3;
var retryWaitMilliSeconds = 1000;
var RetryInterceptor = /** @class */ (function () {
    function RetryInterceptor() {
    }
    RetryInterceptor.prototype.intercept = function (request, next) {
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retryWhen"])(function (error) {
            return error.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["concatMap"])(function (error, count) {
                if (count <= retryCount && error.status == 404) {
                    console.error("404, retry " + retryCount, request.url);
                    return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(error);
                }
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(retryWaitMilliSeconds));
        }));
    };
    RetryInterceptor.ɵfac = function RetryInterceptor_Factory(t) { return new (t || RetryInterceptor)(); };
    RetryInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RetryInterceptor, factory: RetryInterceptor.ɵfac });
    return RetryInterceptor;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RetryInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "s3dx":
/*!******************************!*\
  !*** ./src/app/log/index.ts ***!
  \******************************/
/*! exports provided: doLog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _log_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./log-service */ "lRQK");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "doLog", function() { return _log_service__WEBPACK_IMPORTED_MODULE_0__["doLog"]; });




/***/ }),

/***/ "tZre":
/*!*********************************************!*\
  !*** ./src/app/services/message.service.ts ***!
  \*********************************************/
/*! exports provided: MessageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageService", function() { return MessageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


var MessageService = /** @class */ (function () {
    function MessageService() {
        this.messages = [];
    }
    MessageService.prototype.add = function (message) {
        console.log('MessageService: ' + message);
        this.messages.push(message);
    };
    MessageService.prototype.clear = function () {
        this.messages = [];
    };
    MessageService.ɵfac = function MessageService_Factory(t) { return new (t || MessageService)(); };
    MessageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MessageService, factory: MessageService.ɵfac, providedIn: 'root' });
    return MessageService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], null, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: appRouting, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRouting", function() { return appRouting; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _health_and_social_concerns_health_and_social_concerns_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./health-and-social-concerns/health-and-social-concerns.component */ "gh5G");
/* harmony import */ var _goals_goals_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./goals/goals.component */ "e3Z9");
/* harmony import */ var _maintenance_and_interventions_maintenance_and_interventions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./maintenance-and-interventions/maintenance-and-interventions.component */ "5bbp");
/* harmony import */ var _health_status_health_status_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./health-status/health-status.component */ "MnK3");
/* harmony import */ var _care_team_care_team_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./care-team/care-team.component */ "wHvi");
/* harmony import */ var _health_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./health.guard */ "Mt3Z");
/* harmony import */ var _launch_launch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./launch/launch */ "GqCu");












var routes = [
    { path: 'health', component: _health_and_social_concerns_health_and_social_concerns_component__WEBPACK_IMPORTED_MODULE_3__["HealthAndSocialConcernsComponent"] },
    { path: 'goals', component: _goals_goals_component__WEBPACK_IMPORTED_MODULE_4__["GoalsComponent"] },
    { path: 'maint', component: _maintenance_and_interventions_maintenance_and_interventions_component__WEBPACK_IMPORTED_MODULE_5__["MaintenanceAndInterventionsComponent"] },
    { path: 'status', component: _health_status_health_status_component__WEBPACK_IMPORTED_MODULE_6__["HealthStatusComponent"] },
    { path: 'care', component: _care_team_care_team_component__WEBPACK_IMPORTED_MODULE_7__["CareTeamComponent"] },
    { path: 'launch', component: _launch_launch__WEBPACK_IMPORTED_MODULE_9__["Launch"] },
    { path: '', redirectTo: 'goals', pathMatch: 'full', canActivate: [_health_guard__WEBPACK_IMPORTED_MODULE_8__["HealthGuard"]] }
];
var appRouting = _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { enableTracing: false });
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { enableTracing: false }),
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
    return AppRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { enableTracing: false }),
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
                declarations: []
            }]
    }], null, null); })();


/***/ }),

/***/ "wHvi":
/*!**************************************************!*\
  !*** ./src/app/care-team/care-team.component.ts ***!
  \**************************************************/
/*! exports provided: CareTeamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CareTeamComponent", function() { return CareTeamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/data.service */ "EnSQ");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");







function CareTeamComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Role:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Phone:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Email:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "td", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Address:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var contact_r1 = ctx.$implicit;
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100 / ctx_r0.gridColumns + "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.getTypeIcon(contact_r1.type));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.getRoleIcon(contact_r1.role));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](contact_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](contact_r1.role);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](contact_r1.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](contact_r1.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](contact_r1.address);
} }
var CareTeamComponent = /** @class */ (function () {
    function CareTeamComponent(dataservice) {
        this.dataservice = dataservice;
        this.gridColumns = 4;
        this.iconNames = {
            types: [
                { type: 'person', icon: 'person' },
                { type: 'organization', icon: 'group' }
            ],
            roles: [
                { role: 'patient', icon: 'sick' },
                { role: 'catering', icon: 'food_bank' },
                { role: 'physician', icon: 'medical_services' },
                { role: 'nurse', icon: 'medical_services' },
                { role: 'caregiver', icon: 'medical_services' },
                { role: 'ologist', icon: 'medical_services' },
                { role: 'dietician', icon: 'fastfood' },
                { role: 'social worker', icon: 'psychology' },
                { role: 'pharmacist', icon: 'medical_services' },
            ]
        };
    }
    CareTeamComponent.prototype.ngOnInit = function () {
    };
    CareTeamComponent.prototype.getTypeIcon = function (type) {
        if (!type)
            return '';
        var icon = this.iconNames.types.filter(function (t) { return type.toLowerCase().includes(t.type.toLowerCase()); });
        if (icon.length > 0) {
            return icon[0].icon;
        }
        else {
            return '';
        }
    };
    CareTeamComponent.prototype.getRoleIcon = function (role) {
        if (!role)
            return '';
        var icon = this.iconNames.roles.filter(function (r) { return role.toLowerCase().includes(r.role.toLowerCase()); });
        if (icon.length > 0) {
            return icon[0].icon;
        }
        else {
            return '';
        }
    };
    CareTeamComponent.ɵfac = function CareTeamComponent_Factory(t) { return new (t || CareTeamComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"])); };
    CareTeamComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CareTeamComponent, selectors: [["app-care-team"]], decls: 2, vars: 1, consts: [["fxLayout", "row wrap", "fxLayoutAlign", "start stretch", "fxLayoutGap", "16px grid", 1, "content"], ["fxFlex.xs", "100%", "fxFlex.sm", "33%", 3, "fxFlex", 4, "ngFor", "ngForOf"], ["fxFlex.xs", "100%", "fxFlex.sm", "33%", 3, "fxFlex"], [1, "mat-elevation-z4"], ["mat-card-avatar", ""], [2, "font-weight", "bold"]], template: function CareTeamComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CareTeamComponent_div_1_Template, 31, 8, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dataservice.contacts);
        } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutGapDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardHeader"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"]], styles: [".content[_ngcontent-%COMP%] {\n  padding:  16px;\n}\n\n.content[_ngcontent-%COMP%]    > mat-card[_ngcontent-%COMP%] {\n  width: 220px;\n}\n\nmat-icon.mat-card-avatar[_ngcontent-%COMP%] {\n  width: 25px;\n  height: 25px;\n  font-size: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyZS10ZWFtL2NhcmUtdGVhbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NhcmUtdGVhbS9jYXJlLXRlYW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcbiAgcGFkZGluZzogIDE2cHg7XG59XG5cbi5jb250ZW50ID4gbWF0LWNhcmQge1xuICB3aWR0aDogMjIwcHg7XG59XG5cbm1hdC1pY29uLm1hdC1jYXJkLWF2YXRhciB7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuXG5cblxuIl19 */"] });
    return CareTeamComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CareTeamComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-care-team',
                templateUrl: './care-team.component.html',
                styleUrls: ['./care-team.component.css']
            }]
    }], function () { return [{ type: _services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }]; }, null); })();


/***/ }),

/***/ "wUVO":
/*!************************************************************!*\
  !*** ./src/app/referral-panel/referral-panel.component.ts ***!
  \************************************************************/
/*! exports provided: ReferralPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferralPanelComponent", function() { return ReferralPanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ "EnSQ");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");








function ReferralPanelComponent_th_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Purpose");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReferralPanelComponent_td_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r10.purpose.text, " ");
} }
function ReferralPanelComponent_th_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReferralPanelComponent_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, item_r11.displayDate), " ");
} }
function ReferralPanelComponent_th_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Referring Clincian");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReferralPanelComponent_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var item_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r12.referrer, "");
} }
function ReferralPanelComponent_th_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Receiving Clincian");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ReferralPanelComponent_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var i_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", i_r13.receiver, "");
} }
function ReferralPanelComponent_tr_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 12);
} }
function ReferralPanelComponent_tr_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 13);
} }
var ReferralPanelComponent = /** @class */ (function () {
    function ReferralPanelComponent(dataService) {
        this.dataService = dataService;
        this.displayedColumns = ['purpose', 'date', 'referrer', 'receiver'];
    }
    ReferralPanelComponent.prototype.ngOnInit = function () {
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.dataService.referrals);
        this.dataSource.sortingDataAccessor = function (item, property) {
            switch (property) {
                case 'purpose': return item[property].text;
                default: return item[property];
            }
        };
    };
    ReferralPanelComponent.prototype.ngAfterViewInit = function () {
        this.dataSource.sort = this.sort;
    };
    ReferralPanelComponent.ɵfac = function ReferralPanelComponent_Factory(t) { return new (t || ReferralPanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"])); };
    ReferralPanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReferralPanelComponent, selectors: [["app-referral-panel"]], viewQuery: function ReferralPanelComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"], true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        } }, decls: 17, vars: 3, consts: [[1, "group-header"], ["mat-table", "", "width", "100%", "matSort", "", 3, "dataSource"], ["matColumnDef", "purpose"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "date"], ["matColumnDef", "referrer"], ["matColumnDef", "receiver"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-row", ""], ["mat-row", ""]], template: function ReferralPanelComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Referrals");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](3, 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ReferralPanelComponent_th_4_Template, 2, 0, "th", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ReferralPanelComponent_td_5_Template, 2, 1, "td", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](6, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ReferralPanelComponent_th_7_Template, 2, 0, "th", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ReferralPanelComponent_td_8_Template, 3, 3, "td", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](9, 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ReferralPanelComponent_th_10_Template, 2, 0, "th", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ReferralPanelComponent_td_11_Template, 2, 1, "td", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](12, 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ReferralPanelComponent_th_13_Template, 2, 0, "th", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ReferralPanelComponent_td_14_Template, 2, 1, "td", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ReferralPanelComponent_tr_15_Template, 1, 0, "tr", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ReferralPanelComponent_tr_16_Template, 1, 0, "tr", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataService.referrals);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: ["mat-table[_ngcontent-%COMP%] {\n  vertical-align: top;\n}\n\ntr.mat-table[_ngcontent-%COMP%] {\n  vertical-align: top;\n  min-width: 700px;\n}\n\ntr.mat-header-row[_ngcontent-%COMP%] {\n  min-height: 24px;\n  height: 24px !important;\n}\n\ntr.mat-row[_ngcontent-%COMP%] {\n  min-height: 24px;\n  height: 24px !important;\n}\n\nth.mat-header-cell[_ngcontent-%COMP%], td.mat-cell[_ngcontent-%COMP%] {\n  text-align: left;\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVmZXJyYWwtcGFuZWwvcmVmZXJyYWwtcGFuZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix1QkFBdUI7QUFDekI7O0FBR0E7RUFDRSxnQkFBZ0I7O0FBRWxCIiwiZmlsZSI6InNyYy9hcHAvcmVmZXJyYWwtcGFuZWwvcmVmZXJyYWwtcGFuZWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxubWF0LXRhYmxlIHtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxudHIubWF0LXRhYmxlIHtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgbWluLXdpZHRoOiA3MDBweDtcbn1cblxudHIubWF0LWhlYWRlci1yb3cge1xuICBtaW4taGVpZ2h0OiAyNHB4O1xuICBoZWlnaHQ6IDI0cHggIWltcG9ydGFudDtcbn1cblxudHIubWF0LXJvdyB7XG4gIG1pbi1oZWlnaHQ6IDI0cHg7XG4gIGhlaWdodDogMjRweCAhaW1wb3J0YW50O1xufVxuXG5cbnRoLm1hdC1oZWFkZXItY2VsbCwgdGQubWF0LWNlbGwge1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuXG59XG4iXX0= */"] });
    return ReferralPanelComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReferralPanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-referral-panel',
                templateUrl: './referral-panel.component.html',
                styleUrls: ['./referral-panel.component.css']
            }]
    }], function () { return [{ type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }]; }, { sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"]]
        }] }); })();


/***/ }),

/***/ "wXOW":
/*!***********************************!*\
  !*** ./src/app/datamodel/egfr.ts ***!
  \***********************************/
/*! exports provided: emptyEgfr, emptyEgfrChartData, emptyEgfrTableData, emptyEgfrData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emptyEgfr", function() { return emptyEgfr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emptyEgfrChartData", function() { return emptyEgfrChartData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emptyEgfrTableData", function() { return emptyEgfrTableData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emptyEgfrData", function() { return emptyEgfrData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_utility_functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/utility-functions */ "n4X3");



var emptyEgfrData = {};
var emptyEgfrTableData = [];
var emptyEgfrChartData = [
    {
        data: [emptyEgfrData],
        fill: false,
        label: 'eGFR'
    }
];
var emptyEgfr = {
    mostRecentEgfr: {},
    tableData: emptyEgfrTableData,
    chartData: emptyEgfrChartData,
    xAxisLabels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    suggestedMin: moment__WEBPACK_IMPORTED_MODULE_1___default()(new Date('2020-01-01')),
    suggestedMax: moment__WEBPACK_IMPORTED_MODULE_1___default()('2020-06-30'),
    lineChartOptions: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, Object(_util_utility_functions__WEBPACK_IMPORTED_MODULE_2__["getLineChartOptionsObject"])(10, 70, moment__WEBPACK_IMPORTED_MODULE_1___default()('2020-01-01'), moment__WEBPACK_IMPORTED_MODULE_1___default()('2020-06-30'))), { annotation: [] })
};



/***/ }),

/***/ "wxQT":
/*!**********************************************************!*\
  !*** ./src/app/target-values/target-values.component.ts ***!
  \**********************************************************/
/*! exports provided: TargetValuesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TargetValuesComponent", function() { return TargetValuesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/sort */ "Dh3D");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ "EnSQ");
/* harmony import */ var _services_goals_data_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/goals-data-service.service */ "zaQB");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "+0xr");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");










function TargetValuesComponent_th_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Measure");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TargetValuesComponent_td_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var target_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", target_r10.measure, " (", target_r10.code, ")");
} }
function TargetValuesComponent_th_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Most Recent Result");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TargetValuesComponent_td_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var target_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", target_r11.mostRecentResult, " ");
} }
function TargetValuesComponent_th_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Test Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TargetValuesComponent_td_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var target_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", target_r12.date, " ");
} }
function TargetValuesComponent_th_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Target (if available)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TargetValuesComponent_td_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var target_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", target_r13.target, " ");
} }
function TargetValuesComponent_tr_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 14);
} }
var _c0 = function (a0, a1) { return { "critical": a0, "outofrange": a1 }; };
function TargetValuesComponent_tr_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TargetValuesComponent_tr_16_Template_tr_click_0_listener() { var row_r14 = ctx.$implicit; return row_r14.highlighted = !row_r14.highlighted; })("mouseover", function TargetValuesComponent_tr_16_Template_tr_mouseover_0_listener() { var row_r14 = ctx.$implicit; return row_r14.hovered = true; })("mouseout", function TargetValuesComponent_tr_16_Template_tr_mouseout_0_listener() { var row_r14 = ctx.$implicit; return row_r14.hovered = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var row_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, row_r14.status == "high", row_r14.highlighted));
} }
var TargetValuesComponent = /** @class */ (function () {
    function TargetValuesComponent(dataservice, goalsdataservice) {
        var _this = this;
        this.dataservice = dataservice;
        this.goalsdataservice = goalsdataservice;
        this.displayedColumns = ['measure', 'mostRecentResult', 'date', 'target'];
        this.refreshTargets = function () {
            _this.targetValuesDataSource = _this.dataservice.targetValuesDataSource;
        };
    }
    TargetValuesComponent.prototype.ngOnInit = function () {
        this.targetValuesDataSource = this.dataservice.targetValuesDataSource;
        this.targetValuesDataSource.sortingDataAccessor = function (item, property) {
            switch (property) {
                case 'date': return moment__WEBPACK_IMPORTED_MODULE_2___default()(item[property]).unix();
                default: return item[property];
            }
        };
    };
    TargetValuesComponent.prototype.ngAfterViewInit = function () {
        this.targetValuesDataSource.sort = this.sort;
    };
    TargetValuesComponent.ɵfac = function TargetValuesComponent_Factory(t) { return new (t || TargetValuesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_goals_data_service_service__WEBPACK_IMPORTED_MODULE_4__["GoalsDataService"])); };
    TargetValuesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TargetValuesComponent, selectors: [["app-target-values"]], viewQuery: function TargetValuesComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"], true);
        } if (rf & 2) {
            var _t;
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.sort = _t.first);
        } }, decls: 17, vars: 3, consts: [[1, "group-header"], ["mat-table", "", "width", "100%", "matSort", "", 3, "dataSource"], ["matColumnDef", "measure"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "mostRecentResult"], ["matColumnDef", "date"], ["matColumnDef", "target"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 3, "ngClass", "click", "mouseover", "mouseout", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-header-cell", ""], ["mat-header-row", ""], ["mat-row", "", 3, "ngClass", "click", "mouseover", "mouseout"]], template: function TargetValuesComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Target Laboratory/Clinical Values");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](3, 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TargetValuesComponent_th_4_Template, 2, 0, "th", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TargetValuesComponent_td_5_Template, 2, 2, "td", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](6, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, TargetValuesComponent_th_7_Template, 2, 0, "th", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TargetValuesComponent_td_8_Template, 2, 1, "td", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](9, 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TargetValuesComponent_th_10_Template, 2, 0, "th", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TargetValuesComponent_td_11_Template, 2, 1, "td", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](12, 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TargetValuesComponent_th_13_Template, 2, 0, "th", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TargetValuesComponent_td_14_Template, 2, 1, "td", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, TargetValuesComponent_tr_15_Template, 1, 0, "tr", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, TargetValuesComponent_tr_16_Template, 1, 4, "tr", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.targetValuesDataSource);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatRow"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__["DefaultClassDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"]], styles: ["mat-table[_ngcontent-%COMP%] {\n  vertical-align: top;\n}\n\ntr.mat-table[_ngcontent-%COMP%] {\n  vertical-align: top;\n  min-width: 700px;\n}\n\ntr.mat-header-row[_ngcontent-%COMP%] {\n  min-height: 24px;\n  height: 24px !important;\n}\n\ntr.mat-row[_ngcontent-%COMP%] {\n  min-height: 24px;\n  height: 24px !important;\n}\n\ntr.mat-row.good[_ngcontent-%COMP%] {\n  min-height: 24px;\n  height: 24px !important;\n  background-color: lightgreen;\n}\n\ntr.mat-row.outofrange[_ngcontent-%COMP%] {\n  min-height: 24px;\n  height: 24px !important;\n  background-color: lightyellow;\n}\n\ntr.mat-row.critical[_ngcontent-%COMP%] {\n  min-height: 24px;\n  height: 24px !important;\n  background-color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFyZ2V0LXZhbHVlcy90YXJnZXQtdmFsdWVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2Qiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvdGFyZ2V0LXZhbHVlcy90YXJnZXQtdmFsdWVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbm1hdC10YWJsZSB7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbnRyLm1hdC10YWJsZSB7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIG1pbi13aWR0aDogNzAwcHg7XG59XG5cbnRyLm1hdC1oZWFkZXItcm93IHtcbiAgbWluLWhlaWdodDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4ICFpbXBvcnRhbnQ7XG59XG5cbnRyLm1hdC1yb3cge1xuICBtaW4taGVpZ2h0OiAyNHB4O1xuICBoZWlnaHQ6IDI0cHggIWltcG9ydGFudDtcbn1cblxudHIubWF0LXJvdy5nb29kIHtcbiAgbWluLWhlaWdodDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4ICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XG59XG5cbnRyLm1hdC1yb3cub3V0b2ZyYW5nZSB7XG4gIG1pbi1oZWlnaHQ6IDI0cHg7XG4gIGhlaWdodDogMjRweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodHllbGxvdztcbn1cblxudHIubWF0LXJvdy5jcml0aWNhbCB7XG4gIG1pbi1oZWlnaHQ6IDI0cHg7XG4gIGhlaWdodDogMjRweCAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG4iXX0= */"] });
    return TargetValuesComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TargetValuesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-target-values',
                templateUrl: './target-values.component.html',
                styleUrls: ['./target-values.component.css']
            }]
    }], function () { return [{ type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }, { type: _services_goals_data_service_service__WEBPACK_IMPORTED_MODULE_4__["GoalsDataService"] }]; }, { sort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_angular_material_sort__WEBPACK_IMPORTED_MODULE_1__["MatSort"]]
        }] }); })();


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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "zaQB":
/*!********************************************************!*\
  !*** ./src/app/services/goals-data-service.service.ts ***!
  \********************************************************/
/*! exports provided: GoalsDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoalsDataService", function() { return GoalsDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _util_utility_functions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/utility-functions */ "n4X3");
/* harmony import */ var e_care_common_data_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! e-care-common-data-services */ "6AkT");
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/constants */ "XY7g");
/* harmony import */ var _log__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../log */ "s3dx");
/* harmony import */ var _message_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./message.service */ "tZre");












var observationCodes;
(function (observationCodes) {
    observationCodes["Systolic"] = "8480-6";
    observationCodes["Diastolic"] = "8462-4";
    observationCodes["Egfr"] = "69405-9";
    observationCodes["Uacr"] = "9318-7";
    observationCodes["Wot"] = "29463-7";
    observationCodes["Blood_pressure"] = "85354-9";
})(observationCodes || (observationCodes = {}));
var observationValuesets;
(function (observationValuesets) {
    // Egfr = '2.16.840.1.113883.3.6929.3.1000',
    observationValuesets["Egfr"] = "2.16.840.1.113762.1.4.1222.179";
    observationValuesets["Uacr"] = "2.16.840.1.113883.3.6929.2.1002";
})(observationValuesets || (observationValuesets = {}));
var GoalsDataService = /** @class */ (function () {
    function GoalsDataService(http, messageService) {
        this.http = http;
        this.messageService = messageService;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
    }
    // Get Goals by Subject Id
    GoalsDataService.prototype.getGoals = function (id) {
        var _this = this;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(Object(e_care_common_data_services__WEBPACK_IMPORTED_MODULE_6__["getSummaryGoals"])()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) {
            _this.log('fetched Goal Summary');
            Object(_log__WEBPACK_IMPORTED_MODULE_8__["doLog"])({
                level: 'debug',
                event: 'getGoals',
                page: 'goals-data-service',
                message: "getGoals: success"
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('getGoals')));
    };
    // Get Patient Goal Targets by Subject Id and coding
    // Create and return an observable object which emits from the multiple http requests
    // each http request returns a Recent Observation Data
    // associated with a Goal in the GoalTarget[] array passed in
    // The Goal Target and Observation data is merged into a TargetValue object which is emitted
    GoalsDataService.prototype.getPatientGoalTargets = function (patientId, targets) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            targets.map(function (gt) {
                var foo;
                if (gt && gt.measure && gt.measure.coding && gt.measure.coding.length > 0) {
                    foo = gt.measure.coding[0].code;
                }
                else {
                    foo = 'xxxx';
                }
                _this.getMostRecentObservationResult(patientId, foo, true)
                    .subscribe(function (obs) {
                    var _a;
                    var mostRecentResultValue = '';
                    var observationDate = '';
                    var rowHighlighted = false;
                    var formattedTargetValue = '';
                    if (obs !== undefined) {
                        if (obs.status !== 'unknown') {
                            if (Object(_util_utility_functions__WEBPACK_IMPORTED_MODULE_5__["getDisplayValueNew"])(obs)) {
                                //  TODO:  Fix to handle as any value type
                                mostRecentResultValue = Object(_util_utility_functions__WEBPACK_IMPORTED_MODULE_5__["getDisplayValueNew"])(obs);
                            }
                            if (obs.effectiveDateTime !== undefined) {
                                observationDate = obs.effectiveDateTime.toString();
                            }
                            _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(_util_utility_functions__WEBPACK_IMPORTED_MODULE_5__["formatGoalTargetValue"])(gt, mostRecentResultValue), 2), formattedTargetValue = _a[0], rowHighlighted = _a[1];
                            console.log({ mostRecentResultValue: mostRecentResultValue });
                            console.log({ gt: gt });
                            var tv = {
                                measure: gt.measure.text,
                                date: observationDate,
                                mostRecentResult: mostRecentResultValue.toString(),
                                target: formattedTargetValue,
                                highlighted: rowHighlighted,
                                status: obs.status
                            };
                            observer.next(tv);
                        }
                    }
                });
            });
        });
    };
    GoalsDataService.prototype.getPatientVitalSigns = function (patientId) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            _this.getObservationsByPanel(patientId, observationCodes.Blood_pressure)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {
                observer.complete();
            }))
                .subscribe(function (observations) {
                var i = 0;
                observations.map(function (obs) {
                    var systolic = 0;
                    var diastolic = 0;
                    obs.component.map(function (c) {
                        // This works now, may not with different data sets
                        switch (c.code.coding[0].code) {
                            case observationCodes.Diastolic:
                                diastolic = c.valueQuantity.value;
                                break;
                            case observationCodes.Systolic:
                                systolic = c.valueQuantity.value;
                                break;
                            default:
                        }
                    });
                    var vs = {
                        date: new Date((obs.effectiveDateTime)),
                        diastolic: diastolic,
                        systolic: systolic
                    };
                    observer.next(vs);
                });
            });
        });
    };
    GoalsDataService.prototype.getPatientEgfr = function (patientId) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            _this.getSegementedObservationsByValueSet(patientId, observationValuesets.Egfr, "mL/min/1.73m2,mL/min")
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {
                observer.complete();
            }))
                .subscribe(function (obsCollection) {
                obsCollection.observations.map(function (observations) {
                    var display = _this.formatEGFRCode(observations.primaryCode);
                    observations.observations.forEach(function (obs) {
                        var _a, _b;
                        var egfr = {
                            date: new Date(obs.effectiveDateTime),
                            test: display
                        };
                        egfr.egfr = (_a = obs.valueString) !== null && _a !== void 0 ? _a : obs.valueQuantity;
                        egfr.unit = (_b = obs.valueQuantity.unit) !== null && _b !== void 0 ? _b : "";
                        egfr.isNumber = !obs.valueString;
                        observer.next(egfr);
                    });
                });
            });
        });
    };
    GoalsDataService.prototype.formatEGFRCode = function (primaryCode) {
        //"Glomerular filtration rate/1.73 sq M.predicted [Volume Rate/Area] in Serum, Plasma or Blood"
        if (primaryCode.display && primaryCode.display.indexOf("1.73 sq M.") > -1) {
            var formattedString = "";
            formattedString = primaryCode.display.substr(primaryCode.display.indexOf("sq M.") + 5);
            formattedString = formattedString.substr(0, formattedString.indexOf("["));
            formattedString = formattedString + "[" + primaryCode.code + "]";
            formattedString = formattedString.charAt(0).toUpperCase() + formattedString.slice(1);
            return "EGFR " + formattedString;
        }
        else
            return primaryCode.display;
    };
    GoalsDataService.prototype.getPatientUacr = function (patientId) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            _this.getObservationsByValueset(patientId, observationValuesets.Uacr)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {
                observer.complete();
            }))
                .subscribe(function (observations) {
                observations.map(function (obs) {
                    var uacr = {
                        date: new Date(obs.effectiveDateTime),
                        uacr: obs.valueQuantity.value,
                        unit: obs.valueQuantity.unit,
                        test: obs.code.text
                    };
                    observer.next(uacr);
                });
            });
        });
    };
    GoalsDataService.prototype.getPatientWot = function (patientId) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            _this.getObservations(patientId, observationCodes.Wot)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["finalize"])(function () {
                observer.complete();
            }))
                .subscribe(function (observations) {
                observations.map(function (obs) {
                    switch (_common_constants__WEBPACK_IMPORTED_MODULE_7__["Constants"].featureToggling.preferredUnits.wot) {
                        case "kg":
                            if (obs.valueQuantity.unit === "lb") {
                                obs.valueQuantity.value = +(obs.valueQuantity.value * 0.453592).toFixed(1);
                                obs.valueQuantity.unit = "kg";
                            }
                            break;
                        case "lb":
                            if (obs.valueQuantity.unit === "kg") {
                                obs.valueQuantity.value = +(obs.valueQuantity.value * 2.20462).toFixed(0);
                                obs.valueQuantity.unit = "lb";
                            }
                            break;
                    }
                    ;
                    var wot = {
                        date: new Date(obs.effectiveDateTime),
                        value: obs.valueQuantity.value,
                        unit: obs.valueQuantity.unit,
                        test: obs.code.text
                    };
                    observer.next(wot);
                });
            });
        });
    };
    GoalsDataService.prototype.getMostRecentObservationResult = function (patientId, code, translate) {
        var _this = this;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(Object(e_care_common_data_services__WEBPACK_IMPORTED_MODULE_6__["getLatestObservation"])(code, translate)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log("fetched Observation patientId=" + patientId + " code=" + code); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("getMostRecentObservationResult patientId=" + patientId + " code=" + code)));
    };
    GoalsDataService.prototype.getObservations = function (patientId, code) {
        var _this = this;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(Object(e_care_common_data_services__WEBPACK_IMPORTED_MODULE_6__["getObservations"])(code)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log("fetched Observation patientId=" + patientId + " code=" + code); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("getObservations patientId=" + patientId + " code=" + code)));
    };
    GoalsDataService.prototype.getObservationsByPanel = function (patientId, code) {
        var _this = this;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(Object(e_care_common_data_services__WEBPACK_IMPORTED_MODULE_6__["getObservations"])(code, 'panel')).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log("fetched Observation patientId=" + patientId + " code=" + code); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("getObservations patientId=" + patientId + " code=" + code)));
    };
    GoalsDataService.prototype.getObservationsByValueset = function (patientId, valueSet) {
        var _this = this;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(Object(e_care_common_data_services__WEBPACK_IMPORTED_MODULE_6__["getObservationsByValueSet"])(valueSet)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) { return _this.log("fetched Observation patientId=" + patientId + " valueSet=" + valueSet); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("getObservationsByValueset patientId=" + patientId + " valueSet=" + valueSet)));
    };
    GoalsDataService.prototype.getSegementedObservationsByValueSet = function (patientId, valueSet, unitTypes) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(Object(e_care_common_data_services__WEBPACK_IMPORTED_MODULE_6__["getObservationsSegmented"])(valueSet, undefined, undefined, undefined, unitTypes)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError("getSegementedObservationsByValueSet patientId=" + patientId + " valueSet=" + valueSet)));
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    GoalsDataService.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    /** Log a message with the MessageService */
    GoalsDataService.prototype.log = function (message) {
        this.messageService.add("goal-data-service: " + message);
    };
    GoalsDataService.ɵfac = function GoalsDataService_Factory(t) { return new (t || GoalsDataService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_message_service__WEBPACK_IMPORTED_MODULE_9__["MessageService"])); };
    GoalsDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: GoalsDataService, factory: GoalsDataService.ɵfac, providedIn: 'root' });
    return GoalsDataService;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GoalsDataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: _message_service__WEBPACK_IMPORTED_MODULE_9__["MessageService"] }]; }, null); })();


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