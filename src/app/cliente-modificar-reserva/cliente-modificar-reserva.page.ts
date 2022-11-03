import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DbserviceService } from 'src/app/service/dbservice.service';

@Component({
  selector: 'app-cliente-modificar-reserva',
  templateUrl: './cliente-modificar-reserva.page.html',
  styleUrls: ['./cliente-modificar-reserva.page.scss'],
})
export class ClienteModificarReservaPage implements OnInit {

  idReserva = "";
  servicioReserva = "";
  fechaReserva = "";

  constructor(private router:Router, private activedroute: ActivatedRoute, private dbservice: DbserviceService) {
    this.activedroute.queryParams.subscribe(param =>{
      if(this.router.getCurrentNavigation().extras.state){
        this.idReserva = this.router.getCurrentNavigation().extras.state.idEnviado;
        this.servicioReserva = this.router.getCurrentNavigation().extras.state.tituloEnviado;
        this.fechaReserva = this.router.getCurrentNavigation().extras.state.textoEnviado;
      }
    })
  }

  editar(){
    this.dbservice.updateReserva(this.idReserva, this.servicioReserva,this.fechaReserva);
    this.dbservice.presentToast("Reserva Modificada");
    this.router.navigate(['/cliente-home']);
  }

  ngOnInit() {
  }

}
