import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbserviceService } from 'src/app/service/dbservice.service';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.scss'],
})
export class ReservasComponent implements OnInit {

  servicio = "";
  fecha = "";

  constructor(private dbservice: DbserviceService, private router: Router) { }

  guardar() {
    this.dbservice.addReserva(this.servicio,this.fecha);
    this.dbservice.presentToast("Reserva ingresada correctamente");
    this.router.navigate(['/home']);
  }

  ngOnInit() {
  }

}
