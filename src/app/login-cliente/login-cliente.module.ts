import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginClientePageRoutingModule } from './login-cliente-routing.module';

import { LoginClientePage } from './login-cliente.page';

import { Component } from '@angular/core';

import { LoadingController } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    LoginClientePageRoutingModule
  ],
  declarations: [LoginClientePage]
})
export class LoginClientePageModule {}

// -----------------------------------------------------------------------------------------------------------------------

@Component({
  selector: '',
  templateUrl: 'login-cliente.page.html',
})
export class ExampleComponent {
  constructor(private loadingCtrl: LoadingController) {}

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading...',
      duration: 3000,
      spinner: 'circles',
    });

    loading.present();
  }
}

