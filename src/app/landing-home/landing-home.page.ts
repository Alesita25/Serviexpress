import { Component, OnInit, ElementRef, ViewChild, } from '@angular/core';
import { AppComponent } from '../app.component';
import { AnimationController } from '@ionic/angular';
import { Router } from '@angular/router';
import { timer } from 'rxjs';

@Component({
  selector: 'app-landing-home',
  templateUrl: './landing-home.page.html',
  styleUrls: ['./landing-home.page.scss'],
})
export class LandingHomePage implements OnInit {
  @ViewChild('LoginCli', { read: ElementRef }) LoginCli: ElementRef;
  @ViewChild('LoginEm', { read: ElementRef }) LoginEm: ElementRef;
  

  constructor(
    private animationCtrl: AnimationController,
    private route: Router
  ) { }

  ngOnInit() {
  }

  loginCli() {
    const cartAnimation = this.animationCtrl.create('cart-animation')
    .addElement(this.LoginCli.nativeElement)
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
  timer(1200).subscribe(x => {this.route.navigate(['/login-cliente'])})  

}

loginEm() {
  const cartAnimation = this.animationCtrl.create('cart-animation')
  .addElement(this.LoginEm.nativeElement)
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
timer(1200).subscribe(x => {this.route.navigate(['/login'])})  

}

}
