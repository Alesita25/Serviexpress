import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteModificarReservaPage } from './cliente-modificar-reserva.page';

const routes: Routes = [
  {
    path: '',
    component: ClienteModificarReservaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClienteModificarReservaPageRoutingModule {}
