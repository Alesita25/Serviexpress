"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_home_module_ts"],{

/***/ 2003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 2003);







let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 2267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page.html?ngResource */ 3853);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 1020);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);





let HomePage = class HomePage {
    constructor(activeroute, router) {
        this.activeroute = activeroute;
        this.router = router;
        this.activeroute.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.data = this.router.getCurrentNavigation().extras.state.user;
                console.log(this.data);
            }
            else
                (this.router.navigate(["/login-cliente"]));
        });
    }
    AgendaHora() {
        let NavigationExtras = {
            state: {}
        };
        this.router.navigate(['/home'], NavigationExtras);
    }
    Contacto() {
        let NavigationExtras = {
            state: {}
        };
        this.router.navigate(['/home'], NavigationExtras);
    }
    Servicios() {
        let NavigationExtras = {
            state: {}
        };
        this.router.navigate(['/home'], NavigationExtras);
    }
    Sucursales() {
        let NavigationExtras = {
            state: {}
        };
        this.router.navigate(['/home'], NavigationExtras);
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-home',
        template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 1020:
/*!************************************************!*\
  !*** ./src/app/home/home.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = ":host {\n  font-family: var(--fonts-roboto);\n  font: 1rem var(--fonts-weight-regular);\n  color: var(--colors-gris-oscuro);\n  background: var(ion-color-background-home);\n}\n:host .imgLogo {\n  height: 80%;\n  width: 80%;\n  margin: 0 auto;\n  display: block;\n  margin-left: auto;\n}\n:host ion-card img {\n  width: 20%;\n  height: 20%;\n}\n:host .home_page {\n  display: block;\n  background: var(--ion-color-background-home);\n}\n:host .menu {\n  color: var(--colors-gris-oscuro);\n}\n:host .header {\n  text-align: center;\n  color: var(--colors-gris-oscuro);\n}\n:host .title {\n  text-transform: capitalize;\n  width: 100%;\n  display: block;\n  margin: 5;\n  --padding: 1;\n  font: 1.5rem;\n  color: var(--colors-gris-oscuro);\n  text-align: center;\n  margin-bottom: 9px;\n}\n:host .subtitle {\n  text-transform: capitalize;\n  width: 100%;\n  display: block;\n  margin: 0;\n  --padding: 0;\n  font: 1rem;\n  color: var(--colors-gris-oscuro);\n  text-align: center;\n  margin-bottom: 9px;\n}\n:host .texto {\n  width: 100%;\n  display: block;\n  margin: 0;\n  --padding: 0;\n  font: 1rem;\n  color: var(--colors-gris-oscuro);\n  text-align: justify;\n  margin-bottom: 9px;\n}\n:host .tituloCard {\n  font: 3vh var(--fonts-weight-regular);\n  color: var(--colors-gris-oscuro);\n  margin: 0;\n  padding: 0;\n  display: block;\n  text-align: center;\n}\n:host .md .tituloCard {\n  font: 3vh var(--fonts-weight-regular);\n  color: var(--colors-gris-oscuro);\n  margin: 0;\n  padding: 0;\n  display: block;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0NBQUE7RUFDQSxzQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsMENBQUE7QUFDRjtBQUNFO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBQ047QUFFRTtFQUNJLFVBQUE7RUFDQSxXQUFBO0FBQU47QUFHRTtFQUNJLGNBQUE7RUFDQSw0Q0FBQTtBQUROO0FBSUU7RUFDSSxnQ0FBQTtBQUZOO0FBTUU7RUFDSSxrQkFBQTtFQUNBLGdDQUFBO0FBSk47QUFPRTtFQUNJLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUFMTjtBQVVFO0VBQ0ksMEJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQVJOO0FBV0U7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQVROO0FBWUU7RUFFSSxxQ0FBQTtFQUNBLGdDQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFYTjtBQWVFO0VBRUkscUNBQUE7RUFDQSxnQ0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBZE4iLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnRzLXJvYm90byk7XHJcbiAgZm9udDogMXJlbSB2YXIoLS1mb250cy13ZWlnaHQtcmVndWxhcik7XHJcbiAgY29sb3I6IHZhcigtLWNvbG9ycy1ncmlzLW9zY3Vybyk7XHJcbiAgYmFja2dyb3VuZDogdmFyKGlvbi1jb2xvci1iYWNrZ3JvdW5kLWhvbWUpO1xyXG5cclxuICAuaW1nTG9nbyB7XHJcbiAgICAgIGhlaWdodDogODAlO1xyXG4gICAgICB3aWR0aDogODAlO1xyXG4gICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgaW9uLWNhcmQgaW1nIHtcclxuICAgICAgd2lkdGg6IDIwJTtcclxuICAgICAgaGVpZ2h0OiAyMCU7XHJcbiAgfVxyXG5cclxuICAuaG9tZV9wYWdlIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1iYWNrZ3JvdW5kLWhvbWUpO1xyXG4gIH1cclxuXHJcbiAgLm1lbnUge1xyXG4gICAgICBjb2xvcjogdmFyKC0tY29sb3JzLWdyaXMtb3NjdXJvKTtcclxuICB9XHJcblxyXG5cclxuICAuaGVhZGVyIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBjb2xvcjogdmFyKC0tY29sb3JzLWdyaXMtb3NjdXJvKTtcclxuICB9XHJcblxyXG4gIC50aXRsZSB7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIG1hcmdpbjogNTtcclxuICAgICAgLS1wYWRkaW5nOiAxO1xyXG4gICAgICBmb250OiAxLjVyZW07XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1jb2xvcnMtZ3Jpcy1vc2N1cm8pO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDlweDtcclxuICB9XHJcblxyXG5cclxuXHJcbiAgLnN1YnRpdGxlIHtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAtLXBhZGRpbmc6IDA7XHJcbiAgICAgIGZvbnQ6IDFyZW07XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1jb2xvcnMtZ3Jpcy1vc2N1cm8pO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDlweDtcclxuICB9XHJcblxyXG4gIC50ZXh0byB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAtLXBhZGRpbmc6IDA7XHJcbiAgICAgIGZvbnQ6IDFyZW07XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1jb2xvcnMtZ3Jpcy1vc2N1cm8pO1xyXG4gICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA5cHg7XHJcbiAgfVxyXG5cclxuICAudGl0dWxvQ2FyZCB7XHJcblxyXG4gICAgICBmb250OiAzdmggdmFyKC0tZm9udHMtd2VpZ2h0LXJlZ3VsYXIpO1xyXG4gICAgICBjb2xvcjogdmFyKC0tY29sb3JzLWdyaXMtb3NjdXJvKTtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIFxyXG4gIH1cclxuXHJcbiAgLm1kIC50aXR1bG9DYXJkIHtcclxuXHJcbiAgICAgIGZvbnQ6IDN2aCB2YXIoLS1mb250cy13ZWlnaHQtcmVndWxhcik7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1jb2xvcnMtZ3Jpcy1vc2N1cm8pO1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG5cclxuXHJcbn0iXX0= */";

/***/ }),

/***/ 3853:
/*!************************************************!*\
  !*** ./src/app/home/home.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"home_page\">\r\n  <ion-toolbar >\r\n    <figure>\r\n      <img class=\"imgLogo\" src=\"../../assets/images/logo-ServiExpress.png\">\r\n    </figure>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-menu-button class=\"menu\"></ion-menu-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content fullscreen class=\"home_page\">\r\n  <div>\r\n    <section slot=\"fixed\">\r\n      <h3 class=\"title\">Bienvenido</h3>\r\n      <h1 class=\"subtitle\">{{data.usuario}}</h1>\r\n    </section>\r\n  </div>\r\n  \r\n  <div>\r\n    <ion-card>\r\n      <ion-card-header (click)=\"AgendaHora()\">\r\n        <ion-card-title class=\"titulocard\">Agenda tu hora</ion-card-title>\r\n      </ion-card-header>\r\n    </ion-card>\r\n    <ion-card>\r\n      <ion-card-header (click)=\"Contacto()\">\r\n        <ion-card-title class=\"titulocard\">Contacto</ion-card-title>\r\n      </ion-card-header>\r\n    </ion-card>\r\n    <ion-card>\r\n      <ion-card-header (click)=\"Servicios()\">\r\n        <ion-card-title class=\"titulocard\">Servicios</ion-card-title>\r\n      </ion-card-header>\r\n    </ion-card>\r\n    <ion-card>\r\n      <ion-card-header (click)=\"Sucursales()\">\r\n        <ion-card-title class=\"titulocard\">Sucursales</ion-card-title>\r\n      </ion-card-header>\r\n    </ion-card>\r\n  </div>\r\n</ion-content>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n   <!-- <ion-header collapse=\"condense\">\r\n    <ion-toolbar>\r\n      <ion-title size=\"large\">Bienvenido</ion-title> \r\n      \r\n    </ion-toolbar>\r\n  </ion-header>  -->\r\n\r\n   <!-- <ion-card>\r\n    <ion-card-content>\r\n      <ion-item lines=\"none\"> \r\n       \r\n         <ion-label > Bienvenido, {{data.usuario}}</ion-label>\r\n      </ion-item>\r\n    </ion-card-content>\r\n   \r\n  </ion-card> \r\n\r\n </ion-content>  -->\r\n\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map