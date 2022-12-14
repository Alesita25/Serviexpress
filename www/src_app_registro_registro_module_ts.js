"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_registro_registro_module_ts"],{

/***/ 4967:
/*!*****************************************************!*\
  !*** ./src/app/registro/registro-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroPageRoutingModule": () => (/* binding */ RegistroPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _registro_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registro.page */ 2299);




const routes = [
    {
        path: '',
        component: _registro_page__WEBPACK_IMPORTED_MODULE_0__.RegistroPage
    }
];
let RegistroPageRoutingModule = class RegistroPageRoutingModule {
};
RegistroPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegistroPageRoutingModule);



/***/ }),

/***/ 636:
/*!*********************************************!*\
  !*** ./src/app/registro/registro.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroPageModule": () => (/* binding */ RegistroPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _registro_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./registro-routing.module */ 4967);
/* harmony import */ var _registro_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registro.page */ 2299);



 //Alejandro FormsModule, ReactiveFormsModule



let RegistroPageModule = class RegistroPageModule {
};
RegistroPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _registro_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegistroPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule //Alejandro
        ],
        declarations: [_registro_page__WEBPACK_IMPORTED_MODULE_1__.RegistroPage]
    })
], RegistroPageModule);



/***/ }),

/***/ 2299:
/*!*******************************************!*\
  !*** ./src/app/registro/registro.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistroPage": () => (/* binding */ RegistroPage)
/* harmony export */ });
/* harmony import */ var C_Users_Javi_Serviexpress_4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _registro_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./registro.page.html?ngResource */ 9575);
/* harmony import */ var _registro_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registro.page.scss?ngResource */ 7177);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);





 // Alejandro librerias formilario y validacion


 // Alejandro para router link

let RegistroPage = class RegistroPage {
  // Alejandro Alerta 
  constructor(alertController, router) {
    this.alertController = alertController;
    this.router = router; // Alejandro Errores Registro empleado

    this.errors = [{
      nombre: 'required',
      message: 'El campo no puede estar vacio'
    }, {
      nombre: 'maxlength',
      message: 'El campo excede el máximo'
    }, {
      nombre: 'minlength',
      message: 'El campo no cumple el mínimo'
    }, {
      nacimiento: 'required',
      message: 'Ingrese su fecha de nacimiento'
    }, {
      email: 'required',
      message: 'Ingrese su email'
    }, {
      email: 'email',
      message: 'Ingrese su email válido'
    }, {
      password: 'required',
      message: 'Ingrese una contraseña'
    }, {
      password: 'maxlength',
      message: 'La contraseña max 9 caracteres'
    }, {
      password: 'minlength',
      message: 'La contraseña es muy corta'
    }, {
      celular: 'required',
      message: 'El campo no puede estar vacío'
    }, {
      celular: 'max',
      message: 'El campo excede el máximo'
    }, {
      celular: 'min',
      message: 'El campo no cumple el mínimo'
    }]; // Alejandro Form Objetos validaciones formulario

    this.login = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({
      rut: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(12), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(8)]),
      nombres: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(30), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(3)]),
      apellidos: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(30), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(3)]),
      nacimiento: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]),
      password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(30), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(8)]),
      direccion: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(30), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(3)]),
      celular: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(9), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(8)])
    });
  }

  presentAlert() {
    var _this = this;

    return (0,C_Users_Javi_Serviexpress_4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alertController.create({
        header: 'Felicidades',
        subHeader: 'Registro exitoso',
        message: 'Seras redigido al Login',
        buttons: ['OK']
      });
      yield alert.present();

      _this.router.navigate(["/login"]);
    })();
  }

};

RegistroPage.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
}];

RegistroPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-registro',
  template: _registro_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_registro_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], RegistroPage);


/***/ }),

/***/ 7177:
/*!********************************************************!*\
  !*** ./src/app/registro/registro.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "ion-header {\n  position: absolute;\n}\n\nion-toolbar {\n  --ion-background-color: transparent;\n  --opacity: 0;\n}\n\nion-content {\n  --ion-background-color:#ffffff;\n  width: calc(100% + 20px);\n  margin-top: 0px;\n}\n\n.ion-content::part(scroll) {\n  padding-right: 0px;\n}\n\n.login-express {\n  margin-top: 0px;\n}\n\n.olvidar_password {\n  text-align: right;\n}\n\n.olvidar_password ion-button {\n  font-size: 14px;\n}\n\n.btn-express {\n  text-align: center;\n  padding-top: 10px;\n}\n\nion-card {\n  --ion-background-color: transparent;\n  box-shadow: none !important;\n  margin-top: 1px;\n}\n\nion-label {\n  font-size: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdHJvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGtCQUFBO0FBQUo7O0FBRUE7RUFDSSxtQ0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLDhCQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBQ0E7RUFDSSxrQkFBQTtBQUVKOztBQUNBO0VBQ0ksZUFBQTtBQUVKOztBQUNBO0VBQ0ksaUJBQUE7QUFFSjs7QUFESTtFQUNJLGVBQUE7QUFHUjs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7QUFFSjs7QUFDQTtFQUNJLG1DQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0FBRUo7O0FBQ0E7RUFDSSxjQUFBO0FBRUoiLCJmaWxlIjoicmVnaXN0cm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy9DU1MgUkVHSVNUUk9cclxuaW9uLWhlYWRlcntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5pb24tdG9vbGJhcntcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgLS1vcGFjaXR5OiAwO1xyXG59XHJcblxyXG5pb24tY29udGVudHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6I2ZmZmZmZjsgIFxyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSArIDIwcHgpO1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG59XHJcbi5pb24tY29udGVudDo6cGFydChzY3JvbGwpIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxuICB9XHJcblxyXG4ubG9naW4tZXhwcmVzc3tcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxufVxyXG5cclxuLm9sdmlkYXJfcGFzc3dvcmR7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGlvbi1idXR0b257XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG4uYnRuLWV4cHJlc3N7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG5cclxuaW9uLWNhcmR7XHJcbiAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi10b3A6IDFweDtcclxufVxyXG5cclxuaW9uLWxhYmVsIHtcclxuICAgIGZvbnQtc2l6ZTogOHB4O1xyXG59XHJcblxyXG4iXX0= */";

/***/ }),

/***/ 9575:
/*!********************************************************!*\
  !*** ./src/app/registro/registro.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n  </ion-toolbar>\r\n  <ion-buttons slot=\"start\">\r\n    <ion-back-button defaulthref=\"login\" text=\"\"></ion-back-button>\r\n  </ion-buttons>\r\n</ion-header>\r\n\r\n<ion-content slot=\"fixed\">\r\n  <form #form=\"ngForm\" action=\"\" [formGroup]=\"login\"> \r\n      <ion-card lines=\"full\" class=\"ion-no-margin\">\r\n        <ion-img routerLink=\"/landing-home\" src=\"assets/images/head.png\"></ion-img>\r\n        <ion-card-content>\r\n          <div class=\"login-express\" slot=\"fixed\">\r\n            <ion-item lines=\"full\">\r\n              <ion-label position=\"fixed\">RUT</ion-label>\r\n              <ion-input type=\"text\" name=\"rut\" formControlName=\"rut\"></ion-input>\r\n            </ion-item>\r\n            <ion-item lines=\"full\">\r\n              <ion-label position=\"fixed\">Nombres</ion-label>\r\n              <ion-input type=\"text\" name=\"nombres\" formControlName=\"nombres\"></ion-input>\r\n            </ion-item>\r\n              <div *ngFor=\"let er of errors\">\r\n                <ng-container *ngIf=\"login.get('nombres').hasError(er.nombre) && (login.get('nombres').touched || login.get('nombres').dirty)\">{{er.message}}</ng-container>\r\n              </div>\r\n            <ion-item lines=\"full\">\r\n              <ion-label position=\"fixed\">Apellidos </ion-label>\r\n              <ion-input type=\"text\" name=\"apellidos\" formControlName=\"apellidos\"></ion-input>\r\n            </ion-item>\r\n              <div *ngFor=\"let er of errors\">\r\n                <ng-container *ngIf=\"login.get('apellidos').hasError(er.nombre) && (login.get('apellidos').touched || login.get('apellidos').dirty)\">{{er.message}}</ng-container>\r\n              </div>\r\n            <ion-item lines=\"full\">\r\n              <ion-label position=\"fixed\">Nacimiento</ion-label>\r\n              <ion-input type=\"date\" name=\"nacimiento\" formControlName=\"nacimiento\" placeholder=\" \"></ion-input>\r\n            </ion-item>\r\n              <div *ngFor=\"let er of errors\">\r\n                <ng-container *ngIf=\"login.get('nacimiento').hasError(er.nacimiento) && (login.get('nacimiento').touched || login.get('nacimiento').dirty)\">{{er.message}}</ng-container>\r\n              </div>\r\n            <ion-item lines=\"full\">\r\n              <ion-label position=\"fixed\">Email</ion-label>\r\n              <ion-input type=\"email\" name=\"email\" formControlName=\"email\"></ion-input>\r\n            </ion-item>\r\n              <div *ngFor=\"let er of errors\">\r\n                <ng-container *ngIf=\"login.get('email').hasError(er.email) && (login.get('email').touched || login.get('email').dirty)\">{{er.message}}</ng-container>\r\n              </div>\r\n            <ion-item lines=\"full\">\r\n              <ion-label position=\"fixed\">Contraseña</ion-label>\r\n              <ion-input type=\"password\" name=\"password\" formControlName=\"password\"></ion-input>\r\n            </ion-item>\r\n              <div *ngFor=\"let er of errors\">\r\n                <ng-container *ngIf=\"login.get('password').hasError(er.password) && (login.get('password').touched || login.get('password').dirty)\">{{er.message}}</ng-container>\r\n              </div>\r\n            <ion-item lines=\"full\">\r\n              <ion-label position=\"fixed\">Dirección</ion-label>\r\n              <ion-input type=\"text\" name=\"direccion\" formControlName=\"direccion\"></ion-input>\r\n            </ion-item>\r\n              <div *ngFor=\"let er of errors\">\r\n                <ng-container *ngIf=\"login.get('direccion').hasError(er.nombre) && (login.get('direccion').touched || login.get('direccion').dirty)\">{{er.message}}</ng-container>\r\n              </div>\r\n            <ion-item lines=\"full\">\r\n              <ion-label position=\"fixed\">Celular</ion-label>\r\n              <ion-input type=\"tel\" name=\"celular\" formControlName=\"celular\"></ion-input>\r\n            </ion-item>\r\n              <div *ngFor=\"let er of errors\">\r\n                <ng-container *ngIf=\"login.get('celular').hasError(er.celular) && (login.get('celular').touched || login.get('celular').dirty)\">{{er.message}}</ng-container>\r\n              </div>\r\n          </div>\r\n          <div class=\"btn-express\">\r\n            <ion-button (click)=\"presentAlert()\" shape=\"round\" [disabled]=\"form.invalid\" type=\"submit\" color=\"dark\" expand=\"block\" fill=\"solid\">REGÍSTRATE</ion-button>\r\n            <ion-button routerLink=\"/login\" shape=\"round\" color=\"dark\" expand=\"block\" fill=\"solid\">VOLVER</ion-button>\r\n          </div>\r\n        </ion-card-content>\r\n      </ion-card>\r\n  </form>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_registro_registro_module_ts.js.map