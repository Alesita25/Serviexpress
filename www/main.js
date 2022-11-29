(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ingreso_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ingreso.guard */ 7304);
/* harmony import */ var _siningreso_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./siningreso.guard */ 3997);





const routes = [
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 3467)).then(m => m.HomePageModule)
    },
    {
        path: '',
        redirectTo: 'landing-home',
        pathMatch: 'full'
    },
    {
        path: 'empleado-home',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_empleado-home_empleado-home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./empleado-home/empleado-home.module */ 2807)).then(m => m.EmpleadoHomePageModule)
    },
    {
        path: 'login-cliente',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_login-cliente_login-cliente_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./login-cliente/login-cliente.module */ 8178)).then(m => m.LoginClientePageModule),
        canActivate: [_siningreso_guard__WEBPACK_IMPORTED_MODULE_1__.SiningresoGuard]
    },
    {
        path: 'login',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./login/login.module */ 107)).then(m => m.LoginPageModule),
        canActivate: [_siningreso_guard__WEBPACK_IMPORTED_MODULE_1__.SiningresoGuard]
    },
    {
        path: 'registro',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_registro_registro_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./registro/registro.module */ 636)).then(m => m.RegistroPageModule),
        canActivate: [_siningreso_guard__WEBPACK_IMPORTED_MODULE_1__.SiningresoGuard]
    },
    {
        path: 'registro-cliente',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_registro-cliente_registro-cliente_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./registro-cliente/registro-cliente.module */ 8148)).then(m => m.RegistroClientePageModule),
        canActivate: [_siningreso_guard__WEBPACK_IMPORTED_MODULE_1__.SiningresoGuard]
    },
    {
        path: 'registro-exitoso',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_registro-exitoso_registro-exitoso_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./registro-exitoso/registro-exitoso.module */ 8714)).then(m => m.RegistroExitosoPageModule)
    },
    {
        path: 'landing-home',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_landing-home_landing-home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./landing-home/landing-home.module */ 5819)).then(m => m.LandingHomePageModule),
        canActivate: [_ingreso_guard__WEBPACK_IMPORTED_MODULE_0__.IngresoGuard]
    },
    {
        path: 'recuperar-password',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_recuperar-password_recuperar-password_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./recuperar-password/recuperar-password.module */ 9864)).then(m => m.RecuperarPasswordPageModule)
    },
    {
        path: 'cliente-home',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_reserva_reserva_page_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_cliente-home_cliente-home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./cliente-home/cliente-home.module */ 1155)).then(m => m.ClienteHomePageModule),
        canActivate: [_ingreso_guard__WEBPACK_IMPORTED_MODULE_0__.IngresoGuard]
    },
    {
        path: '**',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_not-found_not-found_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./not-found/not-found.module */ 2867)).then(m => m.NotFoundPageModule)
    },
    {
        path: 'cliente-modificar-reserva',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_cliente-modificar-reserva_cliente-modificar-reserva_module_ts-src_app_service_dbservi-69450e")]).then(__webpack_require__.bind(__webpack_require__, /*! ./cliente-modificar-reserva/cliente-modificar-reserva.module */ 9182)).then(m => m.ClienteModificarReservaPageModule)
    },
    {
        path: 'reserva',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_reserva_reserva_page_ts"), __webpack_require__.e("src_app_reserva_reserva_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./reserva/reserva.module */ 5462)).then(m => m.ReservaPageModule)
    },
    {
        path: 'cliente-misdatos',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_cliente-misdatos_cliente-misdatos_module_ts-src_app_service_dbservice_service_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./cliente-misdatos/cliente-misdatos.module */ 4814)).then(m => m.ClienteMisdatosPageModule)
    },
    {
        path: 'consultapost',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_consultapost_consultapost_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./consultapost/consultapost.module */ 482)).then(m => m.ConsultapostPageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_4__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 9259);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);





let AppComponent = class AppComponent {
    //librería para enrutar páginas
    constructor(route) {
        this.route = route;
        this.user = 'Alejandra';
    }
    //indicar nombre de metodo que llamará a la página
    homePage() {
        this.route.navigate(['/EmpleadoHomePage']);
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-root',
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @awesome-cordova-plugins/camera/ngx */ 2543);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _awesome_cordova_plugins_sqlite_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/sqlite/ngx */ 8685);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 8987);











let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouteReuseStrategy, useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicRouteStrategy }, _awesome_cordova_plugins_sqlite_ngx__WEBPACK_IMPORTED_MODULE_3__.SQLite, _awesome_cordova_plugins_camera_ngx__WEBPACK_IMPORTED_MODULE_0__.Camera],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 7304:
/*!**********************************!*\
  !*** ./src/app/ingreso.guard.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IngresoGuard": () => (/* binding */ IngresoGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


let IngresoGuard = class IngresoGuard {
    canActivate(route, state) {
        console.log('IngresoGuard#canActivate called');
        return true;
    }
};
IngresoGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], IngresoGuard);



/***/ }),

/***/ 3997:
/*!*************************************!*\
  !*** ./src/app/siningreso.guard.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SiningresoGuard": () => (/* binding */ SiningresoGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


let SiningresoGuard = class SiningresoGuard {
    canActivate(route, state) {
        console.log('SiningresoGuard#canActivate called');
        return true;
    }
};
SiningresoGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], SiningresoGuard);



/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 6057);
/* harmony import */ var _ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/pwa-elements/loader */ 8763);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ 2340);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_4__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__.AppModule)
    .catch(err => console.log(err));
(0,_ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_0__.defineCustomElements)(window);


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		79,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		5593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		3225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		6655,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		4856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		3059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		8648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		8308,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		4690,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		4090,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		6214,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		9447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		7950,
		"default-node_modules_ionic_core_dist_esm_data-cb72448c_js-node_modules_ionic_core_dist_esm_th-29e28e",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		9689,
		"default-node_modules_ionic_core_dist_esm_data-cb72448c_js-node_modules_ionic_core_dist_esm_th-29e28e",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		8840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		9667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		3288,
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		5473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		3634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		2855,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		8737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		9632,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		4446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		2275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		8050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		8994,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3592,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		2666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		4816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5534,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		4902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		1938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		8179,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		9989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		8902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		8395,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		6357,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		8268,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		2875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 5899:
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/pwa-elements/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \**************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./pwa-action-sheet.entry.js": [
		5464,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-action-sheet_entry_js"
	],
	"./pwa-camera-modal-instance.entry.js": [
		8724,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-camera-modal-instance_entry_js"
	],
	"./pwa-camera-modal.entry.js": [
		8145,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-camera-modal_entry_js"
	],
	"./pwa-camera.entry.js": [
		527,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-camera_entry_js"
	],
	"./pwa-toast.entry.js": [
		4389,
		"node_modules_ionic_pwa-elements_dist_esm_pwa-toast_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 5899;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 9259:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = ":host {\n  font-family: var(--fonts-roboto);\n  font: 1rem var(--fonts-weight-regular);\n  color: var(--colors-gris-oscuro);\n}\n:host .menu {\n  text-transform: capitalize;\n  font: 2.5vh var(--fonts-weight-regular);\n  color: var(--colors-gris-oscuro);\n}\n:host .ios .tituloMenu {\n  text-transform: capitalize;\n  width: 100%;\n  font: 4vh var(--fonts-weight-regular);\n  color: var(--colors-gris-oscuro);\n  text-align: center;\n}\n:host .md .tituloMenu {\n  text-transform: capitalize;\n  width: 100%;\n  font: 4vh var(--fonts-weight-regular);\n  color: var(--colors-gris-oscuro);\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGdDQUFBO0VBQ0Esc0NBQUE7RUFDQSxnQ0FBQTtBQUFGO0FBR0E7RUFDSSwwQkFBQTtFQUNBLHVDQUFBO0VBQ0EsZ0NBQUE7QUFESjtBQUlBO0VBQ0ssMEJBQUE7RUFDQSxXQUFBO0VBQ0EscUNBQUE7RUFDQSxnQ0FBQTtFQUNBLGtCQUFBO0FBRkw7QUFLQTtFQUNJLDBCQUFBO0VBQ0EsV0FBQTtFQUNBLHFDQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQkFBQTtBQUhKIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG46aG9zdCB7XHJcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnRzLXJvYm90byk7XHJcbiAgZm9udDogMXJlbSB2YXIoLS1mb250cy13ZWlnaHQtcmVndWxhcik7XHJcbiAgY29sb3I6IHZhcigtLWNvbG9ycy1ncmlzLW9zY3Vybyk7XHJcblxyXG5cclxuLm1lbnV7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGZvbnQ6IDIuNXZoIHZhcigtLWZvbnRzLXdlaWdodC1yZWd1bGFyKTtcclxuICAgIGNvbG9yOiB2YXIoLS1jb2xvcnMtZ3Jpcy1vc2N1cm8pO1xyXG59XHJcblxyXG4uaW9zIC50aXR1bG9NZW51IHtcclxuICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICB3aWR0aDogMTAwJTtcclxuICAgICBmb250OiA0dmggdmFyKC0tZm9udHMtd2VpZ2h0LXJlZ3VsYXIpO1xyXG4gICAgIGNvbG9yOiB2YXIoLS1jb2xvcnMtZ3Jpcy1vc2N1cm8pO1xyXG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgfVxyXG5cclxuLm1kIC50aXR1bG9NZW51IHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250OiA0dmggdmFyKC0tZm9udHMtd2VpZ2h0LXJlZ3VsYXIpO1xyXG4gICAgY29sb3I6IHZhcigtLWNvbG9ycy1ncmlzLW9zY3Vybyk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxufSJdfQ== */";

/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\r\n  <ion-menu side=\"end\" menuId=\"first\" contentId=\"content1\" swipe-gesture=true>\r\n    <ion-header>\r\n      <ion-toolbar>\r\n        <ion-title class=\"tituloMenu\">{{user}}</ion-title>\r\n      </ion-toolbar>\r\n    </ion-header>\r\n    <ion-content class=\"menu\">\r\n      <!--Menú hamburgursa, dependiendo del nombre muestra las opciones, con ngif y el user que viene desde components.ts -->\r\n      <ion-menu-toggle auto-hide=\"true\">\r\n      <ion-item routerDirection=\"forward\" *ngIf=\"user=='invitado'\">\r\n        <ion-icon name=\"power-outline\" slot=\"start\"></ion-icon>\r\n        <label class=\"\">Iniciar Sesión</label>\r\n      </ion-item>\r\n      <hr  *ngIf=\"user=='invitado'\">\r\n\r\n      <ion-item routerDirection=\"forward\" *ngIf=\"user=='Seba' || user=='Alejandra' || user=='invitado'\" (click)=\"homePage()\">\r\n        <ion-icon name=\"home-outline\" slot=\"start\"></ion-icon>\r\n        <label class=\"menu\">Home</label>\r\n      </ion-item>\r\n      <hr *ngIf=\"user=='Seba' || user=='Alejandra' || user=='invitado'\">\r\n\r\n      <ion-item routerDirection=\"forward\" *ngIf=\"user=='Seba' || user=='Alejandra'\">\r\n        <ion-icon name=\"person-circle-outline\" slot=\"start\"></ion-icon>\r\n        <label class=\"menu\">Tus Datos</label>\r\n      </ion-item>\r\n      <hr *ngIf=\"user=='Seba' || user=='Alejandra'\">\r\n\r\n      <ion-item routerDirection=\"forward\" *ngIf=\"user=='Seba'\">\r\n        <ion-icon name=\"car-outline\" slot=\"start\"></ion-icon>\r\n        <label class=\"menu\">Solicitar Repuesto</label>\r\n      </ion-item>\r\n      <hr *ngIf=\"user=='Seba'\">\r\n\r\n      <ion-item routerDirection=\"forward\" *ngIf=\"user=='Seba'\">\r\n        <ion-icon name=\"calendar-outline\" slot=\"start\"></ion-icon>\r\n        <label class=\"menu\">Modificar Hora Cliente</label>\r\n      </ion-item>\r\n      <hr *ngIf=\"user=='Seba'\">\r\n\r\n      <ion-item routerDirection=\"forward\" *ngIf=\"user=='Alejandra'\">\r\n        <ion-icon name=\"calendar-outline\" slot=\"start\"></ion-icon>\r\n        <label class=\"menu\">Agendar Hora</label>\r\n      </ion-item>\r\n      <hr *ngIf=\"user=='Alejandra'\">\r\n\r\n      <ion-item routerDirection=\"forward\" *ngIf=\"user=='Seba'\">\r\n        <ion-icon name=\"bag-outline\" slot=\"start\"></ion-icon>\r\n        <label class=\"menu\">Bandeja de Trabajo</label>\r\n      </ion-item>\r\n      <hr  *ngIf=\"user=='Seba'\">\r\n\r\n      <ion-item routerDirection=\"forward\" *ngIf=\"user=='Alejandra' || user=='invitado'\">\r\n        <ion-icon name=\"call-outline\" slot=\"start\"></ion-icon>\r\n        <label class=\"menu\">Contacto</label>\r\n      </ion-item>\r\n      <hr  *ngIf=\"user=='Alejandra' || user=='invitado'\">\r\n\r\n      <ion-item routerDirection=\"forward\" *ngIf=\"user=='Alejandra' || user=='invitado'\">\r\n        <ion-icon name=\"car-outline\" slot=\"start\"></ion-icon>\r\n        <label class=\"menu\">Servicios</label>\r\n      </ion-item>\r\n      <hr  *ngIf=\"user=='Alejandra' || user=='invitado'\">\r\n\r\n      <ion-item routerDirection=\"forward\" *ngIf=\"user=='Alejandra' || user=='invitado'\">\r\n        <ion-icon name=\"location-outline\" slot=\"start\"></ion-icon>\r\n        <label class=\"menu\">Sucursales</label>\r\n      </ion-item>\r\n      <hr  *ngIf=\"user=='Alejandra' || user=='invitado'\">\r\n\r\n      <ion-item routerDirection=\"forward\" *ngIf=\"user=='Seba' || user=='Alejandra'\">\r\n        <ion-icon name=\"power-outline\" slot=\"start\"></ion-icon>\r\n        <label routerLink=\"/landing-home\" class=\"menu\">Cerrar Sesión</label>\r\n      </ion-item>\r\n    </ion-menu-toggle>\r\n    </ion-content>\r\n  </ion-menu>\r\n  <ion-router-outlet id=\"content1\"></ion-router-outlet>\r\n</ion-app>";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map