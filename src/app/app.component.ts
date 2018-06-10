import { Component } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

import { LoginserviceService } from './loginservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
   //login by using localstorage
  constructor(private abc:LoginserviceService,private router:Router, private activatedRoute:ActivatedRoute) {  
    //console.log(localStorage.getItem("userdata"));
    if (localStorage.getItem("userdata")) {
      this.abc.Updateuservalid();
      this.router.navigate(['/', 'home']);
    }
  }
 
 
}
