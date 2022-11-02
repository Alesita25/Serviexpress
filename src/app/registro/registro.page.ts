import { Component , OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'; // Alejandro librerias formilario y validacion
import { AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router'; // Alejandro para router link

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage  {
  // Alejandro Errores Registro empleado
  errors =[
    {nombre: 'required', message:'El campo no puede estar vacio'},
    {nombre: 'maxlength', message:'El campo excede el máximo'},
    {nombre: 'minlength', message:'El campo no cumple el mínimo'},
    {nacimiento: 'required', message:'Ingrese su fecha de nacimiento'},
    {email: 'required', message:'Ingrese su email'},
    {email: 'email', message:'Ingrese su email válido'},
    {password: 'required', message:'Ingrese una contraseña'},
    {password: 'maxlength', message:'La contraseña max 9 caracteres'},
    {password: 'minlength', message:'La contraseña es muy corta'},
    {celular: 'required', message:'El campo no puede estar vacío'},
    {celular: 'max', message:'El campo excede el máximo'},
    {celular: 'min', message:'El campo no cumple el mínimo'}
  ]
  // Alejandro Form Objetos validaciones formulario
  login = new FormGroup({ 
    rut: new FormControl('',[Validators.required, Validators.maxLength(12),Validators.minLength(8)]),
    nombres: new FormControl('',[Validators.required, Validators.maxLength(30),Validators.minLength(3)]),
    apellidos: new FormControl('',[Validators.required, Validators.maxLength(30),Validators.minLength(3)]),
    nacimiento: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required, Validators.maxLength(30),Validators.minLength(8)]),
    direccion: new FormControl('',[Validators.required, Validators.maxLength(30),Validators.minLength(3)]),
    celular: new FormControl('',[Validators.required, Validators.maxLength(9),Validators.minLength(8)])
  })
  // Alejandro Alerta 
  constructor(private alertController: AlertController, 
              private router: Router) {}
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Felicidades',
      subHeader: 'Registro exitoso',
      message: 'Seras redigido al Login',
      buttons: ['OK'],
      
    });
    await alert.present();
    this.router.navigate(["/login"])
  }

}
