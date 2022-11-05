import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Router, NavigationExtras } from '@angular/router';

import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-registro-cliente',
  templateUrl: './registro-cliente.page.html',
  styleUrls: ['./registro-cliente.page.scss'],
})
export class RegistroClientePage implements OnInit {

  formularioRegistro: FormGroup; 
  
  // user={
  //   usuario:"",
  //   password:"",
  //   email:""
  // }

  constructor(private router:Router,private loadingCtrl: LoadingController, public fb:FormBuilder) {
    this.formularioRegistro = this.formularioRegistro = this.fb.group({
      'rut': new FormControl("", Validators.required),
      'nombre': new FormControl("", Validators.required),
      'apellido': new FormControl("", Validators.required),
      'fechaNacimiento': new FormControl("", Validators.required),
      'email': new FormControl("", Validators.required),
      'direccionParticular': new FormControl("", Validators.required),
      'direccionComercial': new FormControl(""),
      'celular': new FormControl("", Validators.required),
      'telefonoComercial': new FormControl("",),
      'password': new FormControl("",Validators.required),
      'confirm': new FormControl("", Validators.required)
    });
   }
  ngOnInit() {
  }

  // ingresar(){
  //   let navigationExtras:NavigationExtras ={
  //     state:{
  //       user:this.user,
  //     }
  //   };
  //   this.router.navigate(['/registro-exitoso'],navigationExtras);
  // }


  // async showLoading() {
  //   const loading = await this.loadingCtrl.create({
  //     message: 'Loading...',
  //     duration: 800,
  //     spinner: 'circles',
  //   });

  //   loading.present();
  // }
}