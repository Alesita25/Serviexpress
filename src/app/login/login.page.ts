import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    public toastController: ToastController, //Alejandro Toast mensajes login
    private router: Router
  ){}

  ngOnInit() {
  }

  //Interpolacion, envio de objeto
  interpolacion={
    email:"",
    password:""
  }
  enviardatos(){
    let navigationExtras: NavigationExtras = {
      state:{
        interpolacion: this.interpolacion
      }
    };
    this.router.navigate(['/recuperar-password'],navigationExtras);
  }
  
// Alejandro Toast mensaje login
  async presentToast1(){
    const toast = await this.toastController.create({
      message: 'Tu usuario, es tu email',
      duration: 2000,
      color: 'dark '
    });
    toast.present()
  }

}
