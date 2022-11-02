import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmpleadoHomePageRoutingModule } from './empleado-home-routing.module';

import { EmpleadoHomePage } from './empleado-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmpleadoHomePageRoutingModule
  ],
  declarations: [EmpleadoHomePage]
})
export class EmpleadoHomePageModule {}
