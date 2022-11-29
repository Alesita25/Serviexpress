"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_cliente-home_cliente-home_module_ts"],{

/***/ 2853:
/*!*************************************************************!*\
  !*** ./src/app/cliente-home/cliente-home-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClienteHomePageRoutingModule": () => (/* binding */ ClienteHomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _cliente_home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cliente-home.page */ 5103);
/* harmony import */ var _reserva_reserva_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reserva/reserva.page */ 32);
/* harmony import */ var _cliente_misdatos_cliente_misdatos_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cliente-misdatos/cliente-misdatos.page */ 7625);
/* harmony import */ var _consultapost_consultapost_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../consultapost/consultapost.page */ 5259);
/* harmony import */ var _cliente_modificar_reserva_cliente_modificar_reserva_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cliente-modificar-reserva/cliente-modificar-reserva.page */ 4986);








const routes = [
    {
        path: '',
        component: _cliente_home_page__WEBPACK_IMPORTED_MODULE_0__.ClienteHomePage,
        children: [
            {
                path: 'cliente-misdatos',
                component: _cliente_misdatos_cliente_misdatos_page__WEBPACK_IMPORTED_MODULE_2__.ClienteMisdatosPage
            },
            {
                path: 'reserva',
                component: _reserva_reserva_page__WEBPACK_IMPORTED_MODULE_1__.ReservaPage
            },
            {
                path: 'consultaPost',
                component: _consultapost_consultapost_page__WEBPACK_IMPORTED_MODULE_3__.ConsultapostPage
            },
            {
                path: 'clienteModificaReserva',
                component: _cliente_modificar_reserva_cliente_modificar_reserva_page__WEBPACK_IMPORTED_MODULE_4__.ClienteModificarReservaPage
            },
        ]
    }
];
let ClienteHomePageRoutingModule = class ClienteHomePageRoutingModule {
};
ClienteHomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule],
    })
], ClienteHomePageRoutingModule);



/***/ }),

/***/ 1155:
/*!*****************************************************!*\
  !*** ./src/app/cliente-home/cliente-home.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClienteHomePageModule": () => (/* binding */ ClienteHomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _cliente_home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cliente-home-routing.module */ 2853);
/* harmony import */ var _cliente_home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cliente-home.page */ 5103);







let ClienteHomePageModule = class ClienteHomePageModule {
};
ClienteHomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _cliente_home_routing_module__WEBPACK_IMPORTED_MODULE_0__.ClienteHomePageRoutingModule
        ],
        declarations: [_cliente_home_page__WEBPACK_IMPORTED_MODULE_1__.ClienteHomePage]
    })
], ClienteHomePageModule);



/***/ }),

/***/ 5103:
/*!***************************************************!*\
  !*** ./src/app/cliente-home/cliente-home.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClienteHomePage": () => (/* binding */ ClienteHomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _cliente_home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cliente-home.page.html?ngResource */ 2146);
/* harmony import */ var _cliente_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cliente-home.page.scss?ngResource */ 4730);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);





let ClienteHomePage = class ClienteHomePage {
    constructor(router) {
        this.router = router;
        this.router.navigate(['cliente-home/cliente-misdatos']);
    }
    segmentChanged($event) {
        console.log($event.detail.value);
        let direction = $event.detail.value;
        this.router.navigate(['cliente-home/' + direction]);
    }
};
ClienteHomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
ClienteHomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-cliente-home',
        template: _cliente_home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_cliente_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ClienteHomePage);



/***/ }),

/***/ 4730:
/*!****************************************************************!*\
  !*** ./src/app/cliente-home/cliente-home.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbGllbnRlLWhvbWUucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 2146:
/*!****************************************************************!*\
  !*** ./src/app/cliente-home/cliente-home.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"false\">\r\n  <ion-toolbar>\r\n    <ion-title class = \"homecliente\">\r\n      Home Cliente\r\n    </ion-title>\r\n  </ion-toolbar>\r\n  <ion-toolbar>\r\n    <ion-segment value=\"cliente-misdatos\" (ionChange)=\"segmentChanged($event)\">\r\n      <ion-segment-button  value=\"cliente-misdatos\">\r\n        <ion-icon name=\"person\"></ion-icon>\r\n      </ion-segment-button>\r\n     \r\n      <ion-segment-button value=\"reserva\">\r\n        <ion-icon name=\"car-outline\"></ion-icon>\r\n      </ion-segment-button>\r\n\r\n      <ion-segment-button value=\"consultaPost\">\r\n        <ion-icon name=\"at-circle-outline\"></ion-icon>\r\n      </ion-segment-button>\r\n\r\n    </ion-segment>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n \r\n  <ion-router-outlet></ion-router-outlet>\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_cliente-home_cliente-home_module_ts.js.map