"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_landing-home_landing-home_module_ts"],{

/***/ 5992:
/*!*************************************************************!*\
  !*** ./src/app/landing-home/landing-home-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingHomePageRoutingModule": () => (/* binding */ LandingHomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _landing_home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing-home.page */ 1579);




const routes = [
    {
        path: '',
        component: _landing_home_page__WEBPACK_IMPORTED_MODULE_0__.LandingHomePage
    }
];
let LandingHomePageRoutingModule = class LandingHomePageRoutingModule {
};
LandingHomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LandingHomePageRoutingModule);



/***/ }),

/***/ 5819:
/*!*****************************************************!*\
  !*** ./src/app/landing-home/landing-home.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingHomePageModule": () => (/* binding */ LandingHomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _landing_home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing-home-routing.module */ 5992);
/* harmony import */ var _landing_home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing-home.page */ 1579);







let LandingHomePageModule = class LandingHomePageModule {
};
LandingHomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _landing_home_routing_module__WEBPACK_IMPORTED_MODULE_0__.LandingHomePageRoutingModule
        ],
        declarations: [_landing_home_page__WEBPACK_IMPORTED_MODULE_1__.LandingHomePage]
    })
], LandingHomePageModule);



/***/ }),

/***/ 1579:
/*!***************************************************!*\
  !*** ./src/app/landing-home/landing-home.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingHomePage": () => (/* binding */ LandingHomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _landing_home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landing-home.page.html?ngResource */ 130);
/* harmony import */ var _landing_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing-home.page.scss?ngResource */ 2144);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 5398);







let LandingHomePage = class LandingHomePage {
    constructor(animationCtrl, route) {
        this.animationCtrl = animationCtrl;
        this.route = route;
    }
    ngOnInit() {
    }
    loginCli() {
        const cartAnimation = this.animationCtrl.create('cart-animation')
            .addElement(this.LoginCli.nativeElement)
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
        (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.timer)(1200).subscribe(x => { this.route.navigate(['/login-cliente']); });
    }
    loginEm() {
        const cartAnimation = this.animationCtrl.create('cart-animation')
            .addElement(this.LoginEm.nativeElement)
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
        (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.timer)(1200).subscribe(x => { this.route.navigate(['/login']); });
    }
};
LandingHomePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.AnimationController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
LandingHomePage.propDecorators = {
    LoginCli: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: ['LoginCli', { read: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ElementRef },] }],
    LoginEm: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild, args: ['LoginEm', { read: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ElementRef },] }]
};
LandingHomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-landing-home',
        template: _landing_home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_landing_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LandingHomePage);



/***/ }),

/***/ 2144:
/*!****************************************************************!*\
  !*** ./src/app/landing-home/landing-home.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = ":host {\n  font-family: var(--fonts-roboto);\n  font: 1rem var(--fonts-weight-regular);\n  color: var(--colors-gris-oscuro);\n  background: var(ion-color-background-home);\n}\n:host .imgLogo {\n  height: 80%;\n  width: 80%;\n  margin: 0 auto;\n  display: block;\n  margin-left: auto;\n}\n:host ion-item {\n  --inner-padding-end: 0px;\n}\n:host ion-grid {\n  --inner-padding-end: 0px;\n}\n:host ion-col {\n  --inner-padding-end: 0px;\n}\n:host .home_page {\n  display: block;\n  background: var(--ion-color-background-home);\n}\n:host .menu {\n  color: var(--colors-gris-oscuro);\n}\n:host .header {\n  text-align: center;\n  color: var(--colors-gris-oscuro);\n}\n:host .title {\n  text-transform: capitalize;\n  width: 100%;\n  display: block;\n  margin: 5;\n  --padding: 1;\n  font: 1.5rem;\n  color: var(--colors-gris-oscuro);\n  text-align: center;\n  margin-bottom: 9px;\n}\n:host .subttitle {\n  text-transform: capitalize;\n  width: 100%;\n  display: block;\n  margin: 0;\n  --padding: 0;\n  font: 1rem;\n  color: var(--colors-gris-oscuro);\n  text-align: center;\n  margin-bottom: 9px;\n}\n:host .texto {\n  width: 100%;\n  display: block;\n  margin: 0;\n  --padding: 0;\n  font: 1rem;\n  color: var(--colors-gris-oscuro);\n  text-align: justify;\n  margin-bottom: 9px;\n}\n:host .ios .tituloCard {\n  font: 2.3vh var(--fonts-weight-regular);\n  color: var(--colors-gris-oscuro);\n  margin: 0;\n  padding: 0;\n  text-align: center;\n  display: block;\n  float: none; /* Added */\n  margin-bottom: 10px; /* Added */\n}\n:host .md .tituloCard {\n  font: 3vh var(--fonts-weight-regular);\n  color: var(--colors-gris-oscuro);\n  margin: 0;\n  padding: 0;\n  text-align: center;\n  display: block;\n  float: none; /* Added */\n  margin-bottom: 10px; /* Added */\n}\nion-card {\n  --ion-background-color: transparent;\n  box-shadow: none !important;\n  margin-top: 80px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmRpbmctaG9tZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQ0FBQTtFQUNBLHNDQUFBO0VBQ0EsZ0NBQUE7RUFDQSwwQ0FBQTtBQUNKO0FBQ0k7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFDUjtBQUVJO0VBQ0ksd0JBQUE7QUFBUjtBQUdJO0VBQ0ksd0JBQUE7QUFEUjtBQUdJO0VBQ0ksd0JBQUE7QUFEUjtBQUlJO0VBQ0ksY0FBQTtFQUNBLDRDQUFBO0FBRlI7QUFLSTtFQUNJLGdDQUFBO0FBSFI7QUFPSTtFQUNJLGtCQUFBO0VBQ0EsZ0NBQUE7QUFMUjtBQVFJO0VBQ0ksMEJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQU5SO0FBV0k7RUFDSSwwQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBVFI7QUFZSTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBVlI7QUFhSTtFQUVJLHVDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUEsRUFBQSxVQUFBO0VBQ0EsbUJBQUEsRUFBQSxVQUFBO0FBWlI7QUFlSTtFQUVJLHFDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUEsRUFBQSxVQUFBO0VBQ0EsbUJBQUEsRUFBQSxVQUFBO0FBZFI7QUFrQkE7RUFDSSxtQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7QUFmSiIsImZpbGUiOiJsYW5kaW5nLWhvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnRzLXJvYm90byk7XHJcbiAgICBmb250OiAxcmVtIHZhcigtLWZvbnRzLXdlaWdodC1yZWd1bGFyKTtcclxuICAgIGNvbG9yOiB2YXIoLS1jb2xvcnMtZ3Jpcy1vc2N1cm8pO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKGlvbi1jb2xvci1iYWNrZ3JvdW5kLWhvbWUpO1xyXG5cclxuICAgIC5pbWdMb2dvIHtcclxuICAgICAgICBoZWlnaHQ6IDgwJTtcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgIGlvbi1pdGVtIHtcclxuICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XHJcbiAgICAgICBcclxuICAgIH1cclxuICAgIGlvbi1ncmlkIHtcclxuICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XHJcbiAgICB9XHJcbiAgICBpb24tY29sIHtcclxuICAgICAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmhvbWVfcGFnZSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWJhY2tncm91bmQtaG9tZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLm1lbnUge1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvcnMtZ3Jpcy1vc2N1cm8pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAuaGVhZGVyIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWNvbG9ycy1ncmlzLW9zY3Vybyk7XHJcbiAgICB9XHJcblxyXG4gICAgLnRpdGxlIHtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBtYXJnaW46IDU7XHJcbiAgICAgICAgLS1wYWRkaW5nOiAxO1xyXG4gICAgICAgIGZvbnQ6IDEuNXJlbTtcclxuICAgICAgICBjb2xvcjogdmFyKC0tY29sb3JzLWdyaXMtb3NjdXJvKTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOXB4O1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLnN1YnR0aXRsZSB7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIC0tcGFkZGluZzogMDtcclxuICAgICAgICBmb250OiAxcmVtO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvcnMtZ3Jpcy1vc2N1cm8pO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA5cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnRleHRvIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgLS1wYWRkaW5nOiAwO1xyXG4gICAgICAgIGZvbnQ6IDFyZW07XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWNvbG9ycy1ncmlzLW9zY3Vybyk7XHJcbiAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA5cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmlvcyAudGl0dWxvQ2FyZCB7XHJcblxyXG4gICAgICAgIGZvbnQ6IDIuM3ZoIHZhcigtLWZvbnRzLXdlaWdodC1yZWd1bGFyKTtcclxuICAgICAgICBjb2xvcjogdmFyKC0tY29sb3JzLWdyaXMtb3NjdXJvKTtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7ICAgICAgXHJcbiAgICAgICAgZmxvYXQ6IG5vbmU7IC8qIEFkZGVkICovXHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDsgLyogQWRkZWQgKi8gICBcclxuICAgIH1cclxuXHJcbiAgICAubWQgLnRpdHVsb0NhcmQge1xyXG5cclxuICAgICAgICBmb250OiAzdmggdmFyKC0tZm9udHMtd2VpZ2h0LXJlZ3VsYXIpO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvcnMtZ3Jpcy1vc2N1cm8pO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBmbG9hdDogbm9uZTsgLyogQWRkZWQgKi9cclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4OyAvKiBBZGRlZCAqL1xyXG4gICAgfVxyXG59XHJcblxyXG5pb24tY2FyZHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXRvcDogODBweDtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 130:
/*!****************************************************************!*\
  !*** ./src/app/landing-home/landing-home.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"home_page ion-no-border translucent\">\r\n  <ion-toolbar >\r\n    <figure>\r\n      <ion-img class=\"imgLogo\" src=\"../../assets/images/logo-ServiExpress.png\"></ion-img>\r\n    </figure>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content fullscreen class=\"home_page ion-no-border\">\r\n  <ion-grid class=\" ion-no-border cion-no-padding\">\r\n    <ion-row >\r\n      <ion-col size=\"6\">\r\n        <ion-item class=\"ion-no-padding \" lines=\"none\">\r\n          <ion-card>\r\n            <ion-img (click)=\"loginCli()\" src=\"assets/images/usuario.png\"></ion-img>\r\n          <ion-card-header  (click)=\"loginCli()\" #LoginCli>\r\n            <ion-card-title class=\"tituloCard\">Login Cliente</ion-card-title>\r\n          </ion-card-header>\r\n          </ion-card>\r\n        </ion-item>\r\n      </ion-col>\r\n      <ion-col size=\"6\" >\r\n        <ion-item class=\"ion-no-padding\" lines=\"none\">\r\n          <ion-card>\r\n            <ion-img (click)=\"loginEm()\" src=\"assets/images/empleado.png\"></ion-img>\r\n            <ion-card-header  (click)=\"loginEm()\" #LoginEm>\r\n              <ion-card-title class=\"tituloCard\">Login Empleado</ion-card-title>\r\n            </ion-card-header>\r\n          </ion-card>\r\n        </ion-item>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_landing-home_landing-home_module_ts.js.map