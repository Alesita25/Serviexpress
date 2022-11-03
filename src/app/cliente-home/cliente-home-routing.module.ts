import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteHomePage } from './cliente-home.page';
import {ReservasComponent} from '../reservas/reservas.component';
import {ClienteMisdatosComponent} from '../cliente-misdatos/cliente-misdatos.component';
import { ClienteModificarReservaPage } from '../cliente-modificar-reserva/cliente-modificar-reserva.page';

const routes: Routes = [
  {
    path: '',
    component: ClienteHomePage,
    children:[
      {
        path:'cliente-misdatos',
        component: ClienteMisdatosComponent
      },
      {
        path:'reservas',
        component: ReservasComponent
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






