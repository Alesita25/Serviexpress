"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_registro-exitoso_registro-exitoso_module_ts"],{

/***/ 4792:
/*!*********************************************************************!*\
  !*** ./src/app/registro-exitoso/registro-exitoso-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroExitosoPageRoutingModule": () => (/* binding */ RegistroExitosoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _registro_exitoso_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registro-exitoso.page */ 1538);




const routes = [
    {
        path: '',
        component: _registro_exitoso_page__WEBPACK_IMPORTED_MODULE_0__.RegistroExitosoPage
    }
];
let RegistroExitosoPageRoutingModule = class RegistroExitosoPageRoutingModule {
};
RegistroExitosoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegistroExitosoPageRoutingModule);



/***/ }),

/***/ 8714:
/*!*************************************************************!*\
  !*** ./src/app/registro-exitoso/registro-exitoso.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroExitosoPageModule": () => (/* binding */ RegistroExitosoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _registro_exitoso_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registro-exitoso-routing.module */ 4792);
/* harmony import */ var _registro_exitoso_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registro-exitoso.page */ 1538);







let RegistroExitosoPageModule = class RegistroExitosoPageModule {
};
RegistroExitosoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _registro_exitoso_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegistroExitosoPageRoutingModule
        ],
        declarations: [_registro_exitoso_page__WEBPACK_IMPORTED_MODULE_1__.RegistroExitosoPage]
    })
], RegistroExitosoPageModule);



/***/ }),

/***/ 1538:
/*!***********************************************************!*\
  !*** ./src/app/registro-exitoso/registro-exitoso.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroExitosoPage": () => (/* binding */ RegistroExitosoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _registro_exitoso_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registro-exitoso.page.html?ngResource */ 8020);
/* harmony import */ var _registro_exitoso_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registro-exitoso.page.scss?ngResource */ 5185);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);





let RegistroExitosoPage = class RegistroExitosoPage {
    constructor(activeroute, router) {
        this.activeroute = activeroute;
        this.router = router;
        this.activeroute.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.data = this.router.getCurrentNavigation().extras.state.user;
                console.log(this.data);
            }
            else {
                this.router.navigate(['/registro-cliente']);
            }
        });
    }
};
RegistroExitosoPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
RegistroExitosoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-registro-exitoso',
        template: _registro_exitoso_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_registro_exitoso_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RegistroExitosoPage);



/***/ }),

/***/ 5185:
/*!************************************************************************!*\
  !*** ./src/app/registro-exitoso/registro-exitoso.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Ryby1leGl0b3NvLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 8020:
/*!************************************************************************!*\
  !*** ./src/app/registro-exitoso/registro-exitoso.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Registro Exitoso!</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-img src=\"assets/images/head.png\"></ion-img>\r\n\r\n  <ion-card>\r\n    <ion-card-header>\r\n      <ion-card-title>¡Bienvenido/a!</ion-card-title>\r\n    </ion-card-header>\r\n  \r\n    <ion-card-content>\r\n      <!-- <ion-item lines=\"none\"> -->\r\n        <ion-label>{{data.usuario}} gracias por registrarte en nuestro sitio. Recuerda que tu \r\n        usuario es el Email:  {{data.email}} </ion-label>\r\n        <br>\r\n        \r\n        <!-- </ion-item> -->\r\n    </ion-card-content>\r\n  </ion-card>\r\n  \r\n  <ion-button expand=\"full\" shape=\"round\"  type=\"submit\" [routerLink] =\"['/login-cliente']\" >Iniciar Sesión</ion-button>\r\n  <br>\r\n  <ion-button expand=\"full\" shape=\"round\" type=\"submit\" [routerLink] =\"['/landing-home']\" >Volver</ion-button>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_registro-exitoso_registro-exitoso_module_ts.js.map