import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent {
  navigate : any;
  user = 'Alejandra';
  //librería para enrutar páginas
  constructor(private route: Router, private formBuilder: FormBuilder) { }

  //indicar nombre de metodo que llamará a la página
  homePage() {
    this.route.navigate(['/EmpleadoHomePage']);
  }
}