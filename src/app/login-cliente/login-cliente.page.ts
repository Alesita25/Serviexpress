import { Component, OnInit } from '@angular/core';
import { NgControlStatusGroup } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { ToastController, AlertController } from '@ionic/angular';

import { DbloginService } from '../service/dblogin.service';
import { Storage } from '@ionic/storage';
import { AutenticacionService } from '../service/autenticacion.service';


@Component({
  selector: 'app-login-cliente',
  templateUrl: './login-cliente.page.html',
  styleUrls: ['./login-cliente.page.scss'],
})
export class LoginClientePage implements OnInit {

  user:any={
    usuario:"",
    password:""
  }

   // variable para mostrar el campo faltante
   field:string="";

  constructor(public toastController: ToastController,
    public dbloginService: DbloginService,
    public alertController: AlertController,
    private router: Router,
    private storage: Storage,
    public autenticacionService:AutenticacionService) { }

  ngOnInit() {
  }

  ingresar(){
    // Se valida que el usuario ingreso todos los datos
    if(this.validateModel(this.user)){
      // Se obtiene si existe alguna data de sesión
      this.autenticacionService.login(this.user);
    }
    else{
      this.presentToast("Falta: "+this.field);
    }
  }
  registrar(){
    this.createSesionData(this.user);
    let NavigationExtras: NavigationExtras = {
      state: {
      }
    };
    this.router.navigate(['/registro-cliente'], NavigationExtras); 
  }
  /**
   * Función que genera (registra) una nueva sesión
   * @param login 
   */
  createSesionData(user: any) {
    if(this.validateModel(user)){ // Se valida que se ingresen todos los datos
      /**
       * Se hace una copia del login, se hace así ya que
       * el operador '=' no haceuna copia de los datos, si no
       * que crea una nueva referencia a los mismos datos.
       * Por eso se utiliza el Object.assign
       */
      let copy = Object.assign({},user);
      copy.Active=1; // Se agrega el valor active = 1 a la copia
      this.dbloginService.createSesionData(copy) // la copia se le apsa a la función para crear la sesion
      .then((data)=>{ // si la sentencia se ejecuto correctamente
        this.presentToast("Bienvenido"); // Se muestra el mensaje de bienvenido
        this.storage.set("USER_DATA",data);  // Se setea el USER_DATA en el storage
        this.router.navigate(['home']); // Se navega hasta el home
      })
      .catch((error)=>{
        this.presentToast("El usuario ya existe");
      })
    }
    else{
      this.presentToast("Falta: "+this.field);
    }
  }
  /**
   * validateModel sirve para validar que se ingrese algo en los
   * campos del html mediante su modelo
   */
  validateModel(model:any){
    // Recorro todas las entradas que me entrega Object entries y obtengo su clave, valor
    for (var [key, value] of Object.entries(model)) {
      // Si un valor es "" se retornara false y se avisara de lo faltante
      if (value=="") {
        // Se asigna el campo faltante
        this.field=key;
        // Se retorna false
        return false;
      }
    }
    return true;
  }
  /**
   * Muestra un toast al usuario
   * @param message Mensaje a presentar al usuario
   * @param duration Duración el toast, este es opcional
   */
  async presentToast(message:string, duration?:number){
    const toast = await this.toastController.create(
      {
        message:message,
        duration:duration?duration:2000
      }
    );
    toast.present();
  }
  /**
   * Función parte del ciclo de vida de un componente
   */
  ionViewWillEnter(){
    console.log('ionViewDidEnter');
      // Se valida que exista una sesión activa
      this.dbloginService.sesionActive()
      .then((data)=>{
        if(data!=undefined){
          this.storage.set("USER_DATA",data); 
          this.router.navigate(['home']);
        }
      })
      .catch((error)=>{
        console.error(error);
        this.router.navigate(['login']);
      })
  }
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Creación de Usuario',
      message: 'Mensaje <strong>El usuario no existe, desea registrarse?</strong>',
      buttons: [
        {
          text: 'NO',
          role: 'cancel'
        }, {
          text: 'SI',
          handler: () => {
            this.createSesionData(this.user)
          }
        }
      ]
    });

    await alert.present();
  }
  volver() {
    let NavigationExtras: NavigationExtras = {
      state: {
      }
    };
    this.router.navigate(['/landing-home'], NavigationExtras); 

 }

}
