import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultapostPage } from './consultapost.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultapostPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultapostPageRoutingModule {}
