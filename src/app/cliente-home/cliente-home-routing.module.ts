import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteHomePage } from './cliente-home.page';
import {ReservaPage} from '../reserva/reserva.page';
import {ClienteMisdatosPage} from '../cliente-misdatos/cliente-misdatos.page';
import {ConsultapostPage} from '../consultapost/consultapost.page';
import { ClienteModificarReservaPage } from '../cliente-modificar-reserva/cliente-modificar-reserva.page';

const routes: Routes = [
  {
    path: '',
    component: ClienteHomePage,
    children:[
      {
        path:'cliente-misdatos',
        component: ClienteMisdatosPage
      },
      {
        path:'reserva',
        component: ReservaPage
      },
      {
        path:'consultaPost',
        component: ConsultapostPage
      },
      {
        path:'clienteModificaReserva',
        component: ClienteModificarReservaPage
      },
      
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClienteHomePageRoutingModule {}






