import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingHomePage } from './landing-home.page';

const routes: Routes = [
  {
    path: '',
    component: LandingHomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingHomePageRoutingModule {}
