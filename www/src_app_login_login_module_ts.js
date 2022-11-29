"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_login_login_module_ts"],{

/***/ 5393:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 6825);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 107:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 5393);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 6825);



 //Alejandro Formulario



let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 6825:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var C_Users_Javi_Serviexpress_4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.html?ngResource */ 1729);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 7047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);







let LoginPage = class LoginPage {
  constructor(toastController, //Alejandro Toast mensajes login
  router) {
    this.toastController = toastController;
    this.router = router; //Interpolacion, envio de objeto

    this.interpolacion = {
      email: "",
      password: ""
    };
  }

  ngOnInit() {}

  enviardatos() {
    let navigationExtras = {
      state: {
        interpolacion: this.interpolacion
      }
    };
    this.router.navigate(['/recuperar-password'], navigationExtras);
  } // Alejandro Toast mensaje login


  presentToast1() {
    var _this = this;

    return (0,C_Users_Javi_Serviexpress_4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this.toastController.create({
        message: 'Tu usuario, es tu email',
        duration: 2000,
        color: 'dark '
      });
      toast.present();
    })();
  }

};

LoginPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ToastController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
}];

LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-login',
  template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], LoginPage);


/***/ }),

/***/ 7047:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "ion-header {\n  position: absolute;\n}\n\nion-toolbar {\n  --ion-background-color: transparent;\n  --opacity: 0;\n}\n\nion-content {\n  --ion-background-color:#ffffff;\n}\n\n.login-express {\n  margin-top: 5px;\n}\n\n.olvidar_password {\n  text-align: right;\n}\n\n.olvidar_password ion-button {\n  font-size: 14px;\n}\n\n.registrate {\n  text-align: center;\n}\n\n.registrate ion-button {\n  font-size: 14px;\n  color: black;\n}\n\n.btn-express {\n  text-align: center;\n  padding-top: 17px;\n}\n\nion-card {\n  --ion-background-color: transparent;\n  box-shadow: none !important;\n  margin-top: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGtCQUFBO0FBQUo7O0FBRUE7RUFDSSxtQ0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLDhCQUFBO0FBQ0o7O0FBR0E7RUFDSSxlQUFBO0FBQUo7O0FBSUE7RUFDSSxpQkFBQTtBQURKOztBQUVJO0VBQ0ksZUFBQTtBQUFSOztBQUdBO0VBQ0ksa0JBQUE7QUFBSjs7QUFDSTtFQUNJLGVBQUE7RUFDQSxZQUFBO0FBQ1I7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0FBQUo7O0FBR0E7RUFDSSxtQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtBQUFKIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vQ1NTIExPR0lOXHJcbmlvbi1oZWFkZXJ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuaW9uLXRvb2xiYXJ7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIC0tb3BhY2l0eTogMDtcclxufVxyXG5cclxuaW9uLWNvbnRlbnR7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmY7XHJcbiAgICBcclxufVxyXG5cclxuLmxvZ2luLWV4cHJlc3N7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBcclxufVxyXG5cclxuLm9sdmlkYXJfcGFzc3dvcmR7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGlvbi1idXR0b257XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG59XHJcbi5yZWdpc3RyYXRle1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaW9uLWJ1dHRvbntcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgfVxyXG59XHJcblxyXG4uYnRuLWV4cHJlc3N7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMTdweDtcclxufVxyXG5cclxuaW9uLWNhcmR7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi10b3A6IDFweDtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 1729:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <!-- <ion-title>Login</ion-title>-->\r\n  </ion-toolbar>\r\n  <ion-buttons slot=\"start\">\r\n    <ion-back-button defaulthref=\"login\" text=\"\"></ion-back-button>\r\n  </ion-buttons>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <form  #form=\"ngForm\"> \r\n      <ion-card class=\"ion-no-margin\">\r\n        <ion-img routerLink=\"/landing-home\" src=\"assets/images/head.png\"></ion-img>\r\n        <ion-card-content>\r\n          <div class=\"login-express\">\r\n            <ion-item lines=\"full\" (click)=\"presentToast1()\">\r\n              <ion-label position=\"floating\">Email \r\n                <ion-icon  name=\"help-circle-outline\"></ion-icon>\r\n              </ion-label>\r\n              <ion-input minlength=\"3\" type=\"email\" name=\"email\" [(ngModel)]=\"interpolacion.email\" required></ion-input>\r\n            </ion-item>\r\n            <ion-item lines=\"full\">\r\n              <ion-label position=\"floating\">Password</ion-label>\r\n              <ion-input minlength=\"4\" type=\"password\" name=\"password\" [(ngModel)]=\"interpolacion.password\" required></ion-input>\r\n            </ion-item>\r\n          </div>\r\n          <div class=\"olvidar_password\">\r\n            <ion-button fill=\"clear\" class=\"ion-no-padding\" (click)=\"enviardatos()\">¿Olvidaste tu contraseña?</ion-button>\r\n          </div>\r\n          <div class=\"btn-express\">\r\n            <ion-button routerLink=\"/empleado-home\" shape=\"round\" [disabled]=\"form.invalid\" color=\"dark\" expand=\"block\" fill=\"solid\">INGRESAR</ion-button>\r\n            <ion-button routerLink=\"/landing-home\" shape=\"round\" color=\"dark\" expand=\"block\" fill=\"solid\">Volver</ion-button>\r\n          </div>\r\n          <div class=\"registrate\">\r\n            <ion-button routerLink=\"/registro\" fill=\"clear\" class=\"ion-no-padding\">¿No tienes cuenta?<br> Regístrate aquí!</ion-button>\r\n          </div>\r\n        </ion-card-content>\r\n      </ion-card>\r\n  </form>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map