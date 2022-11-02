import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteHomePage } from './cliente-home.page';
import {ReservasComponent} from '../reservas/reservas.component';
import {ClienteMisdatosComponent} from '../cliente-misdatos/cliente-misdatos.component';

const routes: Routes = [
  {
    path: '',
    component: ClienteHomePage,
    children:[
      {
        path:'misdatos',
        component: ClienteMisdatosComponent
      },
      {
        path:'reservas',
        component: ReservasComponent
      },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClienteHomePageRoutingModule {}






