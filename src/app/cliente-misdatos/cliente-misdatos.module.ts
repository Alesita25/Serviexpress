import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClienteMisdatosPageRoutingModule } from './cliente-misdatos-routing.module';

import { ClienteMisdatosPage } from './cliente-misdatos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClienteMisdatosPageRoutingModule
  ],
  declarations: [ClienteMisdatosPage]
})
export class ClienteMisdatosPageModule {}
