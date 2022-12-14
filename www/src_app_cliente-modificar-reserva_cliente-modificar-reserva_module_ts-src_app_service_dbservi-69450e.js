"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_cliente-modificar-reserva_cliente-modificar-reserva_module_ts-src_app_service_dbservi-69450e"],{

/***/ 7172:
/*!***************************************************************************************!*\
  !*** ./src/app/cliente-modificar-reserva/cliente-modificar-reserva-routing.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClienteModificarReservaPageRoutingModule": () => (/* binding */ ClienteModificarReservaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _cliente_modificar_reserva_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cliente-modificar-reserva.page */ 4986);




const routes = [
    {
        path: '',
        component: _cliente_modificar_reserva_page__WEBPACK_IMPORTED_MODULE_0__.ClienteModificarReservaPage
    }
];
let ClienteModificarReservaPageRoutingModule = class ClienteModificarReservaPageRoutingModule {
};
ClienteModificarReservaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ClienteModificarReservaPageRoutingModule);



/***/ }),

/***/ 9182:
/*!*******************************************************************************!*\
  !*** ./src/app/cliente-modificar-reserva/cliente-modificar-reserva.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClienteModificarReservaPageModule": () => (/* binding */ ClienteModificarReservaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _cliente_modificar_reserva_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cliente-modificar-reserva-routing.module */ 7172);
/* harmony import */ var _cliente_modificar_reserva_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cliente-modificar-reserva.page */ 4986);







let ClienteModificarReservaPageModule = class ClienteModificarReservaPageModule {
};
ClienteModificarReservaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _cliente_modificar_reserva_routing_module__WEBPACK_IMPORTED_MODULE_0__.ClienteModificarReservaPageRoutingModule
        ],
        declarations: [_cliente_modificar_reserva_page__WEBPACK_IMPORTED_MODULE_1__.ClienteModificarReservaPage]
    })
], ClienteModificarReservaPageModule);



/***/ }),

/***/ 6972:
/*!**********************************************!*\
  !*** ./src/app/service/dbservice.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DbserviceService": () => (/* binding */ DbserviceService)
/* harmony export */ });
/* harmony import */ var C_Users_Javi_Serviexpress_4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _awesome_cordova_plugins_sqlite_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @awesome-cordova-plugins/sqlite/ngx */ 8685);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4505);






let DbserviceService = class DbserviceService {
  constructor(sqlite, platform, toastController) {
    this.sqlite = sqlite;
    this.platform = platform;
    this.toastController = toastController;
    this.tablaReservas = "CREATE TABLE IF NOT EXISTS reserva(id INTEGER PRIMARY KEY autoincrement, servicio VARCHAR(50) NOT NULL, fecha VARCHAR(50) NOT NULL);";
    this.registro = "INSERT or IGNORE INTO reserva(id, servicio, fecha) VALUES (1, 'Titulo noticia', '01-12-2022');";
    this.listaReservas = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
    this.isDbReady = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(false);
    this.crearBD();
  }

  addReserva(servicio, fecha) {
    let data = [servicio, fecha];
    return this.database.executeSql('INSERT INTO reserva(servicio,fecha) VALUES(?,?)', data).then(res => {
      this.buscarReservas();
    });
  }

  updateReserva(id, servicio, fecha) {
    let data = [servicio, fecha, id];
    return this.database.executeSql('UPDATE reserva SET servicio = ?, fecha = ? WHERE id = ?', data).then(data2 => {
      this.buscarReservas();
    });
  }

  deleteReserva(id) {
    return this.database.executeSql('DELETE FROM reserva WHERE id = ?', [id]).then(a => {
      this.buscarReservas();
    });
  }

  dbState() {
    return this.isDbReady.asObservable();
  }

  crearBD() {
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'serviexpress.db',
        location: 'default'
      }).then(db => {
        this.database = db;
        this.presentToast("BD Creada"); //llamamos a la creación de tablas

        this.crearTablas();
      }).catch(e => this.presentToast(e));
    });
  }

  crearTablas() {
    var _this = this;

    return (0,C_Users_Javi_Serviexpress_4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield _this.database.executeSql(_this.tablaReservas, []);
        yield _this.database.executeSql(_this.registro, []);

        _this.presentToast("Tabla Creada");

        _this.buscarReservas();

        _this.isDbReady.next(true);
      } catch (e) {
        _this.presentToast("error creartabla " + e);
      }
    })();
  }

  buscarReservas() {
    //this.presentAlert("a");
    return this.database.executeSql('SELECT * FROM reserva', []).then(res => {
      let items = []; //this.presentAlert("b");

      if (res.rows.length > 0) {
        //this.presentAlert("c");
        for (var i = 0; i < res.rows.length; i++) {
          //this.presentAlert("d");
          items.push({
            id: res.rows.item(i).id,
            servicio: res.rows.item(i).servicio,
            fecha: res.rows.item(i).fecha
          });
        }
      } //this.presentAlert("d");


      this.listaReservas.next(items);
    });
  }

  fetchReservas() {
    return this.listaReservas.asObservable();
  }

  presentToast(mensaje) {
    var _this2 = this;

    return (0,C_Users_Javi_Serviexpress_4_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this2.toastController.create({
        message: mensaje,
        duration: 3000
      });
      toast.present();
    })();
  }

};

DbserviceService.ctorParameters = () => [{
  type: _awesome_cordova_plugins_sqlite_ngx__WEBPACK_IMPORTED_MODULE_1__.SQLite
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.Platform
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ToastController
}];

DbserviceService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
  providedIn: 'root'
})], DbserviceService);


/***/ })

}]);
//# sourceMappingURL=src_app_cliente-modificar-reserva_cliente-modificar-reserva_module_ts-src_app_service_dbservi-69450e.js.map