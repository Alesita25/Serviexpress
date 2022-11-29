"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_login-cliente_login-cliente_module_ts"],{

/***/ 1284:
/*!***************************************************************!*\
  !*** ./src/app/login-cliente/login-cliente-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginClientePageRoutingModule": () => (/* binding */ LoginClientePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _login_cliente_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-cliente.page */ 3088);





const routes = [
    {
        path: '',
        component: _login_cliente_page__WEBPACK_IMPORTED_MODULE_0__.LoginClientePage
    }
];
let LoginClientePageRoutingModule = class LoginClientePageRoutingModule {
};
LoginClientePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginClientePageRoutingModule);



/***/ }),

/***/ 8178:
/*!*******************************************************!*\
  !*** ./src/app/login-cliente/login-cliente.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginClientePageModule": () => (/* binding */ LoginClientePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _login_cliente_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-cliente-routing.module */ 1284);
/* harmony import */ var _login_cliente_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-cliente.page */ 3088);






 // import { Component } from '@angular/core';
// import { LoadingController } from '@ionic/angular';

let LoginClientePageModule = class LoginClientePageModule {};
LoginClientePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _login_cliente_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginClientePageRoutingModule],
  declarations: [_login_cliente_page__WEBPACK_IMPORTED_MODULE_1__.LoginClientePage]
})], LoginClientePageModule);
 // -----------------------------------------------------------------------------------------------------------------------
// @Component({
//   selector: '',
//   templateUrl: 'login-cliente.page.html',
// })
// export class ExampleComponent {
//   constructor(private loadingCtrl: LoadingController) {}
//   async showLoading() {
//     const loading = await this.loadingCtrl.create({
//       message: 'Loading...',
//       duration: 3000,
//       spinner: 'circles',
//     });
//     loading.present();
//   }
//}

/***/ }),

/***/ 3088:
/*!*****************************************************!*\
  !*** ./src/app/login-cliente/login-cliente.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginClientePage": () => (/* binding */ LoginClientePage)
/* harmony export */ });
/* harmony import */ var C_Users_Alesita_Documents_Sandbox_Ionic_Serviexpress_2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _login_cliente_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-cliente.page.html?ngResource */ 4364);
/* harmony import */ var _login_cliente_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login-cliente.page.scss?ngResource */ 7626);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);







let LoginClientePage = class LoginClientePage {
  constructor(router, loadingCtrl) {
    this.router = router;
    this.loadingCtrl = loadingCtrl;
    this.user = {
      usuario: "",
      password: ""
    };
  }

  ngOnInit() {}

  ingresar() {
    let NavigationExtras = {
      state: {
        user: this.user
      }
    };
    this.router.navigate(['cliente-home/cliente-misdatos'], NavigationExtras);
  }

  volver() {
    let NavigationExtras = {
      state: {}
    };
    this.router.navigate(['/landing-home'], NavigationExtras);
  }

  showLoading() {
    var _this = this;

    return (0,C_Users_Alesita_Documents_Sandbox_Ionic_Serviexpress_2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this.loadingCtrl.create({
        message: 'Loading...',
        duration: 800,
        spinner: 'circles'
      });
      loading.present();
    })();
  }

};

LoginClientePage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.LoadingController
}];

LoginClientePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-login-cliente',
  template: _login_cliente_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_login_cliente_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], LoginClientePage);


/***/ }),

/***/ 7626:
/*!******************************************************************!*\
  !*** ./src/app/login-cliente/login-cliente.page.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = ".registro {\n  text-align: center;\n}\n.registro ion-button {\n  font-size: 14px;\n  color: rgb(21, 0, 255);\n}\nion-card {\n  --ion-background-color: transparent;\n  box-shadow: none !important;\n  margin-top: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLWNsaWVudGUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksa0JBQUE7QUFBSjtBQUNJO0VBQ0ksZUFBQTtFQUNBLHNCQUFBO0FBQ1I7QUFFQTtFQUNJLG1DQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0FBQ0oiLCJmaWxlIjoibG9naW4tY2xpZW50ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnJlZ2lzdHJve1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaW9uLWJ1dHRvbntcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgY29sb3I6IHJnYigyMSwgMCwgMjU1KTtcclxuICAgIH1cclxufVxyXG5pb24tY2FyZHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXRvcDogMXB4O1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 4364:
/*!******************************************************************!*\
  !*** ./src/app/login-cliente/login-cliente.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\r\n    <ion-toolbar>\r\n      <img src=\"assets/images/head.png\" class=\"images-responsive\" />\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-card>\r\n    <ion-card-content>\r\n      <ion-item lines=\"full\">\r\n        <ion-label position=\"floating\">Email\r\n          <ion-icon ios=\"ios-information-circle\" md=\"md-information-circle\"></ion-icon>\r\n        </ion-label>\r\n        <ion-input maxlength=\"100\" type=\"email\" name=\"email\" [(ngModel)]=\"user.usuario\" required></ion-input>\r\n      </ion-item>\r\n      <ion-item lines=\"full\">\r\n  \r\n        <ion-label position=\"floating\">Password</ion-label>\r\n        <ion-input type=\"password\" minlength= \"8\" maxlength=\"30\" [(ngModel)]=\"user.password\" required></ion-input>\r\n      </ion-item>\r\n\r\n\r\n     \r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-button size=\"medium\" type =\"submit\" (click)=\"showLoading();volver()\">Volver</ion-button>\r\n            <ion-button size=\"medium\" type =\"submit\"(click)=\"showLoading();ingresar()\">Ingresar</ion-button>\r\n            <div class=\"registro\">\r\n              <ion-button routerLink=\"/registro-cliente\" fill=\"clear\" class=\"ion-no-padding\"> ¡Regístrate aquí!</ion-button>\r\n            </div>\r\n\r\n          </ion-col>\r\n        </ion-row>  \r\n\r\n    </ion-card-content>\r\n  </ion-card>\r\n  \r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_login-cliente_login-cliente_module_ts.js.map