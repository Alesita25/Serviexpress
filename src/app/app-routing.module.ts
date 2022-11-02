import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'cliente-home',
    pathMatch: 'full'
  },

  {
    path: 'empleado-home',
    loadChildren: () => import('./empleado-home/empleado-home.module').then( m => m.EmpleadoHomePageModule)
  },

  {
    path: 'login-cliente',
    loadChildren: () => import('./login-cliente/login-cliente.module').then( m => m.LoginClientePageModule)
  },
  
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)

  },
  {
    path: 'registro-cliente',
    loadChildren: () => import('./registro-cliente/registro-cliente.module').then( m => m.RegistroClientePageModule)
  },
  {
    path: 'registro-exitoso',
    loadChildren: () => import('./registro-exitoso/registro-exitoso.module').then( m => m.RegistroExitosoPageModule)

  },
  {
    path: 'landing-home',
    loadChildren: () => import('./landing-home/landing-home.module').then( m => m.LandingHomePageModule)
  },
  {
    path: 'recuperar-password',
    loadChildren: () => import('./recuperar-password/recuperar-password.module').then( m => m.RecuperarPasswordPageModule)

  },
  {
    path: 'cliente-home',
    loadChildren: () => import('./cliente-home/cliente-home.module').then( m => m.ClienteHomePageModule)
  },
  // {
  //   path: 'reservas',
  //   loadChildren: () => import('./reservas/reservas.module').then( m => m.ReservasPageModule)
  // },
  // {
  //   path: 'cliente-misdatos',
  //   loadChildren: () => import('./cliente-misdatos/cliente-misdatos.module').then( m => m.ClienteMisdatosPageModule)
  // },





];

 @NgModule({
   imports: [
     RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
   ],
   exports: [RouterModule]
 })
 export class AppRoutingModule { }