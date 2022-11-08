import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SiningresoGuard implements CanActivate {
  constructor( private navCtrl: NavController){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log('SiningresoGuard#canActivate called');
      if(localStorage.getItem('ingreso')){
        this.navCtrl.navigateRoot('landing-home');
          return false;
        }else{
          return true;
    }
  }
  
}
