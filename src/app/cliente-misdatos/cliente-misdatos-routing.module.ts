import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteMisdatosPage } from './cliente-misdatos.page';

const routes: Routes = [
  {
    path: '',
    component: ClienteMisdatosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClienteMisdatosPageRoutingModule {}
