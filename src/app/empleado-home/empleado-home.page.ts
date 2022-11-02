import { Component, OnInit, ElementRef, ViewChild, } from '@angular/core';
import { AppComponent } from '../app.component';
import { AnimationController } from '@ionic/angular';
import { Router } from '@angular/router';
import { timer } from 'rxjs';

@Component({
  selector: 'app-empleado-home',
  templateUrl: './empleado-home.page.html',
  styleUrls: ['./empleado-home.page.scss'],
})

export class EmpleadoHomePage implements OnInit {
  user="";
  nameCliente="";
  //obtengo elemento de html
  @ViewChild('bandejaTrabajo', { read: ElementRef }) bandejaTrabajo: ElementRef;
  @ViewChild('repuestoEmp', { read: ElementRef }) repuestoEmp: ElementRef;
  @ViewChild('ingresaVehiculo1', { read: ElementRef }) ingresaVehiculo1: ElementRef;
  @ViewChild('modificaCliente1', { read: ElementRef }) modificaCliente1: ElementRef;

  constructor( 
    private appcom : AppComponent,
    private animationCtrl: AnimationController,
    private route: Router
  ) { 
        this.user=appcom.user;

  }

  ngOnInit() {
  }



//metodo que genera animación

bandejaT() {
    const cartAnimation = this.animationCtrl.create('cart-animation')
    .addElement(this.bandejaTrabajo.nativeElement)
    .keyframes([
      { offset: 0, transform: 'scale(1)' },
      { offset: 0.5, transform: 'scale(1.2)' },
      { offset: 0.8, transform: 'scale(0.9)' },
      { offset: 1, transform: 'scale(1)' }
    ]);

  const parent = this.animationCtrl.create('parent')
    .duration(1000)
    .easing('ease-out')
    .iterations(1)
    .direction('alternate')
    .addAnimation([cartAnimation]);
  parent.play();
  timer(1200).subscribe(x => {this.route.navigate(['/home'])})  

}

solRep() {
  const cartAnimation = this.animationCtrl.create('cart-animation')
  .addElement(this.repuestoEmp.nativeElement)
  .keyframes([
    { offset: 0, transform: 'scale(1)' },
    { offset: 0.5, transform: 'scale(1.2)' },
    { offset: 0.8, transform: 'scale(0.9)' },
    { offset: 1, transform: 'scale(1)' }
  ]);

const parent = this.animationCtrl.create('parent')
  .duration(1000)
  .easing('ease-out')
  .iterations(1)
  .direction('alternate')
  .addAnimation([cartAnimation]);
parent.play();
timer(1200).subscribe(x => {this.route.navigate(['/home'])})  

}


ingresaVehiculo() {
  const cartAnimation = this.animationCtrl.create('cart-animation')
  .addElement(this.ingresaVehiculo1.nativeElement)
  .keyframes([
    { offset: 0, transform: 'scale(1)' },
    { offset: 0.5, transform: 'scale(1.2)' },
    { offset: 0.8, transform: 'scale(0.9)' },
    { offset: 1, transform: 'scale(1)' }
  ]);

const parent = this.animationCtrl.create('parent')
  .duration(1000)
  .easing('ease-out')
  .iterations(1)
  .direction('alternate')
  .addAnimation([cartAnimation]);
parent.play();
timer(1200).subscribe(x => {this.route.navigate(['/home'])})  

}

modificaCliente() {
  const cartAnimation = this.animationCtrl.create('cart-animation')
  .addElement(this.modificaCliente1.nativeElement)
  .keyframes([
    { offset: 0, transform: 'scale(1)' },
    { offset: 0.5, transform: 'scale(1.2)' },
    { offset: 0.8, transform: 'scale(0.9)' },
    { offset: 1, transform: 'scale(1)' }
  ]);

const parent = this.animationCtrl.create('parent')
  .duration(1000)
  .easing('ease-out')
  .iterations(1)
  .direction('alternate')
  .addAnimation([cartAnimation]);
parent.play();
timer(1200).subscribe(x => {this.route.navigate(['/home'])})  

}



}
