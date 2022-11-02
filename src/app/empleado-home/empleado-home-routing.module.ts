import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpleadoHomePage } from './empleado-home.page';

const routes: Routes = [
  {
    path: '',
    component: EmpleadoHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmpleadoHomePageRoutingModule {}
