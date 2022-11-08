import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgControlStatusGroup, Validators } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
// import { ApirestService } from '../apirest.service';


@Component({
  selector: 'app-login-cliente',
  templateUrl: './login-cliente.page.html',
  styleUrls: ['./login-cliente.page.scss'],
})
 
export class LoginClientePage implements OnInit {

  formularioLogin: FormGroup;

  // user={
  //   usuario:"",
  //   password:""
  // }

  constructor(private router:Router, private loadingCtrl: LoadingController, public fb:FormBuilder, public alertController: AlertController) { 

    this.formularioLogin = this.fb.group({
      'email': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required),
      
    })
  }

  ngOnInit() { 
  }

  async ingreso() { 

    var f = this.formularioLogin.value;

    var usuario = JSON.parse(localStorage.getItem('usuario'));

    if(usuario.email ==f.email && usuario.password == f.password){
      console.log('Ingreso');
      localStorage.setItem('ingreso','true');
    }else{
      const alert = await this.alertController.create({
      header: 'Datos incorrectos',
      message: 'Los datos que ingresaste no son correctos',
      buttons: ['Aceptar']
    });
    await alert.present(); 
      
  }

    let NavigationExtras: NavigationExtras = {
      state: {
      }
    };
    this.formularioLogin = this.fb.group({
      'email': new FormControl("",Validators.required),

    })
    this.router.navigate(['cliente-home/cliente-misdatos'], NavigationExtras);
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
  // createPost(){
  //   var post={
  //     title: 'titulo prueba',
  //     body: 'algun cuerpo del post',
  //     userId: 1
  //   }
  //   this.api.createPost(post).subscribe((success)=>{
  //     console.log(success);
  //   },error=>{
  //     console.log(error);
  //   });
  }


  

