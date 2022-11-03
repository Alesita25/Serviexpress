import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteHomePage } from './cliente-home.page';
import {ReservaPage} from '../reserva/reserva.page';
import {ClienteMisdatosPage} from '../cliente-misdatos/cliente-misdatos.page';
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
        path:'cliente-modificarReserva',
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






