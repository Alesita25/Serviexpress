import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  data: any;

  constructor(private activeroute: ActivatedRoute, private router: Router) {

    this.activeroute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state){
        this.data = this.router.getCurrentNavigation().extras.state.user;
        console.log(this.data)
      } else(this.router.navigate(["/login-cliente"]))
    });
  }

  AgendaHora() {
    let NavigationExtras: NavigationExtras = {
      state: {
      }
    };
    this.router.navigate(['/home'], NavigationExtras);

 }
  Contacto() {
    let NavigationExtras: NavigationExtras = {
      state: {
      }
    };
    this.router.navigate(['/home'], NavigationExtras);

  }
  Servicios() {
    let NavigationExtras: NavigationExtras = {
      state: {
      }
    };
    this.router.navigate(['/home'], NavigationExtras);

  }
  Sucursales() {
    let NavigationExtras: NavigationExtras = {
      state: {
      }
    };
    this.router.navigate(['/home'], NavigationExtras);

  }
}
