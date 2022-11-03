import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClienteModificarReservaPageRoutingModule } from './cliente-modificar-reserva-routing.module';

import { ClienteModificarReservaPage } from './cliente-modificar-reserva.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClienteModificarReservaPageRoutingModule
  ],
  declarations: [ClienteModificarReservaPage]
})
export class ClienteModificarReservaPageModule {}
