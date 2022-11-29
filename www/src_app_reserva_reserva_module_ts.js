"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_reserva_reserva_module_ts"],{

/***/ 7039:
/*!***************************************************!*\
  !*** ./src/app/reserva/reserva-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReservaPageRoutingModule": () => (/* binding */ ReservaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _reserva_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reserva.page */ 32);




const routes = [
    {
        path: '',
        component: _reserva_page__WEBPACK_IMPORTED_MODULE_0__.ReservaPage
    }
];
let ReservaPageRoutingModule = class ReservaPageRoutingModule {
};
ReservaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ReservaPageRoutingModule);



/***/ }),

/***/ 5462:
/*!*******************************************!*\
  !*** ./src/app/reserva/reserva.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReservaPageModule": () => (/* binding */ ReservaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _reserva_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reserva-routing.module */ 7039);
/* harmony import */ var _reserva_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reserva.page */ 32);







let ReservaPageModule = class ReservaPageModule {
};
ReservaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _reserva_routing_module__WEBPACK_IMPORTED_MODULE_0__.ReservaPageRoutingModule
        ],
        declarations: [_reserva_page__WEBPACK_IMPORTED_MODULE_1__.ReservaPage]
    })
], ReservaPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_reserva_reserva_module_ts.js.map