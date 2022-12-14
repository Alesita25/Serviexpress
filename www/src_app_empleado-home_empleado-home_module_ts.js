"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_empleado-home_empleado-home_module_ts"],{

/***/ 6803:
/*!***************************************************************!*\
  !*** ./src/app/empleado-home/empleado-home-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmpleadoHomePageRoutingModule": () => (/* binding */ EmpleadoHomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _empleado_home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./empleado-home.page */ 7477);




const routes = [
    {
        path: '',
        component: _empleado_home_page__WEBPACK_IMPORTED_MODULE_0__.EmpleadoHomePage
    }
];
let EmpleadoHomePageRoutingModule = class EmpleadoHomePageRoutingModule {
};
EmpleadoHomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EmpleadoHomePageRoutingModule);



/***/ }),

/***/ 2807:
/*!*******************************************************!*\
  !*** ./src/app/empleado-home/empleado-home.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmpleadoHomePageModule": () => (/* binding */ EmpleadoHomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _empleado_home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./empleado-home-routing.module */ 6803);
/* harmony import */ var _empleado_home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./empleado-home.page */ 7477);







let EmpleadoHomePageModule = class EmpleadoHomePageModule {
};
EmpleadoHomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _empleado_home_routing_module__WEBPACK_IMPORTED_MODULE_0__.EmpleadoHomePageRoutingModule
        ],
        declarations: [_empleado_home_page__WEBPACK_IMPORTED_MODULE_1__.EmpleadoHomePage]
    })
], EmpleadoHomePageModule);



/***/ }),

/***/ 7477:
/*!*****************************************************!*\
  !*** ./src/app/empleado-home/empleado-home.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmpleadoHomePage": () => (/* binding */ EmpleadoHomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _empleado_home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./empleado-home.page.html?ngResource */ 6758);
/* harmony import */ var _empleado_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./empleado-home.page.scss?ngResource */ 6683);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.component */ 5041);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 5398);








let EmpleadoHomePage = class EmpleadoHomePage {
    constructor(appcom, animationCtrl, route) {
        this.appcom = appcom;
        this.animationCtrl = animationCtrl;
        this.route = route;
        this.user = "";
        this.nameCliente = "";
        this.user = appcom.user;
    }
    ngOnInit() {
    }
    //metodo que genera animación
    bandejaT() {
        const cartAnimation = this.animationCtrl.create('cart-animation')
            .addElement(this.bandejaTrabajo.nativeElement)
            .keyframes([
            { offset: 0, transform: 'scale(1)' },
            { offset: 0.5, transform: 'scale(1.2)' },
            { offset: 0.8, transform: 'scale(0.9)' },
            { offset: 1, transform: 'scale(1)' }
        ]);
        const parent = this.animationCtrl.create('parent')
            .duration(1000)
            .easing('ease-out')
            .iterations(1)
            .direction('alternate')
            .addAnimation([cartAnimation]);
        parent.play();
        (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.timer)(1200).subscribe(x => { this.route.navigate(['/home']); });
    }
    solRep() {
        const cartAnimation = this.animationCtrl.create('cart-animation')
            .addElement(this.repuestoEmp.nativeElement)
            .keyframes([
            { offset: 0, transform: 'scale(1)' },
            { offset: 0.5, transform: 'scale(1.2)' },
            { offset: 0.8, transform: 'scale(0.9)' },
            { offset: 1, transform: 'scale(1)' }
        ]);
        const parent = this.animationCtrl.create('parent')
            .duration(1000)
            .easing('ease-out')
            .iterations(1)
            .direction('alternate')
            .addAnimation([cartAnimation]);
        parent.play();
        (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.timer)(1200).subscribe(x => { this.route.navigate(['/home']); });
    }
    ingresaVehiculo() {
        const cartAnimation = this.animationCtrl.create('cart-animation')
            .addElement(this.ingresaVehiculo1.nativeElement)
            .keyframes([
            { offset: 0, transform: 'scale(1)' },
            { offset: 0.5, transform: 'scale(1.2)' },
            { offset: 0.8, transform: 'scale(0.9)' },
            { offset: 1, transform: 'scale(1)' }
        ]);
        const parent = this.animationCtrl.create('parent')
            .duration(1000)
            .easing('ease-out')
            .iterations(1)
            .direction('alternate')
            .addAnimation([cartAnimation]);
        parent.play();
        (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.timer)(1200).subscribe(x => { this.route.navigate(['/home']); });
    }
    modificaCliente() {
        const cartAnimation = this.animationCtrl.create('cart-animation')
            .addElement(this.modificaCliente1.nativeElement)
            .keyframes([
            { offset: 0, transform: 'scale(1)' },
            { offset: 0.5, transform: 'scale(1.2)' },
            { offset: 0.8, transform: 'scale(0.9)' },
            { offset: 1, transform: 'scale(1)' }
        ]);
        const parent = this.animationCtrl.create('parent')
            .duration(1000)
            .easing('ease-out')
            .iterations(1)
            .direction('alternate')
            .addAnimation([cartAnimation]);
        parent.play();
        (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.timer)(1200).subscribe(x => { this.route.navigate(['/home']); });
    }
};
EmpleadoHomePage.ctorParameters = () => [
    { type: _app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AnimationController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
EmpleadoHomePage.propDecorators = {
    bandejaTrabajo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: ['bandejaTrabajo', { read: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ElementRef },] }],
    repuestoEmp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: ['repuestoEmp', { read: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ElementRef },] }],
    ingresaVehiculo1: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: ['ingresaVehiculo1', { read: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ElementRef },] }],
    modificaCliente1: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild, args: ['modificaCliente1', { read: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ElementRef },] }]
};
EmpleadoHomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-empleado-home',
        template: _empleado_home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_empleado_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], EmpleadoHomePage);



/***/ }),

/***/ 6683:
/*!******************************************************************!*\
  !*** ./src/app/empleado-home/empleado-home.page.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = ":host {\n  font-family: var(--fonts-roboto);\n  font: 1rem var(--fonts-weight-regular);\n  color: var(--colors-gris-oscuro);\n  background: var(ion-color-background-home);\n}\n:host .imgLogo {\n  height: 80%;\n  width: 80%;\n  margin: 0 auto;\n  display: block;\n  margin-left: auto;\n}\n:host ion-card img {\n  width: 20%;\n  height: 20%;\n}\n:host .home_page {\n  display: block;\n  background: var(--ion-color-background-home);\n}\n:host .menu {\n  color: var(--colors-gris-oscuro);\n}\n:host .header {\n  text-align: center;\n  color: var(--colors-gris-oscuro);\n}\n:host .title {\n  text-transform: capitalize;\n  width: 100%;\n  display: block;\n  margin: 5;\n  --padding: 1;\n  font: 1.5rem;\n  color: var(--colors-gris-oscuro);\n  text-align: center;\n  margin-bottom: 9px;\n}\n:host .subttitle {\n  text-transform: capitalize;\n  width: 100%;\n  display: block;\n  margin: 0;\n  --padding: 0;\n  font: 1rem;\n  color: var(--colors-gris-oscuro);\n  text-align: center;\n  margin-bottom: 9px;\n}\n:host .texto {\n  width: 100%;\n  display: block;\n  margin: 0;\n  --padding: 0;\n  font: 1rem;\n  color: var(--colors-gris-oscuro);\n  text-align: justify;\n  margin-bottom: 9px;\n}\n:host .tituloCard {\n  font: 3vh var(--fonts-weight-regular);\n  color: var(--colors-gris-oscuro);\n  margin: 0;\n  padding: 0;\n  display: block;\n  text-align: center;\n}\n:host .md .tituloCard {\n  font: 3vh var(--fonts-weight-regular);\n  color: var(--colors-gris-oscuro);\n  margin: 0;\n  padding: 0;\n  display: block;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtcGxlYWRvLWhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0NBQUE7RUFDQSxzQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsMENBQUE7QUFDSjtBQUNJO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBQ1I7QUFFSTtFQUNJLFVBQUE7RUFDQSxXQUFBO0FBQVI7QUFHSTtFQUNJLGNBQUE7RUFDQSw0Q0FBQTtBQURSO0FBSUk7RUFDSSxnQ0FBQTtBQUZSO0FBTUk7RUFDSSxrQkFBQTtFQUNBLGdDQUFBO0FBSlI7QUFPSTtFQUNJLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFMUjtBQVVJO0VBQ0ksMEJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQVJSO0FBV0k7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQVRSO0FBWUk7RUFFSSxxQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFYUjtBQWVJO0VBRUkscUNBQUE7RUFDQSxnQ0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBZFIiLCJmaWxlIjoiZW1wbGVhZG8taG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBmb250LWZhbWlseTogdmFyKC0tZm9udHMtcm9ib3RvKTtcclxuICAgIGZvbnQ6IDFyZW0gdmFyKC0tZm9udHMtd2VpZ2h0LXJlZ3VsYXIpO1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9ycy1ncmlzLW9zY3Vybyk7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoaW9uLWNvbG9yLWJhY2tncm91bmQtaG9tZSk7XHJcblxyXG4gICAgLmltZ0xvZ28ge1xyXG4gICAgICAgIGhlaWdodDogODAlO1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWNhcmQgaW1nIHtcclxuICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgICAgIGhlaWdodDogMjAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5ob21lX3BhZ2Uge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1iYWNrZ3JvdW5kLWhvbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC5tZW51IHtcclxuICAgICAgICBjb2xvcjogdmFyKC0tY29sb3JzLWdyaXMtb3NjdXJvKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLmhlYWRlciB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvcnMtZ3Jpcy1vc2N1cm8pO1xyXG4gICAgfVxyXG5cclxuICAgIC50aXRsZSB7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luOiA1O1xyXG4gICAgICAgIC0tcGFkZGluZzogMTtcclxuICAgICAgICBmb250OiAxLjVyZW07XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWNvbG9ycy1ncmlzLW9zY3Vybyk7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDlweDtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC5zdWJ0dGl0bGUge1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAtLXBhZGRpbmc6IDA7XHJcbiAgICAgICAgZm9udDogMXJlbTtcclxuICAgICAgICBjb2xvcjogdmFyKC0tY29sb3JzLWdyaXMtb3NjdXJvKTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC50ZXh0byB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIC0tcGFkZGluZzogMDtcclxuICAgICAgICBmb250OiAxcmVtO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvcnMtZ3Jpcy1vc2N1cm8pO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC50aXR1bG9DYXJkIHtcclxuXHJcbiAgICAgICAgZm9udDogM3ZoIHZhcigtLWZvbnRzLXdlaWdodC1yZWd1bGFyKTtcclxuICAgICAgICBjb2xvcjogdmFyKC0tY29sb3JzLWdyaXMtb3NjdXJvKTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAubWQgLnRpdHVsb0NhcmQge1xyXG5cclxuICAgICAgICBmb250OiAzdmggdmFyKC0tZm9udHMtd2VpZ2h0LXJlZ3VsYXIpO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvcnMtZ3Jpcy1vc2N1cm8pO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG59Il19 */";

/***/ }),

/***/ 6758:
/*!******************************************************************!*\
  !*** ./src/app/empleado-home/empleado-home.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"home_page\">\r\n  <ion-toolbar >\r\n    <figure>\r\n      <img class=\"imgLogo\" src=\"../../assets/images/logo-ServiExpress.png\">\r\n    </figure>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-menu-button class=\"menu\"></ion-menu-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content fullscreen class=\"home_page\">\r\n  <div>\r\n    <section slot=\"fixed\">\r\n      <h3 class=\"title\">!bienvenido!</h3>\r\n      <h1 class=\"subttitle\">{{this.user}}</h1>\r\n    </section>\r\n  </div>\r\n  <div>\r\n    <ion-card>\r\n      <ion-card-header  (click)=\"bandejaT()\" #bandejaTrabajo>\r\n        <ion-card-title class=\"tituloCard\">Bandeja de Trabajo</ion-card-title>\r\n      </ion-card-header>\r\n    </ion-card>\r\n    <ion-card>\r\n      <ion-card-header  (click)=\"solRep()\" #repuestoEmp>\r\n        <ion-card-title class=\"tituloCard\">Solicitar Repuestos</ion-card-title>\r\n      </ion-card-header>\r\n    </ion-card>\r\n    <ion-card>\r\n      <ion-card-header  (click)=\"ingresaVehiculo()\" #ingresaVehiculo1>\r\n        <ion-card-title class=\"tituloCard\">Ingresar Vehículo</ion-card-title>\r\n      </ion-card-header>\r\n    </ion-card>\r\n    <ion-card>\r\n      <ion-card-header  (click)=\"modificaCliente()\" #modificaCliente1>\r\n        <ion-card-title class=\"tituloCard\">Modificar Cliente</ion-card-title>\r\n      </ion-card-header>\r\n    </ion-card>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_empleado-home_empleado-home_module_ts.js.map