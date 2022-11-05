import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { IngresoGuard } from './ingreso.guard';
import { SiningresoGuard } from './siningreso.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'landing-home',
    pathMatch: 'full'
  },

  {
    path: 'empleado-home',
    loadChildren: () => import('./empleado-home/empleado-home.module').then( m => m.EmpleadoHomePageModule)
  },

  {
    path: 'login-cliente',
    loadChildren: () => import('./login-cliente/login-cliente.module').then( m => m.LoginClientePageModule),
    canActivate: [SiningresoGuard]
  },
  
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
    ,canActivate: [SiningresoGuard]
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
    ,canActivate: [SiningresoGuard]
  },
  {
    path: 'registro-cliente',
    loadChildren: () => import('./registro-cliente/registro-cliente.module').then( m => m.RegistroClientePageModule)
    ,canActivate: [SiningresoGuard]
  },
  {
    path: 'registro-exitoso',
    loadChildren: () => import('./registro-exitoso/registro-exitoso.module').then( m => m.RegistroExitosoPageModule),
    canActivate: [SiningresoGuard]

  },
  {
    path: 'landing-home',
    loadChildren: () => import('./landing-home/landing-home.module').then( m => m.LandingHomePageModule)
    ,canActivate: [IngresoGuard]
  },
  {
    path: 'recuperar-password',
    loadChildren: () => import('./recuperar-password/recuperar-password.module').then( m => m.RecuperarPasswordPageModule)

  },
  {
    path: 'cliente-home',
    loadChildren: () => import('./cliente-home/cliente-home.module').then( m => m.ClienteHomePageModule)
    ,canActivate: [IngresoGuard]
  },
  {
    path: '**',
    loadChildren: () => import('./not-found/not-found.module').then( m => m.NotFoundPageModule)
  },
  {
    path: 'cliente-modificar-reserva',
    loadChildren: () => import('./cliente-modificar-reserva/cliente-modificar-reserva.module').then( m => m.ClienteModificarReservaPageModule)
  },
  {
    path: 'reserva',
    loadChildren: () => import('./reserva/reserva.module').then( m => m.ReservaPageModule)
  },
  {
    path: 'cliente-misdatos',
    loadChildren: () => import('./cliente-misdatos/cliente-misdatos.module').then( m => m.ClienteMisdatosPageModule)
  },


];

 @NgModule({
   imports: [
     RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
   ],
   exports: [RouterModule]
 })
 export class AppRoutingModule { }
