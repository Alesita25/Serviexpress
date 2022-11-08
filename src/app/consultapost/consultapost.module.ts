import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultapostPageRoutingModule } from './consultapost-routing.module';

import { ConsultapostPage } from './consultapost.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultapostPageRoutingModule
  ],
  declarations: [ConsultapostPage]
})
export class ConsultapostPageModule {}
