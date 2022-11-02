import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recuperar-password',
  templateUrl: './recuperar-password.page.html',
  styleUrls: ['./recuperar-password.page.scss'],
})
export class RecuperarPasswordPage implements OnInit {

  recibiendo: any;

  constructor(private activeroute: ActivatedRoute, 
    private router: Router,
    private alertController: AlertController) {

    //Recibiendo la interpolacion 
    this.activeroute.queryParams.subscribe(params =>{
      if (this.router.getCurrentNavigation().extras.state){
        this.recibiendo = this.router.getCurrentNavigation().extras.state.interpolacion;
        console.log(this.recibiendo)
      }else{this.router.navigate(["/login"])}

    });

  }
  //Mensaje de alerta
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Recuperación exitosa',
      subHeader: 'Te hemos enviado email con las instrucciones',
      message: 'Serás redigido al Login',
      buttons: ['OK'],
      
    });
    await alert.present();
    this.router.navigate(["/login"])
  }

  ngOnInit() {
  }

}
