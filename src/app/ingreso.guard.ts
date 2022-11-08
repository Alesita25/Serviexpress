import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class IngresoGuard implements CanActivate {
  constructor( private navCtrl: NavController){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(localStorage.getItem('ingreso')){
      console.log('IngresoGuard#canActivate called');
        return true;
      }else{
        this.navCtrl.navigateRoot('login-cliente');
        
      }
  }
  
}
