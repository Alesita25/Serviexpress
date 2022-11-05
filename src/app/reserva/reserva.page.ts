import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/service/dbservice.service';
import { CamaraService } from 'src/app/service/camara.service';
@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.page.html',
  styleUrls: ['./reserva.page.scss'],
})
export class ReservaPage implements OnInit {

  servicio = "";
  fecha = "";

  constructor(private dbservice: DbserviceService, private router: Router, private camara:CamaraService) { }

  guardar() {
    this.dbservice.addReserva(this.servicio,this.fecha);
    this.dbservice.presentToast("Reserva ingresada correctamente");
    this.router.navigate(['/cliente-home']);
  }

  takePicture(){
    this.camara.takePicture;
    this.dbservice.presentToast("Ingreso correcto");
  }

  ngOnInit() {
  }

}

