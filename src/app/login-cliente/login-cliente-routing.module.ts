import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginClientePage } from './login-cliente.page';



const routes: Routes = [
  {
    path: '',
    component: LoginClientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), ReactiveFormsModule],
  exports: [RouterModule],
})
export class LoginClientePageRoutingModule {}
