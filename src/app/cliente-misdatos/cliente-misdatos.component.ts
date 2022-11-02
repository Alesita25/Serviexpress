import { Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-cliente-misdatos',
  templateUrl: './cliente-misdatos.component.html',
  styleUrls: ['./cliente-misdatos.component.scss'],
})
export class ClienteMisdatosComponent {

  recibir: any;

  constructor(private activeroute: ActivatedRoute, private router: Router) {

    this.activeroute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state){
        this.recibir = this.router.getCurrentNavigation().extras.state.user;
        console.log(this.recibir)
      } else(this.router.navigate(["/login-cliente"]))
    });
  }
}
