import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { Platform, ToastController } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { Reservas } from './reservas';

@Injectable({
  providedIn: 'root'
})
export class DbserviceService {

  public database: SQLiteObject;

  tablaReservas: string = "CREATE TABLE IF NOT EXISTS reserva(id INTEGER PRIMARY KEY autoincrement, servicio VARCHAR(50) NOT NULL, fecha VARCHAR(50) NOT NULL);";
  registro: string = "INSERT or IGNORE INTO reserva(id, servicio, fecha) VALUES (1, 'Titulo noticia', '01-12-2022');";
  listaReservas = new BehaviorSubject([]);

  private isDbReady: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor(private sqlite: SQLite, private platform: Platform, public toastController: ToastController) {
    this.crearBD();
   }

   addReserva(servicio,fecha){
    let data=[servicio,fecha];
    return this.database.executeSql('INSERT INTO reserva(servicio,fecha) VALUES(?,?)',data)
    .then(res =>{
      this.buscarReservas();
    })

  }

  updateReserva(id, servicio, fecha){
    let data = [servicio, fecha, id];
    return this.database.executeSql('UPDATE reserva SET servicio = ?, fecha = ? WHERE id = ?', data)
    .then(data2 =>{
      this.buscarReservas();
    })

  }

  deleteReserva(id){
    return this.database.executeSql('DELETE FROM reserva WHERE id = ?', [id])
    .then(a =>{
      this.buscarReservas();
    })
  }

  dbState() {
    return this.isDbReady.asObservable();
  }

  crearBD() {
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'serviexpress.db',
        location: 'default'

      }).then((db: SQLiteObject) => {
        this.database = db;
        this.presentToast("BD Creada");
        //llamamos a la creación de tablas
        this.crearTablas();
      }).catch(e => this.presentToast(e));
    })
  }

  async crearTablas() {
    try {
      await this.database.executeSql(this.tablaReservas, []);
      await this.database.executeSql(this.registro, []);
      this.presentToast("Tabla Creada");
      this.buscarReservas();
      this.isDbReady.next(true);
    } catch (e) {
      this.presentToast("error creartabla " + e);
    }
  }

  buscarReservas() {
    //this.presentAlert("a");
    return this.database.executeSql('SELECT * FROM reserva', []).then(res => {
      let items: Reservas[] = [];
      //this.presentAlert("b");
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
      }
      //this.presentAlert("d");
      this.listaReservas.next(items);
    });
  }

  fetchReservas(): Observable<Reservas[]> {
  return this.listaReservas.asObservable();
  }

  async presentToast(mensaje: string) {
  const toast = await this.toastController.create({
    message: mensaje,
    duration: 3000
  });
  toast.present();
  }



}
