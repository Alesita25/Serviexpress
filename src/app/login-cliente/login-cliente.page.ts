import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { LoadingController } from '@ionic/angular';



@Component({
  selector: 'app-login-cliente',
  templateUrl: './login-cliente.page.html',
  styleUrls: ['./login-cliente.page.scss'],
})
export class LoginClientePage implements OnInit {

  user={
    usuario:"",
    password:""
  }

  constructor(private router:Router, private loadingCtrl: LoadingController) { }

  ngOnInit() {
  }

  ingresar() { 

    let NavigationExtras: NavigationExtras = {
      state: {
        user: this.user
      }
    };
    this.router.navigate(['/cliente-home'], NavigationExtras);
  }
  volver() {
    let NavigationExtras: NavigationExtras = {
      state: {
      }
    };
    this.router.navigate(['/landing-home'], NavigationExtras);

  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading...',
      duration: 800,
      spinner: 'circles',
    });

    loading.present();
  }
}  

