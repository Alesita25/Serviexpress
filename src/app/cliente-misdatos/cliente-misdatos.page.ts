import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { DbserviceService } from '../service/dbservice.service';
import { FotosService } from '../service/fotos.service';

@Component({
  selector: 'app-cliente-misdatos',
  templateUrl: './cliente-misdatos.page.html',
  styleUrls: ['./cliente-misdatos.page.scss'],
})
export class ClienteMisdatosPage  {

  reservas: any = [
    {
      servicio: "servicio reserva",
      fecha: "22-12-2022"
    }
  ]

  constructor(private router: Router, private servicioBD: DbserviceService) {}
  
  ngOnInit(){
    //this.servicioBD.presentAlert("1");
    this.servicioBD.dbState().subscribe((res) =>{
      //this.servicioBD.presentAlert("2");
      if(res){
        //this.servicioBD.presentAlert("3");
        this.servicioBD.fetchReservas().subscribe(item =>{
          this.reservas = item;
          console.log(item);
        })
      }
      //this.servicioBD.presentAlert("4");
    });
  }

  getItem($event) {
    const valor = $event.target.value;
    console.log('valor del control: ' + valor);

  }

  agregar() {

  }

  editar(item) {
    this.servicioBD.presentToast("Hola");
    let navigationextras: NavigationExtras = {
      state : {
        idEnviado : item.id,
        servicioEnviado : item.servicio,
        fechaEnviado : item.fecha
      }
    }
    this.servicioBD.presentToast("Aqui");
    this.router.navigate(['cliente-home/clienteModificaReserva'],navigationextras);

  }

  eliminar(item) {
    this.servicioBD.deleteReserva(item.id);
    this.servicioBD.presentToast("Reserva Eliminada");
  }


}
