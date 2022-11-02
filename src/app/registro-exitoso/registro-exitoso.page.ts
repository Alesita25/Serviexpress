import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-registro-exitoso',
  templateUrl: './registro-exitoso.page.html',
  styleUrls: ['./registro-exitoso.page.scss'],
})
export class RegistroExitosoPage {

  data: any;

  constructor(private activeroute: ActivatedRoute, private router: Router) {
    this.activeroute.queryParams.subscribe(params =>{
      if(this.router.getCurrentNavigation().extras.state){
        this.data = this.router.getCurrentNavigation().extras.state.user;
        console.log(this.data)
      }else{this.router.navigate(['/registro-cliente'])}
    });
  }

}
