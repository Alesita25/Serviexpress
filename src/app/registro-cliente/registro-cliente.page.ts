import { Component, OnInit } from '@angular/core';

import { Router, NavigationExtras } from '@angular/router';

import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-registro-cliente',
  templateUrl: './registro-cliente.page.html',
  styleUrls: ['./registro-cliente.page.scss'],
})
export class RegistroClientePage implements OnInit {
  
  user={
    usuario:"",
    password:"",
    email:""
  }

  constructor(private router:Router,private loadingCtrl: LoadingController) { }

  ngOnInit() {
  }

  ingresar(){
    let navigationExtras:NavigationExtras ={
      state:{
        user:this.user,
      }
    };
    this.router.navigate(['/registro-exitoso'],navigationExtras);
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