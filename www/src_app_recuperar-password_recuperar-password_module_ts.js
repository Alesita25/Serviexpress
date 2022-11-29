"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_recuperar-password_recuperar-password_module_ts"],{

/***/ 5252:
/*!*************************************************************************!*\
  !*** ./src/app/recuperar-password/recuperar-password-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecuperarPasswordPageRoutingModule": () => (/* binding */ RecuperarPasswordPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _recuperar_password_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recuperar-password.page */ 4939);




const routes = [
    {
        path: '',
        component: _recuperar_password_page__WEBPACK_IMPORTED_MODULE_0__.RecuperarPasswordPage
    }
];
let RecuperarPasswordPageRoutingModule = class RecuperarPasswordPageRoutingModule {
};
RecuperarPasswordPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RecuperarPasswordPageRoutingModule);



/***/ }),

/***/ 9864:
/*!*****************************************************************!*\
  !*** ./src/app/recuperar-password/recuperar-password.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecuperarPasswordPageModule": () => (/* binding */ RecuperarPasswordPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _recuperar_password_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recuperar-password-routing.module */ 5252);
/* harmony import */ var _recuperar_password_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recuperar-password.page */ 4939);







let RecuperarPasswordPageModule = class RecuperarPasswordPageModule {
};
RecuperarPasswordPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _recuperar_password_routing_module__WEBPACK_IMPORTED_MODULE_0__.RecuperarPasswordPageRoutingModule
        ],
        declarations: [_recuperar_password_page__WEBPACK_IMPORTED_MODULE_1__.RecuperarPasswordPage]
    })
], RecuperarPasswordPageModule);



/***/ }),

/***/ 4939:
/*!***************************************************************!*\
  !*** ./src/app/recuperar-password/recuperar-password.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecuperarPasswordPage": () => (/* binding */ RecuperarPasswordPage)
/* harmony export */ });
/* harmony import */ var C_Users_Alesita_Documents_Sandbox_Ionic_Serviexpress_2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _recuperar_password_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recuperar-password.page.html?ngResource */ 2240);
/* harmony import */ var _recuperar_password_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recuperar-password.page.scss?ngResource */ 5904);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);







let RecuperarPasswordPage = class RecuperarPasswordPage {
  constructor(activeroute, router, alertController) {
    this.activeroute = activeroute;
    this.router = router;
    this.alertController = alertController; //Recibiendo la interpolacion 

    this.activeroute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.recibiendo = this.router.getCurrentNavigation().extras.state.interpolacion;
        console.log(this.recibiendo);
      } else {
        this.router.navigate(["/login"]);
      }
    });
  } //Mensaje de alerta


  presentAlert() {
    var _this = this;

    return (0,C_Users_Alesita_Documents_Sandbox_Ionic_Serviexpress_2_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alertController.create({
        header: 'Recuperación exitosa',
        subHeader: 'Te hemos enviado email con las instrucciones',
        message: 'Serás redigido al Login',
        buttons: ['OK']
      });
      yield alert.present();

      _this.router.navigate(["/login"]);
    })();
  }

  ngOnInit() {}

};

RecuperarPasswordPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController
}];

RecuperarPasswordPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-recuperar-password',
  template: _recuperar_password_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_recuperar_password_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], RecuperarPasswordPage);


/***/ }),

/***/ 5904:
/*!****************************************************************************!*\
  !*** ./src/app/recuperar-password/recuperar-password.page.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "ion-header {\n  position: absolute;\n}\n\nion-toolbar {\n  --ion-background-color: transparent;\n  --opacity: 0;\n}\n\nion-content {\n  --ion-background-color:#ffffff;\n}\n\n.login-express {\n  margin-top: 5px;\n}\n\n.olvidar_password {\n  text-align: right;\n}\n\n.olvidar_password ion-button {\n  font-size: 14px;\n}\n\n.registrate {\n  text-align: center;\n}\n\n.registrate ion-button {\n  font-size: 14px;\n  color: black;\n}\n\n.btn-express {\n  text-align: center;\n  padding-top: 17px;\n}\n\nion-card {\n  --ion-background-color: transparent;\n  box-shadow: none !important;\n  margin-top: 1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY3VwZXJhci1wYXNzd29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxrQkFBQTtBQUFKOztBQUVBO0VBQ0ksbUNBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUE7RUFDSSw4QkFBQTtBQUNKOztBQUdBO0VBQ0ksZUFBQTtBQUFKOztBQUlBO0VBQ0ksaUJBQUE7QUFESjs7QUFFSTtFQUNJLGVBQUE7QUFBUjs7QUFHQTtFQUNJLGtCQUFBO0FBQUo7O0FBQ0k7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQUNSOztBQUdBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUdBO0VBQ0ksbUNBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7QUFBSiIsImZpbGUiOiJyZWN1cGVyYXItcGFzc3dvcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy9DU1MgTE9HSU5cclxuaW9uLWhlYWRlcntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5pb24tdG9vbGJhcntcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1vcGFjaXR5OiAwO1xyXG59XHJcblxyXG5pb24tY29udGVudHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6I2ZmZmZmZjtcclxuICAgIFxyXG59XHJcblxyXG4ubG9naW4tZXhwcmVzc3tcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIFxyXG59XHJcblxyXG4ub2x2aWRhcl9wYXNzd29yZHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgaW9uLWJ1dHRvbntcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbn1cclxuLnJlZ2lzdHJhdGV7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBpb24tYnV0dG9ue1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5idG4tZXhwcmVzc3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAxN3B4O1xyXG59XHJcblxyXG5pb24tY2FyZHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXRvcDogMXB4O1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 2240:
/*!****************************************************************************!*\
  !*** ./src/app/recuperar-password/recuperar-password.page.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <!-- <ion-title>Login</ion-title>-->\r\n  </ion-toolbar>\r\n  <ion-buttons slot=\"start\">\r\n    <ion-back-button defaulthref=\"login\" text=\"\"></ion-back-button>\r\n  </ion-buttons>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <form  #form=\"ngForm\"> \r\n      <ion-card class=\"ion-no-margin\">\r\n        <ion-img routerLink=\"/home\" src=\"assets/images/head.png\"></ion-img>\r\n        <ion-card-header>\r\n          <ion-card-title>Hola {{recibiendo.email}}</ion-card-title>\r\n          <ion-card-subtitle>Recupera tu contraseña</ion-card-subtitle>\r\n        </ion-card-header>\r\n        <ion-card-content>\r\n          <div class=\"login-express\">\r\n            <ion-item lines=\"full\" (click)=\"presentToast1()\">\r\n              <ion-label position=\"floating\">Ingresa tu Email</ion-label>\r\n              <ion-input minlength=\"3\" type=\"email\" name=\"email\" [(ngModel)]=\"email\" required></ion-input>\r\n            </ion-item>\r\n          </div>\r\n          <div class=\"btn-express\">\r\n            <ion-button shape=\"round\" [disabled]=\"form.invalid\" color=\"dark\" expand=\"block\" fill=\"solid\" (click)=\"presentAlert()\">Enviar</ion-button>\r\n          </div>\r\n          <div class=\"registrate\">\r\n            <ion-button routerLink=\"/login\" fill=\"clear\" class=\"ion-no-padding\">Volver</ion-button>\r\n          </div>\r\n        </ion-card-content>\r\n      </ion-card>\r\n  </form>\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_recuperar-password_recuperar-password_module_ts.js.map