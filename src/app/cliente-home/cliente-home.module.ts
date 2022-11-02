import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClienteHomePageRoutingModule } from './cliente-home-routing.module';

import { ClienteHomePage } from './cliente-home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClienteHomePageRoutingModule
  ],
  declarations: [ClienteHomePage]
})
export class ClienteHomePageModule {}
