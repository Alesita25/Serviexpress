import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-home',
  templateUrl: './cliente-home.page.html',
  styleUrls: ['./cliente-home.page.scss'],
})
export class ClienteHomePage {

  constructor(private router: Router) {
    this.router.navigate(['cliente-home/misdatos'])
  }
  segmentChanged($event){
    console.log($event.detail.value);
    let direction=$event.detail.value
    this.router.navigate(['cliente-home/'+direction])
  }
}




