import { Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-cliente-misdatos',
  templateUrl: './cliente-misdatos.component.html',
  styleUrls: ['./cliente-misdatos.component.scss'],
})
export class ClienteMisdatosComponent {

  data: any;

  constructor(private activeroute: ActivatedRoute, private router: Router) {

    this.activeroute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state){
        this.data = this.router.getCurrentNavigation().extras.state.user;
        console.log(this.data)
      } else(this.router.navigate(["/login-cliente"]))
    });
  }
}
