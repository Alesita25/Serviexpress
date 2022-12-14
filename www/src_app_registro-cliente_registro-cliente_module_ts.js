"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_registro-cliente_registro-cliente_module_ts"],{

/***/ 1689:
/*!*********************************************************************!*\
  !*** ./src/app/registro-cliente/registro-cliente-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroClientePageRoutingModule": () => (/* binding */ RegistroClientePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _registro_cliente_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registro-cliente.page */ 3446);




const routes = [
    {
        path: '',
        component: _registro_cliente_page__WEBPACK_IMPORTED_MODULE_0__.RegistroClientePage
    }
];
let RegistroClientePageRoutingModule = class RegistroClientePageRoutingModule {
};
RegistroClientePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegistroClientePageRoutingModule);



/***/ }),

/***/ 8148:
/*!*************************************************************!*\
  !*** ./src/app/registro-cliente/registro-cliente.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroClientePageModule": () => (/* binding */ RegistroClientePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _registro_cliente_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registro-cliente-routing.module */ 1689);
/* harmony import */ var _registro_cliente_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registro-cliente.page */ 3446);







let RegistroClientePageModule = class RegistroClientePageModule {
};
RegistroClientePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _registro_cliente_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegistroClientePageRoutingModule
        ],
        declarations: [_registro_cliente_page__WEBPACK_IMPORTED_MODULE_1__.RegistroClientePage]
    })
], RegistroClientePageModule);



/***/ }),

/***/ 3446:
/*!***********************************************************!*\
  !*** ./src/app/registro-cliente/registro-cliente.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroClientePage": () => (/* binding */ RegistroClientePage)
/* harmony export */ });
/* harmony import */ var C_Users_Javi_Serviexpress_4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _registro_cliente_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registro-cliente.page.html?ngResource */ 6988);
/* harmony import */ var _registro_cliente_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registro-cliente.page.scss?ngResource */ 3803);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);







let RegistroClientePage = class RegistroClientePage {
  constructor(router, loadingCtrl) {
    this.router = router;
    this.loadingCtrl = loadingCtrl;
    this.user = {
      usuario: "",
      password: "",
      email: ""
    };
  }

  ngOnInit() {}

  ingresar() {
    let navigationExtras = {
      state: {
        user: this.user
      }
    };
    this.router.navigate(['/registro-exitoso'], navigationExtras);
  }

  showLoading() {
    var _this = this;

    return (0,C_Users_Javi_Serviexpress_4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this.loadingCtrl.create({
        message: 'Loading...',
        duration: 800,
        spinner: 'circles'
      });
      loading.present();
    })();
  }

};

RegistroClientePage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.LoadingController
}];

RegistroClientePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-registro-cliente',
  template: _registro_cliente_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_registro_cliente_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], RegistroClientePage);


/***/ }),

/***/ 3803:
/*!************************************************************************!*\
  !*** ./src/app/registro-cliente/registro-cliente.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Ryby1jbGllbnRlLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 6988:
/*!************************************************************************!*\
  !*** ./src/app/registro-cliente/registro-cliente.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title class=\"regCliente\">Registro Cliente</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content  >\r\n\r\n  <ion-img src=\"assets/images/head.png\"></ion-img>\r\n  \r\n  <form  #form=\"ngForm\" > \r\n    \r\n    <ion-grid>\r\n      <ion-row justify-content-center>\r\n        <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\r\n          <div text-center>\r\n            <h3> ¡Crea tu Cuenta!</h3>\r\n          </div>\r\n          <div padding>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Rut</ion-label>\r\n              <ion-input  name=\"rut\" type=\"text\" placeholder=\"178601803\" ngModel required maxlength=\"12\" minlength=\"9\"></ion-input>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Nombre</ion-label>\r\n              <ion-input  name=\"name\" type=\"text\" placeholder=\"Juan\" ngModel required maxlength=\"60\" minlength=\"2\" [(ngModel)]=\"user.usuario\"></ion-input>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Apellido</ion-label>\r\n              <ion-input  name=\"apellido\" type=\"text\" placeholder=\"Perez\" ngModel required maxlength=\"60\" minlength=\"2\"></ion-input>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Fecha nacimiento</ion-label>\r\n              <ion-input  name=\"fechaNacimiento\" type=\"date\" placeholder=\"\" ngModel required maxlength=\"60\" minlength=\"2\"></ion-input>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Email</ion-label>\r\n              <ion-input name=\"email\" type=\"email\" placeholder=\"jperez@gmail.com\" ngModel required [(ngModel)]=\"user.email\"></ion-input>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Dirección Particular</ion-label>\r\n              <ion-input  name=\"direccionParticular\" type=\"text\" placeholder=\"\" ngModel required maxlength=\"60\" minlength=\"2\"></ion-input>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Dirección Comercial</ion-label>\r\n              <ion-input  name=\"direccionComercial\" type=\"text\" placeholder=\"\" ngModel required maxlength=\"60\" minlength=\"2\"></ion-input>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Celular</ion-label>\r\n              <ion-input  name=\"celular\" type=\"number\" placeholder=\"\" ngModel required maxlength=\"60\" minlength=\"2\"></ion-input>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Teléfono Comercial</ion-label>\r\n              <ion-input  name=\"telefonoComercial\" type=\"number\" placeholder=\"\" ngModel required maxlength=\"60\" minlength=\"2\"></ion-input>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Contraseña</ion-label>\r\n              <ion-input name=\"password\" type=\"password\" placeholder=\"Contraseña\" ngModel required></ion-input>\r\n            </ion-item>\r\n            <ion-item>\r\n              <ion-label position=\"floating\">Confirmar Contraseña</ion-label>\r\n              <ion-input name=\"confirm\" type=\"password\" placeholder=\"Password again\" ngModel required></ion-input>\r\n            </ion-item>\r\n          </div>\r\n         \r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </form>\r\n\r\n  <ion-button expand=\"full\" shape=\"round\" type=\"submit\" [disabled]=\"form.invalid\" (click)=\"showLoading();ingresar()\" >Registrarme</ion-button>\r\n  <br>\r\n  <ion-button  expand=\"full\" shape=\"round\" type=\"submit\" [routerLink] =\"['/login-cliente']\" >Volver</ion-button>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_registro-cliente_registro-cliente_module_ts.js.map