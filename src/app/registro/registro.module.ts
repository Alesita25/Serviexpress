import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; //Alejandro FormsModule, ReactiveFormsModule

import { IonicModule } from '@ionic/angular';

import { RegistroPageRoutingModule } from './registro-routing.module';

import { RegistroPage } from './registro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule, //Alejandro 
    IonicModule,
    RegistroPageRoutingModule,
    ReactiveFormsModule //Alejandro
  ],
  declarations: [RegistroPage]
})
export class RegistroPageModule {}
